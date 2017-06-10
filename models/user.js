const Model = require('objection').Model;
const Post = require('./post');
const Profile = require('./profile');


class User extends Model {
  static get tableName() {
    return 'user';
  }

  static get relationMappings() {
    return {
      posts: {
        relation: Model.HasManyRelation,
        modelClass: Post,
        join: {
          from: 'user.id',
          to: 'post.user_id'
        }
      },
      profiles: {
        relation: Model.HasManyRelation,
        modelClass: Profile,
        join:{
          from: 'user.id',
          to: 'profile.user_id'
        }
      }
    };
  }
}

module.exports = User;
