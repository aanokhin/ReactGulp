var React = require('react');

module.exports = React.createClass({
  render: function(){
    return <div>
      I am a topic # {this.props.params.id}!
    </div>
  }
})
