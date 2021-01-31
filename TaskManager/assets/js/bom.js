/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/



 
// Define UI Variables  here 
const info = document.querySelectorAll('.collection');          // All collection classes
// location Information
const locationInfo = info[0];           // The first collection class
const locationInfoChildren = locationInfo.querySelectorAll(".collection-item");            // all collection-item classes in the 1st collection class
const hrefLink = locationInfoChildren[0];
const protocolLink = locationInfoChildren[1];
const hostLink = locationInfoChildren[2];
const portLink = locationInfoChildren[3];
const hostNameLink = locationInfoChildren[4];
// Browser Information
const browserInfo = info[1];            // the second collection class
const browserInfoChildren = browserInfo.querySelectorAll('.collection-item');            // all collection-item classes in the 2nd collection class
const appNameLink = browserInfoChildren[0];
const appVersionLink = browserInfoChildren[1];
const platformLink = browserInfoChildren[2];
const languageLink = browserInfoChildren[3];
const cookieEnabledLink = browserInfoChildren[4];
// Screen Information
const screenInfo = info[2];         // The third collection class
const screenInfoChildren = screenInfo.querySelectorAll('.collection-item');         // all collection-item classes in the 3rd collection class
const heightLink = screenInfoChildren[0];
const widthLink = screenInfoChildren[1];
const pixelDepthLink = screenInfoChildren[2];
// Browsing History Information
const historyInfo = info[3];            // The fourth collection class
const historyInfoChildren = historyInfo.querySelectorAll('.collection-item');       // all collection-item classes in the 4th collection class
const lengthLink = historyInfoChildren[0];
const stateLink = historyInfoChildren[1];



const reloadIcon = document.querySelector('.fa');           // the reload button at the top right of navigation
// Reload Page Function [BOM Object Event]
function reloadPage(){
    // using the reload fun on location object
    location.reload();
}
// Event Listener for reload
reloadIcon.addEventListener('click', reloadPage);

