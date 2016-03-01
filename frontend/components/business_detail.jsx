var React = require('react');
var ReviewsStore = require('../stores/reviews');
var ReviewActions = require('../actions/reviews_api_action_creators');
var BusinessActions = require('../actions/business_api_action_creators');
var BusinessStore = require('../stores/business');
var Reviews = require('./reviews');

var BusinessDetail = React.createClass({
  getInitialState: function () {
    return ({ business: BusinessStore.singleBusiness() });
  },
  componentDidMount: function () {
    this.businessListener = BusinessStore.addListener(this._onChange);
    BusinessActions.fetchSingleBusiness(parseInt(this.props.params.id));
  },
  componentWillUnmount: function () {
    this.businessListener.remove();
  },
  _onChange: function () {
    this.setState({ business: BusinessStore.singleBusiness() });
  },
  searchOnTag: function(e) {
    e.preventDefault();
    console.log(e);
  },
  tags: function () {
    var tags = this.state.business.tags
    var that = this;
    if (tags) {
      return Object.keys(tags).map( function (tag, idx) {
        var name = tags[tag].name.replace(/(\b[a-z](?!\s))/g,
          function(x) {return x.toUpperCase();});
        return <div className="tag" onClick={that.searchOnTag} key={idx}>{name}</div>;
      });
    }
  },
  hours: function () {
    var days = this.state.business.hour_attributes
    if (days) {
      return Object.keys(days).map( function (day, idx) {
        var capitalizedDay = day.replace(/(\b[a-z](?!\s))/g,
          function(x) {return x.toUpperCase();});
        return <li key={idx} className="Hour">
          <div className="day">{capitalizedDay}:</div>
          <div className="hour">{days[day]}</div>
        </li>
      });
    }
  },
  additionalInfo: function () {
    var infoItems = this.state.business.bussinessattribute_attributes
    if (infoItems) {
      return Object.keys(infoItems).map( function (item, idx) {
        var detail;

        if (infoItems[item] === undefined) {
          detail = "No";
        } else if (infoItems[item] === false) {
          detail = "No";
        } else if (infoItems[item] == 1) {
          detail = "Yes";
        } else if (infoItems[item] == 0) {
          detail = "No";
        } else {
          detail = infoItems[item].replace(/(\b[a-z](?!\s))/g,
            function(x) {return x.toUpperCase();});
        }

        var kind = item.replace(/_/g, " ").replace(/(\b[a-z](?!\s))/g,
          function(x) {return x.toUpperCase();});

        return (
          <li key={idx} className="infoItem">
            <div className="type">{kind}:</div>
            <div className="quality">{detail}</div>
          </li>
        )
      });
    }
  },
  reviewItems: function () {
    var reviewItems = this.state.business.reviews
    if (reviewItems) {
      return Object.keys(reviewItems).map( function (review)  {
        return review;
      });
    }
  },
  neighborhood: function () {
    if (this.state.business.neighborhoods) {
      return this.state.business.neighborhoods.replace(/\[|\]|"/g, "");
    }
  },
  priceIndicator: function () {
    var pricingInfo = this.state.business.price
    var pricingIndicator = "";

    for (var i = 0; i < pricingInfo; i++) {
      pricingIndicator += "$";
    }
    pricingIndicator += "  · "

    return pricingIndicator;
  },

  render: function() {
    var business = this.state.business;
    var hours = this.hours();
    var additionalBusinessInfo = this.additionalInfo();
    var reviews = this.reviewItems();
    var tags = this.tags();
    var neighborhoods = this.neighborhood();
    var price = this.priceIndicator();
    var rating = business.average_rating
    var num_reviews = business.num_reviews + " Reviews"

    return (
      <article className="business-detail">
        <div className="topbar-spacer">
          <section className="topbar">
            <div className="business-quick-info">
              <h2 className="business-name">{business.name}</h2>
              <div className="ratings-wrapper">
                <div className="rating" data-rating={rating}>
                  <i className="star-1">★</i>
                  <i className="star-2">★</i>
                  <i className="star-3">★</i>
                  <i className="star-4">★</i>
                  <i className="star-5">★</i>
                </div>
                <h4 className="aggregate-reviews">{num_reviews}</h4>
              </div>
              <div className="price-tags">
                <h4 className="price">{price}</h4>
                <div className="tags">{tags}</div>
              </div>
            </div>
            <section className="location-group">
              <h4 className="location">{business.location}</h4>
              <h4 className="neighborhood">{neighborhoods}</h4>
              <h4 className="telephone">{business.telephone_number}</h4>
            </section>
          </section>
        </div>
        <section className="reviews-index">
          <Reviews reviews={business.reviews} reviewId={this.props.params.id[1]} businessId={this.props.params.id[0]}/>
        </section>
        <section className="other-business-info">
          <section className="hours">
            <h4 className="hours-overall-title">Hours</h4>
            <ul>
              {hours}
            </ul>
            <div className="group"></div>
          </section>
          <section className="additional-business-info">
            <h4 className="additional-business-info-title">More Business Info</h4>
            <ul>
              {additionalBusinessInfo}
            </ul>
            <div className="group"></div>
          </section>
          <section className="descriptions">
            <h4 className="description-title">From the business</h4>
            <p className="description-item">{business.description}</p>
          </section>
        </section>
        <div className="group"></div>
      </article>
    );
  }

});

module.exports = BusinessDetail;
