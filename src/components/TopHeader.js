import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { createUser, getUser } from '../mockData/config'
import { get } from 'http';

const TopHeader = () => {
    const [user, setUser] = useState('Travern')

    useEffect(() => {
        getUser().then(item => {
            const data = item.data()

            setUser(data)
    }, [])
})

    return (

        <div>

            <div className="top-header">
                <div className="container">
                    <div className="tp-header-left">
                        <ul>
                            <li className="iconadd" >127, Lorem ipsum, Dolor sit amet</li>
                            <li className="iconnum"><a href="tel:+888 888 8888">+888 888 8888</a></li>
                        </ul>
                    </div>
                    <div className="tp-header-right">
                        <div className="social-icons"><a style={{backgroundColor:''}} href="#" target="_blank" title="facebook"><i className="fa fa-facebook"></i></a><a style={{backgroundColor:''}} href="#" target="_blank" title="google-plus"><i className="fa fa-google-plus"></i></a><a style={{backgroundColor:''}} href="#" target="_blank" title="twitter"><i className="fa fa-twitter"></i></a><a style={{backgroundColor:''}} href="#" target="_blank" title="instagram"><i className="fa fa-instagram"></i></a><a style={{backgroundColor:''}} href="#" target="_blank" title="linkedin"><i className="fa fa-linkedin"></i></a></div>            </div>
                    <div className="clear"></div>
                </div>

            </div>


            <header className="header">
                <div className="container mob-padding">
                    <div className="logo">
                        <a href="http://flythemesdemo.net/travern/"><h1>{user.first}</h1></a>
                        <p>Travel WordPress Theme</p>
                    </div>

                    <div className="toggle">
                        <a className="toggleMenu" href="#" style={{display: 'none'}}> </a>
                    </div>

                    <div className="head-button">
                        <a onClick={createUser} >
                            Book Now                    </a>
                    </div>

                    <div className="sitenav">
                        <div className="menu-main-menu-container"><ul id="menu-main-menu" className="menu"><li id="menu-item-65" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-65"><a href='/home/'>Home</a></li>
                            <li id="menu-item-77" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-77 has-sub"><span className="submenu-button"></span><a href="#" className="parent">Travern</a>
                                <ul className="sub-menu" style={{display: 'block'}}>
                                    <li id="menu-item-66" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-66"><Link to="/about/">About Us</Link></li>
                                    <li id="menu-item-72" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-72"><a href="http://flythemesdemo.net/travern/faq/">FAQ</a></li>
                                    <li id="menu-item-78" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-78 has-sub"><span className="submenu-button"></span><a href="#" className="parent">Pages</a>
                                        <ul className="sub-menu" style={{display: 'block'}}>
                                            <li id="menu-item-74" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-74"><a href="http://flythemesdemo.net/travern/page-left-sidebar/">Page Left Sidebar</a></li>
                                            <li id="menu-item-76" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-76"><a href="http://flythemesdemo.net/travern/page-right-sidebar/">Page Right Sidebar</a></li>
                                            <li id="menu-item-75" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-75"><a href="http://flythemesdemo.net/travern/page-no-sidebar/">Page No Sidebar</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-130" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-130"><Link to="/rooms/">Our Rooms</Link></li>
                            <li id="menu-item-73" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73"><Link to="/gallery/">Our Gallery</Link></li>
                            <li id="menu-item-67" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-67 has-sub"><span className="submenu-button"></span><Link to="/blogs/">Blogs</Link>
                                <ul className="sub-menu" style={{display: 'block'}}>
                                    <li id="menu-item-69" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-69"><a href="http://flythemesdemo.net/travern/blog-left-sidebar/">Blog Left Sidebar</a></li>
                                    <li id="menu-item-70" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-70"><a href="http://flythemesdemo.net/travern/blog-no-sidebar/">Blog No Sidebar</a></li>
                                    <li id="menu-item-68" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-68"><a href="http://flythemesdemo.net/travern/blog-full-width/">Blog Full Width</a></li>
                                </ul>
                            </li>
                            <li id="menu-item-71" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-71"><Link to="/contact/">Contact Us</Link></li>
                        </ul></div>
                    </div>
                    <div className="clear"></div>
                </div>
            </header>



        </div>

    )
}

export default TopHeader