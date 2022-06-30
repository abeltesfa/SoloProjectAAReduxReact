'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.User, {foreignKey: 'userId'});
    Post.hasMany(models.Comment, {foreignKey: 'postId', onDelete: 'CASCADE', hooks: true});
  };
  return Post;
};
