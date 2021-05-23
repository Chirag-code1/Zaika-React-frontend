import React  from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import './RestaurantOne.css';
import {BrowserRouter} from 'react-router-dom'
import MainRouter from './MainRouter'


const App = () => (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>

)

export default App;
