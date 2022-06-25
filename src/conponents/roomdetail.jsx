import React, { Component } from 'react'
import Area from '../assets/image/area.png'
import Capacity from '../assets/image/capacity.png'
import Bed from '../assets/image/double-bed.png'
import Visibility from '../assets/image/visibility.png'
import Supbed1 from '../assets/image/supbed1.jpg'
import Supbed2 from '../assets/image/supbed2.jpg'
import Supbed3 from '../assets/image/supbed3.jpg'
import Supbed4 from '../assets/image/supbed4.jpg'
import Supbed5 from '../assets/image/supbed5.jpg'
import Supbed6 from '../assets/image/supbed6.jpg'

function RoomDetail() {
    return (

        <div className='container shadow p-4 bg-body rounded'>
            <div className='row row-cols-1'>
                <div className='col-md-4 p-1'>
                    <img className='bg-body rounded' src={Supbed1} alt="" width="100%" />
                </div>
                <div className='col-md-4 p-1'>
                    <img className='bg-body rounded' src={Supbed2} alt="" width="100%" />
                </div>
                <div className='col-md-4 p-1'>
                    <img className='bg-body rounded' src={Supbed3} alt="" width="100%" />
                </div>
            </div>
            <div className='row  m-4 shadow p-4 bg-body rounded'>
                <div className='col-md-6 text-center p-2'>
                    <h3 className='fs-5 fw-bold'>SUPERIOR DOUBLE ROOM</h3>
                    <p className='fs-6 py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet magnam error sint doloribus quia quod ex soluta modi omnis numquam sapiente, libero minus rem? Hic error vero non distinctio. Odio.</p>
                </div>
                <div className='col-md-6 text-center p-2'>
                    <h3 className='fs-5 fw-bold'>SUPERIOR DOUBLE ROOM</h3>
                    <div className='row row-cols-2 py-2'>
                        <div className="col-lg-3 p-2">
                            <img src={Area} alt="" width="30" height="30" />
                            <br />
                            <span className='fw-bolder py-2 fs-5'>Area</span>
                            <br />
                            <span>24m2</span>
                        </div>
                        <div className="col-lg-3 p-2">
                            <img src={Bed} alt="" width="30" height="30" />
                            <br />
                            <span className='fw-bolder py-2 fs-5'>Bed</span>
                            <br />
                            <span>Double</span>
                            <br />
                            <span>Twin</span>
                        </div>
                        <div className="col-lg-3 p-2">
                            <img src={Capacity} alt="" width="30" height="30" />
                            <br />
                            <span className='fw-bolder py-2 fs-5'>Capacity</span>
                            <br />
                            <span>2</span>
                        </div>
                        <div className="col-lg-3 p-2">
                            <img src={Visibility} alt="" width="30" height="30" />
                            <br />
                            <span className='fw-bolder py-2 fs-5'>View</span>
                            <br />
                            <span>Garden</span>
                            <br />
                            <span>Pool</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='row row row-cols-1'>
                <div className='col-md-4 p-1'>
                    <img className='bg-body rounded' src={Supbed4} alt="" width="100%" />
                </div>
                <div className='col-md-4 p-1'>
                    <img className='bg-body rounded' src={Supbed5} alt="" width="100%" />
                </div>
                <div className='col-md-4 p-1'>
                    <img className='bg-body rounded' src={Supbed6} alt="" width="100%" />
                </div>
            </div>


        </div>


    );
}

export default RoomDetail;