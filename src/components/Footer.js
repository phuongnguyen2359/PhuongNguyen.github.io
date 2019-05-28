import React from 'react'


const Footer = () => {
    return (

        <div id="footer-wrapper">
            <div className="container">

                <div className="cols-3 widget-column">
                    <h5>About</h5>
                    <div className="textwidget">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan vehicula lacus. Praesent aliquet efficitur quam.</p>
                        <div className="contactdetail">
                            <p><i className="fa fa-map-marker"></i>Fusce nulla tellus, sodales ultricies dictum eget metus. Integer egestas .</p>

                            <p><i className="fa fa-envelope"></i> <a href="mailto:info@sitename.com">info@sitename.com</a></p>

                            <p><i className="fa fa-phone"></i> +91 8888-552-8462</p>

                        </div>
                    </div>
                </div>
                <div className="cols-3 widget-column">
                    <h5>Useful Links</h5>
                    <div className="menu-footer-menu-container"><ul id="menu-footer-menu" className="menu"><li id="menu-item-131" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-131"><a href="">Home</a></li>
                        <li id="menu-item-132" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-132"><a href="">About Us</a></li>
                        <li id="menu-item-135" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-135"><a href="">Our Rooms</a></li>
                        <li id="menu-item-134" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-134"><a href="">Our Gallery</a></li>
                        <li id="menu-item-136" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-136"><a href="">Blog</a></li>
                        <li id="menu-item-133" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-133"><a href="">Contact Us</a></li>
                    </ul></div>
                </div>
                <div className="cols-3 widget-column">
                    <h5>Newsletter</h5>
                    <div role="form" className="wpcf7" id="wpcf7-f109-o1" lang="en-US" dir="ltr">
                        <div className="screen-reader-response"></div>
                        <form action="/travern/#wpcf7-f109-o1" method="post" className="wpcf7-form" novalidate="novalidate">
                            <div style={{display: 'none'}}>
                                <input type="hidden" name="_wpcf7" value="109" />
                                <input type="hidden" name="_wpcf7_version" value="5.0.4" />
                                <input type="hidden" name="_wpcf7_locale" value="en_US" />
                                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f109-o1" />
                                <input type="hidden" name="_wpcf7_container_post" value="0" />
                            </div>
                            <div className="newsletter"><span className="wpcf7-form-control-wrap nemail">
                                <input type="email" name="nemail" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email Address" /></span><button type="submit" className="btn btn-large btn-primary"><i className="fa fa-paper-plane"></i></button></div>
                            <div className="wpcf7-response-output wpcf7-display-none"></div></form></div>
                    <h5>Follow Us</h5>
                    <div className="social-icons"><a style={{backgroundColor:''}} href="#" target="_blank" title="facebook"><i className="fa fa-facebook"></i></a><a style={{backgroundColor:''}} href="#" target="_blank" title="twitter"><i className="fa fa-twitter"></i></a><a style={{backgroundColor:''}} href="#" target="_blank" title="google-plus"><i className="fa fa-google-plus"></i></a><a style={{backgroundColor:''}} href="#" target="_blank" title="linkedin"><i className="fa fa-linkedin"></i></a><a style={{backgroundColor:''}} href="#" target="_blank" title="pinterest-p"><i className="fa fa-pinterest-p"></i></a></div>			</div>
                <div className="clear"></div>
            </div>

            <div className="copyright-wrapper">
                <div className="container">
                    <div className="copyright-txt">Copyright © 2019 <a href="#">NtxZen IT Solutions</a>.</div>
                    <div className="designby">Design By <a href="" target="_blank">NtxZen IT Solutions</a></div>
                    <div className="clear"></div>
                </div>
            </div>

        </div>




    )
}

export default Footer