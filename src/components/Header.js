import React from 'react'


const Header = () => {
    return (

        <div className="header-slider-wrap">
            <div className="top-header">
                <div className="container">
                    <div className="tp-header-left">
                        <ul>
                            <li className="iconadd">4-6 Truong Dinh, District 3, Ho Chi Minh City</li>
                            <li className="iconnum"><a href="tel:+888 888 8888">028 3930 2846</a></li>
                        </ul>
                    </div>
                    <div className="tp-header-right">
                        <div className="social-icons"><a style={{ backgroundColor: '' }} href="#" target="_blank" title="facebook"><i className="fa fa-facebook"></i></a><a style={{ backgroundColor: '' }} href="#" target="_blank" title="google-plus"><i className="fa fa-google-plus"></i></a><a style={{ backgroundColor: '' }} href="#" target="_blank" title="twitter"><i className="fa fa-twitter"></i></a><a style={{ backgroundColor: '' }} href="#" target="_blank" title="instagram"><i className="fa fa-instagram"></i></a><a style={{ backgroundColor: '' }} href="#" target="_blank" title="linkedin"><i className="fa fa-linkedin"></i></a></div>            </div>
                    <div className="clear"></div>
                </div>
            </div>
            <header className="header">
                <div className="container mob-padding">
                    <div className="logo">
                        <a href="honghac.com"><h1>React Demo</h1></a>
                        <p>Welcome to React Demo</p>
                    </div>

                    <div className="toggle">
                        <a className="toggleMenu" href="#" style={{ display: 'none' }}> </a>
                    </div>

                    <div className="head-button">
                        <a href="honghac.com">
                            Book Now                    </a>
                    </div>

                    <div className="sitenav">
                        <div className="menu-main-menu-container"><ul id="menu-main-menu" className="menu"><li id="menu-item-65" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-65"><a href="honghac.com">Home</a></li>
                            <li id="menu-item-77" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-77 has-sub"><span className="submenu-button"></span><a href="#" className="parent">Travern</a>
                                <ul className="sub-menu" style={{ display: 'block' }}>
                                    <li id="menu-item-66" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-66"><a href="honghac.com">About Us</a></li>
                                    <li id="menu-item-72" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-72"><a href="honghac.com">FAQ</a></li>
                                    <li id="menu-item-78" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-78 has-sub"><span className="submenu-button"></span><a href="#" className="parent">Pages</a>
                                        <ul className="sub-menu" style={{ display: 'block' }}>
                                            <li id="menu-item-74" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-74"><a href="honghac.com">Page Left Sidebar</a></li>
                                            <li id="menu-item-76" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-76"><a href="honghac.com">Page Right Sidebar</a></li>
                                            <li id="menu-item-75" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-75"><a href="honghac.com">Page No Sidebar</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-130" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-130"><a href="honghac.com">Our Rooms</a></li>
                            <li id="menu-item-73" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73"><a href="honghac.com">Our Gallery</a></li>
                            <li id="menu-item-67" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-67 has-sub"><span className="submenu-button"></span><a href="honghac.com" className="parent">Blog</a>
                                <ul className="sub-menu" style={{ display: 'block' }}>
                                    <li id="menu-item-69" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-69"><a href="honghac.com">Blog Left Sidebar</a></li>
                                    <li id="menu-item-70" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-70"><a href="honghac.com">Blog No Sidebar</a></li>
                                    <li id="menu-item-68" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-68"><a href="honghac.com">Blog Full Width</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-71" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-71"><a href="honghac.com">Contact Us</a></li>
                        </ul></div>
                    </div>
                    <div className="clear"></div>
                </div>
            </header>

            <div class="slider-main">
                               <div id="slider" class="nivoSlider">
                    <img src="http://flythemesdemo.net/travern/wp-content/themes/travern-pro/images/slides/slider1.jpg" alt="1" class="nivo-overlay" title="#slidecaption1"/><img src="http://flythemesdemo.net/travern/wp-content/themes/travern-pro/images/slides/slider2.jpg" alt="1" class="nivo-overlay" title="#slidecaption2"/><img src="http://flythemesdemo.net/travern/wp-content/themes/travern-pro/images/slides/slider3.jpg" alt="1" class="nivo-overlay" title="#slidecaption3"/>                    </div> 
                    
                                             <div id="slidecaption1" class="nivo-html-caption">                            
                                                      
                                <a href="#"><h2>Welcome to your residence</h2></a>						
                             
                            
                                                      
                                <p>Suspendisse faucibus porttitor elementum. Phasellus eros ex, hendrerit nec mauris eget, auctor fringilla lectus.</p>						
                                                                                                               	                                        
                        </div>
                                             <div id="slidecaption2" class="nivo-html-caption">                            
                                                      
                                <a href="#"><h2>For dream holidays</h2></a>						
                             
                            
                                                      
                                <p>Suspendisse faucibus porttitor elementum. Phasellus eros ex, hendrerit nec mauris eget, auctor fringilla lectus.</p>						
                                                                                                               	                                        
                        </div>
                                             <div id="slidecaption3" class="nivo-html-caption">                            
                                                      
                                <a href="#"><h2>Unpretentiously luxurious</h2></a>						
                             
                            
                                                      
                                <p>Suspendisse faucibus porttitor elementum. Phasellus eros ex, hendrerit nec mauris eget, auctor fringilla lectus.</p>						
                                                                                                               	                                        
                        </div>
                        
                                                      	
        </div>
        </div>

    )
}

export default Header