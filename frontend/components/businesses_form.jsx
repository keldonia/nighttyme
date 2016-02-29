var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var BusinessesNew = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return ({
      "name": "";
      "description": "";
      "location": "";
      "latitude": "";
      "longitude": "";
      "price": 1;
      "email": "";
      "telephone_number": "";
      "website": "";
      hour_attributes: [
        "mondayst": "";
        "mondayed": "";
        "tuesdayst": "";
        "tuesdayed": "";
        "wednesdayst": "";
        "wednesdayed": "";
        "thursdayst": "";
        "thursdayed": "";
        "fridayst": "";
        "fridayed": "";
        "saturdayst": "";
        "saturdayed": "";
        "sundayst": "";
        "sundayed": "";
      ],
      bussinessattribute_attributes: [
        "reservations": 0;
        "credit_cards": 0;
        "parking": "street";
        "bike_parking": 0;
        "good_for_groups": 0;
        "ambience": "casual";
        "live_music": 0;
        "alcohol": "Full Bar";
        "best_nights": "";
        "coat_check": 0;
        "happy_hour": 0;
        "smoking": 0;
        "outdoor_seating": 0;
        "tv": 0;
        "pool_table": 0;
      ]

    });
  },

  render: function() {
    return (
      <div />
    );
  }

});

module.exports = BusinessesNew;
