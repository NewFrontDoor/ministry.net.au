import React from 'react';

export default () => (
    <footer id="footer">
        <div className="container">
            <div className="row credits">
                <div className="col-md-12">
                    <div className="row social">
                        <div className="col-md-12">
                            <a href="https://www.facebook.com/NewFrontDoorIT" target="_blank" rel="noreferrer noopener" className="facebook">
                                <span className="socialicons ico1"></span>
                                <span className="socialicons_h ico1h"></span>
                            </a>

                            <a href="https://twitter.com/NewFrontDoorIT" target="_blank" rel="noreferrer noopener" className="twitter">
                                <span className="socialicons ico2"></span>
                                <span className="socialicons_h ico2h"></span>
                            </a>

                            <a href="mailto:contactus@newfrontdoor.org" target="_blank" rel="noreferrer noopener" className="email">
                                <i className="glyphicon glyphicon-envelope"></i>
                            </a>

                        </div>
                    </div>
                    <div className="row copyright">
                        <div className="col-md-12">
                            © 2019 <a href="https://newfrontdoor.org/" target="_blank" rel="noreferrer noopener" className="footer-link">New Front Door</a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)