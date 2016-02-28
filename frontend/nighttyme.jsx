var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var HashHistory = require('react-router').hashHistory;


var signupcheck = require('./util/signupcheck');
var geolocate = require('./util/geolocate');
var ApiUtil = require('./util/api_util');
var App = require('./components/app');
var ReviewsIndex = require('./components/reviews_index');
var Reviews = require('./components/reviews');
var ReviewDetail = require('./components/review_detail');
var Businesses = require('./components/businesses');
var BusinessDetail = require('./components/business_detail');

var BusinessStore = require('./stores/business');
var ReviewsStore = require('./stores/reviews');
var ErrorStore = require('./stores/errors');

window.ApiUtil = ApiUtil;
window.BusinessStore = BusinessStore;
window.ReviewsStore = ReviewsStore;

var routes = (
  <Route path="/" component={App}>
    <Route path="businesses" component={Businesses}>
    </Route>
    <Route path="businesses/:id" component={BusinessDetail}>
      <Route path="reviews" component={ReviewsIndex}>
        <Route path=":id" component={ReviewDetail}/>
      </Route>
    </Route>
    <Route path="reviews" component={ReviewsIndex}>
      <Route path=":id" component={ReviewDetail}/>
    </Route>
    <IndexRoute component={ReviewsIndex} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Router history={HashHistory}>{routes}</Router>, document.getElementById('root'));
});
