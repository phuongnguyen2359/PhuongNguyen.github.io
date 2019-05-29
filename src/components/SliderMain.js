import React from 'react'


const SliderMain = () => {

    return (
        <div class="slider-main">
            <div id="slider" class="nivoSlider">
                <img src="http://flythemesdemo.net/travern/wp-content/themes/travern-pro/images/slides/slider1.jpg" alt="1" class="nivo-overlay" title="#slidecaption1" /><img src="http://flythemesdemo.net/travern/wp-content/themes/travern-pro/images/slides/slider2.jpg" alt="1" class="nivo-overlay" title="#slidecaption2" /><img src="http://flythemesdemo.net/travern/wp-content/themes/travern-pro/images/slides/slider3.jpg" alt="1" class="nivo-overlay" title="#slidecaption3" />                    </div>

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

    )
}

export default SliderMain