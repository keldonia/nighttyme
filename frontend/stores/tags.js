var Store = require('flux/utils').Store;
var ApiConstants = require('../constants/api_constants');
var AppDispatcher = require('../dispatcher');

var _tags = {};

var TagStore = new Store(AppDispatcher);

TagStore.all = function() {
  return Object.keys(_tags).map (function (key, idx) {
    return {'id': idx, name: _tags[key]};
  });
};

TagStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ApiConstants.ALL_TAGS:
      TagStore.resetTags(payload.tags);
      TagStore.__emitChange();
      break;
    default:

  }
};

TagStore.resetTags = function(tags) {
  _tags = {};
  tags.forEach( function(tag, idx) {
    _tags[idx] = tag.name;
  });
};


module.exports = TagStore;