// Display the BOM Information on the innerHTML of the elements
let locationInfoAnswer = {
    // href Link information function definition
    hrefLinkAnswer: function(){
        // hrefLink.firstElementChild.removeChild(hrefLink.firstElementChild.firstChild);
        // hrefLink.firstElementChild.appendChild(document.createTextNode(location.href));
        hrefLink.firstElementChild.innerText = location.href;
    },
    // protocol information function definition
    protocolLinkAnswer: function(){
        // protocolLink.firstElementChild.removeChild(protocolLink.firstElementChild.firstChild);
        // protocolLink.firstElementChild.appendChild(document.createTextNode(location.protocol));
        protocolLink.firstElementChild.innerText = location.protocol;
    },
    // host information function definition
    hostLinkAnswer: function(){
        // hostLink.firstElementChild.removeChild(hostLink.firstElementChild.firstChild);
        // hostLink.firstElementChild.appendChild(document.createTextNode(location.host));
        hostLink.firstElementChild.innerText = location.host;
    },
    // port information function definition
    portLinkAnswer: function(){
        // portLink.firstElementChild.removeChild(portLink.firstElementChild.firstChild);
        // portLink.firstElementChild.appendChild(document.createTextNode(location.port));
        portLink.firstElementChild.innerText = location.port;
    },
    // Host Name information function definition
    hostNameLinkAnswer: function(){
        // hostNameLink.firstElementChild.removeChild(hostNameLink.firstElementChild.firstChild);
        // hostNameLink.firstElementChild.appendChild(document.createTextNode(location.hostname));
        hostNameLink.firstElementChild.innerText = location.hostname;
    }
};
let browserInfoAnswer = {
    appNameLinkAnswer: function(){
        // appNameLink.firstElementChild.removeChild(appNameLink.firstElementChild.firstChild);
        // appNameLink.firstElementChild.appendChild(document.createTextNode(navigator.appName));
        appNameLink.firstElementChild.innerText = navigator.appName;
    },
    appVersionLinkAnswer: function(){
        // appVersionLink.firstElementChild.removeChild(appVersionLink.firstElementChild.firstChild);
        // appVersionLink.firstElementChild.appendChild(document.createTextNode(navigator.appVersion));
        appVersionLink.firstElementChild.innerText = navigator.appVersion;
    },
    platformLinkAnswer: function(){
        // platformLink.firstElementChild.removeChild(platformLink.firstElementChild.firstChild);
        // platformLink.firstElementChild.appendChild(document.createTextNode(navigator.platform));
        platformLink.firstElementChild.innerText = navigator.platform;
    },
    languageLinkAnswer: function(){
        // languageLink.firstElementChild.removeChild(languageLink.firstElementChild.firstChild);
        // languageLink.firstElementChild.appendChild(document.createTextNode(navigator.language));
        languageLink.firstElementChild.innerText = navigator.language;
    },
    cookieEnabledLinkAnswer: function(){
        // cookieEnabledLink.firstElementChild.removeChild(cookieEnabledLink.firstElementChild.firstChild);
        // cookieEnabledLink.firstElementChild.appendChild(document.createTextNode(navigator.cookieEnabled));
        cookieEnabledLink.firstElementChild.innerText = navigator.cookieEnabled;
    }
}
let screenInfoAnswer = {
    heightLinkAnswer: function(){
        // heightLink.firstElementChild.removeChild(heightLink.firstElementChild.firstChild);
        // heightLink.firstElementChild.appendChild(document.createTextNode(screen.height));
        heightLink.firstElementChild.innerText = screen.height;
    },
    widthLinkAnswer: function(){
        // widthLink.firstElementChild.removeChild(widthLink.firstElementChild.firstChild);
        // widthLink.firstElementChild.appendChild(document.createTextNode(screen.width));
        widthLink.firstElementChild.innerText = screen.width;
    },
    pixelDepthLinkAnswer: function(){
        // pixelDepthLink.firstElementChild.removeChild(pixelDepthLink.firstElementChild.firstChild);
        // pixelDepthLink.firstElementChild.appendChild(document.createTextNode(screen.pixelDepth));
        pixelDepthLink.firstElementChild.innerText = screen.pixelDepth;
    }
}
let historyInfoAnswer = {
    lengthLinkAnswer: function(){
        // lengthLink.firstElementChild.removeChild(lengthLink.firstElementChild.firstChild);
        // lengthLink.firstElementChild.appendChild(document.createTextNode(history.length));
        lengthLink.firstElementChild.innerText = history.length;
    },
    stateLinkAnswer: function(){
        stateLink.firstElementChild.removeChild(stateLink.firstElementChild.firstChild);
        stateLink.firstElementChild.appendChild(document.createTextNode(history.state));
    }
}
// Href Link Answer Event
hrefLink.addEventListener('click', locationInfoAnswer.hrefLinkAnswer);
// protocol information event
protocolLink.addEventListener('click', locationInfoAnswer.protocolLinkAnswer);
// host information event
hostLink.addEventListener('click', locationInfoAnswer.hostLinkAnswer);
// port information event
portLink.addEventListener('click', locationInfoAnswer.portLinkAnswer);
// host Name information Event
hostNameLink.addEventListener('click', locationInfoAnswer.hostNameLinkAnswer);

// App name information event
appNameLink.addEventListener('click', browserInfoAnswer.appNameLinkAnswer);
// App version information event
appVersionLink.addEventListener('click', browserInfoAnswer.appVersionLinkAnswer);
// Platform information event
platformLink.addEventListener('click', browserInfoAnswer.platformLinkAnswer);
// Language information event
languageLink.addEventListener('click', browserInfoAnswer.languageLinkAnswer);
// Cookie Enabled information event
cookieEnabledLink.addEventListener('click', browserInfoAnswer.cookieEnabledLinkAnswer);

// Height information event
heightLink.addEventListener('click', screenInfoAnswer.heightLinkAnswer);
// Width information event
widthLink.addEventListener('click', screenInfoAnswer.widthLinkAnswer);
// pixel depth information event
pixelDepthLink.addEventListener('click', screenInfoAnswer.pixelDepthLinkAnswer);

// Length information event
lengthLink.addEventListener('click', historyInfoAnswer.lengthLinkAnswer);
// states information event
stateLink.addEventListener('click', historyInfoAnswer.stateLinkAnswer);