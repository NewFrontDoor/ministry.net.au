import React from 'react';
import NFDLogo from '../../assets/img/Logo.svg';

export default () => (
        <section id="header-img">
                <div className="text-center header-container" style={{ 'backgroundImage': `url('/img/backgrounds/silver.jpg')`, marginTop: "80px" }}>

                        <div className="header-info text-center">
                                <img src={NFDLogo} alt="" className="img img-responsive nfd-logo" />
                        </div>

                </div>
        </section>

)       