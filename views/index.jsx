var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');

function Index(props) {
  return (
    <Layout title={props.title}>
      <p>Welcome to {props.title}</p>
      <p>
        You have been loged in successfully
      </p>
    </Layout>
  );
}

Index.propTypes = {
  title: PropTypes.string,
};

module.exports = Index;