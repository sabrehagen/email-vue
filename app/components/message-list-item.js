import template from './message-list-item.html';

let singleMessage = require('./single-message');

module.exports = {
    name: 'message-list-item',
    template: template,
    props: [
        'message',
        'data'
    ],
    data: function () {
        return {
            active: false
        }
    },
    methods: {
        getSubject () {
            return this.message.subject.substr(0, 30);
        },
        toggleActive () {
            this.message.unread = false;
            this.active = !this.active;
        },
        showMessage(message) {
            console.log(message);
            this.data.activeMessage = message;
            this.data.mainView = 'message';
        }
    },
    watch: {},
    computed: {},
    components: {
        // singleMessage: singleMessage
    }
};