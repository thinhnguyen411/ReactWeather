var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//    var {temp,location} =this.props;
//   // var temp=this.props.temp;
//   // var location=this.props.location;
//
//     return (
//       <h3>It's it {temp} Celsius in {location}.</h3>
//     )
//   }
// });
var WeatherMessage = ({temp, location}) => {
    // var {temp,location} =props;
    return (
        <h3 className="text-center">It's {temp} Celsius in {location} !!!</h3>
    )
};

module.exports = WeatherMessage;
