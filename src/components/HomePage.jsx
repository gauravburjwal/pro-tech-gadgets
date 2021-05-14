import '../styles/HomePage.scss';

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>TABLETS</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>

                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>WEARABLE</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>

                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>SMART PHONES</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>

                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>LAPTOPS</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>

                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>ACCESSORIES</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
