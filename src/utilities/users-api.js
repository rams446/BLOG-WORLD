    import { getToken } from './users-service';
    const BASE_URL = '/api/users';

    export function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
    }

    export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
    }

    //Blogs
    //=== Create ====
    export function newblog(newBlog) {
    return sendRequest(`${BASE_URL}/homepage/myblogs`, 'POST', newBlog);
        }

    export function blog() {
        const email = JSON.parse(atob(localStorage.getItem("token").split('.')[1])).user.email;
        const requestOptions = {
            method: 'GET',
            headers: { 'email': email},
        };
    return sendRequest(`${BASE_URL}/homepage/myblogs/${email}`, "GET");
        }
     //====Edit ===   
    export function editForm(editBlog) {
            console.log(editForm)
    return sendRequest(`${BASE_URL}/homepage/${editBlog._id}/edit`, 'POST', editBlog );

            }

    //====Delete the Form====
    export function deleteForm(editBlog) {
                console.log(deleteForm)
    return sendRequest(`${BASE_URL}/homepage/${editBlog._id}`, 'POST', editBlog );
    
            }
    // Favourites
    export function addFavoriteForm(editBlog) {
                console.log("inside add favorite")
                console.log(editBlog)
                const email = JSON.parse(atob(localStorage.getItem("token").split('.')[1])).user.email;
    return sendRequest(`${BASE_URL}/homepage/myfavorites/${email}`, 'POST', editBlog );
    
            }
    // Index
    export function Allblogs() {
    return sendRequest(`${BASE_URL}/homepage`, "GET");
                }

    export function userFavorites() {
                    const email = JSON.parse(atob(localStorage.getItem("token").split('.')[1])).user.email;
    return sendRequest(`${BASE_URL}/homepage/userFavorites/${email}`, "GET");
                    }
            
            

    export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
    }

    /*--- Helper Functions ---*/

    async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, etc.
    const options = { method };
    if (payload) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(payload);
    }

    const token = getToken();
    if (token) {
        // Ensure the headers object exists
        options.headers = options.headers || {};
        // Add token to an Authorization header
        // Prefacing with 'Bearer' is recommended in the HTTP specification
        options.headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json();
    throw new Error('Bad Request');
    }