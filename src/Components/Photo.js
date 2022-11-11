import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';
import Tags from './Tags';
import Like from './Like';

function Photo(props) {
    const post = props.post
    return <figure className={post.isWide ? 'wide-figure' : 'figure'}>
        <img className='photo' src={post.imageLink} alt={post.description}></img>
        <figcaption>
            <p>{post.description}
                <Tags tags={post.tags} />
                <div className='btn-group'>
                    <Like />
                </div>
            </p>
        </figcaption>
    </figure>
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Photo