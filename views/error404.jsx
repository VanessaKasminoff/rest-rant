const React = require('react')
const Default = require('./layouts/default.jsx')

const error404 = () => {
    return (
        <Default>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops! Sorry, we can't find this page!</p>
            </main>
        </Default>
    )
}

module.exports = error404