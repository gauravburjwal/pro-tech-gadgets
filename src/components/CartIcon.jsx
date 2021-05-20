import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';
import '../styles/CartIcon.scss';
import { connect } from 'react-redux';

import { toggleCartHidden } from './../redux/actions/cartActions';

const CartIcon = ({ toggleCartHidden }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden()),
    };
};

export default connect(null, mapDispatchToProps)(CartIcon);
