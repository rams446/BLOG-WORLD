const User = require('../../models/Blogs');
const bcrypt = require('bcrypt');
var path = require('path');
const {ObjectId} = require('mongodb');

module.exports = {
    create,
    blog,
    editblog,
    deleteblog,
    allblog
    };

    // This function fires when a request is made to /api/users POST
    //====Create=====
    async function create(req, res) {
    try {
    const user = await User.create(req.body);
    res.send(user)
    } catch (err) {
        res.status(400).json(err);
    }
    }

async function blog(req, res) {
        const email = req.params.email;
        try {
        
        const foundLog= await User.find({email:email});
        res.send(foundLog);
        }catch (err) {
        res.status(400).send(err);
        }
    };
//=======Edit======
    async function editblog(req, res) {
        try {
            const id = req.params.id;
            const payload = req.body;

            const reqPaylaod ={
                blogname: payload.blogname,
                categorey: payload.categorey,
                description: payload.description
            }
            console.log(reqPaylaod)
            const foundLog= await User.findByIdAndUpdate(id, reqPaylaod);
            const updatedlog =await User.findById(id)
            res.send(updatedlog);
            }catch (err) {
            res.status(400).send(err);
            }
        };
//======Delete========
        async function deleteblog(req, res) {
            try {
                const id = req.params.id;
                const payload = req.body;

                const reqPaylaod ={
                    blogname: payload.blogname,
                    categorey: payload.categorey,
                    description: payload.description
                }
                console.log(reqPaylaod)
                const foundLog= await User.findByIdAndDelete(id);
                const updatedlog =await User.findById(id)
                res.send(foundLog);
                }catch (err) {
                res.status(400).send(err);
                }
            };
//======== Display === all blogs
            async function allblog(req,res){
                try{

                    const user = await User.find({});
                    res.send(user);
                    
                    } catch (err) {
                        res.status(400).json(err);
                    }
                    }
            