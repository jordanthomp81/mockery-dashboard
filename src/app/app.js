'use strict';
var React = require('react');

var ExampleApp = React.createClass({
    render: function() {
        return (
            /*jshint ignore:start */
            <div>
                <h2>Hello, React!</h2>
            </div>
            /*jshint ignore:end */
        );
    }
});

const APP = document.getElementById('app');
React.render(<ExampleApp />, APP);
