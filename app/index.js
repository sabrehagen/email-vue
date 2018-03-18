// THIS IS AN QUICK-EXAMPLE

import Vue from 'vue';

let messageList = require('./components/message-list');
let singleMessage = require('./components/single-message');
let messages = require('./data/data.json');
let data = {
    data: {
        mainView: 'message-list',
        activeMessage: null,
        messages: messages
    }
};

window.data = data;

let app = new Vue({
    el: '.app-container',
    template: '',
    data: data,
    components: {
        messageList: messageList,
        message: singleMessage
    }
});