import React from 'react';
import PropTypes from 'prop-types';
//anchor tag, href attribute

function Photo(props) {
    const post = props.post
        return <figure className={post.isWide ? 'wide-figure' : 'figure'}>
            <img className="photo" src={post.imageLink} alt={post.description}></img>
            <figcaption><p> {post.description} </p></figcaption>
        </figure>
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Photo