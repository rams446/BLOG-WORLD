const Favorites = require('../../models/Favorite');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Blogs = require('../../models/Blogs');

module.exports = {
create,
getFavoriteBlogs
};

// This function fires when a request is made to /api/favorites POST
async function create(req, res) {
try {
    // Add the favorites to the database
    // then()
    const blogs = await Favorites.find({ "email": req.body.email});
    
//    const user = await Favorites.create(req.body);
let blogPresent = false;
console.log(req.body.blogname)
console.log(blogs.length)
for(let i = 0; i < blogs.length; i++) {
    console.log(blogs[i].blogname)
    console.log(req.body.blogname)
    if(blogs[i].blogname === req.body.blogname){
        blogPresent = true;
    }
}
console.log(blogPresent)
if(!blogPresent){
    const user = await Favorites.create(req.body);
}
    res.send(blogs)
} catch (err) {
    console.log(err)
    res.status(400).json(err);
}
}



async function getFavoriteBlogs(req, res) {
    try {
        // get the user favorites from the database
        // then()
        console.log(req.params.email)
        const blogs = await Favorites.find({ "email": req.params.email});
        res.send(blogs)
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
    }