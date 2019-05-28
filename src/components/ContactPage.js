import React from 'react'

const Contact = () => {
    return (

        <div>
            <div className="innerbanner" style={{ background: "url('http://flythemesdemo.net/travern/wp-content/themes/travern-pro/images/inner-banner.jpg') no-repeat scroll center center",  backgroundSize: 'cover' }}>
                <div className="container">
                    <h1 className="innerpage-title">
                        <span>Contact Us</span>
                    </h1>
                    <div id="crumbs"><a href="http://flythemesdemo.net/travern">Home</a> » <span className="current">Contact Us</span></div></div>
            </div>

        

            <div className="content-area">
                <div className="middle-align">
                    <div className="site-main sitefull">
                        <div className="container">
                            <div className="contact-content">
                                <div className="one_half contact-page-info">
                                    <h2>Get in Touch</h2>
                                    <p>
                                        Etiamex eget lacus malesuada aliquet sit am libero. Ut bibendum accumsan felis, porttitr mauris posuere sit amet.                        </p>
                                    <address>
                                        <strong>Address : </strong>
                                        <p>Fusce nulla tellus, sodales ultricies dictum eget metus. Integer egestas .</p>
                                    </address>
                                    <address>
                                        <strong>Email : </strong>
                                        <p>info@sitename.com</p>
                                    </address>
                                    <address>
                                        <strong>Phone : </strong>
                                        <p>+91 8888-552-8462</p>
                                    </address>
                                    <address>
                                        <strong>Fax : </strong>
                                        <p>+91 8888-552-8462</p>
                                    </address>
                                    <div className="contact-social">
                                        <div className="social-icons"><a style={{ backgroundColor: '' }} href="#" target="_blank" title="facebook"><i className="fa fa-facebook"></i></a><a style={{ backgroundColor: '' }} href="#" target="_blank" title="twitter"><i className="fa fa-twitter"></i></a><a style={{ backgroundColor: '' }} href="#" target="_blank" title="google-plus"><i className="fa fa-google-plus"></i></a><a style={{ backgroundColor: '' }} href="#" target="_blank" title="linkedin"><i className="fa fa-linkedin"></i></a><a style={{ backgroundColor: '' }} href="#" target="_blank" title="pinterest-p"><i className="fa fa-pinterest-p"></i></a></div>                            </div>
                                </div>
                                <div className="one_half last_column">
                                    <div className="main-contactform"><div role="form" className="wpcf7" id="wpcf7-f82-p43-o1" lang="en-US" dir="ltr">
                                        <div className="screen-reader-response"></div>
                                        <form action="/travern/contact-us/#wpcf7-f82-p43-o1" method="post" className="wpcf7-form" novalidate="novalidate">
                                            <div style={{ display: 'none' }}>
                                                <input type="hidden" name="_wpcf7" value="82" />
                                                <input type="hidden" name="_wpcf7_version" value="5.0.4" />
                                                <input type="hidden" name="_wpcf7_locale" value="en_US" />
                                                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f82-p43-o1" />
                                                <input type="hidden" name="_wpcf7_container_post" value="43" />
                                            </div>

                                            <div className="form-group">
                                                <span className="wpcf7-form-control-wrap text-397">
                                                    <input type="text" name="text-397" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="Name" />
                                                </span>
                                            </div>

                                            <div className="form-group">
                                                <span className="wpcf7-form-control-wrap email-902">
                                                    <input type="email" name="email-902" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control" aria-required="true" aria-invalid="false" placeholder="Email Address" />
                                                </span>
                                            </div>

                                            <div className="form-group">
                                                <span className="wpcf7-form-control-wrap textarea-609">
                                                    <textarea name="textarea-609" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Message"></textarea>
                                                </span>
                                            </div>

                                            <div className="form-group"><input type="submit" value="Send Information" className="wpcf7-form-control wpcf7-submit send-btn" />
                                                <span className="ajax-loader"></span>
                                            </div>
                                            <div className="wpcf7-response-output wpcf7-display-none"></div>
                                        </form>
                                    </div>
                                    </div>
                                </div><div className="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="gmap">
                <iframe class="blackmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001351.168689313!2d-78.01305820899049!3d42.72474255564122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew+York%2C+USA!5e0!3m2!1sen!2sin!4v1521096703488" width="98%" height="600" frameborder="0"></iframe>
            </div>

            <div class="clear"></div>
        </div>

    )
}

export default Contact