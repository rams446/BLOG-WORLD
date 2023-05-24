import * as usersAPI from '../../utilities/users-api';
    import {useParams} from 'react-router-dom'
    import { useEffect, useState } from 'react'
    import { Link } from "react-router-dom";

    export default function FavoritePage(props) {
        const {symbol} =useParams()
        const [editForm, setEditForm] = useState(props.Blogdetails);
        const [error, setError] = useState('')
        const [blogName, setblogName] = useState('');
        const [allblogs, setAllblogs]= useState();
        async function getAllblogs(evt) {
            // prevent form from being submitted to the server
          //  evt.preventDefault()
          try {
                
                const user = await usersAPI.userFavorites();
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
       
    return(
        <div>
            <br></br>
            <table className="form-container">
                <tr>
                    <th>Blog Name</th>
                    <th>Categorey</th>
                    <th>Description</th>
                    <th>Id</th>
                </tr>
            {allblogs?.map((blogs) => {
      return (
        <tr>
          <td><input type="text" value={blogs.blogname} disabled id={blogs._id+"_name"} name="blogName"></input> </td>
          <td><input type="text" value={blogs.categorey} disabled id={blogs._id+"_cat"} name="blogCategory"></input></td>
          <td><input type="text" value={blogs.description} disabled id={blogs._id+"desc"} name="blogDescription"></input></td>
          <td><input type="text" value={blogs._id} disabled id={blogs._id+"_id"} name="blogId"></input></td>
        </tr>)
    })}
        </table>
        </div>
    )
    }
