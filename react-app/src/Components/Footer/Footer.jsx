import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="bg-primary d-flex justify-content-between fw-bold text-white p-3 mt-5" >
                <div>
                    &copy;
                    <span> {new Date().getFullYear()}</span>
                    <span>Athletic_Attire</span>
                    <p>Stay Connected <br></br><span>FaceBook,Instagram</span></p>

                </div>
                <div>

                    <a href="http://www.AthleticAttire.in" target={'_blank'} className='list-group-item list-group-item-action'>www.AthleticAttire.in</a>
                </div>
            </div>

        </>
    )
}

export default Footer;