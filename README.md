<h1>Meteor + React + Material UI base</h1>

<p>Currently the Meteor-React packages (react-packages) aren’t in the public index and the react package doesn’t run nice with Material UI package, so we'll install React via browserify and the rest a la Meteor way.</p>

<pre>
  git clone https://github.com/meteor/react-packages /path/to/react-packages
  export PACKAGE_DIRS=/path/to/react-packages
  meteor add babel-compiler babel-runtime jsx react-meteor-data
</pre>
Note: /path/to is where you keep your local/private packages

Then we create a local package browserify-deps, to store all our browserify dependencies. It could also be useful to install react-router or others React deps.

<pre>
  meteor add cosmos:browserify
  meteor create --package browserify-deps
</pre>

<pre>
  // packages/browserify-deps/client.browserify.js
  React = require('react');
  mui = require('material-ui’);
  injectTapEventPlugin = require("react-tap-event-plugin");
  // packages/browserify-deps/packages.js
  Package.describe({
    name: 'browserify-deps',
    version: '0.0.1',
  });

  Npm.depends({
    'react': '0.13.3',
    'material-ui':'0.8.0'
  });

  Package.onUse(function(api) {
    api.use(['cosmos:browserify@0.3.0'], 'client');
    api.addFiles(['client.browserify.js'], 'client');

    api.export('React', 'client');
    api.export('mui', 'client');
    api.export('injectTapEventPlugin', 'client');
  });

</pre>

  And now let's install our package

<pre>
  meteor add browserify-deps
</pre>

Our Meteor + React + Material UI is ready and we can now start coding!

<br><br>

We don't use any router in this example so, let's attach the react component when Meteor is ready.

<pre>
  // client/startup.jsx
  Meteor.startup(function () {
    // Required by Material UI http://material-ui.com/#/get-started
    injectTapEventPlugin();
    // React component mounted in the DOM
    React.render(<App />, document.body);
  });
</pre>
