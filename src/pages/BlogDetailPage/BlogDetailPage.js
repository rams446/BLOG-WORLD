import * as usersAPI from '../../utilities/users-api';
    import {useParams} from 'react-router-dom'
    import { useState } from 'react'

    export default function BlogDetailPage(props) {
        const {symbol} =useParams()
        // const [editForm, setEditForm] = useState(props.Blogdetails);
        // const [error, setError] = useState('')
        // async function edit(evt) {
        //     // prevent form from being submitted to the server
        //    evt.preventDefault()
        //   try {
        //         const user = await usersAPI.editForm(editForm)
        //         setEditForm(user)
        //     } catch(err) {
        //         setError('Blog Creation failed')
        //     }
        // }


    return(
        <div>
        {
           
        props.Blogdetails?.map((blog)=>{
         return ( blog.blogname == symbol ?
            <div>
            <div>{blog.blogname} </div>
            <div>{blog.categorey} </div>
            {/* <from  onClick={edit}>
            <input type="button"  name="edit">Edit</input>
            <input type="button" name="Delete">Delete</input>
            </from> */}
            </div>

         :"")
         })
    
     
     }
     </div>
    )
    }
