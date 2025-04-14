import React from 'react'
import ThumbBananas from "../../assets/images/thumb-bananas.png";
import ThumbBiscuits from "../../assets/images/thumb-biscuits.png";
import ThumbCucumber from "../../assets/images/thumb-cucumber.png";
import ThumbMilk from "../../assets/images/thumb-milk.png";
import ThumbTomatoes from "../../assets/images/thumb-tomatoes.png" ;
import ThumbTomatoketchup from "../../assets/images/thumb-tomatoketchup.png" ;
import ThumbOrangeJuice from "../../assets/images/thumb-orange-juice.png" ;
import ThumbRaspBerriese from "../../assets/images/thumb-raspberries.png" ;
import { Link } from 'react-router';
function TrendingProduct() {
    return (
        <>
            <section className="py-5">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-12">

                            <div className="bootstrap-tabs product-tabs">
                                <div className="tabs-header d-flex justify-content-between border-bottom my-5">
                                    <h3>Trending Products</h3>
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <Link to="#" className="nav-link text-uppercase fs-6 active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all">All</Link>
                                            <Link to="#" className="nav-link text-uppercase fs-6" id="nav-fruits-tab" data-bs-toggle="tab" data-bs-target="#nav-fruits">Fruits & Veges</Link>
                                            <Link to="#" className="nav-link text-uppercase fs-6" id="nav-juices-tab" data-bs-toggle="tab" data-bs-target="#nav-juices">Juices</Link>
                                        </div>
                                    </nav>
                                </div>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">

                                        <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

                                            <div className="col">
                                                <div className="product-item">
                                                    <span className="badge bg-success position-absolute m-3">-30%</span>
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
                                            </div>

                                            <div className="col">
                                                <div className="product-item">
                                                    <span className="badge bg-success position-absolute m-3">-30%</span>
                                                    <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                                    <figure>
                                                        <Link to="index.html" title="Product Title">
                                                            <img src={ThumbBiscuits} className="tab-image" />
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
                                            </div>

                                            <div className="col">
                                                <div className="product-item">
                                                    <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                                    <figure>
                                                        <Link to="index.html" title="Product Title">
                                                            <img src={ThumbCucumber} className="tab-image" />
                                                        </Link>
                                                    </figure>
                                                    <h3>Sunstar Fresh Melon Juice</h3>
                                                    <span className="qty">1 Unit</span>
                                                    <span className="rating">
                                                        <svg width="24" height="24" className="text-primary">
                                                            <use xlinkHref="#star-solid"></use>
                                                        </svg> 4.5
                                                    </span>
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
                                            </div>

                                            <div className="col">
                                                <div className="product-item">
                                                    <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                                    <figure>
                                                        <Link to="index.html" title="Product Title">
                                                            <img src={ThumbMilk} className="tab-image" />
                                                        </Link>
                                                    </figure>
                                                    <h3>Sunstar Fresh Melon Juice</h3>
                                                    <span className="qty" >1 Unit</span>
                                                    <span className="rating">
                                                        <svg width="24" height="24" className="text-primary">
                                                            <use xlinkHref="#star-solid"></use>
                                                        </svg> 4.5
                                                    </span>
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
                                            </div>

                                            <div className="col">
                                                <div className="product-item">
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
                                            </div>

                                            <div className="col">
                                                <div className="product-item">
                                                    <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                                    <figure>
                                                        <Link to="index.html" title="Product Title">
                                                            <img src={ThumbBiscuits} className="tab-image" />
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
                                            </div>

                                            <div className="col">
                                                <div className="product-item">
                                                    <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                                    <figure>
                                                        <Link to="index.html" title="Product Title">
                                                            <img src={ThumbCucumber}className="tab-image" />
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
                                            </div>

                                            <div className="col">
                                                <div className="product-item">
                                                    <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                                    <figure>
                                                        <Link to="index.html" title="Product Title">
                                                            <img src={ThumbMilk} className="tab-image" />
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
                                            </div>

                                            <div className="col">
                                                <div className="product-item">
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
                                            </div>

                                            <div className="col">
                                                <div className="product-item">
                                                    <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                                    <figure>
                                                        <Link to="index.html" title="Product Title">
                                                            <img src={ThumbBiscuits}className="tab-image" />
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
                                            </div>

                                        </div>
                                        {/* <!-- / product-grid --> */}

                                    </div>

                                    <div className="tab-pane fade" id="nav-fruits" role="tabpanel" aria-labelledby="nav-fruits-tab">

                                        <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

                                            <div className="col">
                                                <div className="product-item">
                                                    <span className="badge bg-success position-absolute m-3">-30%</span>
                                                    <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                                    <figure>
                                                        <Link to="index.html" title="Product Title">
                                                            <img src={ThumbCucumber}className="tab-image" />
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
                                            </div>

                                            <div className="col">
                                                <div className="product-item">
                                                    <span className="badge bg-success position-absolute m-3">-30%</span>
                                                    <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                                    <figure>
                                                        <Link to="index.html" title="Product Title">
                                                            <img src={ThumbMilk} className="tab-image" />
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
                                            </div>

                                            <div className="col">
                                                <div className="product-item">
                                                    <span className="badge bg-success position-absolute m-3">-30%</span>
                                                    <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                                    <figure>
                                                        <Link to="index.html" title="Product Title">
                                                            <img src={ThumbOrangeJuice} className="tab-image" />
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
                                            </div>

                                            <div className="col">
                                                <div className="product-item">
                                                    <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                                    <figure>
                                                        <Link to="index.html" title="Product Title">
                                                            <img src={ThumbRaspBerriese} className="tab-image" />
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
                                            </div>

                                            <div className="col">
                                                <div className="product-item">
                                                    <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                                    <figure>
                                                        <Link to="index.html" title="Product Title">
                                                            <img src={ThumbBananas}className="tab-image" />
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
                                            </div>

                                            <div className="col">
                                                <div className="product-item">
                                                    <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                                    <figure>
                                                        <Link to="index.html" title="Product Title">
                                                            <img src={ThumbBananas}className="tab-image" />
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
                                            </div>

                                        </div>
                                        {/* <!-- / product-grid --> */}

                                    </div>
                                    <div className="tab-pane fade" id="nav-juices" role="tabpanel" aria-labelledby="nav-juices-tab">

                                        <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

                                            <div className="col">
                                                <div className="product-item">
                                                    <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                                    <figure>
                                                        <Link to="index.html" title="Product Title">
                                                            <img src={ThumbCucumber}className="tab-image" />
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
                                            </div>

                                            <div className="col">
                                                <div className="product-item">
                                                    <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                                    <figure>
                                                        <Link to="index.html" title="Product Title">
                                                            <img src={ThumbMilk} className="tab-image" />
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
                                            </div>

                                            <div className="col">
                                                <div className="product-item">
                                                    <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                                    <figure>
                                                        <Link to="index.html" title="Product Title">
                                                            <img src={ThumbTomatoes}className="tab-image" />
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
                                            </div>

                                            <div className="col">
                                                <div className="product-item">
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
                                            </div>

                                            <div className="col">
                                                <div className="product-item">
                                                    <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                                    <figure>
                                                        <Link to="index.html" title="Product Title">
                                                            <img src={ThumbBananas}className="tab-image" />
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
                                            </div>

                                            <div className="col">
                                                <div className="product-item">
                                                    <Link to="#" className="btn-wishlist"><svg width="24" height="24"><use xlinkHref="#heart"></use></svg></Link>
                                                    <figure>
                                                        <Link to="index.html" title="Product Title">
                                                            <img src={ThumbBananas}className="tab-image" />
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
                                            </div>

                                        </div>
                                        {/* <!-- / product-grid --> */}

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TrendingProduct