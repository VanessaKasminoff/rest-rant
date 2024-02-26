const React = require('react')
const Default = require('../layouts/default.jsx')

const show = ({places}) => {
    let comments = (
        <h4 className='inactive'>No comments yet. Be the first to comment!</h4>
    )
    
    if (places.comments.length > 0) {
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
                <h2 className='comments-header'>Add a Comment</h2>
                <div id='comment-form-container'>
                    <form action={`/places/${places.id}/comments`} method='POST'>
                        <div className='form-group stars'>
                                <input type="radio" id="star5" name="stars" value="5" />
                                <label htmlFor="star5" title="text">5 stars</label>
                                <input type="radio" id="star4" name="stars" value="4" />
                                <label htmlFor="star4" title="text">4 stars</label>
                                <input type="radio" id="star3" name="stars" value="3" />
                                <label htmlFor="star3" title="text">3 stars</label>
                                <input type="radio" id="star2" name="stars" value="2" />
                                <label htmlFor="star2" title="text">2 stars</label>
                                <input type="radio" id="star1" name="stars" value="1" />
                                <label htmlFor="star1" title="text">1 star</label>
                            </div>
                        <div className='form-row'>
                            <div className='form-group col-md-6'>
                                <div className='form-check'>
                                    <input type='checkbox' name='rant' id='rant' className='form-check-input'/>
                                    <label htmlFor='rant' className='form-check-label'>Rant</label>
                                </div>
                            </div>
                            <div className='form-group col-md-4'>
                                <label htmlFor='author'>Author</label>
                                <input type='text' name='author' id='author' className='form-control' />
                            </div>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='content'>Content</label>
                            <input type='text' name='content' id='content' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <button type='submit' className='btn comment-submit-button'>Submit Comment</button>
                        </div>
                    </form>
                </div>
            </main>
        </Default>
    )
}

module.exports = show