var React = require('react');
var BusinessStore = require('../stores/business');
var FilterParamsStore = require('../stores/filter');
var BusinessActions = require('../actions/business_api_action_creators');
var FilterActions = require('../actions/filter_actions');

function _getAllBusinesses() {
  return BusinessStore.all();
}

function _getFilterParams() {
  return FilterParamsStore.params();
}

var Search = React.createClass({

  getInitialState: function() {
    return ({
      businesses: _getAllBusinesses(),
      filterParams: _getFilterParams()
    });
  },

  _businessesChanged: function () {
    this.setState({ businesses: _getAllBusinesses() });
  },

  _filtersChanged: function () {
    this.setState({ filterParams: _getFilterParams() });
    BusinessActions.fetchBusinesses();
  },

  resetFilters: function () {
    FilterActions.resetFilters();
  },

  componentDidMount: function () {
    this.businessListener = BusinessStore.addListener(this._businessesChanged);
    this.filterListener = FilterParamsStore.addListener(this._filtersChanged);
    BusinessActions.fetchBusinesses();
  },

  componentWillUnmount: function () {
    this.businessListener.remove();
    this.filterListener.remove();
  },
  searchMinStars: function (e) {
    e.preventDefault();
    var val = e.target.value;
    console.log(val);
  },

  render: function() {
    return (
      <div className="search">
        <section className="search-input-collection">
          <div className="reset-search-wrapper">
            <button className="reset-search" onClick={this.resetFilters}>Reset Search</button>
          </div>
          <div className="search-range-wrapper">
            <h4>Minimum Stars</h4>
            <p>Hate It!</p>
            <p className="right">Love It!</p>
            <input
              type="range"
              id='stars'
              max='5'
              min='0'
              step="0.5"
              className="stars"
              placeholder="2.5"
              onChange={this.searchMinStars}
            />
          </div>
        </section>
      </div>
    );
  }

});

module.exports = Search;
