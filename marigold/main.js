var _1keySet = 'd';
var _2keySet = 'f';
var _3keySet = 'j';
var _4keySet = 'k';
var _key = new Array("", "", "", "");
function _func_1key_Set(){
    _1keySet = prompt("원하는 키 입력");
    document.getElementById("_1key_St").value = _1keySet;
    _key[0] = _1keySet;
}
function _func_2key_Set(){
    _2keySet = prompt("원하는 키 입력");
    document.getElementById("_2key_St").value = _2keySet;
    _key[1] = _2keySet;
}
function _func_3key_Set(){
    _3keySet = prompt("원하는 키 입력");
    document.getElementById("_3key_St").value = _3keySet;
    _key[2] = _3keySet;
}
function _func_4key_Set(){
    _4keySet = prompt("원하는 키 입력");
    document.getElementById("_4key_St").value = _4keySet;
    _key[3] = _4keySet;
}

function _SendData(){
    location.href = "game.html?" + _key[0] + ":" + _key[1] + ":" + _key[2] + ":" + _key[3];
}

function go_Set(){
    location.href = "setting.html";
}

function go_Game(){
    location.href = "game.html";
}

function go_Main(){
    location.href = "main.html";
}