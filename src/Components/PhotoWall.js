import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

function PhotoWall(props) {
    return  <div>
                <div className="photoGrid">
                    { props.posts.map((post, index) => <Photo key={index} post={post} />)}
                </div>
            </div>
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired
}

export default PhotoWall
