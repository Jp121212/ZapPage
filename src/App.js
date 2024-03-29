import React from 'react';
import { Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import { unprotectedRoutes } from './router/router';

export default function App() {
  return (
      <Routes>
        {unprotectedRoutes.map((route, index) => (
          <Route path={route.path} element={<MainLayout />} key={index} />
        ))}
        <Route element={<MainLayout />}>
        </Route>
      </Routes>
  );
}
