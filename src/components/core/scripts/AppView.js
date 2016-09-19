// Loading dependencies.
import Backbone from 'backbone';
import HeaderView from '../../header/scripts/';
import MainView from '../../mainView/scripts/';
import FooterView from '../../footer/scripts/';
require('../styles/global.scss');

export default Backbone.View.extend({
    /**
     * Selector for view element already in the DOM.
     *
     * @type {String}
     */
    el: '[data-view-container]',

    /**
     * Stores references to the instantiated views.
     *
     * @type {Array}
     */
    subViews: null,

    /**
     * Sets up an internal array to house the sub-views that will be made
     * during the rendering process.
     */
    initialize: function() {
        this.subViews = [];
    },

    /**
     * Renders this views sub-views.
     *
     * @return {Backbone.View}
     */
    render: function() {
        this.subViews.push(new HeaderView({
            el: this.el.querySelector('[data-view="header"]')
        }).render());

        this.subViews.push(new MainView({
            el: this.el.querySelector('[data-view="main"]')
        }).render());

        this.subViews.push(new FooterView({
            el: this.el.querySelector('[data-view="footer"]')
        }).render());

        return this;
    },

    /**
     * Calls cleanup logic for sub-views, resets the internal array then
     * triggers the standard view removal logic on itself.
     *
     * @return {Backbone.View}
     */
    remove: function() {
        this.subViews.forEach(function(subView, index) {
            subView.remove();
            this.subViews[index] = null;
        }, this);

        this.subViews.length = 0;

        return Backbone.View.prototype.remove.apply(this, arguments);
    }
});
