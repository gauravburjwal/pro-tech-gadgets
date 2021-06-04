import '../styles/CartDropDown.scss';
import CartItem from './CartItem';

import CustomButton from './CustomButton';
import { connect } from 'react-redux';
import { selectCartItems } from './../redux/cartSelector';
import { withRouter } from 'react-router';
import { toggleCartHidden } from './../redux/actions/cartAction';

const CartDropDown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty!</span>
                )}
            </div>
            <CustomButton
                onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }}
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
};
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
