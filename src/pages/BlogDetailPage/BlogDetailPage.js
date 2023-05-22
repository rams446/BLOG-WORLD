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
        async function edit(evt) {
            // prevent form from being submitted to the server
           evt.preventDefault()
          try {
                console.log("eye catcher")
                console.log(`${blogName}`)
                console.log(evt.target.elements);
                console.log(evt.target.elements) // from elements property
                const user = await usersAPI.editForm(blogName,blogCategory,blogDescription)
                setEditForm(user)
            } catch(err) {
                setError('Blog Creation failed')
            }
        }
       
    return(
        <div>
        {
           
        props.Blogdetails?.map((blog)=>{
         return ( blog.blogname == symbol ?
            <div>
            <form>
            <input type="text" defaultValue={blog.blogname} name="blogName" id="blogName" onChange={(event) =>
          setblogName(event.target.value)
        }/>
            <input type="text" defaultValue={blog.categorey} name="blogCategory" id="blogCategory" onChange={(event) =>
          setblogCategory(event.target.value)
        }/>
            <textarea defaultValue={blog.description} name="blogDescription" id="blogDescription" onChange={(event) =>
          setblogDescription(event.target.value)
        }/>
            <input type="text" value={blog._id} name="blogId" disabled/>
            <div>{blog._id}</div>
            {/* <Link to ={`/homepage/${blog._id}/edit`} >  </Link>   */}
             <input type="button"  name="edit" value="edit" onClick={edit}/>
            <input type="button" name="Delete" value="delete"/>
            </form>
            </div>
         :"")
         })
    
     
     }
     </div>
    )
    }
