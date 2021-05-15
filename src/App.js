import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './components/HomePage';
import { ShopPage } from './components/ShopPage';
import Header from './components/Header';
import SignInAndSignUp from './components/SignInAndSignUp';

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/shop' component={ShopPage} />
                <Route exact path='/signin' component={SignInAndSignUp} />
            </Switch>
        </div>
    );
};

export default App;
