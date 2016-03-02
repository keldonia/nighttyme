var ApiUtil = require('../util/api_util');

var ApiCreateActions = {
  signOut: function () {
    ApiUtil.signOut();
  },
  fetchAllTags: function () {
    ApiUtil.fetchAllTags ();
  }
};

module.exports = ApiCreateActions;
