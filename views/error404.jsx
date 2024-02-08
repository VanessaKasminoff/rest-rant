const React = require('react')
const Default = require('./layouts/default.jsx')

const error404 = () => {
    return (
        <Default>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p className='p-404'>*sniff* *sniff*</p>
                <img src='https://images.unsplash.com/photo-1582902412163-ea8eeb98b623?q=80&w=1304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Dog looking closely to screen' />
                <p>Photo by <a href="https://unsplash.com/@indrajeetwashere?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Indrajeet Choudhary</a> on <a href="https://unsplash.com/photos/brown-short-coated-dog-on-brown-dried-leaves-fOEX_2JLmBI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p>
                <p className='p-404'>Looks like the page you wanted is not here!</p>
            </main>
        </Default>
    )
}

module.exports = error404