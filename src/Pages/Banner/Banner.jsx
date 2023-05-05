import React from 'react';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="d-flex align-items-center justify-content-center h-100 mb-5 container mx-auto">
            <div className="container-fluid banner" style={{ backgroundImage: `url(${banner})`, height: '400px', backgroundSize: 'cover' }}>
                <div className="d-flex flex-column justify-content-center align-items-end  h-100">
                    <p className='lh-1 fs-2 text-dark fw-bold'>Cooking is like love It  <br />should be entered into <br />with abandon or not at all</p>
                    <div className="text-start">
                        <button type="button" class="btn btn-outline-dark fw-bold">Let's Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;