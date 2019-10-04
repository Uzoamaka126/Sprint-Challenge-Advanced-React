import React from 'react';

 const SinglePlayer = (props) => {
     console.log(props);
     const { key, name, country, searches } = props;
    return (
        <div className="single-player-card">
            <p>Heyy! I am {name}</p>
            <p>I play for {country}</p>
            <p>I have been searched for {searches} times</p>
        </div>
    )
}

export default SinglePlayer;