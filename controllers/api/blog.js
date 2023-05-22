    const User = require('../../models/Blogs');
    const bcrypt = require('bcrypt');
    var path = require('path');

    module.exports = {
        create,
        blog,
        // editblog
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

        // async function editblog(req, res) {
        //     try {
        //         const editblog = req.params.id;
        //         const foundLog= await User.findById({editblog});
        //         console.log("hi")
        //         res.send(foundLog);
        //         }catch (err) {
        //         res.status(400).send(err);
        //         }
        //     };