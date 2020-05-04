let canvas = document.querySelector('#canvas');
let element = canvas.getContext('2d');

let x = 250;
let y = 250;

let drawBee = function (x, y, radius, fillStroke) {
    element.beginPath();
    element.lineWidth = 3;
    element.fillStyle = 'orange';
    element.strokeStyle = 'black'

    element.arc(x, y, radius, 0, Math.PI * 2);
    if (fillStroke == true) {
        element.fill()
    } else {
        element.stroke();
    }
}

let beeRandome = function () {
    let beeRandome = Math.random() * 4 - 2;
    x = x + beeRandome;
    y = y + beeRandome;
    console.log(x, y);
}

let beeInterval = setInterval(() => {
    beeRandome();
    element.clearRect(0, 0, 500, 500);
    drawBee(x, y, 30, true);
    drawBee(x, y, 30, false);
    drawBee(x + 10, y, 10, false);
    drawBee(x - 10, y, 10, false);
    drawBee(x - 30, y - 50, 25, false);
    drawBee(x + 30, y - 50, 25, false);
}, 50);







// let canvas = document.querySelector('#canvas');
// let element = canvas.getContext('2d');

// let x = 250;
// let y = 250;

// let drawBee = function (x, y, radius, fillStroke) {
//     element.beginPath();
//     element.lineWidth = 3;
//     element.fillStyle = 'orange';
//     element.strokeStyle = 'black'

//     element.arc(x, y, radius, 0, Math.PI * 2);
//     if (fillStroke == true) {
//         element.fill()
//     } else {
//         element.stroke();
//     }
// }

// let beeInterval = setInterval(() => {
//     let beeRandome = Math.random() * 4 - 2;
//     x = x + beeRandome;
//     y = y + beeRandome;
//     console.log(x, y);
//     element.clearRect(0, 0, 500, 500);
//     drawBee(x, y, 30, true);
//     drawBee(x, y, 30, false);
//     drawBee(x + 10, y, 10, false);
//     drawBee(x - 10, y, 10, false);
//     drawBee(x - 30, y - 50, 25, false);
//     drawBee(x + 30, y - 50, 25, false);
// }, 50);



//------------------------------------------------------------------------------

// let canvas = document.querySelector('#canvas');
// let element = canvas.getContext('2d');
// let x = 300;
// let y = 400;

// let circle = function (x, y, radius, fillCircle) {
//     element.beginPath();
//     element.arc(x, y, radius, 0, Math.PI * 2, false);
//     if (fillCircle) {
//         element.fill();
//     } else {
//         element.stroke();
//     }
// }

// let drawBee = function (x, y) {
//     element.fillStyle = 'gold';
//     element.strokeStyle = 'black';
//     element.lineWidth = 5;

//     circle(x, y, 30, true);
//     circle(x, y, 30, false);
//     circle(x + 10, y, 10);
//     circle(x - 10, y, 10);
//     circle(x - 30, y - 50, 25);
//     circle(x + 30, y - 50, 25);
// };

// let update = function (coordinate) {
//     let offset = Math.random() * 4 - 2;
//     coordinate += offset;

//     if (coordinate > 200) {
//         coordinate = 200;
//     }
//     if (coordinate < 0) {
//         coordinate = 0;
//     }
//     return coordinate;
// }


// setInterval(function () {
//     element.clearRect(0, 0, 500, 500);
//     drawBee(x, y);
//     x = update(x);
//     console.log(x);
//     y = update(y);

//     element.strokeRect(0, 0, 500, 500);
// }, 30)

