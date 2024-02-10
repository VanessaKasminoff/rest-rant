const React = require('react')
const Default = require('./layouts/default.jsx')

const home = () => {
    return (
        <Default>
            <main>
                <div>
                    <img src='/images/rest-rant-home.jpg' alt='Hands holding ipad looking at restaurant reviews'/>
                </div>
                <p>A place where you can rave or rant about restaurants!</p>
            </main>
        </Default>
    )
}

module.exports = home