import React from 'react';
import logo from '../../../assets/logo.png'
import img1 from '../../../assets/1.jpeg'
import img2 from '../../../assets/2.jpg'
import img3 from '../../../assets/3.jpg'
import img4 from '../../../assets/4.jpg'
import img5 from '../../../assets/5.jpg'
import img6 from '../../../assets/6.jpg'
import webshop from '../../../assets/webshop.jpg'


const RightNav = () => {
    return (
        <div>
            <div className='text-center mt-5 '>
                <img style={{ width: "200px" }} src={logo} alt="" />
                <h5 className='text-warning'>We are Dish Delight, your new guide.
                    Welcome to our Cookbook!</h5>
                <br />
                <p>Lorem ipsum dolor sit amet, ad consectetur adi picibe elit, sed do eiusmod tempor inci didunt quo labore e dolore magna aliqua ut.</p>
            </div>

            <div>
                <img className='img-fluid' src={webshop} alt="" />
                <br />
                <h4 className='mt-4 mb-5'>Latest Recipe</h4>

                <div className='text-center'>
                    <img className='img-fluid' src={img1} alt="" />
                    <div className=' '>
                        <p className='fw-semibold lh-1 mt-3 mb-5 '>Bakalva <br />September 21, 2021</p>
                    </div>
                </div>

                <div className='text-center'>
                    <img className='img-fluid' src={img2} alt="" />
                    <div className=' '>
                        <p className='fw-semibold lh-1 mt-3 '>Moist Cake <br /> September 21, 2021 </p>
                    </div>
                </div>

                <div className='text-center'>
                    <img className='img-fluid' src={img3} alt="" />
                    <div className=' '>
                        <p className='fw-semibold lh-1 mt-3 '>Vegitable Burger <br /> September 21, 2021 </p>
                    </div>
                </div>

                <div className='text-center'>
                    <img className='img-fluid' src={img4} alt="" />
                    <div className=' '>
                        <p className='fw-semibold lh-1 mt-3 '>Celery soup with carrot <br /> September 21, 2021 </p>
                    </div>
                </div>

                <div className='text-center'>
                    <img className='img-fluid' src={img5} alt="" />
                    <div className=' '>
                        <p className='fw-semibold lh-1 mt-3 '>Celery soup with carrot <br /> September 21, 2021 </p>
                    </div>
                </div>

                <div className='text-center'>
                    <img className='img-fluid' src={img6} alt="" />
                    <div className=' '>
                        <p className='fw-semibold lh-1 mt-3 '>Celery soup with carrot <br /> September 21, 2021 </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightNav;