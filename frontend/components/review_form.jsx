var React = require('react');
var BusinessStore = require('../stores/business');
var ApiUtil = require('../util/api_util');
var BusinessActions = require('../actions/business_api_action_creators');
var ReviewActions = require('../actions/reviews_api_action_creators');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ReviewForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return ({
      businesses: BusinessStore.allAbridged(),
      "title": "",
      "stars": "",
      "body":  "",
      "business": "",
    });
  },

  componentDidMount: function() {
    this.businessListener = BusinessStore.addListener(this._onChange);
    BusinessActions.fetchAbrigedBusinesses();
  },

  _onChange: function() {
    this.setState({ businesses: BusinessStore.allAbridged() });
  },

  componentWillUnmount: function() {
    this.businessListener.remove();
  },

  postReview: function (e) {
    e.preventDefault();
    ReviewActions.createSingleReview();
  },

  render: function() {
    var businessFocusId = this.businessFocusId();
    var businessOptions = this.businessOptions(businessFocusId);

    return (
      <section className="">
      <form className='review-form' onSubmit={this.postReview}>
        <label htmlFor='business'></label>
      <select id="business" valueLink={this.linkState("business")}>
        {businessOptions}
      </select>
        <label htmlFor='title'></label>
        <input
          type="text"
          id='title'
          required
          placeholder="Enter your title here"
          valueLink={this.linkState("title")}
        />
        <label htmlFor='stars'></label>
        <input
          type="range"
          id='stars'
          placeholder="2.5"
          valueLink={this.linkState("stars")}
        />
        <label htmlFor='body'></label>
        <textarea
          id='body'
          required
          placeholder="What would you like to say?"
          valueLink={this.linkState("body")}
        />
        <button>Submit Review</button>
      </form>
      </section>
    );
  },

  businessFocusId: function () {
    var businessFocusId;
    if (window.location.pathname.includes('businesses')) {
      businessFocusId = this.props.id;
    } else {
      businessFocusId = 1;
    }
    return businessFocusId;
  },

  businessOptions: function (businessFocusId) {
    return this.state.businesses.map( function(business) {
      if (business.id === businessFocusId) {
        return (<option key={business.id} value={business.id} defaultValue>{business.name}</option>)
      } else {
        return (<option key={business.id} value={business.id}>{business.name}</option>);
      }
    });
  }

});

module.exports = ReviewForm;
