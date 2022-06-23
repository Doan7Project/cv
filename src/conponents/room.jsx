import React, { Component } from 'react';
import Supgr1 from '../assets/image/supgr1.jpg'
import Supgr2 from '../assets/image/supgr2.jpg'
import Iconroom from '../assets/image/iconroom.png'
class Typeroom extends Component {
    state = {}
    render() {
        return (

            <nav>
                <div className='room-child-line'>

                </div>
                <div className='container'>
                    <div className='room-child-icon'>
                        <h4>Superior Double Garden View</h4>
                    </div>
                    <div className='room-child-info'>
                        <div className='room-child-content'>
                            <h6><i className="bi bi-check2"></i>room area:</h6>
                            <h6><i className="bi bi-check2"></i>View:</h6>
                            <h6><i className="bi bi-check2"></i>Extra bed:
                            </h6>
                            <h6><i className="bi bi-check2"></i>Occupancy:</h6>
                            <h6><i className="bi bi-check2"></i>Bathroom: </h6>
                            <h6><i className="bi bi-check2"></i>Bed Type:</h6>
                        </div>
                        <div className='room-child-img'>
                            <img src={Supgr1} alt="" />
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
