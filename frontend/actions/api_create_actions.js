var ApiUtil = require('../util/api_util');

var ApiCreateActions = {
  signOut: function () {
    ApiUtil.signOut();
  }
};

module.exports = ApiCreateActions;
