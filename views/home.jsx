const React = require('react')
const Default = require('./layouts/default.jsx')

function home() {
    return (
        <Default>
            <main>
                <h1>HOME</h1>
            </main>
        </Default>
    )
}

module.exports = home