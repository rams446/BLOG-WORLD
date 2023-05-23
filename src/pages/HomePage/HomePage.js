
import * as usersAPI from '../../utilities/users-api';
import { useState, useEffect } from 'react';
export default function HomePage() {
  const [allblogs, setAllblogs]= useState();
  const [error, setError] = useState('')
  async function getAllblogs(evt) {
    // prevent form from being submitted to the server
  //  evt.preventDefault()
  try {
        
        const user = await usersAPI.Allblogs()
        setAllblogs(user)
        console.log("hi")
        console.log(user)
    } catch(err) {
        setError('Blog Creation failed')
    }
}
useEffect(() => {
  console.log("executed only once!");
  getAllblogs();
}, ['']);

const state = {
  button: 1
};

async function edit(evt) {
  // prevent form from being submitted to the server
 evt.preventDefault()
try {
  const email = JSON.parse(atob(localStorage.getItem("token").split('.')[1])).user.email;
  console.log(state)
  console.log(evt.target[2].value)
  console.log("eye catcher")
  const payload ={
    blogname: state.name,
    categorey: state.cat,
    description: state.desc,
    email: email
  };
      console.log(evt.target.elements) // from elements property
      console.log("eye catcher status")
          const user = await usersAPI.addFavoriteForm(payload);     
  } catch(err) {
      setError('Blog Creation failed')
  }
}
  return (
    <div>
    <br></br>
    <form onSubmit={edit}>
    <table>
      <tr>
        <th>Blog Name</th>
        <th>Blog Category</th>
        <th>Blog Description</th>
        <th>Blog Id</th>
        <th>Add to Favorites</th>
      </tr>
      {allblogs?.map((blogs) => {
      return (
        <tr>
          <td><input type="text" value={blogs.blogname} disabled id={blogs._id+"_name"} name="blogName"></input> </td>
          <td><input type="text" value={blogs.categorey} disabled id={blogs._id+"_cat"} name="blogCategory"></input></td>
          <td><input type="text" value={blogs.description} disabled id={blogs._id+"desc"} name="blogDescription"></input></td>
          <td><input type="text" value={blogs._id} disabled id={blogs._id+"_id"} name="blogId"></input></td>
          <td><button type="submit" id={blogs._id} onClick={() => (state.button = blogs._id, state.name=blogs.blogname, state.cat=blogs.categorey, state.desc = blogs.description)}>Add to Favorites</button></td>
        </tr>)
    })}
    </table>
    </form>
    </div>
  )

  
}