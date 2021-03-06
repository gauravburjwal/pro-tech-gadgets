import '../styles/Checkout.scss';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../redux/cartSelector';
import CheckoutItem from './CheckoutItem';

const Checkout = ({ cartItems, total }) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    total: selectCartTotal(state),
});

export default connect(mapStateToProps)(Checkout);
