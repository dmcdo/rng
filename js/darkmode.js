/* https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#Example_2_Get_a_sample_cookie_named_test2 */
let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)darkmode\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if (cookieValue === 'true') darkmode();

function darkmode () {
    var cssId = 'darkmode';
    if (!document.getElementById(cssId))
    {
        let head  = document.getElementsByTagName('head')[0];
        let link  = document.createElement('link');
        link.id   = 'darkmode';
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = './css/darkmode.css';
        link.media = 'all';
        head.appendChild(link);
        document.cookie = "darkmode=true";
    }
    else {
        let head  = document.getElementsByTagName('head')[0];
        let link = document.getElementById(cssId);
        head.removeChild(link);
        document.cookie = "darkmode=false";
    }
}
