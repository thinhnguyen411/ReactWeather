var React =require('react');
var Nav =require('Nav');

// var Main = React.createClass({
//   render: function () {
//     return (
//
//     <div>
//       <Nav/>
//       <h2>Main Component</h2>
//       {this.props.children}
//     </div>
//     );
//   }
// });
//ko can this nua vi props duoc truyen vao nhu tham so roi
var Main = (props) => {
  return (
  <div>
    <Nav/>
    <h2>Main Component</h2>
    {props.children}
  </div>
  );
};

module.exports = Main;
