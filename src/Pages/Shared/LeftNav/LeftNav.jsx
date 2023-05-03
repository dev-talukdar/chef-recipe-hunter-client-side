import React from 'react';
import img2 from '../../../assets/2.jpg'
import img3 from '../../../assets/3.jpg'
import img4 from '../../../assets/4.jpg'
import img5 from '../../../assets/5.jpg'
import img6 from '../../../assets/6.jpg'

const LeftNav = () => {
    return (
        <div className='mt-5'>

            <div className='mt-5'>
            <img className='img-fluid' src={img6} alt="" />
            <h4 className='text-center mt-3'>Carrot Calley Soup</h4>
           </div>

           <div className='mt-5'>
            <img className='img-fluid' src={img5} alt="" />
            <h4 className='text-center mt-3'>Vegitable Burger</h4>
           </div>

           <div className='mt-5'>
            <img className='img-fluid' src={img4} alt="" />
            <h4 className='text-center mt-3'>Moist Cake</h4>
           </div>

           <div className='mt-5'>
            <img className='img-fluid' src={img3} alt="" />
            <h4 className='text-center mt-3'>Carrot Calley Soup</h4>
           </div>

        </div>
    );
};

export default LeftNav;