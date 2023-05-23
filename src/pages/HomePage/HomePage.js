
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





  return (
    <h4>{allblogs?.map((blogs) => {
      return (<div >
     {blogs.blogname}    
         </div>)
 })}</h4>
  )

}