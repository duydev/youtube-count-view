/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Footer } from './components/footer';
import { SearchBar } from './components/search-bar';
import { AppRouter } from './router';
import { BrowserRouter } from 'react-router-dom';

import './app.css';

export const App = () => {
  return (
    <BrowserRouter>
      <SearchBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
};
