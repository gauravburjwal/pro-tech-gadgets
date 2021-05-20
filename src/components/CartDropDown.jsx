import '../styles/CartDropDown.scss';

import CustomButton from './CustomButton';

const CartDropDown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'></div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

export default CartDropDown;
