import React, {useState, useEffect, useContext} from 'react';
import FitnessContext from '../contexts/FitnessContext'
import {AxiosWithAuth} from './utils/AxiosWithAuth';
import styled from 'styled-components';
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
    const {events, setEvents} = useContext(FitnessContext);
    console.log(useContext(FitnessContext))
    const [classes, setClasses] = useState([])
    

    const [classForm, setClassForm] =useState({
    title:'',
    instructorId:'',
    categoryId:''
})
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
}, []);
// const handleNumberChange = e =>{
//     key=Number(e.target.value);
// }
const handleSubmit = (e) =>{
    e.preventDefault();
    AxiosWithAuth()
    .post('/api/classes', classForm)
    .then(res =>{
        setClassForm ({
        title:'',
        instructorId:'',
        categoryId:''
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
        setEvents(events.filter(item => item.id !== id))
        setClasses(classes.filter(item => item.id !== id))
        setClassForm(classForm.filter(item => item.id !== id))
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
              <h4>Workout: <p>{classForm.title}</p></h4>
          <h4>Instructor Id: <p>{classForm.instructorId}</p></h4>
          <h4>Category Id: <p>{classForm.categoryId}</p></h4>
          <button onClick ={() => handleDelete(classForm.id)}>Delete</button>
          </Boxes>
          </div>)}
          <form onSubmit={handleSubmit}>
                <h5> Add a Class</h5>
                <input type='text'
                name='title'
                placeholder='Class'
                value={classForm.title}
                onChange={handleChange}
                />
                <br/>
                <input type='text'
                name='instructorId'
                placeholder='Instructor'
                value={classForm.instructorId}
                onChange={handleChange}
                />
                <br/>
                <input type='text'
                name='categoryId'
                placeholder='Category'
                value={classForm.categoryId}
                onChange={handleChange}
                />
                <br/>
                <br/>
                <button type='submit'>Add new class</button>
            </form>
        </div>
    )
}
export default GetClasses;