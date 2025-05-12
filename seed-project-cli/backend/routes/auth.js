const router = require('express').Router();
const User = require('../models/user');
router.post('/registerAccount', async (req,res) => 
    {
        console.log(req.body);
        try {
            let newUser = new User({nome: req.body.firstName, sobrenome: req.body.lastName, email: req.body.email, senha: req.body.password});
            await newUser.save();
            res.status(200).json({'user': newUser});

        } catch (error) {
            res.status(404).json({'message': 'Cannot encounter user!', 'error': error});
        }
    });
router.get('/getUserInfo/:userMail', async (req, res) => 
    {
        try 
        {
            const user = await User.findOne({email: req.params.userMail});
            res.status(200).json(user);
        } 
        catch (error) 
        {
            res.status(500);
        }
        
    });
module.exports = router;