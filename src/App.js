import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './components/HomePage';
import { ShopPage } from './components/ShopPage';
import Header from './components/Header';

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/shop' component={ShopPage} />
            </Switch>
        </div>
    );
};

export default App;
