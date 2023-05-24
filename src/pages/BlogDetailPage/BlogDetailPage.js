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
            const [value, setValue] = useState('Food');
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
                    payload.blogname = evt.target[0].value
                    payload.categorey = value;
                    payload.description = evt.target[3].value
                    payload._id = evt.target[4].value
                    if(state.button === "delete"){
                        const user = await usersAPI.deleteForm(payload)
                        document.getElementById("formId").remove();
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

            const handleChange1 = (event) => {
        
                setValue(event.target.value);
            
            };
        
        return(
            <div>
            {
            
            props.Blogdetails?.map((blog)=>{
            return ( blog._id === (symbol) ?
                <div>
                <form className="form-container" onSubmit={edit} id="formId">
                BlogName: <input type="text" defaultValue={blog.blogname} name="blogname" id="blogName" onChange={handleChange}/>
                Blog Category: <input type="text" defaultValue={blog.categorey} name="category" id="blogCategory"onChange={handleChange} disabled/>
                Category:
            <select value={value} onChange={handleChange1}>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Education">Education</option>
                <option value="Health">Health</option>
                <option value="Stories">Stories</option>
                </select>
                Blog Description: <textarea defaultValue={blog.description} name="description" id="blogDescription" onChange={handleChange}/>
                Blog Id: <input type="text" value={blog._id} name="blogId" id="blogId" disabled/>
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
                </form>
                </div>
            :"")
            })
        
        
        }
        </div>
        )
        }
