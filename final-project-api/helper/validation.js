const {check} = require('express-validator');

exports.signUpValidetion = [
    check('name','Name is required').not().isEmpty(),    
    check('email','Email is required').isEmail().normalizeEmail({ gmail_remove_dots : true}),
    check('password','Password is required').isLength({ min : 3 })
    
]

exports.loginValidetion = [ 
    check('email','Email is required').isEmail().normalizeEmail({ gmail_remove_dots : true}),
    check('password','Password is required').isLength({ min : 3 })
    
]

exports.UpdetprofileValidetion = [
    check('name','Name is required').not().isEmpty(),    
    check('email','Email is required').isEmail().normalizeEmail({ gmail_remove_dots : true}),
    
    
]