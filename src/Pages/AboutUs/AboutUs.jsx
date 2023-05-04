import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const AboutUs = () => {
    return (
        <div>
            <Header></Header>
            <div className='container text-center p-5'>
                Welcome to Dish Delight! We are a team of passionate food lovers who are dedicated to bringing the world's best recipes to your plate. Our mission is to make it easy for you to enjoy the world's most famous and delicious dishes without leaving your home.

                Our collection of recipes comes straight from the kitchens of the world's most renowned chefs. From traditional classics to modern fusion, we have something for every taste bud. We take pride in selecting only the best recipes that are guaranteed to impress your family and friends.

                At Dish Delight, we believe that food should not only be delicious but also healthy. We use only the freshest and highest quality ingredients to ensure that every dish is not only tasty but also nutritious. We also understand that everyone has different dietary requirements and offer a range of options to cater to your specific needs.

                Our team is dedicated to providing you with the best possible service. From our website to our customer support, we strive to make your experience with Dish Delight as seamless and enjoyable as possible. If you have any questions or feedback, please don't hesitate to get in touch with us.

                Thank you for choosing Dish Delight for all your culinary needs. We hope you enjoy our recipes as much as we do!
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;