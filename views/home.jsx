const React = require('react')
const Default = require('./layouts/default.jsx')

const home = () => {
    return (
        <Default>
            <div id='carouselExampleIndicators' className='carousel slide' data-bs-ride='carousel'>
                <div className='carousel-indicators'>
                    <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
                    <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2'></button>
                    <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3'></button>
                </div>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <img src='/images/rest-rant-home.jpg' className='d-block w-100' alt='Hands holding ipad looking at restaurant reviews'/>
                    </div>
                    <div className='carousel-item'>
                        <img src='/images/Otterly-Delightful-Cafe.jpg' className='d-block w-100' alt='Otter cafe'/>
                    </div>
                    <div className='carousel-item'>
                        <img src='/images/Seoul-Grill-&-Chill.jpg' className='d-block w-100' alt='Korean barbecue'/>
                    </div>
                </div>
                <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
            {/* <main> */}
                {/* <p>A place where you can rave or rant about restaurants!</p>
            </main> */}
        </Default>
    )
}

module.exports = home