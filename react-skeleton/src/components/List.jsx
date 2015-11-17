var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
    render: function() {
        var ingredients = [{"id":1,"text":"ham"},{"id":2,"text":"cheese"},{"id":3,"text":"potatoes"},{"id":4,"text":"honey"}];

        var listItems = ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;
