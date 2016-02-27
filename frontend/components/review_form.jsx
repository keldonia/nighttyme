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
      "stars": "2.5",
      "body":  "",
      "business_id": this.businessFocusId(),
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
    var review = {};
    var keys = Object.keys(this.state).slice(1);
    keys.forEach(function (key) {
      if (key === 'stars') {
        review[key] = parseInt(this.state[key]);
      } else {
        review[key] = this.state[key];
      }
    }, this)
    var passedReview = {review: review}
    debugger
    ReviewActions.createSingleReview(passedReview);
    this.blankattrs();
  },

  blankattrs: function () {
    this.setState({
      businesses: BusinessStore.allAbridged(),
      "title": "",
      "stars": "2.5",
      "body":  "",
      "business_id": this.businessFocusId(),
    });
  },

  render: function() {
    var businessFocusId = this.businessFocusId();
    var businessOptions = this.businessOptions(businessFocusId);

    return (
      <section className="review-form-wrapper group">
        <h2 className="Add a review">What's your hot take?</h2>
        <form className='review-form' onSubmit={this.postReview}>
          <label htmlFor='business'></label>
          <div className="minimal-selector">
            <select id="business" valueLink={this.linkState("business_id")}>
              {businessOptions}
            </select>
          </div>
          <label htmlFor='title'></label>
          <input
            type="text"
            id='title'
            required
            placeholder="Enter your title here"
            valueLink={this.linkState("title")}
          />
          <label htmlFor='stars'></label>
          <div className="stars-holder">
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
              valueLink={this.linkState("stars")}
            />
          </div>
          <label htmlFor='body'></label>
          <textarea
            id='body'
            required
            placeholder="What would you like to say?"
            valueLink={this.linkState("body")}
          />
        <div id="submit" className="group">
          <input type="submit" value="Submit Review"></input>
        </div>
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
