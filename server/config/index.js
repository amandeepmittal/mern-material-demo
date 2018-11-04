const config = {
	port: process.env.PORT || 4000,
	jwtSecret: process.env.JWT_SECRET || 'mkT23j#u!45',
	mongoURI: process.env.MONGODB_URI || 'mongodb://localhost/mern-auth'
};

export default config;
