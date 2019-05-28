import React from 'react'

const BookingPage = () => {
    return (

        <div>

            <div className="innerbanner" style={{ background: "url('http://flythemesdemo.net/travern/wp-content/themes/travern-pro/images/inner-banner.jpg') no-repeat scroll center center  background-size:cover" }}>
                <div className="container">
                    <h1 className="innerpage-title">
                        <span>Contact Us</span>
                    </h1>
                    <div id="crumbs"><a href="http://flythemesdemo.net/travern">Home</a> » <span className="current">Contact Us</span></div></div>
            </div>



            <div className="container content-area">
                <div className="middle-align">
                    <div className="site-main sitefull">

                        <article id="post-113" className="post-113 page type-page status-publish hentry">

                            <div className="entry-content">

                                <div className="opalhotel-reservation-container">
                                    <header className="opalhotel-reservation-process-steps">


                                        <ul>

                                            <li className="opalhotel-step active">
                                                <span>1</span>
                                                <h4>Check Availability</h4>
                                            </li>


                                            <li className="opalhotel-step">
                                                <span>2</span>
                                                <h4>Choose Room</h4>
                                            </li>


                                            <li className="opalhotel-step">
                                                <span>3</span>
                                                <h4>Make A Reservation</h4>
                                            </li>


                                            <li className="opalhotel-step">
                                                <span>4</span>
                                                <h4>Confirmation</h4>
                                            </li>

                                        </ul>

                                    </header>

                                    <div className="opalhotel-reservation-step-content">


                                        <div className="opalhotel_form_section">

                                            <form action="http://flythemesdemo.net/travern/opal-hotel-reservation/" method="GET" name="opalhotel_check_availability" className="opalhotel_check_availability opalhotel_datepick_wrap">
                                                <div className="horizontal-form clearfix">
                                                    <header className="heading-form">
                                                        <h3>Book <span>A Room</span></h3>
                                                    </header>
                                                    <div className="form-content">

                                                        <div className="opalhotel-form-field checkin-input">
                                                            <label className="opalhotel-form-lable">Check In</label>
                                                            <div className="opalhotel-form-field-group">
                                                                <i className="fa fa-calendar-o" aria-hidden="true"></i>
                                                                <input className="opalhotel_arrival_date opalhotel-has-datepicker hasDatepicker" name="arrival" placeholder="Arrival Date" data-end="opalhotel-departure-date" value="May 27, 2019" id="dp1558999397247" />
                                                                <input type="hidden" name="arrival_datetime" value="2019-05-27" />
                                                            </div>
                                                        </div>


                                                        <div className="opalhotel-form-field checkout-input">
                                                            <label className="opalhotel-form-lable">Check Out</label>
                                                            <div className="opalhotel-form-field-group">
                                                                <i className="fa fa-calendar-o" aria-hidden="true"></i>
                                                                <input className="opalhotel-departure-date opalhotel-has-datepicker hasDatepicker" name="departure" placeholder="Departure Date" data-start="opalhotel_arrival_date" value="May 28, 2019" id="dp1558999397248" />
                                                                <input type="hidden" name="departure_datetime" value="2019-05-28" />
                                                            </div>
                                                        </div>



                                                        <div className="opalhotel-form-field adults-input">
                                                            <label className="opalhotel-form-lable">Adults</label>
                                                            <div className="opalhotel-form-field-group">
                                                                <div className="opalhotel-select-wrapper">
                                                                    <span className="value"></span>
                                                                    <div className="list-options" tabindex="-1">
                                                                        <div className="filter">
                                                                            <input type="text" placeholder="" />
                                                                        </div>
                                                                        <ul>
                                                                            <li data-value=""></li>
                                                                        </ul>
                                                                    </div>
                                                                    <select className="opalhotel_adult opalhotel-select opalhotel-select" name="adult" id="5cec7164983b6">
                                                                        <option value="1" data-value="">1</option>
                                                                        <option value="2" data-value="">2</option>
                                                                        <option value="3" data-value="">3</option>
                                                                        <option value="4" data-value="">4</option>
                                                                        <option value="5" data-value="">5</option>
                                                                        <option value="6" data-value="">6</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>




                                                        <div className="opalhotel-form-field children-input">
                                                            <label className="opalhotel-form-lable">Children</label>
                                                            <div className="opalhotel-form-field-group">
                                                                <div className="opalhotel-select-wrapper">
                                                                    <span className="value"></span>
                                                                    <div className="list-options" tabindex="-1">
                                                                        <div className="filter"><input type="text" placeholder="" /></div>
                                                                        <ul>
                                                                            <li data-value=""></li>
                                                                        </ul>
                                                                    </div>
                                                                    <select className="opalhotel_children opalhotel-select opalhotel-select" name="child" id="5cec716498d3f">
                                                                        <option value="0" selected="selected" data-value="">0</option>
                                                                        <option value="1" data-value="">1</option>
                                                                        <option value="2" data-value="">2</option>
                                                                        <option value="3" data-value="">3</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>



                                                        <div className="opalhotel-form-field room-type-input">
                                                            <label className="opalhotel-form-lable">Room Type</label>
                                                            <div className="opalhotel-form-field-group">
                                                                <div className="opalhotel-select-wrapper">
                                                                    <span className="value"></span>
                                                                    <div className="list-options" tabindex="-1">
                                                                        <div className="filter"><input type="text" placeholder="" /></div>
                                                                        <ul>
                                                                            <li data-value=""></li>
                                                                        </ul>
                                                                    </div>
                                                                    <select className="opalhotel-select opalhotel-select" name="room_type" id="">
                                                                        <option value="">Select Room Type</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <footer className="opalhotel-form-field button-wrap">
                                                            <input type="hidden" name="step" value="2" />
                                                            <input type="hidden" name="current_page_id" value="113" />
                                                            <button type="submit" className="opalhotel-button-submit button button-theme button-block">Check Availability</button>
                                                        </footer>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>



                                </div>
                            </div>
                        </article>						        </div>
                    <div className="clear"></div>
                </div>
            </div>




        </div>

    )
}

export default BookingPage