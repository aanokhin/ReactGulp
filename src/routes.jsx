var React = require('react');
//var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var History = require('react-router/lib/History')
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Topics = require('./components/topic');

module.exports = (
  <Router >
    <Route path="/"  component={Main} >
      <Route path='topics/:id' component={Topics} />
    </Route>
  </Router>
);
