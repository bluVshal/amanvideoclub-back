module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        userName: {
            unique: true,
            type: DataTypes.STRING,
            allowNull: false,
        },
        userEmail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userPassword: {
            type: DataTypes.STRING,
        }
    });

    return User;
};