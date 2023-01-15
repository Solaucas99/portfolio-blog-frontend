import React from 'react';
import AOS from 'aos';
import { ToastContainer } from 'react-toastify';

import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

import { AppRoutes } from './Routes';
import { GlobalDiv } from './Styles/GlobalDiv';
import AppContextProvider from './Providers/AppContextProvider';

function App() {
  AOS.init();

  return (
    <AppContextProvider>
      <GlobalDiv>
        <AppRoutes />
        <ToastContainer theme="colored" position="bottom-right" />
      </GlobalDiv>
    </AppContextProvider>
  );
}

export default App;
