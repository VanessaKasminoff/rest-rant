const React = require('react')
const Default = require('../layouts/default.jsx')

const index = ({places}) => {
    return (
        <Default>
                <h1>PLACES INDEX PAGE</h1>
                {places.map((place) => (
                    <div key={place.name} className='places-div'>
                    <h2 key={place.name}>{place.name}</h2>
                    <img src={place.pic} alt={place.name} key={place.name}/>
                    </div>
                ))}
        </Default>
    )
}

module.exports = index