import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import{ Route } from 'react-router-dom';

class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts : [
                {
                        id: "1668061784822-d73efb4e3fd4",
                        description: "周子正作品",
                        imageLink: "https://images.unsplash.com/photo-1668061784822-d73efb4e3fd4"
                },
                {
                        id: "1668061784824-41a85d6e446b",
                        description: "金华文化馆开展",
                        imageLink: "https://images.unsplash.com/photo-1668061784824-41a85d6e446b"
                },
                {
                        id: "1668061784826-3642ba5829ab",
                        description: "篮球比赛",
                        imageLink: "https://images.unsplash.com/photo-1668061784826-3642ba5829ab"
                },
                {
                        id: "8",
                        description: "篮球比赛",
                        imageLink: "https://images.unsplash.com/photo-1668061953100-4a87c8d41ca1"
                },
                {
                        id: "1668061949557-088dea921497",
                        description: "Ball is life",
                        imageLink: "https://images.unsplash.com/photo-1668061949557-088dea921497"
                },
                {
                        id: "1668059859129-b279e1baacda",
                        description: "艺趣下午茶·波利作品",
                        isWide: true,
                        imageLink: "https://images.unsplash.com/photo-1668059859129-b279e1baacda"
                },
                {
                        id: "1668062764032-45c0bead16cc",
                        description: "艺趣下午茶·蒋滢莎作品",
                        imageLink: "https://images.unsplash.com/photo-1668062764032-45c0bead16cc"
                },
                {
                        id: "1667547006740-df1c30b39f91",
                        description: "忙碌",
                        isWide: true,
                        imageLink: "https://images.unsplash.com/photo-1667547006740-df1c30b39f91"
                },
                {
                        id: "1667546744127-d047dc392e9c",
                        description: "梅鹤雅集",
                        imageLink: "https://images.unsplash.com/photo-1667546744127-d047dc392e9c"
                },
                {
                        id: "1667547676256-f4edbacd5589",
                        description: "咖啡",
                        imageLink: "https://images.unsplash.com/photo-1667547676256-f4edbacd5589"
                },
                {
                        id: "1667547006738-75e7b88a5277",
                        description: "路灯",
                        imageLink: "https://images.unsplash.com/photo-1667547006738-75e7b88a5277"
                },
                {
                        id: "1667547006738-c43f5272d045",
                        description: "双塔",
                        imageLink: "https://images.unsplash.com/photo-1667547006738-c43f5272d045"
                }, 
                {
                        id: "1668057648312-86cf167e6243",
                        description: "打卡",
                        imageLink: "https://images.unsplash.com/photo-1668057648312-86cf167e6243"
                }
            ],

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