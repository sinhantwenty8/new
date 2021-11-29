const User = require("../models/user.models")

function getSignUp(req,res){
    res.render('customer/auth/signup')
}

function getSignIn(req,res){

}

function getLogin(req,res){
    res.render('customer/auth/login')
}

async function signUp(req,res){
    const user = new User(
        req.body.email,
        req.body.password,
        req.body.fullname,
        req.body.street,
        req.body.postal,
        req.body.city);
    
    await user.signUp()
    res.redirect('/login')
}

module.exports ={
    getSignUp,
    getSignIn,
    signUp,
    getLogin
}