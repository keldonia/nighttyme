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

  render: function() {
    return (
      <div className="search">
        <section className="search-input-collection">
          <div className="reset-search-wrapper">
            <button className="reset-search" onClick={this.resetFilters}>Reset Search</button>
          </div>
        </section>
      </div>
    );
  }

});

module.exports = Search;
