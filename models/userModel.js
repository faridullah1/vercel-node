const Sequelize = require('sequelize');

const db = require('../db');

const User = db.define('user', 
{
	userId: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	email: {
		type: Sequelize.STRING(255),
		allowNull: false,
		unique: true,
        validate: {
			notNull: {
				msg: 'Email is required'
			},
            isEmail: {
				msg: 'Email is invalid'
			}
		}
	},
	password: {
		type: Sequelize.STRING(100),
		allowNull: false,
        validate: {
			notNull: {
				msg: 'Password is required'
			}
		}
	}
}, {
	defaultScope: {
		attributes: { exclude: ['password'] },
	}
});

exports.User = User;