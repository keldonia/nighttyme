var React = require('react');
var BusinessStore = require('../stores/business');
var ApiUtil = require('../util/api_util');
var BusinessActions = require('../actions/business_api_action_creators');
var ReviewActions = require('../actions/reviews_api_action_creators');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var Rating = require('./rating');

var ReviewForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return this.blankattrs();
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
      review[key] = this.state[key];
    }, this)
    var passedReview = {review: review}
    ReviewActions.createSingleReview(passedReview);
    BusinessActions.fetchSingleBusiness(this.state.business_id);
    this.setState(this.blankattrs());
  },
  blankattrs: function () {
    return ({
      businesses: BusinessStore.allAbridged(),
      "title": "",
      "stars": "3",
      "body":  "",
      "business_id": this.businessFocusId(),
    });
  },
  starSelect: function (id, e) {
    e.preventDefault();
    this.setState({ stars: e.target.id });
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
            <div className="rating" data-rating={this.state.stars}>
              <i onClick={this.starSelect.bind(this, this.id)} id="1" className="star-1">★</i>
              <i onClick={this.starSelect.bind(this, this.id)} id="2" className="star-2">★</i>
              <i onClick={this.starSelect.bind(this, this.id)} id="3" className="star-3">★</i>
              <i onClick={this.starSelect.bind(this, this.id)} id="4" className="star-4">★</i>
              <i onClick={this.starSelect.bind(this, this.id)} id="5" className="star-5">★</i>
            </div>
            <input
              type="range"
              id='stars'
              max='5'
              min='1'
              step="0.5"
              className="stars"
              placeholder={this.state.stars}
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
    if (this.props.businessId) {
      businessFocusId = this.props.businessId;
    } else {
      businessFocusId = 1;
    }
    return businessFocusId;
  },

  businessOptions: function (businessFocusId) {
    return this.state.businesses.map( function(business) {
      var key = business.name + business.id
      if (business.id === businessFocusId) {
        return (<option key={key} value={business.id} defaultValue>{business.name}</option>)
      } else {
        return (<option key={key} value={business.id}>{business.name}</option>);
      }
    });
  }

});

module.exports = ReviewForm;
