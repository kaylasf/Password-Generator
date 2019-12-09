// Grab Checkboxes from html and store them in variables //
var speChar = document.getElementById('Check1');
var numChar = document.getElementById('Check2');
var lowChar = document.getElementById('Check3');
var uppChar = document.getElementById('Check4');
var range = document.getElementById('pwLength');
var newPassword;

// SLIDER FUNCTIONALITY //
var slider = document.getElementById("pwRange");
var output = document.getElementById("pwLength");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

// CHECKBOX ONCLICKS //
function checkBoxClick(e) {
    if (e.hasAttribute("checked")) {
        e.removeAttribute('checked')
        e.setAttribute('value', 'f')
        return
    }
    if (e.value === 'f') {
        e.setAttribute('value', 't')
    }
    else if (e.value === 't') {
        console.log("False to True")
        e.setAttribute('value', 'f')
    }
}

// Declare create password function //
function createPassword(len, spec, num, low, up) {
    var specialChars = "!#$%&'()*+,-./:;<=>?@][\^_`{|}~"
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var passParams = []
    var passArr = []
    if (spec == 't') {
        passParams.push('spec')
    }
    if (num == 't') {
        passParams.push('num')
    }
    if (low == 't') {
        passParams.push('low')
    }
    if (up == 't') {
        passParams.push('up')
    }
    for (var i = 0; i < len; i++) {
        // Randomly choose paramter from passParams
        // Push character into passArr
        var param = passParams[Math.floor(Math.random() * passParams.length)]
        if (param === 'spec') {
            var splen = specialChars.length
            ranSp = Math.floor(0 + Math.random() * (splen + 1 - 0))
            var sp = specialChars.charAt(ranSp)
            passArr.push(sp)
        }
        if (param === 'up') {
            var alen = alphabet.length
            ranAl = Math.floor(0 + Math.random() * (alen + 1 - 0))
            var al = alphabet.charAt(ranAl).toUpperCase()
            passArr.push(al)
        }
        if (param === 'low') {
            var lolen = alphabet.length
            ranLo = Math.floor(0 + Math.random() * (lolen + 1 - 0))
            var lo = alphabet.charAt(ranLo).toLowerCase()
            passArr.push(lo)
        }
        if (param === 'num') {
            ranNum = Math.floor(0 + Math.random() * (9 + 1 - 0))
            var nu = ranNum.toString()
            passArr.push(nu)
        }

    }

    newPassword = passArr.join('')
    document.getElementById('newPass').innerHTML = newPassword

}





//  Get input from slider and store it into a variable. //

var checkMe = [speChar, numChar, lowChar, uppChar]
var selectedItems = []

// Once storred into variables, pass these variables into a function as parameters


// SUBMIT BUTTON FUNCTIONALITY
document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault()
    var slideInput = parseInt(range.innerHTML)
    var wantSpec = speChar.value
    var wantNum = numChar.value
    var wantLow = lowChar.value
    var wantUp = uppChar.value
    console.log(slideInput, wantSpec, wantNum, wantLow, wantUp)
    createPassword(slideInput, wantSpec, wantNum, wantLow, wantUp)



});



function lightUp() {
    
        document.getElementById("pwOutput").style.color = "red"
 

}
 

    function copyClipboard() {

        var elm = document.getElementById("divClipboard");
        // for Internet Explorer

        if (document.body.createTextRange) {
            var range = document.body.createTextRange();
            range.moveToElementText(elm);
            range.select();
            document.execCommand("Copy");
            lightUp()
           
        }
        else if (window.getSelection) {
            // other browsers

            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(elm);
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand("Copy");
            lightUp()
            
        }
    }
