import React, {useState, useEffect, useContext} from 'react';
import FitnessContext from '../contexts/FitnessContext'
import {AxiosWithAuth} from './utils/AxiosWithAuth';
import styled from 'styled-components';
import UpdateClasses from "./UpdateClasses"

const Boxes = styled.div `
display: flex;
font-size: 15px;
flex-direction: column;
flex-wrap: wrap;
justify-content: inherit;
width: 30%;
margin: auto;
padding: 5px;
border: 5px solid #cedad9;
`

//THIS IS FOR THE INSTRUCTOR TO CREATE A NEW CLASS
const GetClasses = () => {
    console.log(JSON.parse(localStorage.getItem("user")))
    const {events, setEvents} = useContext(FitnessContext);
    
    const [classes, setClasses] = useState([])
    

    const [classForm, setClassForm] =useState({

    class_name:'',
    description:'',
    class_type: '',
    class_date: '',
    class_time: '',
    intensity: '',
    location: '',
    attendees: '',
    open_spots:'',
    users_id: JSON.parse(localStorage.getItem("user")),
 
})
console.log (classForm)
const handleChange = e =>{
    setClassForm({...classForm, [e.target.name]: e.target.value})
}
useEffect(()=>{
    AxiosWithAuth()
    .get('/api/classes', classes)
    // headers: {'authorization'}
    .then(res =>{
        console.log(res)
        setClasses(res.data)
    })
    .catch(err =>{
        console.log(err)
    });
}, [0]);
// const handleNumberChange = e =>{
//     key=Number(e.target.value);
// }
const handleSubmit = (e) =>{
    e.preventDefault();
    AxiosWithAuth()
    .post('/api/classes', classForm)
    .then(res =>{
        console.log(res)
        setClassForm ({
            class_name:'',
            description:'',
            class_type: '',
            class_date: '',
            class_time: '',
            intensity: '',
            location: '',
            attendees: '',
            open_spots:'',
            

        })
        setEvents([...events, res.data])
        setClasses([...classes, res.data])
    })
    .catch(err => {
        console.log(err)
    })
}
// const updateClass= axios     
// .put(`/api/classes/${id}`}, classes)
//    .then(response => {
//      response is the response we get back from the server
//      Whatever resource was changed should be reflected in our client
//    })
//    .catch(err => {
//      if something goes wrong, we handle any errors here
//    });
const handleDelete = id =>{
    
    AxiosWithAuth()
    .delete(`/api/classes/${id}`)
    .then( res =>{
        console.log(res)
        // setEvents(events.filter(item => item.id !== id))
        // setClasses(classes.filter(item => item.id !== id))
        // setClassForm(classForm.filter(item => item.id !== id))
    })
}
//SET STATE TO RESPONSE
    return(
        <div className='classes'>
           
            <h2>Class I've created</h2>
                {classes.map(classForm=>
          <div key ={classForm.id}>
              <br/>
              <Boxes>
              <h4>Class Name: <p>{classForm.class_name}</p></h4>
          <h4>Description: <p>{classForm.description}</p></h4>
          <h4>class_type: <p>{classForm.class_type}</p></h4>
          <h4>class_date: <p>{classForm.class_date}</p></h4>
          <h4>class_time: <p>{classForm.class_time}</p></h4>
          <h4>intensity: <p>{classForm.intensity}</p></h4>
          <h4>location: <p>{classForm.location}</p></h4>
          <h4>attendees: <p>{classForm.attendees}</p></h4>
          <h4>Open Spots: <p>{classForm.open_spots}</p></h4>
          <h4>Users ID: <p>{classForm.users_id}</p></h4>
          <button onClick ={() => 
                    handleDelete(classForm.id)}>Delete Class</button>
     
          <UpdateClasses id={classForm.id}/>
          
          </Boxes>
          </div>)}
          <form onSubmit={handleSubmit}>
                <h5> Add a Class</h5>
                <input type='text'
                name='class_name'
                placeholder='Class Name'
                value={classForm.class_name}
                onChange={handleChange}
                />
                <br/>
                <input type='text'
                name='description'
                placeholder='Description'
                value={classForm.description}
                onChange={handleChange}
                />
                <br/>
                  <input type='text'
                name='class_type'
                placeholder='class_type'
                value={classForm.class_type}
                onChange={handleChange}
                />
                <br/>
                  <input type='text'
                name='class_date'
                placeholder='class_date'
                value={classForm.class_date}
                onChange={handleChange}
                />
                <br/>
                <input type='text'
                name='class_time'
                placeholder='class_time'
                value={classForm.class_time}
                onChange={handleChange}
                />
                <br/>
                <input type='text'
                name='intensity'
                placeholder='intensity'
                value={classForm.intensity}
                onChange={handleChange}
                />
                <br/>
                <input type='text'
                name='location'
                placeholder='location'
                value={classForm.location}
                onChange={handleChange}
                />
                <br/>
                <input type='number'
                name='attendees'
                placeholder='attendees'
                value={classForm.attendees}
                onChange={handleChange}
                />
                <br/>
                <input type='number'
                name='open_spots'
                placeholder='Open Spots'
                value={classForm.open_spots}
                onChange={handleChange}
                />
                <br/>
                {/* <input type='number'
                name='user_id'
                placeholder='users ID'
                value={classForm.user_id}
                onChange={handleChange}
                /> */}
      
                <br/>
                <button type='submit'>Add new class</button>
               
                <button type= "submit">Update Class</button>
            </form>
        </div>
    )
}
export default GetClasses;