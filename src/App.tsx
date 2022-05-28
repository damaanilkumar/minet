import React from 'react';
import Buy from './Components/Pages/paymentSuccessScreen/Buy';
import Sell from './Components/Pages/Sell/Sell'
import Wallet from './Components/Pages/sellSuccessScreen/Wallet'
import Purchase from './Components/Pages/Purchase/Purchase'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  ThemeProvider  from './Themes/CustomThemeProvider';


function App() {
  return (
<ThemeProvider>
    <Router>
      <div>    
        <Routes>
          <Route path="/" element={ <Purchase /> }></Route>
          <Route path="/sell" element={ <Sell /> }></Route>
          <Route path="/successbuy" element={ <Buy /> }></Route>
          <Route path="/successsell" element={ <Wallet /> }></Route>
    


        </Routes>     
      </div>
    </Router>    
    </ThemeProvider>
  );
}

export default App;
