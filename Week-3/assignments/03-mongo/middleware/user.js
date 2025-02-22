const { User } = require('../db/index');
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password
    console.log(username,password);
    
    const user  = await User.findOne({
        username: username,
        password: password
    })

    if(user){
        next();
    }else{
        res.status(401).json({
            message: "User doesn't exist"
        })
    }
}

module.exports = userMiddleware;