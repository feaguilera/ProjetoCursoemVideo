const turnOnoOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.png';
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.png';
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.png';
}

function lampOnOff () {
    if ( turnOnoOff.textContent == 'Ligar'){
        lampOn();
        turnOnoOff.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnoOff.textContent = 'Ligar';
    }
}


turnOnoOff.addEventListener('click', lampOnOff);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
