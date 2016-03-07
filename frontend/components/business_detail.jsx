var React = require('react');
var ReviewsStore = require('../stores/reviews');
var ReviewActions = require('../actions/reviews_api_action_creators');
var BusinessActions = require('../actions/business_api_action_creators');
var BusinessStore = require('../stores/business');
var GMap = require('./gmap');
var Reviews = require('./reviews');
var Rating = require('./rating');
var PriceTags = require('./price_tags');

var BusinessDetail = React.createClass({

  getInitialState: function () {
    return ({ business: BusinessStore.singleBusiness() });
  },
  componentDidMount: function () {
    this.businessListener = BusinessStore.addListener(this._onChange);
    BusinessActions.fetchSingleBusiness(parseInt(this.props.params.id));
  },
  componentWillReceiveProps: function (newProps) {
    BusinessActions.fetchSingleBusiness(parseInt(newProps.params.id));
  },
  componentWillUnmount: function () {
    this.businessListener.remove();
  },
  _onChange: function () {
    this.setState({ business: BusinessStore.singleBusiness() });
  },
  locationFix: function() {
    var location = this.state.business.location;
    if (location) {
      var matches = location.match(/\["(.*?)\".*?\"(.*?)"\]/).slice(1);
      return matches;
    } else {
      return [undefined, undefined];
    }

  },
  hours: function () {
    var days = this.state.business.hour_attributes
    if (days) {
      var date = new Date ();
      return Object.keys(days).map( function (day, idx) {
        var currentDay;
        if (date.getHours() <= 4) {
          currentDay = (idx + 6) % 6;
        } else {
          currentDay = idx % 6;
        }
        var capitalizedDay = day.replace(/(\b[a-z](?!\s))/g,
        function(x) {return x.toUpperCase();});
        var times = days[day].match(/^(\d{1,2}):(\d{2}).(\w).*\s(\d{1,2}):(\d{2}).(\w)/);
        var startHour = times[3] === "p" ? times[1] + 12 : times[1];
        var endHour = times[6] === "p" ? times[4] + 12 : times[4];
        if (currentDay === date.getDay() &&
          startHour >= date.getHours() &&
          endHour <= date.getHours()
          ) {
          capitalizedDay = "Open Now!  " + capitalizedDay;
          return <li key={idx} className="Hour green">
            <div className="day">{capitalizedDay}:</div>
            <div className="hour">{days[day]}</div>
          </li>
        } else {
          return <li key={idx} className="Hour">
            <div className="day">{capitalizedDay}:</div>
            <div className="hour">{days[day]}</div>
          </li>
        }
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


  render: function() {
    var business = this.state.business;
    var hours = this.hours();
    var additionalBusinessInfo = this.additionalInfo();
    var reviews = this.reviewItems();
    var neighborhoods = this.neighborhood();
    var location = this.locationFix();
    var rating = business.average_rating;
    var num_reviews = business.num_reviews + " Reviews"

    return (
      <article className="business-detail">
        <div className="topbar-spacer">
          <section className="topbar">
            <div className="business-quick-info">
              <h2 className="business-name">{business.name}</h2>
              <div className="ratings-wrapper">
                <Rating stars={rating} />
                <h4 className="aggregate-reviews">{num_reviews}</h4>
              </div>
              <PriceTags price={this.state.business.price} tags={this.state.business.tags} />
            </div>
            <section className="location-group">
              <GMap />
              <section className="location-text">
                <h4 className="location">{location[0]}</h4>
                <h4 className="location">{location[1]}</h4>
                <h4 className="neighborhood">{neighborhoods}</h4>
                <h4 className="telephone">{business.telephone_number}</h4>
              </section>
            </section>
            <div className="business-image">
              <img  src={business.image_url}
                    alt="business image"
              />
              <p>{business.name}</p>
           </div>
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
