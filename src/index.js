import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { GlobalCss, theme } from './components/styles/Global';
import { BrowserRouter  } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './components/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter basename={`/React-Restaurant/`}>
      <ThemeProvider theme={theme}>
        <GlobalCss />
        <App />
      </ThemeProvider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

