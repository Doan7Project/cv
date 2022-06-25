import React, { Component } from 'react'
import Iconroom from '../assets/image/iconroom.png'
import Pic2 from '../assets/image/Pic2.jpg'
import Pic3 from '../assets/image/Pic3.jpg'
import Pic4 from '../assets/image/Pic4.jpg'
import Pic5 from '../assets/image/Pic5.jpg'
function Headers() {
    return (
        <div className='container containers'>
            <div className='primary-part shadow p-4 bg-body rounded'>
                <div className='child-part'>
                    <img src={Pic3} alt="" />
                    <div className='child-name'>
                        <span className='lead fw-bold'>Hotel Name</span>
                    </div>
                </div>
                <div className='child-part'>
                    <div className='child-content-1'>
                        <span className='lead'>Hotel Information</span>
                        <div className='child-line'></div>
                    </div>
                    <div className='child-ct fs-6'>
                        <p>
                            Saigon Emarald Resort There are a total of 74 rooms including a luxurious separate bungalow overlooking the sea with relaxing and private space. The restaurant at the Resort will be a great choice for diners to enjoy the best local dishes of Mui Ne, Phan Thiet. Especially you enjoy the scenery of the blue sea with a beautiful infinity pool.
                        </p>
                        <p>More specifically, the resort always organizes outdoor events such as campfires, kite flying festivals, camping, surfing, especially extremely attractive beach volleyball tournaments. . When you come to Madam Cuc, you will enjoy outdoor activities and relax after hard working days. Come to the branded Resort Madam Cúc to be enjoyed.</p>

                    </div>
                </div>
            </div>
            <div className='primary-part borders'>
                <div className="px-2 py-3 my-3 text-center">
                    <img className="d-block mx-auto mb-4" src={Iconroom} alt="" width="72" height="57" />
                    <h1 className="display-5 fw-bold">Catalog</h1>
                    <div className="col-lg-10 mx-auto">
                        <p className="lead mb-2">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </div>

                </div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Pic2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Pic4} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={Pic5} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* popup modal content introduct */}
        </div>
    );
}

export default Headers;