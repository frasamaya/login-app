var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');

function Index(props) {
  return (
    <Layout title={props.title}>
      <form action="/user/login" method="POST">
        <div>
          Login
        </div>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" className="form-control" type="text" name="username"/>
         </div>
         <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" className="form-control" type="password" name="password"/>
         </div>
         <button type="submit" name="button" id="btn-login" className="btn btn-success">
            LOGIN
         </button>
      </form>
    </Layout>
  );
}

Index.propTypes = {
  title: PropTypes.string,
};

module.exports = Index;