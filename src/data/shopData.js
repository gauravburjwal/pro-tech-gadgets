const SHOP_DATA = [
    {
        id: 1,
        title: 'Smartphones',
        routeName: 'smartphones',
        items: [
            {
                id: 1,
                name: 'Apple iPhone',
                imageUrl: 'https://i.ibb.co/C2wLkP7/apple.jpg',
                price: 829,
            },
            {
                id: 2,
                name: 'Mi 10',
                imageUrl: 'https://i.ibb.co/q52njYG/mi-10.png',
                price: 499,
            },
            {
                id: 3,
                name: 'Moto G 30',
                imageUrl: 'https://i.ibb.co/r3ky9Tm/moto-g-30.png',
                price: 450,
            },
            {
                id: 4,
                name: 'One Plus',
                imageUrl: 'https://i.ibb.co/FbhBsFX/one-plus.png',
                price: 789,
            },
            {
                id: 5,
                name: 'Google Pixel',
                imageUrl: 'https://i.ibb.co/GFhd0vW/pixel.jpg',
                price: 799,
            },
            {
                id: 6,
                name: 'Palm Tree Cap',
                imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                price: 14,
            },
            {
                id: 7,
                name: 'Samsung S20',
                imageUrl: 'https://i.ibb.co/tsbKFb1/samsung-s-20.png',
                price: 899,
            },
            {
                id: 8,
                name: 'Poco',
                imageUrl: 'https://i.ibb.co/vd51W6M/poco.png',
                price: 699,
            },
            {
                id: 9,
                name: 'Sony Xperia',
                imageUrl: 'https://i.ibb.co/D54TgFr/sony.png',
                price: 699,
            },
        ],
    },
    {
        id: 2,
        title: 'Wearables',
        routeName: 'wearables',
        items: [
            {
                id: 10,
                name: 'Apple Watch',
                imageUrl: 'https://i.ibb.co/6R2b3BD/apple-watch.jpg',
                price: 220,
            },
            {
                id: 11,
                name: 'Fitbit',
                imageUrl: 'https://i.ibb.co/Pt76XHm/fitbit.jpg',
                price: 280,
            },
            {
                id: 12,
                name: 'Samsung Gear 2',
                imageUrl: 'https://i.ibb.co/hY7Xv5r/samsung-watch-gear-2.png',
                price: 110,
            },
            {
                id: 13,
                name: 'Zebronics',
                imageUrl: 'https://i.ibb.co/d7rr3kR/zebronics.png',
                price: 160,
            },
            {
                id: 14,
                name: 'One Plus Watch',
                imageUrl: 'https://i.ibb.co/5rjb7R6/one-plus-watch.png',
                price: 160,
            },
            {
                id: 15,
                name: 'HTC Vive Focus',
                imageUrl: 'https://i.ibb.co/pvYwxSd/htc-vive-focus.png',
                price: 160,
            },
            {
                id: 16,
                name: 'GOQii',
                imageUrl: 'https://i.ibb.co/25Bb3PR/goqii.png',
                price: 190,
            },
            {
                id: 17,
                name: 'Firebolt',
                imageUrl: 'https://i.ibb.co/02F6RTX/firebolt.png',
                price: 200,
            },
        ],
    },
    {
        id: 3,
        title: 'Accessories',
        routeName: 'accessories',
        items: [
            {
                id: 18,
                name: 'Apple Airpods',
                imageUrl: 'https://i.ibb.co/RQPvGVz/airpods.jpg',
                price: 125,
            },
            {
                id: 19,
                name: 'Apple Airtag',
                imageUrl: 'https://i.ibb.co/4T7FwZx/airtag.jpg',
                price: 90,
            },
            {
                id: 20,
                name: 'Digital Clock',
                imageUrl: 'https://i.ibb.co/MRnXMSt/digital-clock.jpg',
                price: 90,
            },
            {
                id: 21,
                name: 'Game Controller',
                imageUrl: 'https://i.ibb.co/X33v46p/game-controller.jpg',
                price: 165,
            },
            {
                id: 22,
                name: 'Charger',
                imageUrl: 'https://i.ibb.co/VpvVKbZ/charger.jpg',
                price: 185,
            },
        ],
    },
    {
        id: 4,
        title: 'Laptops',
        routeName: 'laptops',
        items: [
            {
                id: 23,
                name: 'Asus ROG',
                imageUrl: 'https://i.ibb.co/Tq12CwB/rog.png',
                price: 25,
            },
            {
                id: 24,
                name: 'Microsoft Surface Book',
                imageUrl: 'https://i.ibb.co/pxwp4h9/microsoft-surface-book.jpg',
                price: 20,
            },
            {
                id: 25,
                name: 'Apple Macbook',
                imageUrl: 'https://i.ibb.co/KyDwQdV/macbook.jpg',
                price: 80,
            },
            {
                id: 26,
                name: 'Lenovo Yoga',
                imageUrl: 'https://i.ibb.co/BGVqFJK/lenovo.jpg',
                price: 80,
            },
            {
                id: 27,
                name: 'Asus XPS',
                imageUrl: 'https://i.ibb.co/HXZ31Fd/asus-xps.jpg',
                price: 45,
            },
            {
                id: 28,
                name: 'Alienware',
                imageUrl: 'https://i.ibb.co/mbSSk51/alienware.png',
                price: 135,
            },
            {
                id: 29,
                name: 'HP Laptop',
                imageUrl: 'https://i.ibb.co/f8qRv4z/hp.jpg',
                price: 20,
            },
        ],
    },
    {
        id: 5,
        title: 'Tablets',
        routeName: 'tablets',
        items: [
            {
                id: 30,
                name: 'Lenovo Tab',
                imageUrl: 'https://i.ibb.co/tBNBbnM/lenovo-tab.png',
                price: 699,
            },
            {
                id: 31,
                name: 'Amazon Fire',
                imageUrl: 'https://i.ibb.co/swRXX0j/amazon-fire.png',
                price: 899,
            },
            {
                id: 32,
                name: 'Apple iPad',
                imageUrl: 'https://i.ibb.co/DYKCmHL/ipad.jpg',
                price: 1200,
            },
            {
                id: 33,
                name: 'Samsung Tablet',
                imageUrl: 'https://i.ibb.co/crNfsYG/samsung.jpg',
                price: 1000,
            },
        ],
    },
];

export default SHOP_DATA;
