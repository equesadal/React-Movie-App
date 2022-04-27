import React from 'react';

const Movies = (props) => {

    return (
        <div className="row">
            {props.movies.map((movie, index) => (
                <div key={index} className="col-lg-2 card m-4">
                    <img src={movie.Poster} className="w-100 shadow-1-strong rounded mt-4" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{movie.Title}</h5>
                        <p className="card-text">{movie.Year}</p>
                    </div>
                </div>
            ))}
        </div>
    )

};

export default Movies;