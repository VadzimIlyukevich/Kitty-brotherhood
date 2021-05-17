import axios from 'axios';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PostDetail({match}) {

  const [breed, setBreed] = useState({})
  const id = match.params.id

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://127.0.0.1:8000/api/breed`
  }).then(response =>{
      setBreed(response.data)
      })
  },[id])

  return ( <div />
  );
}

export default PostDetail;