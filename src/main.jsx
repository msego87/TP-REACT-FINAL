import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Home from './components/Home.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import { UsertContextProvider } from './context/UserContext.jsx';
import Notfound from './components/Notfound.jsx';
import AuthGuard from './components/AuthGuard.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsertContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
            <Route element={<AuthGuard />}>
              <Route path='home' element={<Home />}></Route>
            </Route>
            <Route path='product/:productId' element={<ProductDetail />}></Route>
          </Route>
          <Route path='*' element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </UsertContextProvider>
  </React.StrictMode>
)
