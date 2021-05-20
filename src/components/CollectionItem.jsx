import '../styles/CollectionItem.scss';
import CustomButton from './CustomButton';
import { connect } from 'react-redux';
import { addItem } from '../redux/actions/cartActions';

const CollectionItem = ({ item, addItem }) => {
    const { imageUrl, name, price } = item;
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>
                Add To Cart
            </CustomButton>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(addItem(item)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
