var React = require('react');
var ListItem = require('./ListItem.jsx');

//Data source
var ingredients = [{"id":1,"text":"ham"},{"id":2,"text":"cheese"},{"id":3,"text":"potatoes"},{"id":4,"text":"honey"}];

var List = React.createClass({
    render: function() {
        var listItems = ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;
