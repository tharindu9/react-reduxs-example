import React , {Component} from 'react';
import  './PostForm.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from '../actions/PostAction'


class PostForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            title : "",
            body : ""
        }
        this.inputFieldHandler = this.inputFieldHandler.bind(this);
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
    }

    inputFieldHandler(e){
        console.log(e.target.name , "value " , e.target.value)
        this.setState({
            [e.target.name] : [e.target.value]
        })
    }

    onSubmitHandle(e){
        
        const post = {
            title : this.state.title,
            body : this.state.body
        }

        //connct redux reucer values
        this.props.createPost(post);

    }

    render(){

        return(
            <div>
                <h2>Add Post</h2>
                <div>
                    <form >
                        <label>
                            <b>
                            title:
                            </b>
                        </label>
                        <br/>
                        <input type="text" name="title" value={this.state.title}
                        onChange = {this.inputFieldHandler} className="InputField"/>

                    <br/>
                    <label>
                        <b>
                            body:
                            </b>
                        </label>
                        <br/>
                        <textarea name="body" className="InputField"
                        onChange = {this.inputFieldHandler} value={this.state.body} />
                        <br/>
                    </form>
                    <button  id="submitButton" 
                        onClick = {this.onSubmitHandle}>submit</button>
                </div>
            </div>
        )
    }
}

PostForm.propTypes={
    createPost: PropTypes.func.isRequired,
}

export default connect(null , {createPost})(PostForm);