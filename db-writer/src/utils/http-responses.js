/*
  Generic Error Response
*/
const GENERIC_ERROR_RESPONSE = {
    statusCode: 500,
    body: JSON.stringify({
        message: "Something was wrong, server error",
        error: "org.dbwriter.InternalError"
    })
};

/**
  No request treatment
*/
const BAD_REQUEST_ERROR_RESPONSE = {
    statusCode: 400,
    body: JSON.stringify({
        message: "Bad Request Error (blame the client)",
        error: "org.dbwriter.BadRequestError"
    })
};

const OK_RESPONSE = {
    statusCode: 200,
    body: ""
};

const CREATED_RESPONSE = {
    statusCode: 201,
    body: ""
};

module.exports = {
    GENERIC_ERROR_RESPONSE,
    BAD_REQUEST_ERROR_RESPONSE,
    OK_RESPONSE,
    CREATED_RESPONSE
};
