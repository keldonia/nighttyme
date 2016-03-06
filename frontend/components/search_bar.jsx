var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SearchSuggestionsStore = require('../stores/searchsuggestions');
var BusinessActions = require('../actions/business_api_action_creators');
var ApiActions = require('../actions/api_create_actions');
var FilterParamsStore = require('../stores/filter');
var FilterActions = require('../actions/filter_actions');
var History = require('react-router').History;

var SearchBar = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function() {
    return ({
      items: this.getItems(),
      search: "",
      blurred: true
    });
  },

  getItems: function() {
    return SearchSuggestionsStore.all()
  },

  _suggestionsChanged: function() {
    var items = this.getItems();
    this.setState({ items: this.getItems() });
  },

  componentDidMount: function () {
    this.searchListener = SearchSuggestionsStore.addListener(this._suggestionsChanged);
    ApiActions.fetchSearchSuggestions();
  },

  componentWillUnmount: function () {
    this.businessListener.remove();
  },
  clearSuggestions: function () {
    this.setState({ blurred: true })
  },
  search: function (e) {
    e.preventDefault();
    this.setState({ blurred: false })
    var search = { q: this.state.search };
    ApiActions.fetchSearchSuggestions(search);
  },
  find: function(e) {
    var search = { q: this.state.search };
    FilterActions.updateString(this.state.search);
    this.setState({ search: "" });
    this.history.push('/businesses');
    ApiActions.fetchSearchSuggestions();
    BusinessActions.fetchBusinesses(e.target.value);
  },

  clickHandler: function (itemId, itemType , e) {
    e.preventDefault();
    if (itemType = 'business') {
      this.history.push('/businesses/' + itemId)
    } else {
      console.log(itemId);
      console.log(itemType);
    }
  },

  searchItems: function () {
    var items = this.state.items;
    if (items && this.state.blurred === false) {
      return items.map (function (item, idx) {
        return <li
          className="search-suggestion"
          onClick={this.clickHandler.bind(this, item.id, item.type)}
          key={idx}
          id={this.id}
          data-type={this.type}>
          {item.name}</li>;
      }, this);
    }
  },

  render: function() {
    if (this.state.search) {
      var searchSuggestions = this.searchItems();
    }

    return (
      <div className="search-bar-top">
        <form onBlur={this.clearSuggestions} onFocus={this.search} className='search-bar' onChange={this.search} >
          <div className="search-box">
            <label htmlFor='main-search'></label>
            <input
              type="text"
              id='main-search'
              placeholder="Search SF Night Life!"
              valueLink={this.linkState("search")}
              autoComplete='off'
              />
            <button className="group" onClick={this.find}></button>
          </div>
          <ul className="search-suggestions" >
            {searchSuggestions}
          </ul>
        </form>
      </div>
    );
  },

});

module.exports = SearchBar;


var ATTRIBUTES = [
  'reservations',
  'credit cards',
  'parking',
  'bike parking',
  'good for groups',
  'dancing',
  'live music',
  'best nights',
  'coat check',
  'happy hour',
  'smoking',
  'outdoor seating',
  'tv',
  'pool table'
];

AMBIENCE = [
  'casual',
  'hipster',
  'sports',
  'redneck'
];

NOISE = [
  'average noise',
  'loud',
  'quiet'
];

ALCOHOL = [
  'full bar',
  'beer & wine only',
  'wine only',
  'beer only',
];
