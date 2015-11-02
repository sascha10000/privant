var app = document.querySelector('#app');

index();

page('/', index);
page('/about', aboutUs);

page({hasbang: true});

function index(){
    app.route = 'index';
}

function aboutUs(){
    app.route = 'aboutUs';
}