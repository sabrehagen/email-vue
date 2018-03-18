import template from './single-message.html';

module.exports = {
    name: 'message',
    template: template,
    props: [
        'message',
        'data'
    ],
    data: function () {
        return {
            replying: false,
            messageReply: '',
        }
    },
    methods: {
        reply () {
            this.replying = true;
        },
        doReply () {
            console.log(this.messageReply);
            this.replying = false;
        },
        back () {
            this.data.mainView = 'message-list',
            this.data.activeMessage = null;
        }
    },
    watch: {},
    computed: {},
    components: {}
};