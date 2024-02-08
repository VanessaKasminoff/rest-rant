const React = require('react')
const Default = require('./layouts/default.jsx')

const home = () => {
    return (
        <Default>
            <main>
                <h1>HOME</h1>
                <a href='/places'>
                    <button className='btn btn-primary'>Places Page</button>
                </a>
            </main>
        </Default>
    )
}

module.exports = home