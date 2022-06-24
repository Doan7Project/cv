import React, { Component } from 'react';
import Supgr1 from '../assets/image/supgr1.jpg'
import Supgr2 from '../assets/image/supgr2.jpg'
import Supgr3 from '../assets/image/pic1.jpg'
import Iconroom from '../assets/image/iconroom.png'
import Area from '../assets/image/area.png'
import Capacity from '../assets/image/capacity.png'
import Bed from '../assets/image/double-bed.png'
import Visibility from '../assets/image/visibility.png'

function Typeroom() {

    let data = [
        { id: 1, srcImg1: Supgr3, srcImg2: Supgr1, srcImg3: Supgr1, srcImg4: Supgr1 },
        { id: 2, srcImg1: Supgr3, srcImg2: Supgr1, srcImg3: Supgr1, srcImg4: Supgr1 },

    ]
    return (
        <div >
            {
                data.map((item, index) => {
                    return (
                        <div className='container room-primary shadow p-3 mb-5 bg-body rounded' key={index} >
                            <div className="row">
                                <div className='col-lg-4 py-5 text-center'>
                                    <p className='display-6 fw-bold'>Superior Garden View</p>
                                    <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid a neque ab, recusandae eum, nostrum, enim iste accusamus odio quas asperiores officiis fugiat. Tempora perspiciatis saepe impedit tempore aliquid.</p>
                                    <div className='row row-cols-2'>
                                        <div className='col-sm-3 py-0 px-2'>
                                            <img src={Area} alt="" width="30" height="30" />
                                            <p className='fw-bold py-2'>Diện Tích
                                                <br /><span className='fw-light'>27m2</span></p>
                                        </div>
                                        <div className='col-sm-3 py-0 px-2'>
                                            <img src={Bed} alt="" width="30" height="30" />
                                            <p className='fw-bold py-2'>Giường
                                                <br /><span className='fw-light'>King</span></p>
                                        </div>
                                        <div className='col-sm-3 py-0 px-2'>
                                            <img src={Capacity} alt="" width="30" height="30" />
                                            <p className='fw-bold py-2'>Sức Chứa
                                                <br /><span className='fw-light'>2</span></p>
                                        </div>
                                        <div className='col-sm-3 py-0 px-2'>
                                            <img src={Visibility} alt="" width="30" height="30" />
                                            <p className='fw-bold py-2'>Hướng
                                                <br /><span className='fw-light'>Vườn</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-8'>
                                    <div className="row row-cols-1 px-1 py-1">
                                        <div className='col-sm-12 px-2'>
                                            <img src={item.srcImg2} alt="" width="100%" />
                                        </div>
                                    </div>
                                    <div className='row row-cols-3 px-1 py-1'>
                                        <div className='col-sm-4 px-2'>
                                            <img src={item.srcImg2} alt="" width="100%" />
                                        </div>
                                        <div className='col-sm-4 px-2'>
                                            <img src={item.srcImg3} alt="" width="100%" />
                                        </div>
                                        <div className='col-sm-4 px-2'>
                                            <img src={item.srcImg4} alt="" width="100%" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    )

                })
            }

        </div>

    );
}

export default Typeroom;
