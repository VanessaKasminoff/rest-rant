const React = require('react')
const Default = require('../layouts/default.jsx')

const show = ({places}) => {
    let comments = (
        <h3 className='inactive'>No comments yet!</h3>
    )
    
    if (places.comments.length) {
        comments = places.comments.map(c => {
            
            let starCollection = []
            for (let stars = 1; stars <= c.stars; stars++){
                starCollection.push(<img className='star-img' src='/images/star.svg' alt='gold star' />)
                
            }
            
            return (
                <div className='border' key={places.id}>
                    <div className='author-container'>
                        <img className='circle-user-img' src='/images/circle-user.svg' alt='circle user profile'/>
                        <h3>{c.author}</h3>
                    </div>
                    <div className='rant-stars-div'>
                        <div className="starContainer">{starCollection}</div>
                        <p className='rant'>{c.rant ? 'Rant! >:(' : 'Rave! :D'}</p>
                    </div>
                    <p>{c.content}</p>
                </div>
            )
        })
    }

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
                        <p><i>Located in {places.city}, {places.country}</i></p>
                    </div>
                    <div className='col'>
                        <h1>{places.name}</h1>
                        <div className='show-desc-container'>
                            <p>{cuisinesBadges}</p>
                            <h2>Rating</h2>
                            <p>Not Rated</p>
                            <h2>Description</h2>
                            <p>{places.showEstablished()}</p>
                            <div id='show-buttons-container'>
                                <a href={`/places/${places.id}/edit`} className='btn edit-button' id='edit-button'>Edit</a>
                                <form id='submit-form' action={`/places/${places.id}?_method=DELETE`} method='POST'>
                                    <button type='submit' className='btn'>Delete</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='comments-header'>Comments</h2>
                {comments}
            </main>
        </Default>
    )
}

module.exports = show