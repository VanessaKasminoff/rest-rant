const React = require('react')
const Default = require('./layouts/default.jsx')
const Carousel = require('react-bootstrap/Carousel')

const home = () => {
    return (
        <Default>
            {/* <main> */}
                <Carousel>
                    <Carousel.Item>
                        <img src='/images/rest-rant-home.jpg' alt='Hands holding ipad looking at restaurant reviews'/>
                        <Carousel.Caption>
                            <p>Slide 1</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='/images/Otterly-Delightful-Cafe.jpg' alt='Otter cafe'/>
                        <Carousel.Caption>
                            <p>Slide 2</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='/images/Seoul-Grill-&-Chill.jpg' alt='Korean barbecue'/>
                        <Carousel.Caption>
                            <p>Slide 3</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {/* <p>A place where you can rave or rant about restaurants!</p>
            </main> */}
        </Default>
    )
}

module.exports = home