import React from 'react'
import Icon_vegetable_broccoli from "../assets/images/icon-vegetables-broccoli.png"
import Icon_bread_bague from "../assets/images/icon-bread-baguette.png"
import Icon_soft_drink from "../assets/images/icon-soft-drinks-bottle.png"
import Icon_wine_g from "../assets/images/icon-wine-glass-bottle.png"
import Icon_animal_p from "../assets/images/icon-animal-products-drumsticks.png"
import Icon_bread_h from "../assets/images/icon-bread-herb-flour.png";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router'
function CategorySlider() {
    return (
        <>
            <section className="py-5 overflow-hidden">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">

                            <div className="section-header d-flex flex-wrap justify-content-between mb-5">
                                <h2 className="section-title">Category</h2>

                                <div className="d-flex align-items-center">
                                    <Link to="#" className="btn-link text-decoration-none">View All Categories →</Link>
                                    <div className="swiper-buttons">
                                        <button className="swiper-prev category-carousel-prev btn btn-yellow">❮</button>
                                        <button className="swiper-next category-carousel-next btn btn-yellow">❯</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Swiper navigation={{
                                nextEl: '.category-carousel-next',
                                prevEl: '.category-carousel-prev',
                            }} slidesPerView={6} spaceBetween={30} className="category-carousel" modules={[Navigation]}>
                                <SwiperSlide><Link to="/" className="nav-link category-item swiper-slide">
                                    <img src={Icon_vegetable_broccoli} alt="Category Thumbnail" />
                                    <h3 className="category-title">Fruits & Veges</h3>
                                </Link></SwiperSlide>
                                <SwiperSlide>   <Link to="/" className="nav-link category-item swiper-slide">
                                    <img src={Icon_bread_bague} alt="Category Thumbnail" />
                                    <h3 className="category-title">Breads & Sweets</h3>
                                </Link></SwiperSlide>
                                <SwiperSlide>
                                    <Link to="/" className="nav-link category-item swiper-slide">
                                        <img src={Icon_soft_drink} alt="Category Thumbnail" />
                                        <h3 className="category-title">Fruits & Veges</h3>
                                    </Link></SwiperSlide>
                                <SwiperSlide>  <Link to="/" className="nav-link category-item swiper-slide">
                                    <img src={Icon_wine_g} alt="Category Thumbnail" />
                                    <h3 className="category-title">Fruits & Veges</h3>
                                </Link></SwiperSlide>
                                <SwiperSlide> <Link to="/" className="nav-link category-item swiper-slide">
                                    <img src={Icon_animal_p} alt="Category Thumbnail" />
                                    <h3 className="category-title">Fruits & Veges</h3>
                                </Link></SwiperSlide>
                                <SwiperSlide>
                                    <Link to="/" className="nav-link category-item swiper-slide">
                                        <img src={Icon_bread_h} alt="Category Thumbnail" />
                                        <h3 className="category-title">Fruits & Veges</h3>
                                    </Link></SwiperSlide>
                                <SwiperSlide>

                                    <Link to="/" className="nav-link category-item swiper-slide">
                                        <img src={Icon_vegetable_broccoli} alt="Category Thumbnail" />
                                        <h3 className="category-title">Fruits & Veges</h3>
                                    </Link></SwiperSlide>
                                <SwiperSlide> <Link to="/" className="nav-link category-item swiper-slide">
                                    <img src={Icon_vegetable_broccoli} alt="Category Thumbnail" />
                                    <h3 className="category-title">Fruits & Veges</h3>
                                </Link></SwiperSlide>
                                <SwiperSlide>
                                    <Link to="/" className="nav-link category-item swiper-slide">
                                        <img src={Icon_vegetable_broccoli} alt="Category Thumbnail" />
                                        <h3 className="category-title">Fruits & Veges</h3>
                                    </Link></SwiperSlide>
                                <SwiperSlide>
                                    <Link to="/" className="nav-link category-item swiper-slide">
                                        <img src={Icon_vegetable_broccoli} alt="Category Thumbnail" />
                                        <h3 className="category-title">Fruits & Veges</h3>
                                    </Link></SwiperSlide>
                                <SwiperSlide>
                                    <Link to="/" className="nav-link category-item swiper-slide">
                                        <img src={Icon_vegetable_broccoli} alt="Category Thumbnail" />
                                        <h3 className="category-title">Fruits & Veges</h3>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to="/" className="nav-link category-item swiper-slide">
                                        <img src={Icon_vegetable_broccoli} alt="Category Thumbnail" />
                                        <h3 className="category-title">Fruits & Veges</h3>
                                    </Link>
                                </SwiperSlide>
                            </Swiper>
                            {/* <div className=" swiper">
                                <div className="swiper-wrapper">
                                    
                                 
                               
                                  
                                   
                                   

                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CategorySlider