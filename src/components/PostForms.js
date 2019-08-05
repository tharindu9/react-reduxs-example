import React , {Component} from 'react';
import  './PostForm.css'


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
        
        const posts = {
            title : this.state.title,
            body : this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts',
              {
                  method : 'POST',
                  headers:{
                      'content-type':'application/json'
                  },
                  body:JSON.stringify(posts)
                } ).
                then(res=>res.json())
                .then(data=>console.log(data))

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

export default PostForm;