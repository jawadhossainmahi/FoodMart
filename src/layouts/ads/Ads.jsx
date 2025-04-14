import React from 'react'
import Ad_3 from "../../assets/images/ad-image-3.png";
import Ad_4 from "../../assets/images/ad-image-4.png";
import { Link } from 'react-router';
function Ads() {
  return (
    <>
           <section className="py-5">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="banner-ad bg-danger mb-3"
                            style={{background:`url(${Ad_3})`,backgroundRepeat:"no-repeat",backgroundPosition:"right bottom"}} 
      
                            >
                                <div className="banner-content p-5">

                                    <div className="categories text-primary fs-3 fw-bold">Upto 25% Off</div>
                                    <h3 className="banner-title">Luxa Dark Chocolate</h3>
                                    <p>Very tasty & creamy vanilla flavour creamy muffins.</p>
                                    <Link to="#" className="btn btn-dark text-uppercase">Show Now</Link>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="banner-ad bg-info"
                             
                            style={{background:`url(${Ad_4})`,backgroundRepeat:"no-repeat",backgroundPosition:"right bottom"}} 
                             >
                                <div className="banner-content p-5">

                                    <div className="categories text-primary fs-3 fw-bold">Upto 25% Off</div>
                                    <h3 className="banner-title">Creamy Muffins</h3>
                                    <p>Very tasty & creamy vanilla flavour creamy muffins.</p>
                                    <Link to="#" className="btn btn-dark text-uppercase">Show Now</Link>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
    </>
  )
}

export default Ads