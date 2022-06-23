import React, { Component } from 'react';
import Supgr1 from '../assets/image/supgr1.jpg'
import Supgr2 from '../assets/image/supgr2.jpg'
import Iconroom from '../assets/image/iconroom.png'
class Typeroom extends Component {
    state = {}
    render() {
        return (

            <nav className='room-primary'>
                <div className='container'>
                    <div className='room-child-info'>
                        <div className='col room-child-content'>
                            <h5 className='display-7 fw-bold'>Superior Double Garden View</h5>
                            <h6><i className="bi bi-check2 lead mb-4"></i>room area:</h6>
                            <h6><i className="bi bi-check2 lead mb-4"></i>View:</h6>
                            <h6><i className="bi bi-check2 lead mb-4"></i>Extra bed:
                            </h6>
                            <h6><i className="bi bi-check2 lead mb-4"></i>Occupancy:</h6>
                            <h6><i className="bi bi-check2 lead mb-4"></i>Bathroom: </h6>
                            <h6><i className="bi bi-check2 lead mb-4"></i>Bed Type:</h6>
                        </div>
                        <div className='room-child-img'>
                            <div className='row px-1 py-0 my-1'>
                                <img src={Supgr1} alt="" />
                            </div>
                            <div className='row px-1 py-0 my-1'>
                                <div className='col'>
                                    <img src={Supgr2} alt="" />
                                </div>
                                <div className='col'>
                                    <img src={Supgr2} alt="" />
                                </div>
                                <div className='col'>
                                    <img src={Supgr2} alt="" />
                                </div>
                                <div className='col'>
                                    <img src={Supgr2} alt="" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='room-child-line'>

                </div>



            </nav>
        );
    }
}

export default Typeroom;
