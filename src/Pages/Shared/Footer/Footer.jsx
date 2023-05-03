import React from 'react';

const Footer = () => {
    return ( 
        <div className="container bg-dark">
<div className="row align-items-center align-items-stretch mb-5">
<div className="col-md-4 py-4 py-md-5 aside-stretch d-flex align-items-center">
<div className="w-100">
<span className="subheading text-white">Subscribe to our</span>
<h3 className="heading-section text-white">Newsletter</h3>
</div>
</div>
<div className="col-md-8 py-4 py-md-5 d-flex align-items-center pl-md-5 aside-stretch-right">
<form action="#" className="subscribe-form w-100">
<div className="form-group d-flex gap-2">
<input type="text" className="form-control rounded-left" placeholder="Enter email address"/>
<button type="submit" className="form-control submit"><span>Submit</span></button>
</div>
</form>
</div>
</div>
<div className="row pt-4">
<div className="col-md-3 col-lg-6 order-md-last">
<div className="row justify-content-end">
<div className="col-md-12 col-lg-9 text-md-right mb-md-0 mb-4">
<h2 className="footer-heading"><a href="#" className="logo text-decoration-none text-white">Dish Delight</a></h2>
<p className="copyright text-white">
Copyright ©<script>document.write(new Date().getFullYear());</script>2023 All rights reserved |  www.dishdelight.com 
</p>
</div>
</div>
</div>
<div className="col-md-9 col-lg-6">
<div className="row">
<div className="col-md-4 mb-md-0 mb-4">
<h2 className="footer-heading text-white">Information</h2>
<ul className="list-unstyled">
<li><a href="#" className="py-1 d-block text-decoration-none text-white"><span className="ion-ios-checkmark-circle-outline mr-2 "></span>Our Vision</a></li>
<li><a href="#" className="py-1 d-block text-decoration-none text-white"><span className="ion-ios-checkmark-circle-outline mr-2"></span>Recipe</a></li>
<li><a href="#" className="py-1 d-block text-decoration-none text-white"><span className="ion-ios-checkmark-circle-outline mr-2"></span>Our Chef</a></li>
<li><a href="#" className="py-1 d-block text-decoration-none text-white"><span className="ion-ios-checkmark-circle-outline mr-2"></span>Contact Us</a></li>
<li><a href="#" className="py-1 d-block text-decoration-none text-white"><span className="ion-ios-checkmark-circle-outline mr-2"></span>Support</a></li>
</ul>
</div>
<div className="col-md-4 mb-md-0 mb-4">
<h2 className="footer-heading text-white">Application</h2>
<ul className="list-unstyled">
<li><a href="#" className="py-1 d-block text-decoration-none text-white"><span className="ion-ios-checkmark-circle-outline mr-2"></span>Download</a></li>
<li><a href="#" className="py-1 d-block text-decoration-none text-white"><span className="ion-ios-checkmark-circle-outline mr-2"></span>Free eBook</a></li>
<li><a href="#" className="py-1 d-block text-decoration-none text-white"><span className="ion-ios-checkmark-circle-outline mr-2"></span>Recipe Guids</a></li>
</ul>
</div>
<div className="col-md-4 mb-md-0 mb-4">
<h2 className="footer-heading text-white">API</h2>
<ul className="list-unstyled">
<li><a href="#" className="py-1 d-block text-decoration-none text-white"><span className="ion-ios-checkmark-circle-outline mr-2"></span>Documentation</a></li>
<li><a href="#" className="py-1 d-block text-decoration-none text-white"><span className="ion-ios-checkmark-circle-outline mr-2"></span>Credential</a></li>
<li><a href="#" className="py-1 d-block text-decoration-none text-white"><span className="ion-ios-checkmark-circle-outline mr-2"></span>Affeliate</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
    );
};

export default Footer;