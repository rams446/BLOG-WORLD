import * as usersAPI from '../../utilities/users-api';
import BlogDetailPage from '../BlogDetailPage/BlogDetailPage';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
export default function MyBlogPage() {
    const [showForm, setShowForm] = useState(false);
    const [showblog, setShowblog] = useState();
    
    const showForms= function (){
        setShowForm(!showForm)
    }
    const [error, setError] = useState('')
    const [value, setValue] = useState('Food');

    useEffect(() => {
        console.log("executed only once!");
        fetchData();
      }, [""]);

      async function fetchData(){
        const blogs = await usersAPI.blog();
        setShowblog(blogs);
        console.log("inside set show blog")
        console.log(showblog)

      }

    const [ newBlog, setNewblog] = useState({
        blogname: '',
        categorey: '',
        description: '',
        email:''
    })

    function handleChange(evt) {
        setNewblog({
            ...newBlog,
            [evt.target.name]: evt.target.value
        })
    }
    async function handleSubmit(evt) {
        // prevent form from being submitted to the server
       evt.preventDefault()
      try {
            const email = JSON.parse(atob(localStorage.getItem("token").split('.')[1])).user.email;
            console.log(email)
            console.log(newBlog);
            newBlog.email = email;
            newBlog.categorey = value;
            const user = await usersAPI.newblog(newBlog)
            const blogs = await usersAPI.blog();
            setShowblog(blogs)
        } catch(err) {
            setError('Blog Creation failed')
        }
    }
    
       
        const handleChange1 = (event) => {
       
          setValue(event.target.value);
       
        };
    return (
        <div>
        <form>
        <button onClick={showForms} name="button">CREATE BLOG</button>
        </form>
        <form className="form-container" onSubmit={handleSubmit}>
        BlogName: <input name="blogname" type="text"   value={newBlog.blogname} onChange={handleChange}></input>
        {/* Categorey: <input name="categorey" type="text"  value={newBlog.categorey}  onChange={handleChange}></input> */}
            Category: <select value={value} onChange={handleChange1}>
             <option value="Food">Food</option>
             <option value="Travel">Travel</option>
             <option value="Education">Education</option>
             <option value="Health">Health</option>
             <option value="Stories">Stories</option>
            </select>
        Description:  <textarea name="description" type="textarea" value={newBlog.description}  onChange={handleChange}> </textarea>
        <button  name="post"  >Post</button> 
        </form>
        <h3>My blogs</h3>
        { <h4>{showblog?.map((blogs) => {
             return <div className="blogsList">
            <Link to ={`/homepage/myblogs/${blogs._id}`}>{blogs.blogname}</Link>    
                </div>
        })}</h4> }
          <BlogDetailPage Blogdetails={showblog}/>
        </div>
        
        
    )
    }