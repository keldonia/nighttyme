var React = require('react');
var ReviewsStore = require('../stores/reviews');
var ReviewActions = require('../actions/reviews_api_action_creators');
var BusinessActions = require('../actions/business_api_action_creators');
var BusinessStore = require('../stores/business');
var ReviewIndex = require('./reviews');

var BusinessDetail = React.createClass({
  getInitialState: function () {
    return ({ business: BusinessStore.singleBusiness });
  },
  componentDidMount: function () {
    this.businessListener = BusinessStore.addListener(this._onChange);
    BusinessActions.fetchSingleBusiness(parseInt(this.props.business.id));
  },
  componentWillUnmount: function () {
    this.businessListener.remove();
  },
  _onChange: function () {
    this.setState({ business: BusinessStore.singleBusiness });
  },
  hours: function () {
    var days = this.state.business.hour_attributes
    return Object.keys(days).map( function (day, idx) {
      return <li key={idx} className="Hour">{days[day]}</li>
    });
  },
  additionalInfo: function () {
    var infoItems = this.state.business.bussinessattribute_attributes
    return Object.keys(infoItems).map( function (item, idx) {
      return (
        <li key={idx} className="infoItem">
          <p className="type">{item}</p>
          <p className="quality">{infoItems[item]}</p>
        </li>
      )
    });
  },

  render: function() {
    var business = this.state.business;
    var hours = this.hours();
    var additionalBusinessInfo = this.additionalInfo();

    return (
      <article className="business-detail">
        <section className="topbar">
          <h2 className="business-name">{business.name}</h2>
          <div className="rating" data-rating="2">
            <i className="star-1">★</i>
            <i className="star-2">★</i>
            <i className="star-3">★</i>
            <i className="star-4">★</i>
            <i className="star-5">★</i>
          </div>
          <h4 className="aggregate-reviews">infinity billion reviews</h4>
          <h4 className="price">{business.price}</h4>
          <section className="tags">Something</section>
          <section className="location-zone">
            <h4 className="location">{business.location}</h4>
            <h4 className="neighborhood">{business.neighborhoods}</h4>
            <h4 className="telephone">{business.telephone_number}</h4>
          </section>
        </section>
        <section className="reviews-column">
          <ReviewIndex reviews={business.reviews} />
        </section>
        <section className="other-business-info">
          <section className="hours">
            <h4>Hours</h4>
            <ul>
              {hours}
            </ul>
          </section>
          <section className="additional-business-info">
            {additionalBusinessInfo}
          </section>
          <section className="description">
            <p>{business.description}</p>
          </section>
        </section>

      </article>
    );
  }

});

module.exports = BusinessDetail;