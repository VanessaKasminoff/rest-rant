const React = require('react')
const Default = require('../layouts/default.jsx')

const show = ({places, id}) => {
    const cuisinesBadges = places.cuisines.split(',').map((cuisine) => {
        return (
            <span key={cuisine} className='badge badge-pill'>{cuisine}</span>
        )
    })
    return (
        <Default>
            <main className='container'>
                <div className='row align-items-start'>
                    <div className='col'>
                        <img src={places.pic} alt={places.name} />
                    </div>
                    <div className='col'>
                        <h1>{places.name}</h1>
                        <p>{places.city}, {places.country}</p>
                        <p>{cuisinesBadges}</p>
                    </div>
                </div>
                <div className='row align-items-center'>
                    <div className='col'>
                        <a href={`/places/${id}/edit`} className='btn'>Edit</a>
                        <form action={`/places/${id}?_method=DELETE`} method='POST'>
                            <button type='submit' className='btn'>Delete</button>
                        </form>
                    </div>
                </div>
            </main>
        </Default>
    )
}

module.exports = show