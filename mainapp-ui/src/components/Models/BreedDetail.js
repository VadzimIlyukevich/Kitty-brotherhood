import axios from 'axios';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

function BreedDetail({match}) {

  const [breed, setBreed] = useState({})
  const [posts, setPosts] = useState([])
  const id = match.params.id

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://127.0.0.1:8000/api/breed/${id}`
  }).then(response =>{
      setBreed(response.data)
      setPosts(response.data.posts)
      })
  },[id])

  return (<div />
  );
}

export default BreedDetail;