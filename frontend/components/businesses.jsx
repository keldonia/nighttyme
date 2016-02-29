var BusinessStore = require('../stores/business');
var ReviewsStore = require('../stores/reviews');
var ErrorStore = require('../stores/errors');
var BusinessIndexItem = require('./business_index_item');
var BusinessActions = require('../actions/business_api_action_creators');
var ApiUtil = require('../util/api_util');
var GMap = require('./gmap');
var Search = require('./search');
var React = require('react');

var Businesses = React.createClass({
  getInitialState: function () {
    return({ businesses: BusinessStore.all() });
  },
  componentDidMount: function() {
    this.businessListener = BusinessStore.addListener(this._onChange);
    BusinessActions.fetchAllBusinesses();
  },
  componentWillUnmount: function () {
    this.businessListener.remove();
  },
  _onChange: function () {
    this.setState({ businesses: BusinessStore.all() });
  },

  render: function() {
    var businesses = this.orderBusinesses();

    return (
      <section className='businesses-component'>
        <GMap />
        <div className="business-index">
          <ul>
            {businesses}
          </ul>
        </div>
        <div className="group"></div>
      </section>
    );
  },

  orderBusinesses: function() {
    return this.state.businesses.map( function(business) {
      return <BusinessIndexItem key={business.id} business={business} />;
    }, this);
  }
});

module.exports = Businesses;
