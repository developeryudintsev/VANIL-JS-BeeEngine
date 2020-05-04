let game = {
    gameFunction: function () {
        let treasure = {
            start: function () {
                let randomeXWidth = Math.floor(Math.random() * 600) + 50;
                let randomeXHeight = Math.floor(Math.random() * 400) + 50;
                $('#x').offset({ left: randomeXWidth, top: randomeXHeight });

                let currentThis = this;
                addEventListener('click', function () {
                    let eventX = event.offsetX;
                    let eventY = event.offsetY;

                    currentThis.pifagorFunction(randomeXWidth, randomeXHeight, eventX, eventY);
                    currentThis.canvasFunction(eventX, eventY);
                })
            },

            pifagorFunction: function (randomeXWidth, randomeXHeight, eventX, eventY) {
                console.log('X: ' + eventX);
                console.log('Y: ' + eventY);
                let x = randomeXWidth - eventX;
                let y = randomeXHeight - eventY;
                let xy = (x * x) + (y * y);
                let pifagor = Math.sqrt(xy);
                console.log(pifagor);
                console.log('pifagor: ' + pifagor);
                this.temperature(pifagor);
            },

            canvasFunction: function (eventX, eventY) {
                let canvas = document.querySelector('#canvas');
                let element = canvas.getContext('2d');
                element.beginPath();
                let size = 5;

                let fooInterval = function () {
                    element.strokeStyle = 'yellow';
                    element.clearRect(0, 0, 700, 500);
                    element.arc(eventX, eventY, size, 0, Math.PI * 2);
                    element.stroke();
                    size++;

                    if (size == 50) {
                        clearInterval(myInterval);
                        element.clearRect(0, 0, 700, 500);
                    }
                }
                let myInterval = setInterval(fooInterval, 10);
            },

            temperature: function (pifagor) {
                if (pifagor > 50) {
                    $('#temperature').html('You are hot');
                    setTimeout(() => {
                        $('#temperature').html('');
                    }, 1000);
                }
                if (pifagor < 50) {
                    let win = document.querySelector('#win');
                    win.style.opacity = 1;
                    $('#win').html('You are WIN');

                }
                console.log(pifagor);
            }
        }
        return treasure;
    }
}


// let game = {
//     gameFunction: function () {
//         let treasure = {
//             start: function () {
//                 let randomeXWidth = Math.floor(Math.random() * 700);
//                 let randomeXHeight = Math.floor(Math.random() * 500);
//                 $('#x').offset({ left: randomeXWidth, top: randomeXHeight });

//                 let currentThis = this;
//                 addEventListener('click', function () {
//                     let eventX = event.offsetX;
//                     let eventY = event.offsetY;
//                     currentThis.pifagorFunction(randomeXWidth, randomeXHeight, eventX, eventY);


//                     let canvas = document.querySelector('#canvas');
//                     let element = canvas.getContext('2d');
//                     element.beginPath();
//                     let size = 5;

//                     let fooInterval = function () {
//                         element.strokeStyle = 'yellow';
//                         element.clearRect(0, 0, 700, 500);
//                         element.arc(eventX, eventY, size, 0, Math.PI * 2);
//                         element.stroke();
//                         size++;

//                         if (size == 50) {
//                             clearInterval(myInterval);
//                             element.clearRect(0, 0, 700, 500);
//                         }
//                     }
//                     let myInterval = this.setInterval(fooInterval, 10);
//                 })
//             },

//             pifagorFunction: function (randomeXWidth, randomeXHeight, eventX, eventY) {
//                 console.log('X: ' + eventX);
//                 console.log('Y: ' + eventY);
//                 let x = randomeXWidth - eventX;
//                 let y = randomeXHeight - eventY;
//                 let pifagor = (x * x) + (y * y);
//                 console.log(pifagor);
//                 console.log('pifagor: ' + Math.sqrt(pifagor));
//             }
//         }
//         return treasure;
//     }
// }


