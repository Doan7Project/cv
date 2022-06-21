import React, { Component } from 'react'
import logo from './'
function Header() {
    return (
        <header className='container'>
            <div>
              <img src="" alt="" />
            </div>
            <div className='nameIcon'>
                <h4>PHAM ANH DOAN</h4>
                <div>
                    <i className="bi bi-envelope"></i><span>doanphambn@gmail.com</span>
                </div>
                <div>
                    <i className="bi bi-phone-vibrate"></i><span>0981 137 177</span>
                </div>
                <div>
                    <i className="bi bi-calendar-range"></i><span>08/11/1987</span>
                </div>
                <div>
                    <i className="bi bi-geo-alt"></i><span>80 Phan Văn Trị, Phường 2, Quận 5, TPCHM</span>
                </div>
            </div>
        </header>
    );
}

export default Header;