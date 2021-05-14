import React, { Component } from 'react';
import MenuItem from './MenuItem';

import '../styles/Directory.scss';

export class Directory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: [
                {
                    title: 'smart phones',
                    imageUrl: 'https://i.ibb.co/b71vf8C/smartphone.png',
                    id: 1,
                },
                {
                    title: 'wearables',
                    imageUrl: 'https://i.ibb.co/6YQnZL5/wearable.png',
                    id: 2,
                },
                {
                    title: 'accessories',
                    imageUrl: 'https://i.ibb.co/myw7nCr/accessories.png',
                    id: 3,
                },
                {
                    title: 'laptops',
                    imageUrl: 'https://i.ibb.co/Vjwswdf/laptop.png',
                    size: 'large',
                    id: 4,
                },
                {
                    title: 'tablets',
                    imageUrl: 'https://i.ibb.co/54DJZhb/tablet.png',
                    size: 'large',
                    id: 5,
                },
            ],
        };
    }

    render() {
        const { sections } = this.state;
        return (
            <div className='directory-menu'>
                {sections.map(({ title, imageUrl, id, size }) => (
                    <MenuItem
                        key={id}
                        imageUrl={imageUrl}
                        title={title}
                        size={size}
                    />
                ))}
            </div>
        );
    }
}

export default Directory;
