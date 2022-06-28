import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from "./Header"
import Photowall from './Photowall';
import { Link,Route,Routes } from "react-router-dom"
import AddPhoto from './AddPhoto';


class Main extends Component {
    constructor() {
        super();
        this.state = {
            posts: [
                {
                    id: "0",
                    description: "Start Uploading!!",
                    imagelink: "https://cdn.dribbble.com/users/1418633/screenshots/5106121/hi-dribbble-studiotale.gif"
                },
                {
                    id: "1",
                    description: "Nice Landscape",
                    imagelink: "Images/image1.jpg"
                },
                {
                    id: "2",
                    description: "Landscape",
                    imagelink: "Images/image2.jpg"
                },
                {
                    id: "3",
                    description: "This is good option for wallpaper",
                    imagelink: "Images/image3.jpg"
                }
            ]
        }
        this.removePhoto = this.removePhoto.bind(this);
    }

    removePhoto(postRemoved) {
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }
    render() {
        
        return (
        <div>
        <Header name={"Photowall"}></Header>
        <Link className='add-btn-container' to="/AddPhoto" ><button className='add-btn' onClick={() => { this.changeScreen('addPhoto') }} ></button></Link>
        <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
    </div>);
    } 
     
}

export default Main;

