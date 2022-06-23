import React, { Component } from 'react'
import logo from '../assets/image/pic1.jpg'
import room1 from '../assets/image/Room1.jpg'
function Header() {
    return (
        <header className='containers'>
            <div className='primary-part'>
                <div className='child-part'>
                    <img src={logo} alt="" />
                    <div className='child-name'>
                        <span>CATALOG OF SAIGON EMERALD</span>
                    </div>
                </div>
                <div className='child-part'>
                    <div className='child-content-1'>
                        <span>Introduction</span>
                        <div className='child-line'></div>
                    </div>
                    <div className='child-ct'>
                        <p>With a natural garden on the beach area, Saigon Emarald Resort is a wonderful picture depicting the beauty of the sea and the natural garden. The first impression of visitors when coming to Madam Cuc is the deep blue of the sea at eye level, and the sound of waves crashing at the restaurant's reception area. The feeling of each light breeze intertwines in the warm sunny weather, giving visitors a feeling of peace, maximum relaxation, dispelling the chaos and daily hustle in life.</p>
                        <p>
                        Saigon Emarald Resort There are a total of 74 rooms including a luxurious separate bungalow overlooking the sea with relaxing and private space. The restaurant at the Resort will be a great choice for diners to enjoy the best local dishes of Mui Ne, Phan Thiet. Especially you enjoy the scenery of the blue sea with a beautiful infinity pool.
                        </p>
                        <p>More specifically, the resort always organizes outdoor events such as campfires, kite flying festivals, camping, surfing, especially extremely attractive beach volleyball tournaments. . When you come to Madam Cuc, you will enjoy outdoor activities and relax after hard working days. Come to the branded Resort Madam Cúc to be enjoyed.</p>
                    </div>
                </div>
            </div>
            <div className='primary-part borders'>
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

        </header>
    );
}

export default Header;