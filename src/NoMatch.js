import React from 'react'

function NoMatch() {
    const makeStyles = {
        backgroundColor: 'gray',
        color: 'white',
        marginTop: '50px',
    }
    return (
        <div>
            <h1 style={ makeStyles }>404 - Page Not Found!</h1>
        </div>
    )
}

export default NoMatch
