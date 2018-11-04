import express from 'express';
import cookieParser from 'cookie-parser';
import config from './server/config';
// ADD these
import userRoutes from './server/routes/user';
import authRoutes from './server/routes/auth';

// DB connection
require('./server/config/dbConnection');

const app = express();

// middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ADD routes
app.use('/', userRoutes);
app.use('/', authRoutes);

app.use((err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {
		res.status(401).json({ error: err.name + ':' + err.message });
	}
});

app.listen(config.port, () => {
	console.log(`🚀 at port ${config.port}`);
});
