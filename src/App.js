import React from 'react';
import { Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import {  ERoutes } from './router/router';
import './styles/body.css';

export default function App() {
  return (
    <Routes>
       <Route element={<MainLayout />}>
          {ERoutes.map((route, index) => (
            <Route
              path={route.path}
              element={route.element}
              key={index}
            />
          ))}
        </Route>
    </Routes>
  );
}
