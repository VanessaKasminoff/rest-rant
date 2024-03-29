const React = require('react')
const Default = require('../layouts/default.jsx')

const New = (data) => {
    let message = ''
    if (data.message) {
        message = (
            <h4 className='alert alert-danger'>{data.message}</h4>
        )
    }
    return (
        <Default>
            <main>
                <h1>Add a New Place</h1>
                {message}
                <form action="/places" method="POST">
                    <div className='form-group'>
                        <label htmlFor="name">Place Name<span style={{color: 'red'}}>*</span></label>
                        <input className='form-control' id="name" name="name" required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="pic">Place Picture</label>
                        <input className='form-control' id="pic" name="pic" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="city">City</label>
                        <input className='form-control' id="city" name="city" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="country">Country</label>
                        <input className='form-control' id="country" name="country" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="cuisines">Cuisines<span style={{color: 'red'}}>*</span></label>
                        <input className='form-control' id="cuisines" name="cuisines" required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='founded'>Founded Year</label>
                        <input className='form-control' type='number' id='founded' name='founded' defaultValue={new Date().getFullYear()} />
                    </div>
                    <p className='p-form'><i>*Required</i></p>
                    <input className='btn' type="submit" value="Add Place" />
                </form>
            </main>
        </Default>
    )
}

module.exports = New