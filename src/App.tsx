import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles.styled';

import Footer from 'components/commons/Footer/Footer';
import Login from 'pages/Login/Login';
import Header from 'components/commons/Header/Header';
import Sidebar from 'components/commons/Sidebar/Sidebar';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from 'store/store';
import HomePage from 'pages/HomePage/HomePage';
import ProductDetail from 'pages/ProductDetail/ProductDetail';
import Cart from 'pages/Cart/Cart';
import MyAccount from 'pages/MyAccount/MyAccount';
import Register from 'pages/Register/Register';
import SearchPage from 'pages/SearchPage/SearchPage';
import CategoryProduct from 'pages/CategoryProduct/CategoryProduct';
import Order from 'pages/Order/Order';
import Address from 'components/commons/Address/Address';
import NotFound from 'pages/NotFound/NotFound';

const theme = {
  colors: {
    whiteColor: '#fff',
    blackColor: '#000',
    textColor: '#333',
    backgroundColor: '#F5F5F5',
    mainColor: '#ee4e2e',
    mainColorSecond: '#ee4d2d',
    borderColor: '#dbdbdb'
  }
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className='App'>
          <Provider store={store}>
            <BrowserRouter>
              <Header />
              <Sidebar />
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/product/:id' element={<ProductDetail />} />
                <Route path='/category/:id' element={<CategoryProduct />} />
                <Route path='/search/:searchText' element={<SearchPage />} />
                <Route path='/account' element={<MyAccount />} />
                <Route path='/order' element={<Order />} />
                <Route path='/address' element={<Address />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>

              <Footer />
              {/* <Login /> */}
            </BrowserRouter>
          </Provider>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
