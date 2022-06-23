import React, { Component } from 'react'
import Iconroom from '../assets/image/iconroom.png'
function Introroom() {
    return (

        <nav>
            <div className="px-4 py-5 my-5 text-center">
                <img className="d-block mx-auto mb-4" src={Iconroom} alt="" width="72" height="57" />
                <h1 className="display-5 fw-bold">Centered hero</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                </div>
            </div>
        </nav>
    );
}

export default Introroom;