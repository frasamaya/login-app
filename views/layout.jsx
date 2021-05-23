var React = require('react');
var PropTypes = require('prop-types');

function Layout(props) {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <link rel="stylesheet" href="/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/css/main.css"/>
      </head>
      <body>
        <section>
          <div className="container mt-4">
            <div className="container">
              {props.children}
            </div>
          </div>
        </section>
        <script src="/scripts/jquery.min.js" charSet="utf-8"></script>
        <script src="/js/bootstrap.min.js" charSet="utf-8"></script>
        <script src="/js/scripts.js" charSet="utf-8"></script>
      </body>
    </html>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
};

module.exports = Layout;