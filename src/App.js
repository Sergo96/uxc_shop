import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Head from './components/Head/Head';
import Rooms from './components/Rooms/Rooms';
import Sellers from './components/Sellers/Sellers';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Head/Header/Header';
import Product from './components/Head/Header/Product/Product';
import Basket from './components/Head/Header/Basket/Basket';
import AddCard from './components/Head/Header/Basket/AddCard/AddCard';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/added_to_card' exact component={AddCard}>
            <Header />
            <AddCard />
          </Route>
          <Route path='/basket' exact component={Basket}>
            <Header />
            <Basket />
          </Route>
          <Route path='/product' exact component={Product}>
            <Header />
            <Product />
          </Route>
          <Route path='/'>
            <Head />
            <Rooms />
            <Sellers />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
