/**
    Generic methods
*/

display.nextNumber = 0;

function display(s) {
    document.getElementsByTagName('body')[0].innerHTML += `<h3 class="example-results"><span class="number">${++display.nextNumber}.</span><span class="code">${s}</span></h3>`;
};

function getCurrentTime() {
    return (new Date()).toLocaleTimeString();
}
