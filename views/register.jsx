var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');

function Index(props) {
  return (
    <Layout title={props.title}>
      <p>Register</p>
    </Layout>
  );
}

Index.propTypes = {
  title: PropTypes.string,
};

module.exports = Index;