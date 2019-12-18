

function lightSwitch() {
    let src

    srcOn = '../image/eg_bulbon.gif';
    srcOff = '../image/eg_bulboff.gif';

    src = document.getElementById('image').src;

    console.log(src)

    if (src == srcOn) {
        document.getElementById('image').src = '../image/eg_bulboff.gif';
    } else {
        document.getElementById('image').src = '../image/eg_bulbon.gif';
    }

    window.alert()

}

function lightOn() {
    document.getElementById('image').src = '../image/eg_bulbon.gif';
    document.getElementById('paragraph').innerHTML = 'Light On';
    console.log(typeof(document.getElementById('image').src))
    document.write("On");
    console.log('Light On');
    window.alert('Light On');
}

function lightOff() {
    document.getElementById('image').src = '../image/eg_bulboff.gif';
    document.getElementById('paragraph').innerHTML = 'Light Off';
    document.write("Off");
    console.log('Light Off');
    window.alert('Light Off');
}

function setMonth() {
    console.log("Current Month: " + document.getElementById("month").value);
    let date = new Date();
    date.setMonth(9)
    console.log("Current : " + date);
    document.getElementById("month").value = date.getFullYear() + "-" + date.getMonth();
}

function checkValue(textInput) {
    console.log(textInput.value);
    if (textInput.value.match(/123456/)) {
        textInput.style.color = "black";
    } else {
        textInput.style.color = "red";
    }
}
