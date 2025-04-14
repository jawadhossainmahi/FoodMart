import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import BgPattern from "../assets/images/background-pattern.jpg";
import Pthumb_1 from "../assets/images/product-thumb-1.png";
import Pthumb_2 from "../assets/images/product-thumb-2.png";
import Ad_img_1 from "../assets/images/ad-image-1.png";
import Ad_img_2 from "../assets/images/ad-image-2.png";
import { Link } from 'react-router';
function HomeBanner() {
    return (
        <>
            <section className="py-3"
                style={{ backgroundImage: `url(${BgPattern})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
            >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">

                            <div className="banner-blocks">

                                <div className="banner-ad large bg-info block-1">

                                    <Swiper pagination={{ clickable: true }} modules={[Pagination]} className='main-swiper'>
                                        <SwiperSlide>
                                            <div className="row banner-content p-5">
                                                <div className="content-wrapper col-md-7">
                                                    <div className="categories my-3">100% natural</div>
                                                    <h3 className="display-4">Fresh Smoothie & Summer Juice</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                                                    <Link to="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3">Shop Now</Link>
                                                </div>
                                                <div className="img-wrapper col-md-5">
                                                    <img src="" className="img-fluid" />
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="row banner-content p-5">
                                                <div className="content-wrapper col-md-7">
                                                    <div className="categories mb-3 pb-3">100% natural</div>
                                                    <h3 className="banner-title">Fresh Smoothie & Summer Juice</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                                                    <Link to="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">Shop Collection</Link>
                                                </div>
                                                <div className="img-wrapper col-md-5">
                                                    <img src={Pthumb_1} className="img-fluid" />
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="row banner-content p-5">
                                                <div className="content-wrapper col-md-7">
                                                    <div className="categories mb-3 pb-3">100% natural</div>
                                                    <h3 className="banner-title">Heinz Tomato Ketchup</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                                                    <Link to="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">Shop Collection</Link>
                                                </div>
                                                <div className="img-wrapper col-md-5">
                                                    <img src={Pthumb_2} className="img-fluid" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    {/* <div className="swiper main-swiper">
                                        <div className="swiper-wrapper">


                                        </div>

                                        <div className="swiper-pagination"></div>

                                    </div> */}
                                </div>

                                <div className="banner-ad bg-success-subtle block-2"
                                    style={{ background: `url(${Ad_img_1})`, backgroundRepeat: "no-repeat", backgroundPosition: "right bottom" }}
                                >
                                    <div className="row banner-content p-5">

                                        <div className="content-wrapper col-md-7">
                                            <div className="categories sale mb-3 pb-3">20% off</div>
                                            <h3 className="banner-title">Fruits & Vegetables</h3>
                                            <Link to="#" className="d-flex align-items-center nav-link">Shop Collection <svg width="24" height="24"><use to="#arrow-right"></use></svg></Link>
                                        </div>

                                    </div>
                                </div>

                                <div className="banner-ad bg-danger block-3"
                                    style={{ background: `url(${Ad_img_2})`, backgroundPosition: "right bottom", backgroundRepeat: "no-repeat" }} >
                                    <div className="row banner-content p-5">

                                        <div className="content-wrapper col-md-7">
                                            <div className="categories sale mb-3 pb-3">15% off</div>
                                            <h3 className="item-title">Baked Products</h3>
                                            <Link to="#" className="d-flex align-items-center nav-link">Shop Collection <svg width="24" height="24"><use to="#arrow-right"></use></svg></Link>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            {/* <!-- / Banner Blocks --> */}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeBanner   