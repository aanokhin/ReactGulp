var React = require('react');
var TopicStore = require('../stores/topic-store');
var CreateFragment = require('react-addons-create-fragment');
var Reflux = require('reflux');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


// var   ListItemWrapper = React.createClass({
//       render: function() {
//         return
//        <li>
//         {createFragment(this.props.datat)}
//       </li>
//       }
//
//   });


module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      topics: []
    }
  },
  componentWillMount: function() {
    Actions.getTopics();
  ////TopicStore.getTopics();
  // .then(function(){
  //   //we successfully fetched topics
  //   this.setState({
  //       topics: TopicStore.topics
  //     })
  // }.bind(this))
  },
  render: function() {
    return  <div className="list-group">
      Topic List
      {this.renderTopics()}
    </div>
  },
  renderTopics: function() {
    return this.state.topics.map(function(topic) {
      return <Link to={"topics/"+ topic.id} className="list-group-item" key={topic.id}>
        <h4>{topic.name}</h4>
          <p>{topic.description}</p>
      </Link>
    });
  },
  onChange: function(event, topics){
    this.setState({topics: topics});
  }
});
