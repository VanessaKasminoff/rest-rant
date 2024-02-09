const React = require('react')
const Default = require('../layouts/default.jsx')

const index = ({places}) => {
    return (
        <Default>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className='row'>
                    {places.map((place, index) => (
                        <div key={place.name} className='col-sm-6'>
                        <h2 key={place.name}>
                            <a className='index-links' href={`/places/${index}`}>{place.name}</a>
                        </h2>
                        <p key={place.name}>{place.cuisines}</p>
                        <img src={place.pic} alt={place.name} key={place.name}/>
                        <p key={place.name}>Located in {place.city}, {place.country}</p>
                        </div>
                    ))}
                </div>
            </main>
        </Default>
    )
}

module.exports = index