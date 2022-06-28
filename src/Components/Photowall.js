import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Photo from './Photo'
import PropTypes from'prop-types'


function Photowall(props){
    return <div className="photo-grid">
    {props.posts.map((post,index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
</div>
}
// class Photowall extends Component{
//     render(){
//         return(
//         <div className="photo-grid">
//              {this.props.posts.map((post,index) => <Photo key={index} post={post}/>)}
//         </div>)
//     }
// }

Photowall.propTypes={
    posts:PropTypes.array.isRequired,
    onRemovePhoto:PropTypes.func.isRequired
}
export default Photowall