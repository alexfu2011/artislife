import React from 'react';
import PropTypes from 'prop-types';

function Tags(props){
    return <div className='tags'>{ props.tags.map((tag, index) => 
        <span className='tag'>
            <a href={'/tag/'+tag}><i className='fa fa-hashtag' />{tag}</a>
        </span>) }
    </div>
}

Tags.propTypes = {
    tags: PropTypes.array.isRequired
}

export default Tags