const React = require('react')
const Default = require('./layouts/default.jsx')

const home = () => {
    return (
        <Default>
            <main>
                <h1>Rest-RANT</h1>
                <div>
                    <img src='/images/rest-rant-home.jpg' alt='Hands holding ipad leaving food reviews'/>
                </div>
                <a href='/places'>
                    <button className='btn'>Places Page</button>
                </a>
            </main>
        </Default>
    )
}

module.exports = home