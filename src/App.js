import { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { connect } from 'react-redux';

import ShopPage from './components/ShopPage';
import Header from './components/Header';
import SignInAndSignUp from './components/SignInAndSignUp';
import HomePage from './components/HomePage';
import Checkout from './components/Checkout';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/actions/userAction';
import { selectCurrentUser } from './redux/userSelector';

import './App.css';

class App extends Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapshot) => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data(),
                    });
                });
            } else {
                setCurrentUser(userAuth);
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        const { currentUser } = this.props;
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/shop' component={ShopPage} />
                    <Route exact path='/checkout' component={Checkout} />
                    <Route
                        exact
                        path='/signin'
                        render={() =>
                            currentUser ? (
                                <Redirect to='/' />
                            ) : (
                                <SignInAndSignUp />
                            )
                        }
                    />
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    };
};

const mapStateToProps = (state) => {
    return {
        currentUser: selectCurrentUser(state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
