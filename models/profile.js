const Model = require('objection').Model;

class Profile extends Model {
  static get tableName() {
    return 'profile';
  }

  static get relationMappings() {
    return {
      post: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/user',
        join: {
          from: 'profile.user_id',
          to: 'user.id'
        }
      }
    };
  }
}

module.exports = Profile;
