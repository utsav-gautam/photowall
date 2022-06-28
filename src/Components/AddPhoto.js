import React, { Component } from 'react'

class AddPhoto  extends Component{
    constructor(){
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    
    render(){
        return (
            <div>
                <h1> Photowall </h1>
                <div className='form'>
                    <form  onSubmit={this.handleSubmit}>
                        <input type="text" placeholder='link' name='link'></input>
                        <input type="text" placeholder='Description' name='description'></input>
                        <button>POST</button>
                    </form>
                </div>
            </div>
    )}
}

export default AddPhoto;