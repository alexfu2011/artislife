import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import{ Route } from 'react-router-dom';
import posts from '../data.json';

class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts : posts,
            screen: 'photos' //photos, add photos
        }
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {
        return (
        
        <div>
            <Route exact path="/" render = { () => (
                    <div>
                        <Title title={'Art is life'}/>
                        <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/>
                    </div>
                    
                )} />
        
        </div>
        )
    }
}


export default Main