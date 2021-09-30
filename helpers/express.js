
exports.expressCallback = (controller) => {
    return async (req, res) => {
        try {
            let controllerResponse = await controller(req, res);
            typeof controllerResponse !== typeof undefined && res.send(controllerResponse);
        } catch (e) {
        console.log('show e',e)
            if (e instanceof NotFoundError) {

                res.status(404).send(error);
            } else if (e.errorCode) {
                res.status(e.httpStatusCode || 400).send({ requestID: req.awsRequestId, ...e.getMessage() });
            } else if (e.data) {
                res.status(400).send(e.data);
            } else if (e.nativeError && e.nativeError.code) {

                res.status(409).send({
                    message: e.nativeError.detail,
                    requestID: req.awsRequestId
                });
            } else if (e.code && e.statusCode && e.requestId) {

                res.status(e.statusCode).send(error);
            } else {
                Logger.error(e);
                res.sendStatus(500).send({
                    message: 'unknown error occurred, contact support',
                    requestID: req.awsRequestId
                });

            }
        }
    };
};
