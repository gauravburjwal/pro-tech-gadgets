import '../styles/CartDropDown.scss';
import CartItem from './CartItem';

import CustomButton from './CustomButton';
import { connect } from 'react-redux';
import { selectCartItems } from './../redux/cartSelector';

const CartDropDown = ({ cartItems }) => {
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
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropDown);
