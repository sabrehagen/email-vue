import template from './message-list.html';

let _ = require('lodash');
let data = require('../data/data.json');

let messageListItem = require('./message-list-item');

module.exports = {
    name: 'message-list',
    template: template,
    props: [
        'data'
    ],
    data: function () {
        return {
            searchQuery: ''
        }
    },
    methods: {
        getMessages() {
            if (!this.searchQuery) {
                return this.data.messages;
            } else {
                return _.filter(this.data.messages, (item) => {
                    let match = false;
                    match = item.subject.match(new RegExp(this.searchQuery, 'ig'));
                    if (!match) {
                        match = item.from.match(new RegExp(this.searchQuery, 'ig'));
                    }
                    return match;
                });
            }
        }
    },
    watch: {},
    computed: {},
    components: {
        messageListItem: messageListItem
    }
};