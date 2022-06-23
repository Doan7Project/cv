import React, { Component } from 'react';
import Supgr1 from '../assets/image/supgr1.jpg'
import Supgr2 from '../assets/image/supgr2.jpg'
class Typeroom extends Component {
    state = {}
    render() {
        return (

            <nav>
                <div className='room-child-line'>

                </div>
                <div className='container'>
                    <div className='row row-cols-1 row-cols-md-2 mb-2 text-center'>
                        <div className='col child-img'>
                            <img src={Supgr1} alt="" />
                        </div>
                        <div className='col child-img'>
                            <img src={Supgr2} alt="" />
                        </div>
                    </div>
                </div>
                <div className='room-child-line'>

                </div>

                {/* <div className='row row-cols-1 row-cols-md-2 mb-2 text-center'>
                              <div className='col child-information'>
                    <h4>Superior Double Garden View</h4>
                </div>
                <div className='col child-img'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eligendi molestiae quas, repellat in optio quibusdam inventore eum. Aperiam veritatis quo sit libero voluptas reiciendis excepturi esse doloremque sed adipisci.</p>
                </div>
                </div> */}

            </nav>
        );
    }
}

export default Typeroom;
