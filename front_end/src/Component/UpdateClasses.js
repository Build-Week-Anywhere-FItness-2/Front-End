import React, {useState, useEffect} from 'react';
import {AxiosWithAuth} from './utils/AxiosWithAuth';

const UpdateClasses = props =>{
    const [update, setUpdate] = useState({
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
   

    const handleUpdate = id => {
         AxiosWithAuth()
            .put(`/api/classes/${id}`, update)
            .then( res =>{
                console.log(res)
                // setEvents(events.filter(item => item.id !== id))
                // setClasses(classes.filter(item => item.id !== id))
                // setClassForm(classForm.filter(item => item.id !== id))
            })
        }
      const handleChange = e => {
        e.preventDefault();
        setUpdate({ ...update, [e.target.name]: e.target.value });
      };

    return(
        <div className='update'>
               <form onSubmit={handleUpdate}>
                <h5> Update Class</h5>
                <input type='text'
                name='class_name'
                placeholder='Class Name'
                value={update.class_name}
                onChange={handleChange}
                />
                <br/>
                <input type='text'
                name='description'
                placeholder='Description'
                value={update.description}
                onChange={handleChange}
                />
                <br/>
                  <input type='text'
                name='class_type'
                placeholder='class_type'
                value={update.class_type}
                onChange={handleChange}
                />
                <br/>
                  <input type='text'
                name='class_date'
                placeholder='class_date'
                value={update.class_date}
                onChange={handleChange}
                />
                <br/>
                <input type='text'
                name='class_time'
                placeholder='class_time'
                value={update.class_time}
                onChange={handleChange}
                />
                <br/>
                <input type='text'
                name='intensity'
                placeholder='intensity'
                value={update.intensity}
                onChange={handleChange}
                />
                <br/>
                <input type='text'
                name='location'
                placeholder='location'
                value={update.location}
                onChange={handleChange}
                />
                <br/>
                <input type='number'
                name='attendees'
                placeholder='attendees'
                value={update.attendees}
                onChange={handleChange}
                />
                <br/>
                <input type='number'
                name='open_spots'
                placeholder='Open Spots'
                value={update.open_spots}
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
                
               
                
            
        
            <button onClick={()=> handleUpdate(props.id)}>Update</button>
            </form>
            </div>

    )
};
export default UpdateClasses;