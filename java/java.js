// fotter year
function printYear() {
    document.getElementById('Year').innerHTML = new Date().getFullYear()
}

// alert pop up
function Alert() {
    alert('This is an alert.')
};

// hover btn
function mouseOver() {
    document.getElementById('HoverButton').innerText = 'Hello';
    document.getElementById('HoverButton').style.color = 'red';
}

function mouseLeave() {
    document.getElementById('HoverButton').innerText = "Hover!";
    document.getElementById('HoverButton').style.color = "black";
}

// counting btn + if else
function increment() {
        count2 = count2 + 1;
        let message = 'Number : ' + count2;
        document.getElementById('txt-counter2').innerHTML = message;
        if ((count2 % 2) == 1) {
            document.getElementById('txt-counter2').style.color = 'red';
        } else {
            document.getElementById('txt-counter2').style.color = 'blue';        
        }
    }


// for loops
const initialValue = 1;
const stopValue = 100;

function loop() {
    for (let i = initialValue; i <= stopValue; i++) {
        let li = document.createElement('li');
        li.textContent = i % 2 === 0 ? 'even' : 'odd';
        numbers.appendChild(li);
 }
}