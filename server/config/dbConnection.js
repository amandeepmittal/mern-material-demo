import mongoose from 'mongoose';
import config from './index';

const URI = config.mongoURI;
mongoose.connect(URI);

// When successfully connected
mongoose.connection.on('connected', () => {
	console.log('Established Mongoose Default Connection');
});

// When connection throws an error
mongoose.connection.on('error', err => {
	console.log('Mongoose Default Connection Error : ' + err);
});
