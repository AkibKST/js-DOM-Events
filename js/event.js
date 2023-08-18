console.log('This is separated js file');

// --------------------------------------------
// IMPORTENT
// add onclick function op: 1
// <button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// --------------------------------------------


// op: 2
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.onclick = makeGreen;

function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

// op: 3
const blueButton = document.getElementById('make-blue');
blueButton.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// op: 4
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink';
}


// --------------------------------------------
// op:final
const makeYellowButton = document.getElementById('make-yellow');
makeYellowButton.addEventListener('click', function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
})
// --------------------------------------------


// --------------------------------------------
// IMPORTENT
// op: use max
// document.getElementById('make-goldenRod').addEventListener('click', function(){})
document.getElementById('make-goldenRod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})
// --------------------------------------------