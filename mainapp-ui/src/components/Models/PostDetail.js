import axios from 'axios';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PostDetail({match}) {

  const [post, setPost] = useState({})
  const id = match.params.id

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://127.0.0.1:8000/api/form/${id}`
  }).then(response =>{
      setPost(response.data)
      })
  },[id])

  return ( <div />
  );
}

export default PostDetail;