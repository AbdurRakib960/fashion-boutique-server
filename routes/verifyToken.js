const jwt = require("jsonwebtoken");

// const verifyToken = (req, res, next) => {
//     const cookies = Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;
//     if(cookies) {
//         const token = cookies[process.env.COOKIE_NAME];
//         jwt.verify(token, process.env.JWT_SECRATE, (err, user) => {
//             if(err) res.status(401).json("You are not allow to do that")

//             req,user = user;
//             next()
//         })
//     } else {
//         return res.status(401).json("You are not allowed to do that");
//     }
// };


// verify token with sending token in headers
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if(authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRATE, (err, user) => {
            if(err) res.status.json("You are not allowed to do this") 
            req.user = user;
            next()
        })
    } else {
        res.status(401).json("You are not allowed to do that")
    }
}

// verifyToken and authorization

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.status(401).json("You are not allowed to do that")
        }
    })
};
// verifyToken and admin 
const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin) {
            next()
        } else {
            res.status(401).json("You are not allowed to do that")
        }
    })
}

module.exports = {
    verifyToken,  
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
}