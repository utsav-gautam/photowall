import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom"
import AddPhoto from "./AddPhoto"
import Main from './Main'
class App extends Component{
    addPhoto=(addedPhoto,posts)=>{
        return posts.concat([addedPhoto])
    }

    render(){
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Main/>} />
                <Route exact path="/AddPhoto" element={<AddPhoto />} onAddPhoto={this.addPhoto} />
            </Routes>
        </div>)
    }
}

export default App;