import React, { Component } from 'react';
import SHOP_DATA from '../data/shopData';
import CollectionPreview from './CollectionPreview';

export class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA,
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <div key={id}>
                        <CollectionPreview {...otherCollectionProps} />
                    </div>
                ))}
            </div>
        );
    }
}

export default ShopPage;
