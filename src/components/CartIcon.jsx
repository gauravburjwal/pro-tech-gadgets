import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';
import '../styles/CartIcon.scss';
import { connect } from 'react-redux';

import { toggleCartHidden } from './../redux/actions/cartAction';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    );
};

const mapStateToProps = (state) => ({
    itemCount: state.cart.cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity,
        0
    ),
});

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
