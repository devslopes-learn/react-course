var React = require('react');

var Base = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Header</h1>
                {this.props.children}
                <h1>Footer</h1>
            </div>
        );
    }
});

module.exports = Base;
