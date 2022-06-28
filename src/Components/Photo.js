import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function Photo(props) {
    return (
        <figure className='figure'>
            <img className='photo' src={props.post.imagelink} alt={props.post.description} />
            <figcaption><p> {props.post.description}</p></figcaption>
            <div className='btn-container'>
                {props.post.id!=0 &&
                <button onClick={()=>{props.onRemovePhoto(props.post)}}>Remove </button>
                }
                </div>
        </figure>
    );
}
// class Photo extends Component {
//     render() {
//         const image = this.props.post;
//         return (
            
//             )
//     }
// }

export default Photo;