import React from 'react'
import Logo from "../assets/images/logo.png";
import { Link } from 'react-router';
function Header() {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row py-3 border-bottom">

                        <div className="col-sm-4 col-lg-3 text-center text-sm-start">
                            <div className="main-logo">
                                <Link to="/">
                                    <img src={Logo} alt="" />
                                    {/* <img alt="logo" className="img-fluid" /> */}
                                </Link>
                            </div>
                        </div>

                        <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
                            <div className="search-bar row bg-light p-2 my-2 rounded-4">
                                <div className="col-md-4 d-none d-md-block">
                                    <select className="form-select border-0 bg-transparent">
                                        <option>All Categories</option>
                                        <option>Groceries</option>
                                        <option>Drinks</option>
                                        <option>Chocolates</option>
                                    </select>
                                </div>
                                <div className="col-11 col-md-7">
                                    <form id="search-form" className="text-center" action="index.html" method="post">
                                        <input type="text" className="form-control border-0 bg-transparent" placeholder="Search for more than 20,000 products" />
                                    </form>
                                </div>
                                <div className="col-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" /></svg>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
                            <div className="support-box text-end d-none d-xl-block">
                                <span className="fs-6 text-muted">For Support?</span>
                                <h5 className="mb-0">+980-34984089</h5>
                            </div>

                            <ul className="d-flex justify-content-end list-unstyled m-0">
                                <li>
                                    <Link to="#" className="rounded-circle bg-light p-2 mx-1">
                                        <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#user"></use></svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="rounded-circle bg-light p-2 mx-1">
                                        <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#heart"></use></svg>
                                    </Link>
                                </li>
                                <li className="d-lg-none">
                                    <Link to="#" className="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                                        <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#cart"></use></svg>
                                    </Link>
                                </li>
                                <li className="d-lg-none">
                                    <Link to="#" className="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
                                        <svg width="24" height="24" viewBox="0 0 24 24"><use xlinkHref="#search"></use></svg>
                                    </Link>
                                </li>
                            </ul>

                            <div className="cart text-end d-none d-lg-block dropdown">
                                <button className="border-0 bg-transparent d-flex flex-column gap-2 lh-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                                    <span className="fs-6 text-muted dropdown-toggle">Your Cart</span>
                                    <span className="cart-total fs-5 fw-bold">$1290.00</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row py-3">
                        <div className="d-flex  justify-content-center justify-content-sm-between align-items-center">
                            <nav className="main-menu d-flex navbar navbar-expand-lg">

                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                                    aria-controls="offcanvasNavbar">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                                    <div className="offcanvas-header justify-content-center">
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>

                                    <div className="offcanvas-body">

                                        <select className="filter-categories border-0 mb-0 me-5">
                                            <option>Shop by Departments</option>
                                            <option>Groceries</option>
                                            <option>Drinks</option>
                                            <option>Chocolates</option>
                                        </select>

                                        <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                                            <li className="nav-item active">
                                                <Link to="#women" className="nav-link">Women</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link to="#men" className="nav-link">Men</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="#kids" className="nav-link">Kids</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="#accessories" className="nav-link">Accessories</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" role="button" id="pages" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                                                <ul className="dropdown-menu" aria-labelledby="pages">
                                                    <li><Link to="/" className="dropdown-item">About Us </Link></li>
                                                    <li><Link to="/" className="dropdown-item">Shop </Link></li>
                                                    <li><Link to="/" className="dropdown-item">Single Product </Link></li>
                                                    <li><Link to="/" className="dropdown-item">Cart </Link></li>
                                                    <li><Link to="/" className="dropdown-item">Checkout </Link></li>
                                                    <li><Link to="/" className="dropdown-item">Blog </Link></li>
                                                    <li><Link to="/" className="dropdown-item">Single Post </Link></li>
                                                    <li><Link to="/" className="dropdown-item">Styles </Link></li>
                                                    <li><Link to="/" className="dropdown-item">Contact </Link></li>
                                                    <li><Link to="/" className="dropdown-item">Thank You </Link></li>
                                                    <li><Link to="/" className="dropdown-item">My Account </Link></li>
                                                    <li><Link to="/" className="dropdown-item">404 Error </Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="#brand" className="nav-link">Brand</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="#sale" className="nav-link">Sale</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="#blog" className="nav-link">Blog</Link>
                                            </li>
                                        </ul>

                                    </div>

                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header