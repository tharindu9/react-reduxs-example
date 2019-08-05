import React , {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchPost} from '../actions/PostAction'

class Post extends Component{

componentWillMount(){
    this.props.fetchPost();
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
    fetchPost : PropTypes.func.isRequired,
    posts : PropTypes.array.isRequired
}

 const mapStateToProps = (state) =>({
     posts : state.posts.items
 })
export default connect(mapStateToProps , {fetchPost})(Post)
