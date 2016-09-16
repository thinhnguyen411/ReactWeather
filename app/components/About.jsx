var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About component</h3>
//     )
//   }
// });

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p className="text-center">Weather App,2016 by Thinh Nguyen</p>
        </div>
    )
};

module.exports = About;
