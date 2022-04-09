
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../../config/database');

const Resource = sequelize.define("resources", {
	id: {
        type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	userAddress: DataTypes.STRING,
	amount: DataTypes.INTEGER,
	level: DataTypes.INTEGER,
	battleCount: DataTypes.INTEGER,
});

module.exports = Resource;