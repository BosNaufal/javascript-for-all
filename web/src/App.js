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
      <div style={{ height: "100%", width: 385, margin: "0 auto", border: "1px solid #DDD" }}>
        <CheckoutPage />
      </div>
    </React.Fragment>
  );
}

export default App;
