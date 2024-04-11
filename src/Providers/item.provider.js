import React, { useMemo, useState, useEffect } from 'react';

export const ItemContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [alert, setAlert] = useState();
  const [severity, setSeverity] = useState();
  const [badgeCount, setBadgeCount] = useState(() => {
    const count = localStorage.getItem('badgeCount');
    return count ? parseInt(count) : 0;
  });

  useEffect(() => {
    localStorage.setItem('badgeCount', badgeCount);
  }, [badgeCount]);

  useEffect(() => {
    if (alert) {
      if (alert === 'Product added') {
        setSeverity('success');
      } else if (alert === 'Product removed') {
        setSeverity('error');
      } else if (alert === 'Product already exists' || alert === 'product not found') {
        setSeverity('warning');
      }
    }
  }, [alert, severity]);

  useEffect(() => {
    const saveItemsToLocalStorage = (products) => {
      localStorage.setItem('products', JSON.stringify(products));
    };

    saveItemsToLocalStorage(products);
  }, [products]);

  useEffect(() => {
    const storedItems = localStorage.getItem('products');
    if (storedItems) {
      setProducts(JSON.parse(storedItems));
    }
  }, []);

  const addProduct = (ProductProps) => {
    if (ProductProps.name && ProductProps.desc && ProductProps.price && ProductProps.id !== undefined) {
      const existingProduct = products.find((product) => product.id === ProductProps.id);
      if (!existingProduct) {
        setBadgeCount(products.length + 1);
        setProducts([...products, ProductProps]);
        setAlert('Product added');
      } else {
        setAlert('Product already exists');
      }
    }
  };

  const removeProduct = (ProductProps) => {
    const RemoveProducts = products.findIndex((product) => product.id === ProductProps.id);
    if (RemoveProducts !== -1) {
      setBadgeCount(products.length - 1 > 0 ? products.length - 1 : 0);
      setProducts([...products.slice(0, RemoveProducts), ...products.slice(RemoveProducts + 1)]);
      setAlert('Product removed');
    } else {
      setAlert('Product not found');
    }
  };


  const values = useMemo(() => ({
    badgeCount,
    setBadgeCount,
    addProduct,
    removeProduct,
    setAlert,
    alert,
    severity
  }));

  return <ItemContext.Provider value={values}>{children}</ItemContext.Provider>;
};