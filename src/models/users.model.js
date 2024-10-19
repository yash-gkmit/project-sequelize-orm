const { Sequelize, DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    'firstName': {
        type: DataTypes.STRING,
        allowNull: false,
    },
    'lastName': {
        type: DataTypes.STRING,
        allowNull: true,
    },
    'phoneNumber': {
        type: DataTypes.STRING, 
        allowNull: true,       
        validate: {
            is: /^\+?[1-9]\d{1,14}$/,
        },
    },
    'email': {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    tableName: 'users',
});

console.log(User === sequelize.models.User);

module.exports = User;
