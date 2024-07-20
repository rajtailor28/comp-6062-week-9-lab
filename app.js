const app = Vue.createApp({
    data(){
        return{
            greeting: 'Welcome to Vue.js!',
            message: 'This message is displayed based on a boolean property',
            showMessage: true
        };
    }
});
app.mount('#app');
