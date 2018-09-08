import React, { Component } from 'react';
import Carouselnya from './Carouselnya';
import '../supports/css/tambahan1.css';
import product1 from '../supports/image/product-img/product-1.jpg';
import product2 from '../supports/image/product-img/product-2.jpg';


class homePage extends Component {

    render(){
        return (
            <div>
                {/* ##### Welcome Area Start ##### */}
                <section className="welcome_area bg-img background-overlay bg1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="hero-content">
                                    <h6>asoss</h6>
                                    <h2>New Collection</h2>
                                    <a href="#" className="btn essence-btn">view collection</a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ##### Welcome Area End ##### */}

                {/* ##### Top Catagory Area Start ##### */}
                <div className="top_catagory_area section-padding-80 clearfix">
                    <div className="container">
                        <div className="row justify-content-center">
                            {/* Single Catagory */}
                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img bg2" >
                                    <div className="catagory-content">
                                        <a href="#">Clothing</a>
                                    </div>
                                </div>
                            </div>
                            {/* Single Catagory */}
                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img bg3" >
                                    <div className="catagory-content">
                                        <a href="#">Shoes</a>
                                    </div>
                                </div>
                            </div>
                            {/* Single Catagory */}
                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img bg4" >
                                    <div className="catagory-content">
                                        <a href="#">Accessories</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ##### Top Catagory Area End ##### */}

                {/* ##### New Arrivals Area Start ##### */}
                <section className="new_arrivals_area section-padding-80 clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading text-center">
                                    <h2>Popular Products</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Carouselnya/>
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="popular-products-slides owl-carousel">

                                    {/* Single Product */}
                                    <div className="single-product-wrapper">
                                        {/* Product Image */}
                                        <div className="product-img">
                                            <img src={product1} alt=""/>
                                            {/* Hover Thumb */}
                                            <img className="hover-img" src={product2} alt=""/>
                                            {/* Favourite */}
                                            <div className="product-favourite">
                                                <a href="#" className="favme fa fa-heart"></a>
                                            </div>
                                        </div>
                                        {/* Product Description */}
                                        <div className="product-description">
                                            <span>topshop</span>
                                            <a href="single-product-details.html">
                                                <h6>Knot Front Mini Dress</h6>
                                            </a>
                                            <p className="product-price">$80.00</p>

                                            {/* Hover Content */}
                                            <div className="hover-content">
                                                {/* Add to Cart */}
                                                <div className="add-to-cart-btn">
                                                    <a href="#" className="btn essence-btn">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Single Product */}
                                    <div className="single-product-wrapper">
                                        {/* Product Image */}
                                        <div className="product-img">
                                            <img src="img/product-img/product-2.jpg" alt=""/>
                                            {/* Hover Thumb */}
                                            <img className="hover-img" src="img/product-img/product-3.jpg" alt=""/>
                                            {/* Favourite */}
                                            <div className="product-favourite">
                                                <a href="#" className="favme fa fa-heart"></a>
                                            </div>
                                        </div>
                                        {/* Product Description */}
                                        <div className="product-description">
                                            <span>topshop</span>
                                            <a href="single-product-details.html">
                                                <h6>Poplin Displaced Wrap Dress</h6>
                                            </a>
                                            <p className="product-price">$80.00</p>

                                            {/* Hover Content */}
                                            <div className="hover-content">
                                                {/* Add to Cart */}
                                                <div className="add-to-cart-btn">
                                                    <a href="#" className="btn essence-btn">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Single Product */}
                                    <div className="single-product-wrapper">
                                        {/* Product Image */}
                                        <div className="product-img">
                                            <img src="img/product-img/product-3.jpg" alt=""/>
                                            {/* Hover Thumb */}
                                            <img className="hover-img" src="img/product-img/product-4.jpg" alt=""/>

                                            {/* Product Badge */}
                                            <div className="product-badge offer-badge">
                                                <span>-30%</span>
                                            </div>

                                            {/* Favourite */}
                                            <div className="product-favourite">
                                                <a href="#" className="favme fa fa-heart"></a>
                                            </div>
                                        </div>
                                        {/* Product Description */}
                                        <div className="product-description">
                                            <span>mango</span>
                                            <a href="single-product-details.html">
                                                <h6>PETITE Crepe Wrap Mini Dress</h6>
                                            </a>
                                            <p className="product-price"><span className="old-price">$75.00</span> $55.00</p>

                                            {/* Hover Content */}
                                            <div className="hover-content">
                                                {/* Add to Cart */}
                                                <div className="add-to-cart-btn">
                                                    <a href="#" className="btn essence-btn">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Single Product */}
                                    <div className="single-product-wrapper">
                                        {/* Product Image */}
                                        <div className="product-img">
                                            <img src="img/product-img/product-4.jpg" alt=""/>
                                            {/* Hover Thumb */}
                                            <img className="hover-img" src="img/product-img/product-5.jpg" alt=""/>

                                            {/* Product Badge */}
                                            <div className="product-badge new-badge">
                                                <span>New</span>
                                            </div>

                                            {/* Favourite */}
                                            <div className="product-favourite">
                                                <a href="#" className="favme fa fa-heart"></a>
                                            </div>
                                        </div>
                                        {/* Product Description */}
                                        <div className="product-description">
                                            <span>mango</span>
                                            <a href="single-product-details.html">
                                                <h6>PETITE Belted Jumper Dress</h6>
                                            </a>
                                            <p className="product-price">$80.00</p>

                                            {/* Hover Content */}
                                            <div className="hover-content">
                                                {/* Add to Cart */}
                                                <div className="add-to-cart-btn">
                                                    <a href="#" className="btn essence-btn">Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ##### New Arrivals Area End ##### */}
                
            </div>
        )
    }
}

export default homePage;