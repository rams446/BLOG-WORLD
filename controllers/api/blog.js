    const User = require('../../models/Blogs');
    const bcrypt = require('bcrypt');
    var path = require('path');
    const {ObjectId} = require('mongodb');

    module.exports = {
        create,
        blog,
        editblog,
        deleteblog
        };

        // This function fires when a request is made to /api/users POST
        async function create(req, res) {
        try {
        
        const user = await User.create(req.body);
        console.log("eye catcher")
        console.log(user)
        console.log( res.send(user))
        
        } catch (err) {
            res.status(400).json(err);
        }
        }



    async function blog(req, res) {
            const email = req.params.email;
            try {
            
            const foundLog= await User.find({email:email});
            console.log("hi")
            res.send(foundLog);
            }catch (err) {
            res.status(400).send(err);
            }
        };

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
                //const edit = await User.updateOne(editblog);
                // var myquery = {_id:id};
                // var newvalues = { $set: editblog };
                // await User.updateOne(myquery, newvalues);
               
                console.log(foundLog)
                console.log(updatedlog)
                res.send(updatedlog);
                }catch (err) {
                res.status(400).send(err);
                }
            };

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
                    //const edit = await User.updateOne(editblog);
                    // var myquery = {_id:id};
                    // var newvalues = { $set: editblog };
                    // await User.updateOne(myquery, newvalues);
                    
                    const updatedlog =await User.findById(id)
                    console.log(foundLog)
                    console.log(updatedlog)
                    res.send(updatedlog);
                    }catch (err) {
                    res.status(400).send(err);
                    }
                };