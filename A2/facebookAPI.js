 // *************Facebook API **********************************************//

 // JavaScript SDK (FB Developer Code)
 window.fbAsyncInit = function() {

    FB.init({
        appId: '283114726304807', // FB App ID
        cookie: true,
        xfbml: true,
        version: 'v7.0'
    });

    // (FB Developer Code)
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            userInfo();
        }
    });
};

// JavaScript SDK asynchronously (FB Developer Code)
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//login function to be called on login (plugin FB from the button Continue with Facebook)
function Login() {
    FB.login(function(response) {
        userInfo();

    });
}

// Retrieve info from fb server (API)
function userInfo() {
    FB.api('/me', {
            locale: 'en_US',
            fields: 'first_name,last_name,locale,picture'
        },
        function(response) {


            document.getElementById('picture').innerHTML = '<img src="' + response.picture.data.url + '"/>';
            document.getElementById('status').innerHTML = '<p>You are logged in, ' + response.first_name + response.last_name + '</p>';
        });


}