var React = require('react');
var BusinessStore = require('../stores/business');
var BusinessActions = require('../actions/business_api_action_creators');
var FilterActions = require('../actions/filter_actions');

var CENTER = { lat: 37.7758, lng: -122.435 };

var MAPSTYLE = [{
  "stylers": [
    { "saturation": 7 },
    { "lightness": -8 },
    { "gamma": 1.18 },
    { "weight": 1.0 },
    { "hue": '#704214' }
  ]
}];

var GMap = React.createClass({

  getInitialState: function () {
    this.markers = {};
    return({businesses: BusinessStore.all(), highlight: ""});
  },

  componentDidMount: function () {
    var mapDOMNode = this.refs.map
    var mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13,
      styles: MAPSTYLE
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.businessListener = BusinessStore.addListener(this._businessesChanged);
    this.listenForMove();
  },
  componentWillUnmount: function () {
    this.businessListener.remove();
  },
  centerBusinessCoords: function () {
    var business = this.props.businesses
    if (business) {
      if (business[0] && business[0].lng) {
        var business = this.props.business[0];
        return { lat: business.latitude, lng: business.longitude };
      } else {
        return CENTER;
      }
    }
  },
  _businessesChanged: function () {
    var that = this;
    this.setState({ businesses: BusinessStore.all() });
    this.state.businesses.forEach(function(business) {that.addBusiness(business)}, this);
    if (that.markers) {
      Object.keys(that.markers).forEach(function(key) {that.removeMarker(that.markers[key])}, that);
    }
  },
  addBusiness: function (business) {
    if (this.markers[business.id]) {
    } else {
      var that = this;
      var pos = new google.maps.LatLng(business.latitude, business.longitude);
      marker = new google.maps.Marker({
        position: pos,
        map: this.map,
      });
      marker.setMap(this.map);
      marker.setIcon("http://maps.google.com/mapfiles/ms/icons/bar.png");
      marker.hoverListener = marker.addListener('mouseover', this.handleMarkerHover.bind(this, business, marker));
      var markerHolder = {id: business.id, marker: marker};
      this.markers[business.id] = markerHolder;
    }
  },
  handleMarkerHover: function (business, marker) {
    var contentString =
    '<div id="content">' +
    '<div id="siteNotice"' +
    '</div>' +
    '<h4 id="firstHeading" class="firstHeading">' +
    business.name +
    '</h4>' +
    '</div';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    var that = this;

    infowindow.open(this.map, marker);
    marker.addListener('mouseout', function () {
      infowindow.close(that.map, marker);
    });
  },
  removeMarker: function (markerHolder) {
    var marker = markerHolder.marker;
    var bounds = this.map.getBounds();
    if (bounds) {
      var business_ids = Object.keys(this.state.businesses).map( function (business) {
        return business.id
      });
      if (bounds.contains(marker.getPosition()) === false ||
        business_ids.includes(marker.id) === false) {

        google.maps.event.clearListeners(marker);
        markerHolder.marker.setMap(null);
        delete this.markers[markerHolder.id];
      }
    }
  },
  listenForMove: function () {
    var that = this;
    google.maps.event.addListener(this.map, 'idle', function() {
      var bounds = that.map.getBounds();
      if (bounds) {
        var northEastx = { lat: undefined, lng: undefined };
        var southWestx = { lat: undefined, lng: undefined };
        northEastx.lat = bounds.getNorthEast().lat();
        northEastx.lng = bounds.getNorthEast().lng();
        southWestx.lat = bounds.getSouthWest().lat();
        southWestx.lng = bounds.getSouthWest().lng();
        var bounding_box = { bounds: { northEast: northEastx, southWest: southWestx }};
        FilterActions.updateBounds({ northEast: northEastx, southWest: southWestx });
      }
    });
  },

  render: function () {
    return(
      <div className="map" ref="map" id="map">
      </div>
    );
  },

});

module.exports = GMap;
