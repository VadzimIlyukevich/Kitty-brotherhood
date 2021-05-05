import axios from 'axios';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PostDetail({match}) {

  const [volunteer, setVolunteer] = useState({})
  const id = match.params.id

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://127.0.0.1:8000/api/volunteer/${id}`
  }).then(response =>{
      setVolunteer(response.data)
      })
  },[id])
 full_name = models.CharField(max_length=255, verbose_name='ФИО')
    phone = models.CharField(max_length=20, verbose_name='Номер телефона')
    email = models.EmailField()
    about
  return ( <div />
  );
}

export default PostDetail;