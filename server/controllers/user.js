import User from '../models/user';
import errorHandler from '../helpers/dbErrorHandler';

export const registerUser = (req, res, next) => {
	const user = new User(req.body);
	user.save((err, result) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler.getErrorMessage(err)
			});
		}
		res.status(200).json({
			message: 'Successfully signed up!'
		});
	});
};

export const findUserById = (req, res, next, id) => {
	User.findById(id).exec((err, user) => {
		if (err || !user) {
			return res.status(400).json({
				error: 'User not found'
			});
		}
		req.profile = user;
		next();
	});
};

export const findUserProfile = (req, res) => {
	// eliminate password related fields before sending the user object
	req.profile.hashedPassword = undefined;
	req.profile.salt = undefined;
	return res.json(req.profile);
};

export const deleteUser = (req, res, next) => {
	let user = req.profile;
	user.remove((err, deletedUser) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler.getErrorMessage(err)
			});
		}
		deletedUser.hashedPassword = undefined;
		user.salt = undefined;
		res.json(user);
	});
};
