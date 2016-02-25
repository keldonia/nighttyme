var React = require('react');
var BusinessStore = require('../stores/business');
var ApiUtil = require('../util/api_util');
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
    ApiUtil.fetchAbrigedBusinesses();
  },

  _onChange: function() {
    this.setState({ businesses: BusinessStore.allAbridged() });
  },

  componentWillUnmount: function() {
    this.businessListener.remove();
  },

  search: function (e) {
    e.preventDefault();
    console.log(e);
  },

  render: function() {
    var businessfocus;
    if (window.location.pathname.includes('businesses')) {
      businessfocus = this.props.id;
    } else {
      businessfocus = 1;
    }

    var businessOptions = this.state.businesses.map( function(business) {
      if (business.id === businessfocus) {
        return (<option key={business.id} value={business.id} defaultValue>{business.name}</option>)
      } else {
        return (<option key={business.id} value={business.id}>{business.name}</option>);
      }
    });
    // debugger

    return (
      <section className="">
      <form className='review-form' onSubmit={this.search}>
        <label htmlFor='business'></label>
      <select id="business" valueLink={this.linkState("business")}>
        {businessOptions}
      </select>
        <label htmlFor='title'></label>
        <input
          type="text"
          id='title'
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
          placeholder="What would you like to say?"
          valueLink={this.linkState("body")}
        />
        <button>Submit Review</button>
      </form>
      </section>
    );
  }

});

module.exports = ReviewForm;
