import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Comments = () => {
    const {id} = useParams()
    const [comments, setComments] = useState([])
    useEffect(()=>{
        fetch(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[id])
  const {body, name}= comments;
console.log(comments)

  const commentStyle = {
    backgroundColor: 'lightgrey',
    borderRadius: '5px',
    border: '1px solid black',
    padding: '10px',
    margin:'10px',
    width:'400px',
    float: 'left',
    height: '250px',
    textAlign: 'center',
  }
    return (

        <div>
            {

                comments.length && 
                comments.map(comment =>{
                    return(
                    <div style={commentStyle}>
                        <h3>{comment.name.toUpperCase()}</h3>
                        <p>{comment.body}</p>
                    </div>)
                    
                })
               
                
            }
            
        </div>

    );
};

export default Comments;