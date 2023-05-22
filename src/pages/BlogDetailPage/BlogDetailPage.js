import * as usersAPI from '../../utilities/users-api';
    import {useParams} from 'react-router-dom'
    import { useEffect, useState } from 'react'
    import { Link } from "react-router-dom";

    export default function BlogDetailPage(props) {
        const {symbol} =useParams()
        const [editForm, setEditForm] = useState(props.Blogdetails);
        const [error, setError] = useState('')
        const [blogName, setblogName] = useState('');
        const [blogCategory, setblogCategory] = useState('');
        const [blogDescription, setblogDescription] = useState('');
        const payload = {
            blogName: '',
            blogId: '',
            blogCategory: '',
            blogDescription: ''
        }
        const state = {
            button: 1
          };

        async function edit(evt) {
            // prevent form from being submitted to the server
           evt.preventDefault()
          try {
            console.log(evt.target[2].value)
            console.log(evt)
                console.log("eye catcher")
                console.log(`${blogName}`)
                console.log(editBlog);
                console.log(evt.target.elements) // from elements property
                console.log("eye catcher status")
                console.log(state)
                payload.blogname = evt.target[0].value
                payload.categorey = evt.target[1].value
                payload.description = evt.target[2].value
                payload._id = evt.target[3].value
                if(state.button === "delete"){
                    const user = await usersAPI.deleteForm(payload)
                }else if(state.button === "edit"){
                    const user = await usersAPI.editForm(payload)
                }
               
            } catch(err) {
                setError('Blog Creation failed')
            }
        }

        const [ editBlog, seteditBlog] = useState({
            blogname: '',
            category: '',
            description: '',
            email:''
        })
    
        function handleChange(evt) {
            seteditBlog({
                ...editBlog,
                [evt.target.name]: evt.target.value
            })
        }
       
    return(
        <div>
        {
           
        props.Blogdetails?.map((blog)=>{
         return ( blog.blogname == symbol ?
            <div>
            <form onSubmit={edit}>
            <input type="text" defaultValue={blog.blogname} name="blogname" id="blogName" onChange={handleChange}/>
            <input type="text" defaultValue={blog.categorey} name="category" id="blogCategory"onChange={handleChange}/>
            <textarea defaultValue={blog.description} name="description" id="blogDescription" onChange={handleChange}/>
    
            <input type="text" value={blog._id} name="blogId" id="blogId" disabled/>
            {/* <Link to ={`/homepage/${blog._id}/edit`} >  </Link>   */}

            <button
        onClick={() => (state.button = "edit")}
        type="submit"
        name="btn1"
        value="edit"
      >
        EDIT
      </button>
      <button
        onClick={() => (state.button = "delete")}
        type="submit"
        name="btn2"
        value="delete"
      >
        DELETE
      </button>
             {/* <input type="button"  name="edit" value="edit" onClick={edit}/>
            <input type="button" name="Delete" value="delete"/> */}
            </form>
            </div>
         :"")
         })
    
     
     }
     </div>
    )
    }
