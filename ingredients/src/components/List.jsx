var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
    render: function() {
        //React wants lists that can be uniquely identified. This is why we set a unique key
        var createItem = function(text, index) {
            return <ListItem key={index + text} text={text} />;
        };

        //Goes through each item in the items dataset and creates a ListItem component
        //for each item
        return (<ul>{this.props.items.map(createItem)}</ul>);
    }
});

module.exports = List;
