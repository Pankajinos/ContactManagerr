const errorHandler = (err, req, res, next) => {
    const statusCode = req.statusCode ? req.statusCode : 500;

    switch (statusCode) {
        case 400:
            res.json({ title: "Validation Failed", message: err.message, stackTrace: err.stackTrace });
            break;
        case 404:
            res.json({ title: "NotFound", message: err.message, stackTrace: err.stackTrace });
            break;
        case 401:
            res.json({ title: "Unauthorised", message: err.message, stackTrace: err.stackTrace });
            break;
        case 403:
            res.json({ title: "Forbidden", message: err.message, stackTrace: err.stackTrace });
            break;
        case 500:
            res.json({ title: "Server Error", message: err.message, stackTrace: err.stackTrace });
            break;
        default:
            console.log("No error all god");
            
    }
}

module.exports = errorHandler;