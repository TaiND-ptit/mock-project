import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles.styled';

import Footer from 'components/commons/Footer/Footer';
import Login from 'pages/Login/Login';
import Header from 'components/commons/Header/Header';
import Sidebar from 'components/commons/Sidebar/Sidebar';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'store/store';
import HomePage from 'pages/HomePage/HomePage';

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
              <HomePage />
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
