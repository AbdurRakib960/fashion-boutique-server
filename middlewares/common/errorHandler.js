// EXTERNAL IMPORT 
const createError = require("http-errors");

// 404 NOT FOUND ERROR HANDLER 
function notFound(req, res, next) {
    next(createError(404, "Your desired content was not found"));
}

// COMMON ERROR HANDLER 

function errorHandler(err, req, res, next) {
    res.locals.error = process.env.NODE_ENV === "development" ? err : {message: err.message}

    res.status(err.status || 500)
}

module.exports = {
    notFound,
    errorHandler
}