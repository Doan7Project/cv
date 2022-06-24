import React, { Component } from 'react';
import Supgr1 from '../assets/image/supgr1.jpg'
import Supgr2 from '../assets/image/supgr2.jpg'
import Iconroom from '../assets/image/iconroom.png'
import Area from '../assets/image/area.png'
import Capacity from '../assets/image/capacity.png'
import Bed from '../assets/image/double-bed.png'
import Visibility from '../assets/image/visibility.png'
class Typeroom extends Component {
    state = {}
    render() {
        return (

            <nav className='container room-primary shadow p-3 mb-5 bg-body rounded'>
                <div className="row px-0 py-2 my-0">
                    <div className='col-sm-4 py-0 text-center'>
                        <p className='display-6 fw-bold'>Superior Garden View</p>
                        <p className='display-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id explicabo aliquid, dignissimos accusamus, nobis consequatur quae facere culpa soluta reprehenderit illum odio nisi dolores totam quidem, necessitatibus molestias placeat provident.</p>
                        <div className='row'>
                            <div className='col-sm-3 py-2 px-2'>
                                <img src={Area} alt="" width="30" height="30" />
                                <p className='fw-bold py-2'>Diện Tích
                                    <br/><span className='fw-light'>27m2</span></p>
                            </div>
                            <div className='col-sm-3 py-2 px-2'>
                                <img src={Bed} alt="" width="30" height="30" />
                                <p className='fw-bold py-2'>Giường
                                    <br/><span className='fw-light'>King</span></p>
                            </div>
                            <div className='col-sm-3 py-2 px-2'>
                                <img src={Capacity} alt="" width="30" height="30" />
                                <p className='fw-bold py-2'>Sức Chứa
                                    <br/><span className='fw-light'>2</span></p>
                            </div>
                            <div className='col-sm-3 py-2 px-2'>
                                <img src={Visibility} alt="" width="30" height="30" />
                                <p className='fw-bold py-2'>Hướng
                                    <br/><span className='fw-light'>Sân Vườn</span></p>
                               </div>
                        </div>
                    </div>
                    <div className='col-sm-8'>
                        <img src={Supgr1} alt="" width="100%" />
                    </div>

                </div>
                <div className='row'>
                    <div className='col-sm-4 py-2 px-2'>
                        <img src={Supgr1} alt="" width="100%" />
                    </div>
                    <div className='col-sm-4 py-2 px-2'>
                        <img src={Supgr1} alt="" width="100%" />
                    </div>
                    <div className='col-sm-4 py-2 px-2'>
                        <img src={Supgr1} alt="" width="100%" />
                    </div>
                </div>
            </nav>
        );
    }
}

export default Typeroom;
