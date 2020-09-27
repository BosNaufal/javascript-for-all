import React from 'react';
import CheckoutPage from './pages/Checkout';

function App() {
  return (
    <React.Fragment>
      <style type="text/css">{`
        @font-face {
          font-family: 'MaterialIcons';
          src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
        }

        @font-face {
          font-family: 'FontAwesome';
          src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');
        }

        html, body, #root {
          position: relative;
          height: 100%;
          width: 100%;
        }
      `}</style>
      <CheckoutPage />
    </React.Fragment>
  );
}

export default App;
