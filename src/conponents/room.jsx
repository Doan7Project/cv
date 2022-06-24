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

        { id: 1, title: 'Superior Garden View', decrip: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid a neque ab, recusandae eum, nostrum, enim iste accusamus odio quas asperiores officiis fugiat. Tempora perspiciatis saepe impedit tempore aliquid', area: '24m2', bed: 'Double', bed2: 'Twin', bed3: '', bed4: '', capacity: '2', View: 'Vuon', areaimg: Area, capacityimg: Capacity, bedimg: Bed, visibilityimg: Visibility, srcImg1: Supgr3, srcImg2: Supgr1, srcImg3: Supgr1, srcImg4: Supgr1 },
        { id: 2, title: 'Superior Pool View', decrip: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid a neque ab, recusandae eum, nostrum, enim iste accusamus odio quas asperiores officiis fugiat. Tempora perspiciatis saepe impedit tempore aliquid', area: '24m2', bed: 'Double', bed2: 'Twin', bed3: '', bed4: '', capacity: '2', View: 'Hồ Bơi', areaimg: Area, capacityimg: Capacity, bedimg: Bed, visibilityimg: Visibility, srcImg1: Supgr3, srcImg2: Supgr1, srcImg3: Supgr1, srcImg4: Supgr1 },
        { id: 3, title: 'Deluxe Garden View', decrip: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid a neque ab, recusandae eum, nostrum, enim iste accusamus odio quas asperiores officiis fugiat. Tempora perspiciatis saepe impedit tempore aliquid', area: '24m2', bed: 'Double', bed2: 'Twin', bed3: 'Triple', bed4: 'Family', capacity: '4', View: 'Vuon', areaimg: Area, capacityimg: Capacity, bedimg: Bed, visibilityimg: Visibility, srcImg1: Supgr3, srcImg2: Supgr1, srcImg3: Supgr1, srcImg4: Supgr1 },
        { id: 4, title: 'Bungalow Garden View', decrip: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid a neque ab, recusandae eum, nostrum, enim iste accusamus odio quas asperiores officiis fugiat. Tempora perspiciatis saepe impedit tempore aliquid', area: '24m2', bed: 'Double', bed2: 'Twin', bed3: 'Triple', bed4: '', capacity: '3', View: 'Vuon', areaimg: Area, capacityimg: Capacity, bedimg: Bed, visibilityimg: Visibility, srcImg1: Supgr3, srcImg2: Supgr1, srcImg3: Supgr1, srcImg4: Supgr1 },
        { id: 5, title: 'Bungalow Garden View', decrip: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid a neque ab, recusandae eum, nostrum, enim iste accusamus odio quas asperiores officiis fugiat. Tempora perspiciatis saepe impedit tempore aliquid', area: '24m2', bed: 'Double', bed2: 'Twin', bed3: 'Triple', bed4: '', capacity: '3', View: 'Biển', areaimg: Area, capacityimg: Capacity, bedimg: Bed, visibilityimg: Visibility, srcImg1: Supgr3, srcImg2: Supgr1, srcImg3: Supgr1, srcImg4: Supgr1 },
    ]
    return (
        <div >
            {
                data.map((item, index) => {
                    return (
                        <div className='container room-primary shadow p-3 mb-5 bg-body rounded' key={index} >
                            <div className="row">
                                <div className='room-decrip col-lg-4 py-0 px-3'>
                                    <div className='room-child-roomname'>
                                        <span className='fs-3 fw-bold  text-center'>{item.title}</span>
                                    </div>

                                    <p className='fs-5 py-4'>{item.decrip}</p>
                                    <div className='row row-cols-4 text-center py-2'>
                                        <div className='col-sm-3 py-0 px-2'>
                                            <img src={item.areaimg} alt="" width="30" height="30" />
                                            <p className='fw-bold py-2'>Diện Tích
                                                <br /><span className='fw-light'>{item.area}</span></p>
                                        </div>
                                        <div className='col-sm-3 py-0 px-2'>
                                            <img src={item.bedimg} alt="" width="30" height="30" />
                                            <p className='fw-bold py-2'>Giường
                                                <br /><span className='fw-light'>{item.bed}</span>
                                                <br /><span className='fw-light'>{item.bed2}</span>
                                                <br /><span className='fw-light'>{item.bed3}</span>
                                                <br /><span className='fw-light'>{item.bed4}</span></p>
                                        </div>
                                        <div className='col-sm-3 py-0 px-2'>
                                            <img src={item.capacityimg} alt="" width="30" height="30" />
                                            <p className='fw-bold py-2'>Sức Chứa
                                                <br /><span className='fw-light'>{item.capacity}</span></p>
                                        </div>
                                        <div className='col-sm-3 py-0 px-2'>
                                            <img src={item.visibilityimg} alt="" width="30" height="30" />
                                            <p className='fw-bold py-2'>Hướng
                                                <br /><span className='fw-light'>{item.View}</span></p>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-lg-8'>
                                    <div className="room-child-room row row-cols-1 px-1 py-0">
                                        <div className='col-sm-12 px-2'>
                                            <img src={item.srcImg2} alt="" width="100%" />

                                        </div>
                                    </div>
                                    <div className='row row-cols-3 px-1 py-3 '>
                                        <div className='col-sm-4 px-2 rounded-3'>
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
