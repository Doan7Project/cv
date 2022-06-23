import React, { Component } from 'react'
import logo from '../assets/image/pic1.jpg'
import room1 from '../assets/image/Room1.jpg'
import Iconroom from '../assets/image/iconroom.png'
function Headers() {
    return (
        <div className='containers'>
            <div className='primary-part'>
                <div className='child-part'>
                    <img src={logo} alt="" />
                    <div className='child-name'>
                        <span className='fw-bold'>Hotel Name</span>
                    </div>
                </div>
                <div className='child-part'>
                    <div className='child-content-1'>
                        <span>Hotel Information</span>
                        <div className='child-line'></div>
                        {/* <div className='child-fullscreen'>
                            <button className='child-btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop" ><i className="bi bi-fullscreen" ></i></button>
                        </div> */}
                    </div>
                    <div className='child-ct'>
                        <p>
                            Saigon Emarald Resort There are a total of 74 rooms including a luxurious separate bungalow overlooking the sea with relaxing and private space. The restaurant at the Resort will be a great choice for diners to enjoy the best local dishes of Mui Ne, Phan Thiet. Especially you enjoy the scenery of the blue sea with a beautiful infinity pool.
                        </p>
                        <p>More specifically, the resort always organizes outdoor events such as campfires, kite flying festivals, camping, surfing, especially extremely attractive beach volleyball tournaments. . When you come to Madam Cuc, you will enjoy outdoor activities and relax after hard working days. Come to the branded Resort Madam Cúc to be enjoyed.</p>
                   
                    </div>
                </div>
            </div>
            <div className='primary-part borders'>
           
                <div className="px-5 py-3 my-3 text-center">
                <img className="d-block mx-auto mb-4" src={Iconroom} alt="" width="72" height="57" />
                    <h1 className="display-5 fw-bold">Catalog</h1>
                    <div className="col-lg-10 mx-auto">
                        <p className="lead mb-0">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </div>

                </div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={room1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={room1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={room1} className="d-block w-100" alt="..." />
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

            {/* 
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Hotel Information</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>With a natural garden on the beach area, Saigon Emarald Resort is a wonderful picture depicting the beauty of the sea and the natural garden. The first impression of visitors when coming to Madam Cuc is the deep blue of the sea at eye level, and the sound of waves crashing at the restaurant's reception area. The feeling of each light breeze intertwines in the warm sunny weather, giving visitors a feeling of peace, maximum relaxation, dispelling the chaos and daily hustle in life.</p>
                            <p>
                                Saigon Emarald Resort There are a total of 74 rooms including a luxurious separate bungalow overlooking the sea with relaxing and private space. The restaurant at the Resort will be a great choice for diners to enjoy the best local dishes of Mui Ne, Phan Thiet. Especially you enjoy the scenery of the blue sea with a beautiful infinity pool.
                            </p>
                            <p>More specifically, the resort always organizes outdoor events such as campfires, kite flying festivals, camping, surfing, especially extremely attractive beach volleyball tournaments. . When you come to Madam Cuc, you will enjoy outdoor activities and relax after hard working days. Come to the branded Resort Madam Cúc to be enjoyed.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Headers;