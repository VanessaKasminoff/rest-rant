const React = require('react')

const Default = (html) => {
    return (
        <html>
            <head>
                <title>Rest-RANT</title>
            </head>
            <body>
                <div className='container'>{html.children}</div>
            </body>
        </html>
    )
}

module.exports = Default