var ApiUtil = require('../util/api_util');

var ApiCreateActions = {
  signOut: function () {
    ApiUtil.signOut();
  },
  fetchAllTags: function () {
    ApiUtil.fetchAllTags ();
  },
  fetchSearchSuggestions: function (searchCriteria) {
    ApiUtil.searchBusinesses(searchCriteria);
  }
};

module.exports = ApiCreateActions;
