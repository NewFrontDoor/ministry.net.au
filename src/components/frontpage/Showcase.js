/*eslint-disable */
import React from 'react';
import showcase1 from '../../assets/img/showcase1.png';
import showcase2 from '../../assets/img/showcase2.png';
import showcase3 from '../../assets/img/showcase3.png';

export default () => (
    <div id="showcase">
        <div className="container">
            <div className="section_header">
                {/*<h3></h3>*/}
            </div>
            <div className="row feature_wrapper">
                {/* Features Row */}
                <div className="features_op1_row">
                    {/* Feature */}
                    <div className="col-sm-4 feature first">
                        <div className="img_box">
                            <img alt="" src={showcase1} />
                        </div>
                        <div className="text">
                            <h6>About Us</h6>
                            <p style={{ fontSize: "16px" }}>ministry.net.au is a service of nfd that provides microsites for small churches, ministries, confereneces and other parachurch activities.</p>
                        </div>
                    </div>
                    {/* Feature */}
                    <div className="col-sm-4 feature">
                        <div className="img_box">
                            <a href="/2019Weekend">
                                <img alt="" src={showcase2} />
                                <span className="circle">
                                    <span className="plus">&#43;</span>
                                </span>
                            </a>
                        </div>
                        <div className="text">
                            <h6>2019 Weekend Away</h6>
                            <p style={{ fontSize: "16px" }}>Learn more about this years topic, meet our speakers and check out the program.</p>
                        </div>
                    </div>
                    {/* Feature */}
                    <div className="col-sm-4 feature last">
                        <div className="img_box">
                            <a href="/Register">
                                <img alt="" src={showcase3} />
                                <span className="circle">
                                    <span className="plus">&#43;</span>
                                </span>
                            </a>
                        </div>
                        <div className="text">
                            <h6>Register</h6>
                            <p style={{ fontSize: "16px" }}>Don't miss out - <a href="/Register">register now</a> to secure your spot.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
