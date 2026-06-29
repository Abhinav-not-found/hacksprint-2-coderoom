const errorHandler = (err, _, res, __) => {
	const statusCode = err.statusCode || 500;
	const errorMessage = err.message || "Internal Server Error";

	if (statusCode >= 500) {
		console.error(err);
	}

	res.status(statusCode).json({
		message: errorMessage,
		errors: err.errors || [],
	});
};

export default errorHandler;
