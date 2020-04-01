import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import "./Movie.css";

function Movie({ year, title, summary, poster, genres}) {
    return (
        <Link to = {{
            pathname: "/movie_detail",
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <div className="movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h3 className="movie__year">{year}</h3>
                    <span className="movie__genres">
                        {genres.map((genres, index) => (
                            <p key={index}>{genres}&nbsp;</p>
                        ))}
                    </span>
                    {/* <ul className="genres">
                {genres.map( (geners, index) => (
                    <li key={index}className="genres__genre">{geners}</li>
                ))}
            </ul> */}
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                </div>
            </div>
        </Link>)
};

Movie.propTypes={
    id: PropTypes.number,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;