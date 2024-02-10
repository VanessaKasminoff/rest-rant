const React = require('react')

const Default = (html) => {
    return (
        <html>
            <head>
                <title>Rest-RANT</title>
                <link rel='shortcut icon' type='image/jpg' href='/images/favicon.svg' />
                <link rel="stylesheet" 
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
                integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" 
                crossOrigin="anonymous"/>
                <link rel='stylesheet' href='/css/main.css' />
            </head>
            <body>
                <nav id='main-nav'>
                    <a href='/'>
                        <div id='logo-name-container'>
                            <img className='app-logo' src='/images/logo.svg' alt='rest-rant logo'/>
                            <p>Rest-RANT</p>
                        </div>
                    </a>
                    <ul>
                        {/* <li><a href='/'>Rest-RANT</a></li> */}
                        <li><a href='/places'>Places</a></li>
                        <li><a href='/places/new'>Add Place</a></li>
                    </ul>
                </nav>
                <div className='container'>{html.children}</div>
                <footer>
                    <p>Rest-RANT &copy; 2024</p>
                </footer>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" 
                integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" 
                crossOrigin="anonymous"></script>
                <script src='/js/carousel.js'></script>
            </body>
        </html>
    )
}

module.exports = Default