import React from 'react';
import img1 from '../../../assets/1.jpeg'
import img2 from '../../../assets/2.jpg'
import img3 from '../../../assets/3.jpg'
import img4 from '../../../assets/4.jpg'
import img5 from '../../../assets/5.jpg'
import img6 from '../../../assets/6.jpg'

const LeftNav = () => {
    return (
        <div className='mt-5'>

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
    );
};

export default LeftNav;