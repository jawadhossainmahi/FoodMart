import React from 'react'
import ThumbBananas from "../../assets/images/thumb-bananas.png";
import ThumbBiscuits from "../../assets/images/thumb-biscuits.png";
import ThumbCucumber from "../../assets/images/thumb-cucumber.png";
import ThumbMilk from "../../assets/images/thumb-milk.png";
import ThumbTomatoes from "../../assets/images/thumb-tomatoes.png";
import ThumbTomatoketchup from "../../assets/images/thumb-tomatoketchup.png";
import ThumbOrangeJuice from "../../assets/images/thumb-orange-juice.png";
import ThumbRaspBerriese from "../../assets/images/thumb-raspberries.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router';
function ProductSlider(props) {
    
    return (
        <>
            <section className="py-5 overflow-hidden">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">

                            <div className="section-header d-flex flex-wrap justify-content-between my-5">

                                <h2 className="section-title">{props.title}</h2>

                                <div className="d-flex align-items-center">
                                    <Link to="#" className="btn-link text-decoration-none">View All Categories →</Link>
                                    <div className="swiper-buttons">
                                        <button className="swiper-prev products-carousel-prev btn btn-primary">❮</button>
                                        <button className="swiper-next products-carousel-next btn btn-primary">❯</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Swiper className='products-carousel'
                                navigation={{
                                    nextEl: '.products-carousel-next',
                                    prevEl: '.products-carousel-prev',
                                }} slidesPerView={6} spaceBetween={30} modules={[Navigation]}
                            >
                                <SwiperSlide>
                                    <div className="product-item swiper-slide">
                                        <span className="badge bg-success position-absolute m-3">-15%</span>
                                        <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                        <figure>
                                            <Link to="index.html" title="Product Title">
                                                <img src={ThumbTomatoes} className="tab-image" />
                                            </Link>
                                        </figure>
                                        <h3>Sunstar Fresh Melon Juice</h3>
                                        <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                        <span className="price">$18.00</span>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="input-group product-qty">
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                                        <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                                    </button>
                                                </span>
                                                <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                                        <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                                    </button>
                                                </span>
                                            </div>
                                            <Link to="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-item swiper-slide">
                                        <span className="badge bg-success position-absolute m-3">-15%</span>
                                        <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                        <figure>
                                            <Link to="index.html" title="Product Title">
                                                <img src={ThumbTomatoketchup} className="tab-image" />
                                            </Link>
                                        </figure>
                                        <h3>Sunstar Fresh Melon Juice</h3>
                                        <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                        <span className="price">$18.00</span>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="input-group product-qty">
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                                        <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                                    </button>
                                                </span>
                                                <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                                        <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                                    </button>
                                                </span>
                                            </div>
                                            <Link to="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-item swiper-slide">
                                        <span className="badge bg-success position-absolute m-3">-15%</span>
                                        <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                        <figure>
                                            <Link to="index.html" title="Product Title">
                                                <img src={ThumbBananas} className="tab-image" />
                                            </Link>
                                        </figure>
                                        <h3>Sunstar Fresh Melon Juice</h3>
                                        <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                        <span className="price">$18.00</span>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="input-group product-qty">
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                                        <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                                    </button>
                                                </span>
                                                <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                                        <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                                    </button>
                                                </span>
                                            </div>
                                            <Link to="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></Link>
                                        </div>
                                    </div>









                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-item swiper-slide">
                                        <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                        <figure>
                                            <Link to="index.html" title="Product Title">
                                                <img src={ThumbBananas} className="tab-image" />
                                            </Link>
                                        </figure>
                                        <h3>Sunstar Fresh Melon Juice</h3>
                                        <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                        <span className="price">$18.00</span>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="input-group product-qty">
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                                        <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                                    </button>
                                                </span>
                                                <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                                        <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                                    </button>
                                                </span>
                                            </div>
                                            <Link to="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-item swiper-slide">
                                        <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                        <figure>
                                            <Link to="index.html" title="Product Title">
                                                <img src={ThumbBananas} className="tab-image" />
                                            </Link>
                                        </figure>
                                        <h3>Sunstar Fresh Melon Juice</h3>
                                        <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                        <span className="price">$18.00</span>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="input-group product-qty">
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                                        <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                                    </button>
                                                </span>
                                                <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                                        <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                                    </button>
                                                </span>
                                            </div>
                                            <Link to="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-item swiper-slide">
                                        <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                        <figure>
                                            <Link to="index.html" title="Product Title">
                                                <img src={ThumbTomatoketchup} className="tab-image" />
                                            </Link>
                                        </figure>
                                        <h3>Sunstar Fresh Melon Juice</h3>
                                        <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                        <span className="price">$18.00</span>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="input-group product-qty">
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                                        <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                                    </button>
                                                </span>
                                                <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                                        <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                                    </button>
                                                </span>
                                            </div>
                                            <Link to="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-item swiper-slide">
                                        <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                        <figure>
                                            <Link to="index.html" title="Product Title">
                                                <img src={ThumbTomatoes} className="tab-image" />
                                            </Link>
                                        </figure>
                                        <h3>Sunstar Fresh Melon Juice</h3>
                                        <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                        <span className="price">$18.00</span>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="input-group product-qty">
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                                        <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                                    </button>
                                                </span>
                                                <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                                        <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                                    </button>
                                                </span>
                                            </div>
                                            <Link to="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="product-item swiper-slide">
                                        <span className="badge bg-success position-absolute m-3">-15%</span>
                                        <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                        <figure>
                                            <Link to="index.html" title="Product Title">
                                                <img src={ThumbBananas} className="tab-image" />
                                            </Link>
                                        </figure>
                                        <h3>Sunstar Fresh Melon Juice</h3>
                                        <span className="qty">1 Unit</span><span className="rating"><svg width="24" height="24" className="text-primary"><use xlinkHref="#star-solid"></use></svg> 4.5</span>
                                        <span className="price">$18.00</span>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="input-group product-qty">
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                                        <svg width="16" height="16"><use xlinkHref="#minus"></use></svg>
                                                    </button>
                                                </span>
                                                <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
                                                <span className="input-group-btn">
                                                    <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                                        <svg width="16" height="16"><use xlinkHref="#plus"></use></svg>
                                                    </button>
                                                </span>
                                            </div>
                                            <Link to="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="products-carousel swiper">
                                <div className="swiper-wrapper">







                                </div>
                            </div>
                            {/* <!-- / products-carousel --> */}

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProductSlider