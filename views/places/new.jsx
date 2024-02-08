const React = require('react')
const Default = require('../layouts/default.jsx')

const New = () => {
    return (
        <Default>
            <main>
                <h1>Add a New Place</h1>
                <form action="/places" method="POST">
                    <div>
                        <label htmlFor="name">Place Name</label>
                        <input id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="pic">Place Picture</label>
                        <input id="pic" name="pic" />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input id="city" name="city" />
                    </div>
                    <div>
                        <label htmlFor="country">Country</label>
                        <input id="country" name="country" />
                    </div>
                    <div>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input id="cuisines" name="cuisines" required />
                    </div>
                    <input type="submit" value="Add Place" />
                </form>
            </main>
        </Default>
    )
}

module.exports = New