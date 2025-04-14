import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import Product_thumb_11 from "../assets/images/product-thumb-11.jpg"
import Product_thumb_12 from "../assets/images/product-thumb-12.jpg"
import Product_thumb_13 from "../assets/images/product-thumb-13.jpg"
import Product_thumb_14 from "../assets/images/product-thumb-14.jpg"
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router';

function NewBrandSlider() {
    return (
        <>
            <section className="py-5 overflow-hidden">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">

                            <div className="section-header d-flex flex-wrap flex-wrap justify-content-between mb-5">

                                <h2 className="section-title">Newly Arrived Brands</h2>

                                <div className="d-flex align-items-center">
                                    <Link to="#" className="btn-link text-decoration-none">View All Categories →</Link>
                                    <div className="swiper-buttons">
                                        <button className="swiper-prev brand-carousel-prev btn btn-yellow">❮</button>
                                        <button className="swiper-next brand-carousel-next btn btn-yellow">❯</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Swiper className='brand-carousel' navigation={{
                                nextEl: '.brand-carousel-next',
                                prevEl: '.brand-carousel-prev',
                            }} modules={[Navigation]}
                            slidesPerView={4} spaceBetween={30}
                            >
                                <SwiperSlide>
                                    <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={Product_thumb_11} className="img-fluid rounded" alt="Card title" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body py-0">
                                                    <p className="text-muted mb-0">Amber Jar</p>
                                                    <h5 className="card-title">Honey best nectar you wish to get</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={Product_thumb_12} className="img-fluid rounded" alt="Card title" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body py-0">
                                                    <p className="text-muted mb-0">Amber Jar</p>
                                                    <h5 className="card-title">Honey best nectar you wish to get</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>


                                <SwiperSlide>
                                    <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={Product_thumb_13} className="img-fluid rounded" alt="Card title" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body py-0">
                                                    <p className="text-muted mb-0">Amber Jar</p>
                                                    <h5 className="card-title">Honey best nectar you wish to get</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={Product_thumb_14} className="img-fluid rounded" alt="Card title" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body py-0">
                                                    <p className="text-muted mb-0">Amber Jar</p>
                                                    <h5 className="card-title">Honey best nectar you wish to get</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={Product_thumb_11} className="img-fluid rounded" alt="Card title" />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body py-0">
                                                        <p className="text-muted mb-0">Amber Jar</p>
                                                        <h5 className="card-title">Honey best nectar you wish to get</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={Product_thumb_12} className="img-fluid rounded" alt="Card title" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body py-0">
                                                    <p className="text-muted mb-0">Amber Jar</p>
                                                    <h5 className="card-title">Honey best nectar you wish to get</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default NewBrandSlider   