/* eslint-disable */
import React from 'react';

export default () => (
    <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle pull-right" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a href="/" className="navbar-brand">
                    <span>Ministry.net.au</span>
                </a>
            </div>

            <div className="collapse navbar-collapse navbar-ex1-collapse" role="navigation">
                <ul className="nav navbar-nav navbar-right">


                    <li><a href="https://newfrontdoor.org" target="_blank" rel="noreferrer noopener">New Front Door</a></li>




                    {/*<li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown<b className="caret"></b></a>
                        <ul className="dropdown-menu">
                            <li><a href="/"></a></li>
                        </ul>
                    </li>*/}

                </ul>
            </div>
        </div>
    </div>
)