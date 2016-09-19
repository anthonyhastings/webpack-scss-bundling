// Loading dependencies.
import {View} from 'backbone';
require('../styles/index.scss');

export default View.extend({
    /**
     * Pre-compiled template function for this view.
     *
     * @type {Function}
     */
    template: require('../templates/index.handlebars'),

    /**
     * Renders this views template into the view element.
     *
     * @return {Backbone.View}
     */
    render: function() {
        this.$el.html(this.template());

        return this;
    }
});
