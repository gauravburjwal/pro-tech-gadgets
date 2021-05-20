import '../styles/Header.scss';
import { ReactComponent as Logo } from '../assets/pro-tech-gadgets.svg';
import { Link } from 'react-router-dom';
import { auth } from './../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from './CartIcon';
import CartDropDown from './CartDropDown';
import { selectCurrentUser } from './../redux/userSelector';
import { selectCartHidden } from './../redux/cartSelector';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>

            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>

                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link to='/signin'>SIGN IN</Link>
                )}
                <CartIcon />
            </div>
            {hidden ? null : <CartDropDown />}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currentUser: selectCurrentUser(state),
        hidden: selectCartHidden(state),
    };
};

export default connect(mapStateToProps)(Header);
