import React , {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchPost} from '../actions/PostAction'

class Post extends Component{

componentWillMount(){
    this.props.fetchPost();
}

componentWillReceiveProps(nextPost){ //fire when add new state to props
    console.log(nextPost.newPost)
    if(nextPost.newPost){
        this.props.posts.unshift(nextPost.newPost)
    }

}
    render(){
        const postItems = this.props.posts.map(item=>{
             return(
                 <div key={item.id}>
                 <h4>{item.title}</h4>
                 <p>{item.body}</p>
                </div>
             ) 
        })
        return(
            <div className="Post">
                {postItems}
            </div>
        )
    }
}
Post.propTypes={
    fetchPost1 : PropTypes.func.isRequired,
    posts : PropTypes.array.isRequired,
    newPost : PropTypes.object
}
 const mapStateToProps = (state) =>({
     posts : state.posts.items,
     newPost : state.posts.item
 })
 
export default connect(mapStateToProps , {fetchPost})(Post)
