var _1_4keyColor = 'goldenrod';
var _2_3keyColor = 'wheat';
var defalutColor = 'whitesmoke';
var _27Color = 'black';

var _1key_i = 1;
var _2key_i = 1;
var _3key_i = 1;
var _4key_i = 1;

var keySpeed = 13; // 한번 순행당 keyspeed*29 밀리초 소요

var miss = 0;
var perfect = 0;
var late = 0;  
var fast = 0;
var _1KeyCheck = 0;
var _2KeyCheck = 0;
var _3KeyCheck = 0;
var _4KeyCheck = 0;

var _1keyNote = 0;
var _2keyNote = 0;
var _3keyNote = 0;
var _4keyNote = 0;
var comboCnt = 0;

var _1keyNoteDown = setInterval(function () { // 1키 노트다운
        var _1keyStart = document.getElementById("_1-1");
        var _1keyAudio = document.getElementById("_Game_Audio").currentTime;
        var _AudioCheck = document.getElementById("_Game_Audio");
        var _rate = document.getElementById("rate");
        var NowKey = document.getElementById("_1-"+_1key_i);
        var Next = _1key_i + 1;
        var NextKey = document.getElementById("_1-"+Next);
        var _27key = document.getElementById("_1-23");
        var _0406 = 0.377;
        var combo = document.getElementById("combo");
        if(_1key_i == 2 && NowKey.style.backgroundColor == _1_4keyColor){
            nowNote++;
            _1keyNote = 1;
        }
        if(NowKey.style.backgroundColor == _1_4keyColor){   
            NextKey.style.backgroundColor = _1_4keyColor;
            NowKey.style.backgroundColor = defalutColor;
        }
        // 1키 맵핑
        if( _1keyAudio < _0406*5 + 0.016  && _1keyAudio > _0406*5){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*9 + 0.016  && _1keyAudio > _0406*9){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*13 + 0.016  && _1keyAudio > _0406*13){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*18 + 0.016  && _1keyAudio > _0406*18){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*20 + 0.016  && _1keyAudio > _0406*20){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*23 + 0.016  && _1keyAudio > _0406*23){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*29 + 0.016  && _1keyAudio > _0406*29){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*35 + 0.016  && _1keyAudio > _0406*35){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*39 + 0.016  && _1keyAudio > _0406*39){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*42 + 0.016  && _1keyAudio > _0406*42){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*43 + 0.016  && _1keyAudio > _0406*43){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*50 + 0.016  && _1keyAudio > _0406*50){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*54 + 0.016  && _1keyAudio > _0406*54){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*56 + 0.016  && _1keyAudio > _0406*56){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*58 + 0.016  && _1keyAudio > _0406*58){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*61 + 0.016  && _1keyAudio > _0406*61){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*66 + 0.016  && _1keyAudio > _0406*66){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*69 + 0.016  && _1keyAudio > _0406*69){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*72 + 0.016  && _1keyAudio > _0406*72){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*74 + 0.016  && _1keyAudio > _0406*74){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*78 + 0.016  && _1keyAudio > _0406*78){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*83 + 0.016  && _1keyAudio > _0406*83){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*86 + 0.016  && _1keyAudio > _0406*86){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*91 + 0.016  && _1keyAudio > _0406*91){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*94 + 0.016  && _1keyAudio > _0406*94){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*98 + 0.016  && _1keyAudio > _0406*98){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*104 + 0.016  && _1keyAudio > _0406*104){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*106 + 0.016  && _1keyAudio > _0406*106){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*110 + 0.016  && _1keyAudio > _0406*110){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*114 + 0.016  && _1keyAudio > _0406*114){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*117 + 0.016  && _1keyAudio > _0406*117){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*119 + 0.016  && _1keyAudio > _0406*119){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*122 + 0.016  && _1keyAudio > _0406*122){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*125 + 0.016  && _1keyAudio > _0406*125){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*129 + 0.016  && _1keyAudio > _0406*129){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*133 + 0.016  && _1keyAudio > _0406*133){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*137 + 0.016  && _1keyAudio > _0406*137){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*141 + 0.016  && _1keyAudio > _0406*141){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*146 + 0.016  && _1keyAudio > _0406*146){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*146 + 0.016  && _1keyAudio > _0406*146){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*149 + 0.016  && _1keyAudio > _0406*149){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*152 + 0.016  && _1keyAudio > _0406*152){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*155 + 0.016  && _1keyAudio > _0406*155){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*161 + 0.016  && _1keyAudio > _0406*161){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*163 + 0.016  && _1keyAudio > _0406*163){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*171 + 0.016  && _1keyAudio > _0406*171){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*173 + 0.016  && _1keyAudio > _0406*173){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*177 + 0.016  && _1keyAudio > _0406*177){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*178 + 0.016  && _1keyAudio > _0406*178){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*183 + 0.016  && _1keyAudio > _0406*183){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*185 + 0.016  && _1keyAudio > _0406*185){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*193 + 0.016  && _1keyAudio > _0406*193){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*195 + 0.016  && _1keyAudio > _0406*195){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*199 + 0.016  && _1keyAudio > _0406*199){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*201 + 0.016  && _1keyAudio > _0406*201){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*203 + 0.016  && _1keyAudio > _0406*203){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*205 + 0.016  && _1keyAudio > _0406*205){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*209 + 0.016  && _1keyAudio > _0406*209){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*213 + 0.016  && _1keyAudio > _0406*213){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*215 + 0.016  && _1keyAudio > _0406*215){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*220 + 0.016  && _1keyAudio > _0406*220){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*221 + 0.016  && _1keyAudio > _0406*221){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*225 + 0.016  && _1keyAudio > _0406*225){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*227 + 0.016  && _1keyAudio > _0406*227){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*233 + 0.016  && _1keyAudio > _0406*233){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*235 + 0.016  && _1keyAudio > _0406*235){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*243 + 0.016  && _1keyAudio > _0406*243){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*247 + 0.016  && _1keyAudio > _0406*247){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*249 + 0.016  && _1keyAudio > _0406*249){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*253 + 0.016  && _1keyAudio > _0406*253){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*256 + 0.016  && _1keyAudio > _0406*256){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*258 + 0.016  && _1keyAudio > _0406*258){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*264 + 0.016  && _1keyAudio > _0406*264){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*267 + 0.016  && _1keyAudio > _0406*267){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*268 + 0.016  && _1keyAudio > _0406*268){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*275 + 0.016  && _1keyAudio > _0406*275){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*279 + 0.016  && _1keyAudio > _0406*279){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*283 + 0.016  && _1keyAudio > _0406*283){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*292 + 0.016  && _1keyAudio > _0406*292){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*297 + 0.016  && _1keyAudio > _0406*297){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*307 + 0.016  && _1keyAudio > _0406*307){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*313 + 0.016  && _1keyAudio > _0406*313){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*319 + 0.016  && _1keyAudio > _0406*319){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*323 + 0.016  && _1keyAudio > _0406*323){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*325 + 0.016  && _1keyAudio > _0406*325){
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*329 + 0.016  && _1keyAudio > _0406*329){ 
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*331 + 0.016  && _1keyAudio > _0406*331){ 
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*335 + 0.016  && _1keyAudio > _0406*335){ 
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*337 + 0.016  && _1keyAudio > _0406*337){ 
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*339 + 0.016  && _1keyAudio > _0406*339){ 
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*345 + 0.016  && _1keyAudio > _0406*345){ 
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*351 + 0.016  && _1keyAudio > _0406*351){ 
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*355 + 0.016  && _1keyAudio > _0406*355){ 
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*357 + 0.016  && _1keyAudio > _0406*357){ 
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*361 + 0.016  && _1keyAudio > _0406*361){ 
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*363 + 0.016  && _1keyAudio > _0406*363){ 
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*365 + 0.016  && _1keyAudio > _0406*365){ 
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*367 + 0.016  && _1keyAudio > _0406*367){ 
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*371 + 0.016  && _1keyAudio > _0406*371){ 
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        if( _1keyAudio < _0406*373 + 0.016  && _1keyAudio > _0406*373){ 
            _1keyStart.style.backgroundColor = _1_4keyColor;
        }
        _AudioCheck.addEventListener("ended",endedCheck,false);
        function endedCheck(){
            Scoreboard();
        }
        _1key_i++;
        if(_1key_i == 29 && _1keyNote != 0){
            funcRate();
            if(_1KeyCheck == 0){
                miss++;
                _rate.innerHTML = "&nbsp;&nbsp;miss";
                comboCnt = 0;
                combo.innerHTML = "";
            }
            _1KeyCheck = 0;
            NextKey.style.backgroundColor = defalutColor;
            _1key_i = 1;
            _1keyNote = 0;
            _27key.style.backgroundColor = _27Color;
        }
        else if(_1key_i == 29){
            _1key_i = 1;
            _27key.style.backgroundColor = _27Color;
        }
    }, keySpeed)
var _2keyNoteDown = setInterval(function () { // 2키 노트다운
        var _2keyStart = document.getElementById("_2-1");
        var _2keyAudio = document.getElementById("_Game_Audio").currentTime;
        var _rate = document.getElementById("rate");
        var NowKey = document.getElementById("_2-"+_2key_i);
        var Next = _2key_i + 1;
        var NextKey = document.getElementById("_2-"+Next);
        var _27key = document.getElementById("_2-23");
        var _0406 = 0.377;
        var combo = document.getElementById("combo");
        if(_2key_i == 2 && NowKey.style.backgroundColor == _2_3keyColor){
            nowNote++;
            _2keyNote = 1;
        }
        if(NowKey.style.backgroundColor == _2_3keyColor){    
            NextKey.style.backgroundColor = _2_3keyColor;
            NowKey.style.backgroundColor = defalutColor;
        }         
        // 2키 맵핑
        if(_2keyAudio < _0406*6 + 0.016 && _2keyAudio > _0406*6){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*10 + 0.016 && _2keyAudio > _0406*10){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*14 + 0.016 && _2keyAudio > _0406*14){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*17 + 0.016 && _2keyAudio > _0406*17){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*20 + 0.016 && _2keyAudio > _0406*20){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*22 + 0.016 && _2keyAudio > _0406*22){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*25 + 0.016 && _2keyAudio > _0406*25){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*29 + 0.016 && _2keyAudio > _0406*29){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*31 + 0.016 && _2keyAudio > _0406*31){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*33 + 0.016 && _2keyAudio > _0406*33){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*37 + 0.016 && _2keyAudio > _0406*37){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*41 + 0.016 && _2keyAudio > _0406*41){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*42 + 0.016 && _2keyAudio > _0406*42){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*53 + 0.016 && _2keyAudio > _0406*53){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*60 + 0.016 && _2keyAudio > _0406*60){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*63 + 0.016 && _2keyAudio > _0406*63){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*67 + 0.016 && _2keyAudio > _0406*67){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*70 + 0.016 && _2keyAudio > _0406*70){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*73 + 0.016 && _2keyAudio > _0406*73){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*76 + 0.016 && _2keyAudio > _0406*76){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*79 + 0.016 && _2keyAudio > _0406*79){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*85 + 0.016 && _2keyAudio > _0406*85){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*87 + 0.016 && _2keyAudio > _0406*87){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*93 + 0.016 && _2keyAudio > _0406*93){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*99 + 0.016 && _2keyAudio > _0406*99){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*101 + 0.016 && _2keyAudio > _0406*101){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*105 + 0.016 && _2keyAudio > _0406*105){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*108 + 0.016 && _2keyAudio > _0406*108){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*115 + 0.016 && _2keyAudio > _0406*115){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*121 + 0.016 && _2keyAudio > _0406*121){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*124 + 0.016 && _2keyAudio > _0406*124){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*127 + 0.016 && _2keyAudio > _0406*127){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*131 + 0.016 && _2keyAudio > _0406*131){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*134 + 0.016 && _2keyAudio > _0406*134){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*136 + 0.016 && _2keyAudio > _0406*136){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*140 + 0.016 && _2keyAudio > _0406*140){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*143 + 0.016 && _2keyAudio > _0406*143){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*147 + 0.016 && _2keyAudio > _0406*147){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*150 + 0.016 && _2keyAudio > _0406*150){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*153 + 0.016 && _2keyAudio > _0406*153){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*159 + 0.016 && _2keyAudio > _0406*159){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*161 + 0.016 && _2keyAudio > _0406*161){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*165 + 0.016 && _2keyAudio > _0406*165){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*169 + 0.016 && _2keyAudio > _0406*169){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*174 + 0.016 && _2keyAudio > _0406*174){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*179 + 0.016 && _2keyAudio > _0406*179){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*183 + 0.016 && _2keyAudio > _0406*183){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*187 + 0.016 && _2keyAudio > _0406*187){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*191 + 0.016 && _2keyAudio > _0406*191){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*197 + 0.016 && _2keyAudio > _0406*197){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*201 + 0.016 && _2keyAudio > _0406*201){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*205 + 0.016 && _2keyAudio > _0406*205){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*218 + 0.016 && _2keyAudio > _0406*218){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*223 + 0.016 && _2keyAudio > _0406*223){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*225 + 0.016 && _2keyAudio > _0406*225){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*231 + 0.016 && _2keyAudio > _0406*231){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*236 + 0.016 && _2keyAudio > _0406*236){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*237 + 0.016 && _2keyAudio > _0406*237){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*239 + 0.016 && _2keyAudio > _0406*239){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*241 + 0.016 && _2keyAudio > _0406*241){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*244 + 0.016 && _2keyAudio > _0406*244){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*248 + 0.016 && _2keyAudio > _0406*248){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*252 + 0.016 && _2keyAudio > _0406*252){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*255 + 0.016 && _2keyAudio > _0406*255){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*257 + 0.016 && _2keyAudio > _0406*257){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*262 + 0.016 && _2keyAudio > _0406*262){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*265 + 0.016 && _2keyAudio > _0406*265){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*267 + 0.016 && _2keyAudio > _0406*267){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*273 + 0.016 && _2keyAudio > _0406*273){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*284 + 0.016 && _2keyAudio > _0406*284){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*287 + 0.016 && _2keyAudio > _0406*287){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*291 + 0.016 && _2keyAudio > _0406*291){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*294 + 0.016 && _2keyAudio > _0406*294){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*311 + 0.016 && _2keyAudio > _0406*311){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*321 + 0.016 && _2keyAudio > _0406*321){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*324 + 0.016 && _2keyAudio > _0406*324){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*327 + 0.016 && _2keyAudio > _0406*327){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*333 + 0.016 && _2keyAudio > _0406*333){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*340 + 0.016 && _2keyAudio > _0406*340){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*349 + 0.016 && _2keyAudio > _0406*349){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*353 + 0.016 && _2keyAudio > _0406*353){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*359 + 0.016 && _2keyAudio > _0406*359){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*365 + 0.016 && _2keyAudio > _0406*365){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*369 + 0.016 && _2keyAudio > _0406*369){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_2keyAudio < _0406*373 + 0.016 && _2keyAudio > _0406*373){
            _2keyStart.style.backgroundColor = _2_3keyColor;
        }
        _2key_i++;
        if(_2key_i == 29 && _2keyNote != 0){
            funcRate();
            if(_2KeyCheck == 0){
                miss++;
                _rate.innerHTML = "&nbsp;&nbsp;miss";
                comboCnt = 0;
                combo.innerHTML = "";
            }
            _2KeyCheck = 0;
            NextKey.style.backgroundColor = defalutColor;
            _2key_i = 1;
            _2keyNote = 0;
            _27key.style.backgroundColor = _27Color;
        }
        else if(_2key_i == 29){
            _2key_i = 1;
            _27key.style.backgroundColor = _27Color;
        }
    }, keySpeed)
var _3keyNoteDown = setInterval(function () { // 3키 노트다운
        var _3keyStart = document.getElementById("_3-1");
        var _3keyAudio = document.getElementById("_Game_Audio").currentTime;
        var _rate = document.getElementById("rate");
        var NowKey = document.getElementById("_3-"+_3key_i);
        var Next = _3key_i + 1;
        var NextKey = document.getElementById("_3-"+Next);
        var _27key = document.getElementById("_3-23");
        var _0406 = 0.377;
        var combo = document.getElementById("combo");
        if(_3key_i == 2 && NowKey.style.backgroundColor == _2_3keyColor){
            nowNote++;
            _3keyNote = 1;
        }
        if(NowKey.style.backgroundColor == _2_3keyColor){    
            NextKey.style.backgroundColor = _2_3keyColor;
            NowKey.style.backgroundColor = defalutColor;
        }
        //3키 맵핑
        if(_3keyAudio < _0406*4 + 0.016 && _3keyAudio > _0406*4){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }        
        if(_3keyAudio < _0406*8 + 0.016 && _3keyAudio > _0406*8){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }        
        if(_3keyAudio < _0406*11 + 0.016 && _3keyAudio > _0406*11){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }        
        if(_3keyAudio < _0406*19 + 0.016 && _3keyAudio > _0406*19){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }        
        if(_3keyAudio < _0406*21 + 0.016 && _3keyAudio > _0406*21){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }        
        if(_3keyAudio < _0406*26 + 0.016 && _3keyAudio > _0406*26){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*33 + 0.016 && _3keyAudio > _0406*33){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*41 + 0.016 && _3keyAudio > _0406*41){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*55 + 0.016 && _3keyAudio > _0406*55){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*57 + 0.016 && _3keyAudio > _0406*57){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*59 + 0.016 && _3keyAudio > _0406*59){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*62 + 0.016 && _3keyAudio > _0406*62){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*64 + 0.016 && _3keyAudio > _0406*64){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*68 + 0.016 && _3keyAudio > _0406*68){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*72 + 0.016 && _3keyAudio > _0406*72){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*77 + 0.016 && _3keyAudio > _0406*77){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*82 + 0.016 && _3keyAudio > _0406*82){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*84 + 0.016 && _3keyAudio > _0406*84){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*90 + 0.016 && _3keyAudio > _0406*90){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*92 + 0.016 && _3keyAudio > _0406*92){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*100 + 0.016 && _3keyAudio > _0406*100){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*102 + 0.016 && _3keyAudio > _0406*102){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*103 + 0.016 && _3keyAudio > _0406*103){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*110 + 0.016 && _3keyAudio > _0406*110){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*112 + 0.016 && _3keyAudio > _0406*112){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*115 + 0.016 && _3keyAudio > _0406*115){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*116 + 0.016 && _3keyAudio > _0406*116){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*118 + 0.016 && _3keyAudio > _0406*118){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*120 + 0.016 && _3keyAudio > _0406*120){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*123 + 0.016 && _3keyAudio > _0406*123){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*127 + 0.016 && _3keyAudio > _0406*127){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*135 + 0.016 && _3keyAudio > _0406*135){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*138 + 0.016 && _3keyAudio > _0406*138){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*144 + 0.016 && _3keyAudio > _0406*144){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*148 + 0.016 && _3keyAudio > _0406*148){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*153 + 0.016 && _3keyAudio > _0406*153){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*159 + 0.016 && _3keyAudio > _0406*159){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*163 + 0.016 && _3keyAudio > _0406*163){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*167 + 0.016 && _3keyAudio > _0406*167){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*172 + 0.016 && _3keyAudio > _0406*172){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*175 + 0.016 && _3keyAudio > _0406*175){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*177 + 0.016 && _3keyAudio > _0406*177){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*179 + 0.016 && _3keyAudio > _0406*179){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*182 + 0.016 && _3keyAudio > _0406*182){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*184 + 0.016 && _3keyAudio > _0406*184){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*187 + 0.016 && _3keyAudio > _0406*187){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*189 + 0.016 && _3keyAudio > _0406*189){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*197 + 0.016 && _3keyAudio > _0406*197){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*199 + 0.016 && _3keyAudio > _0406*199){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*201 + 0.016 && _3keyAudio > _0406*201){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*203 + 0.016 && _3keyAudio > _0406*203){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*204 + 0.016 && _3keyAudio > _0406*204){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*207 + 0.016 && _3keyAudio > _0406*207){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*211 + 0.016 && _3keyAudio > _0406*211){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*213 + 0.016 && _3keyAudio > _0406*213){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*217 + 0.016 && _3keyAudio > _0406*217){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*219 + 0.016 && _3keyAudio > _0406*219){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*220 + 0.016 && _3keyAudio > _0406*220){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*221 + 0.016 && _3keyAudio > _0406*221){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*227 + 0.016 && _3keyAudio > _0406*227){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*229 + 0.016 && _3keyAudio > _0406*229){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*232 + 0.016 && _3keyAudio > _0406*232){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*234 + 0.016 && _3keyAudio > _0406*234){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*235 + 0.016 && _3keyAudio > _0406*235){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*236 + 0.016 && _3keyAudio > _0406*236){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*239 + 0.016 && _3keyAudio > _0406*239){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*241 + 0.016 && _3keyAudio > _0406*241){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*243 + 0.016 && _3keyAudio > _0406*243){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*245 + 0.016 && _3keyAudio > _0406*245){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*247 + 0.016 && _3keyAudio > _0406*247){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*250 + 0.016 && _3keyAudio > _0406*250){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*251 + 0.016 && _3keyAudio > _0406*251){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*256 + 0.016 && _3keyAudio > _0406*256){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*258 + 0.016 && _3keyAudio > _0406*258){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*260 + 0.016 && _3keyAudio > _0406*260){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*262 + 0.016 && _3keyAudio > _0406*262){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*266 + 0.016 && _3keyAudio > _0406*266){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*274 + 0.016 && _3keyAudio > _0406*274){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*276 + 0.016 && _3keyAudio > _0406*276){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*278 + 0.016 && _3keyAudio > _0406*278){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*285 + 0.016 && _3keyAudio > _0406*285){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*290 + 0.016 && _3keyAudio > _0406*290){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*295 + 0.016 && _3keyAudio > _0406*295){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*299 + 0.016 && _3keyAudio > _0406*299){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*303 + 0.016 && _3keyAudio > _0406*303){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*309 + 0.016 && _3keyAudio > _0406*309){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*315 + 0.016 && _3keyAudio > _0406*315){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*322 + 0.016 && _3keyAudio > _0406*322){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*324 + 0.016 && _3keyAudio > _0406*324){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*326 + 0.016 && _3keyAudio > _0406*326){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*331 + 0.016 && _3keyAudio > _0406*331){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*335 + 0.016 && _3keyAudio > _0406*335){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*337 + 0.016 && _3keyAudio > _0406*337){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*341 + 0.016 && _3keyAudio > _0406*341){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*344 + 0.016 && _3keyAudio > _0406*344){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*347 + 0.016 && _3keyAudio > _0406*347){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*351 + 0.016 && _3keyAudio > _0406*351){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*357 + 0.016 && _3keyAudio > _0406*357){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*359 + 0.016 && _3keyAudio > _0406*359){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*363 + 0.016 && _3keyAudio > _0406*363){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*367 + 0.016 && _3keyAudio > _0406*367){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*369 + 0.016 && _3keyAudio > _0406*369){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*371 + 0.016 && _3keyAudio > _0406*371){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        if(_3keyAudio < _0406*375 + 0.016 && _3keyAudio > _0406*375){
            _3keyStart.style.backgroundColor = _2_3keyColor;
        }
        _3key_i++;
        if(_3key_i == 29 && _3keyNote != 0){
            funcRate();
            if(_3KeyCheck == 0){
                miss++;
                _rate.innerHTML = "&nbsp;&nbsp;miss";
                comboCnt = 0;
                combo.innerHTML = "";
            }
            _3KeyCheck = 0;
            NextKey.style.backgroundColor = defalutColor;
            _3key_i = 1;
            _3keyNote = 0;
            _27key.style.backgroundColor = _27Color;
        }
        else if(_3key_i == 29){
            _3key_i = 1;
            _27key.style.backgroundColor = _27Color;
        }
    }, keySpeed)
var _4keyNoteDown = setInterval(function () { // 4키 노트다운
        var _4keyStart = document.getElementById("_4-1");
        var _4keyAudio = document.getElementById("_Game_Audio").currentTime;
        var _rate = document.getElementById("rate");
        var NowKey = document.getElementById("_4-"+_4key_i);
        var Next = _4key_i + 1;
        var NextKey = document.getElementById("_4-"+Next);
        var _27key = document.getElementById("_4-23");
        var _0406 = 0.377;
        var combo = document.getElementById("combo");
        if(_4key_i == 2 && NowKey.style.backgroundColor == _1_4keyColor){
            nowNote++;
            _4keyNote = 1;
        }
        if(NowKey.style.backgroundColor == _1_4keyColor){    
            NextKey.style.backgroundColor = _1_4keyColor;
            NowKey.style.backgroundColor = defalutColor;
        }
        //4키 맵핑
        if(_4keyAudio < _0406*3 + 0.016 && _4keyAudio > _0406*3){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*7 + 0.016 && _4keyAudio > _0406*7){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*15 + 0.016 && _4keyAudio > _0406*15){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*27 + 0.016 && _4keyAudio > _0406*27){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*31 + 0.016 && _4keyAudio > _0406*31){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*37 + 0.016 && _4keyAudio > _0406*37){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*39 + 0.016 && _4keyAudio > _0406*39){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*43 + 0.016 && _4keyAudio > _0406*43){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*50 + 0.016 && _4keyAudio > _0406*50){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*52 + 0.016 && _4keyAudio > _0406*52){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*56 + 0.016 && _4keyAudio > _0406*56){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*60 + 0.016 && _4keyAudio > _0406*60){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*62 + 0.016 && _4keyAudio > _0406*62){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*65 + 0.016 && _4keyAudio > _0406*65){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*68 + 0.016 && _4keyAudio > _0406*68){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*71 + 0.016 && _4keyAudio > _0406*71){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*75 + 0.016 && _4keyAudio > _0406*75){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*78 + 0.016 && _4keyAudio > _0406*78){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*80 + 0.016 && _4keyAudio > _0406*80){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*86 + 0.016 && _4keyAudio > _0406*86){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*88 + 0.016 && _4keyAudio > _0406*88){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*94 + 0.016 && _4keyAudio > _0406*94){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*100 + 0.016 && _4keyAudio > _0406*100){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*104 + 0.016 && _4keyAudio > _0406*104){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*106 + 0.016 && _4keyAudio > _0406*106){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*108 + 0.016 && _4keyAudio > _0406*108){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*112 + 0.016 && _4keyAudio > _0406*112){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*115 + 0.016 && _4keyAudio > _0406*115){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*119 + 0.016 && _4keyAudio > _0406*119){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*125 + 0.016 && _4keyAudio > _0406*125){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*129 + 0.016 && _4keyAudio > _0406*129){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*131 + 0.016 && _4keyAudio > _0406*131){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*135 + 0.016 && _4keyAudio > _0406*135){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*139 + 0.016 && _4keyAudio > _0406*139){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*143 + 0.016 && _4keyAudio > _0406*143){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*149 + 0.016 && _4keyAudio > _0406*149){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*151 + 0.016 && _4keyAudio > _0406*151){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*154 + 0.016 && _4keyAudio > _0406*154){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*157 + 0.016 && _4keyAudio > _0406*157){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*165 + 0.016 && _4keyAudio > _0406*165){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*169 + 0.016 && _4keyAudio > _0406*169){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*175 + 0.016 && _4keyAudio > _0406*175){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*181 + 0.016 && _4keyAudio > _0406*181){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*186 + 0.016 && _4keyAudio > _0406*186){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*197 + 0.016 && _4keyAudio > _0406*197){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*199 + 0.016 && _4keyAudio > _0406*199){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*202 + 0.016 && _4keyAudio > _0406*202){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*203 + 0.016 && _4keyAudio > _0406*203){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*204 + 0.016 && _4keyAudio > _0406*204){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*211 + 0.016 && _4keyAudio > _0406*211){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*215 + 0.016 && _4keyAudio > _0406*215){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*219 + 0.016 && _4keyAudio > _0406*219){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*221 + 0.016 && _4keyAudio > _0406*221){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*223 + 0.016 && _4keyAudio > _0406*223){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*229 + 0.016 && _4keyAudio > _0406*229){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*231 + 0.016 && _4keyAudio > _0406*231){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*233 + 0.016 && _4keyAudio > _0406*233){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*237 + 0.016 && _4keyAudio > _0406*237){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*243 + 0.016 && _4keyAudio > _0406*243){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*249 + 0.016 && _4keyAudio > _0406*249){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*251 + 0.016 && _4keyAudio > _0406*251){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*252 + 0.016 && _4keyAudio > _0406*252){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*253 + 0.016 && _4keyAudio > _0406*253){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*255 + 0.016 && _4keyAudio > _0406*255){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*257 + 0.016 && _4keyAudio > _0406*257){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*260 + 0.016 && _4keyAudio > _0406*260){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*261 + 0.016 && _4keyAudio > _0406*261){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*264 + 0.016 && _4keyAudio > _0406*264){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*268 + 0.016 && _4keyAudio > _0406*268){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*277 + 0.016 && _4keyAudio > _0406*277){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*281 + 0.016 && _4keyAudio > _0406*281){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*286 + 0.016 && _4keyAudio > _0406*286){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*289 + 0.016 && _4keyAudio > _0406*289){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*301 + 0.016 && _4keyAudio > _0406*301){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*305 + 0.016 && _4keyAudio > _0406*305){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*312 + 0.016 && _4keyAudio > _0406*312){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*317 + 0.016 && _4keyAudio > _0406*317){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*321 + 0.016 && _4keyAudio > _0406*321){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*323 + 0.016 && _4keyAudio > _0406*323){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*325 + 0.016 && _4keyAudio > _0406*325){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*329 + 0.016 && _4keyAudio > _0406*329){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*333 + 0.016 && _4keyAudio > _0406*333){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*337 + 0.016 && _4keyAudio > _0406*337){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*343 + 0.016 && _4keyAudio > _0406*343){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*347 + 0.016 && _4keyAudio > _0406*347){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*349 + 0.016 && _4keyAudio > _0406*349){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*353 + 0.016 && _4keyAudio > _0406*353){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*355 + 0.016 && _4keyAudio > _0406*355){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*363 + 0.016 && _4keyAudio > _0406*363){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*365 + 0.016 && _4keyAudio > _0406*365){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*367 + 0.016 && _4keyAudio > _0406*367){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*371 + 0.016 && _4keyAudio > _0406*371){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*373 + 0.016 && _4keyAudio > _0406*373){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        if(_4keyAudio < _0406*375 + 0.016 && _4keyAudio > _0406*375){
            _4keyStart.style.backgroundColor = _1_4keyColor;
        }
        _4key_i++;
        if(_4key_i == 29 && _4keyNote != 0){
            funcRate();
            if(_4KeyCheck == 0){
                miss++;
                _rate.innerHTML = "&nbsp;&nbsp;miss";
                comboCnt = 0;
                combo.innerHTML = "";
            }
            _4KeyCheck = 0;
            NextKey.style.backgroundColor = defalutColor;
            _4key_i = 1;
            _4keyNote = 0;
            _27key.style.backgroundColor = _27Color;
        }
        else if(_4key_i == 29){
            _4key_i = 1;
            _27key.style.backgroundColor = _27Color;
        }
}, keySpeed)



document.addEventListener('keydown', (event) => { //키보드 입력 함수 입력시 해당 칸에 불들어옴
    var _1_1key = document.getElementById("_1key"); 
    var _2_1key = document.getElementById("_2key"); 
    var _3_1key = document.getElementById("_3key"); 
    var _4_1key = document.getElementById("_4key");
    var _1_22key = document.getElementById("_1-22");
    var _1_23key = document.getElementById("_1-23");
    var _1_24key = document.getElementById("_1-24");
    var _2_22key = document.getElementById("_2-22");
    var _2_23key = document.getElementById("_2-23");
    var _2_24key = document.getElementById("_2-24");
    var _3_22key = document.getElementById("_3-22");
    var _3_23key = document.getElementById("_3-23");
    var _3_24key = document.getElementById("_3-24");
    var _4_22key = document.getElementById("_4-22");
    var _4_23key = document.getElementById("_4-23");
    var _4_24key = document.getElementById("_4-24");
    var _1_21key = document.getElementById("_1-21");
    var _1_25key = document.getElementById("_1-25");
    var _2_21key = document.getElementById("_2-21");
    var _2_25key = document.getElementById("_2-25");
    var _3_21key = document.getElementById("_3-21");
    var _3_25key = document.getElementById("_3-25");
    var _4_21key = document.getElementById("_4-21");
    var _4_25key = document.getElementById("_4-25");
    var _1_19key = document.getElementById("_1-19");
    var _1_20key = document.getElementById("_1-20");
    var _1_26key = document.getElementById("_1-26");
    var _1_27key = document.getElementById("_1-27");
    var _2_19key = document.getElementById("_2-19");
    var _2_20key = document.getElementById("_2-20");
    var _2_26key = document.getElementById("_2-26");
    var _2_27key = document.getElementById("_2-27");
    var _3_19key = document.getElementById("_3-19");
    var _3_20key = document.getElementById("_3-20");
    var _3_26key = document.getElementById("_3-26");
    var _3_27key = document.getElementById("_3-27");
    var _4_19key = document.getElementById("_4-19");
    var _4_20key = document.getElementById("_4-20");
    var _4_26key = document.getElementById("_4-26");
    var _4_27key = document.getElementById("_4-27");
    var _rate = document.getElementById("rate");
    var _audio1 = document.getElementById("_Game_Audio");
    var combo = document.getElementById("combo");
    const keyName = event.key;
    if(keyName == 'Escape' && document.getElementById("Play_Bt").style.visibility == "hidden"){
        document.getElementById("line").style.visibility = "hidden";
        document.getElementById("ESC_Img").style.visibility = "visible";
        document.getElementById("Play_Bt").style.visibility = "visible";
        document.getElementById("Back_Bt").style.visibility = "visible";
        document.getElementById("Retry_Bt").style.visibility = "visible";
        document.getElementById("_pause").style.visibility = "visible";
        document.getElementById("rate").style.visibility = "hidden";
        document.getElementById("aveRate").style.visibility = "hidden";
        document.getElementById("combo").style.visibility = "hidden";
        if(_audio1.play){
            _audio1.pause();
        }
    }
    else if(keyName == 'Escape'){
        document.getElementById("line").style.visibility = "visible";
        document.getElementById("Play_Bt").style.visibility = "hidden";
        document.getElementById("Back_Bt").style.visibility = "hidden";
        document.getElementById("Retry_Bt").style.visibility = "hidden";
        document.getElementById("ESC_Img").style.visibility = "hidden";
        document.getElementById("_pause").style.visibility = "hidden";
        document.getElementById("rate").style.visibility = "visible";   
        document.getElementById("aveRate").style.visibility = "visible"; 
        document.getElementById("combo").style.visibility = "visible";    
        if(_audio1.paused){
            _audio1.play();
        }
    }
    if (!(event.ctrlKey) && keyName == 'd') {
        _1_1key.style.backgroundColor = "#f0ebce";
        if(_1_20key.style.backgroundColor == _1_4keyColor || _1_19key.style.backgroundColor == _1_4keyColor || _1_21key.style.backgroundColor == _1_4keyColor){
            _rate.innerHTML = '&nbsp;&nbsp;fast';
            _rate.style.backgroundColor = defalutColor;
            _1KeyCheck = 1;
            fast++;
            comboCnt++;
            combo.innerHTML = comboCnt;
        }
        else if(_1_24key.style.backgroundColor == _1_4keyColor || _1_23key.style.backgroundColor == _1_4keyColor || _1_22key.style.backgroundColor == _1_4keyColor){
            _rate.innerHTML = 'perfect';
            _rate.style.backgroundColor = defalutColor;
            _1KeyCheck = 1;
            perfect++;
            comboCnt++;
            combo.innerHTML = comboCnt;
        }
        else if(_1_26key.style.backgroundColor == _1_4keyColor || _1_27key.style.backgroundColor == _1_4keyColor ||  _1_25key.style.backgroundColor == _1_4keyColor){
            _rate.innerHTML = '&nbsp;&nbsp;late';
            _rate.style.backgroundColor = defalutColor;
            _1KeyCheck = 1;
            late++;
            comboCnt++;
            combo.innerHTML = comboCnt;
        }
    }
    else if(!(event.ctrlKey) && keyName == 'f'){
        _2_1key.style.backgroundColor = "#f0ebce";
        if(_2_20key.style.backgroundColor == _2_3keyColor || _2_19key.style.backgroundColor == _2_3keyColor || _2_21key.style.backgroundColor == _2_3keyColor){
            _rate.innerHTML = '&nbsp;&nbsp;fast';           
            _2KeyCheck = 1;
            fast++;
            comboCnt++;
            combo.innerHTML = comboCnt;
        }
        else if(_2_24key.style.backgroundColor == _2_3keyColor || _2_23key.style.backgroundColor == _2_3keyColor ||_2_22key.style.backgroundColor == _2_3keyColor){
            _rate.innerHTML = 'perfect';
            _2KeyCheck = 1;
            perfect++;
            comboCnt++;
            combo.innerHTML = comboCnt;
        }
        else if(_2_26key.style.backgroundColor == _2_3keyColor || _2_27key.style.backgroundColor == _2_3keyColor || _2_25key.style.backgroundColor == _2_3keyColor){
            _rate.innerHTML = '&nbsp;&nbsp;late';
            _2KeyCheck = 1;
            late++;
            comboCnt++;
            combo.innerHTML = comboCnt;
        }
    }
    else if(!(event.ctrlKey) && keyName == 'j'){
        _3_1key.style.backgroundColor = "#f0ebce";
        if(_3_20key.style.backgroundColor == _2_3keyColor || _3_19key.style.backgroundColor == _2_3keyColor || _3_21key.style.backgroundColor == _2_3keyColor){
            _rate.innerHTML = '&nbsp;&nbsp;fast';
            _3KeyCheck = 1;
            fast++;
            comboCnt++;
            combo.innerHTML = comboCnt;
        }
        else if(_3_24key.style.backgroundColor == _2_3keyColor || _3_23key.style.backgroundColor == _2_3keyColor || _3_22key.style.backgroundColor == _2_3keyColor){
            _rate.innerHTML = 'perfect';
            _3KeyCheck = 1;
            perfect++;
            comboCnt++;
            combo.innerHTML = comboCnt;
        }
        else if(_3_26key.style.backgroundColor == _2_3keyColor || _3_27key.style.backgroundColor == _2_3keyColor || _3_25key.style.backgroundColor == _2_3keyColor){
            _rate.innerHTML = '&nbsp;&nbsp;late';
            _3KeyCheck = 1;
            late++;
            comboCnt++;
            combo.innerHTML = comboCnt;
        }
    }
    else if(!(event.ctrlKey) && keyName == 'k'){
        _4_1key.style.backgroundColor = "#f0ebce";
        if(_4_20key.style.backgroundColor == _1_4keyColor || _4_19key.style.backgroundColor == _1_4keyColor || _4_21key.style.backgroundColor == _1_4keyColor){
            _rate.innerHTML = '&nbsp;&nbsp;fast';
            _4KeyCheck = 1;
            fast++;
            comboCnt++;
            combo.innerHTML = comboCnt;
        }
        else if(_4_24key.style.backgroundColor == _1_4keyColor || _4_23key.style.backgroundColor == _1_4keyColor || _4_22key.style.backgroundColor == _1_4keyColor){
            _rate.innerHTML = 'perfect';
            _4KeyCheck = 1;
            perfect++;
            comboCnt++;
            combo.innerHTML = comboCnt;
        }
        else if(_4_26key.style.backgroundColor == _1_4keyColor || _4_27key.style.backgroundColor == _1_4keyColor || _4_25key.style.backgroundColor == _1_4keyColor){
            _rate.innerHTML = '&nbsp;&nbsp;late';
            _4KeyCheck = 1;
            late++;
            comboCnt++;
            combo.innerHTML = comboCnt;
        }
    }
    
  }, false);

document.addEventListener('keyup', (event) => { //키보드키를 땔시 다시 화이트 색상으로 번경
    var _1_1key = document.getElementById("_1key"); 
    var _2_1key = document.getElementById("_2key"); 
    var _3_1key = document.getElementById("_3key"); 
    var _4_1key = document.getElementById("_4key");
    const keyName = event.key;
    if (!(event.ctrlKey) && keyName == 'd') {
        _1_1key.style.backgroundColor = "whitesmoke";
    }
    else if(!(event.ctrlKey) && keyName == 'f'){
        _2_1key.style.backgroundColor = "whitesmoke"; 
    }
    else if(!(event.ctrlKey) && keyName == 'j'){
        _3_1key.style.backgroundColor = "whitesmoke";
    }
    else if(!(event.ctrlKey) && keyName == 'k'){
        _4_1key.style.backgroundColor = "whitesmoke";
    } 
}, false);

function PausePlay(){
    var _audio2 = document.getElementById("_Game_Audio");
    if(_audio2.paused){
        _audio2.play();
        document.getElementById("line").style.visibility = "visible";
        document.getElementById("Play_Bt").style.visibility = "hidden";
        document.getElementById("Back_Bt").style.visibility = "hidden";
        document.getElementById("Retry_Bt").style.visibility = "hidden";
        document.getElementById("ESC_Img").style.visibility = "hidden";
        document.getElementById("_pause").style.visibility = "hidden";
        document.getElementById("rate").style.visibility = "visible";
        document.getElementById("aveRate").style.visibility = "visible";
        document.getElementById("combo").style.visibility = "visible";
    }
}

var totNote = 382;
var maxScore = 1000000;
var nowNote = 0;
var _totRate = document.getElementById("aveRate");
var Sc;
var rt

function funcRate(){ //rate계산
    var _half = fast + late;
    var _max = perfect;
    var nowMaxScore = (maxScore/totNote)*nowNote;
    var _perfect = (maxScore/totNote)*_max;
    var good = ((maxScore*0.8)/totNote)*_half;
    var nowScore = _perfect + good;
    var rate = 0;
    var totRateText = document.getElementById("aveRate");
    Sc = nowScore;
    totRateText.style.background = defalutColor;
    rate += ((nowScore/nowMaxScore)*100);
    totRate = ((good*0.5)+(_perfect*1)*100);
    rate = rate.toFixed(2);
    rt = rate;
    totRateText.innerHTML = rate;
}


function go_Main(){
    location.href = "main.html";
}

function Scoreboard(){
    var _scoreboard = document.getElementById("_Scoreboard");
    var _scbPerfact = document.getElementById("_perfect");
    var _scbLate = document.getElementById("_late");
    var _scbFast = document.getElementById("_fast");
    var _scbMiss = document.getElementById("_miss");
    var _scbRate = document.getElementById("_rate");
    var _scbScore = document.getElementById("_score");
    var _scbRank = document.getElementById("_rank");
    _scoreboard.style.visibility = "visible";
    _scbPerfact.innerHTML = "Perfect : "+perfect;
    _scbLate.innerHTML = "Late : "+late;
    _scbFast.innerHTML = "Fast : "+fast;
    _scbMiss.innerHTML = "Miss : "+miss;
    _scbRate.innerHTML = "Rate : "+rt;
    _scbScore.innerHTML = "Score : "+Math.round(Sc);
    if(rate >= 95){
        _scbRank.innerHTML = "S";
        _scbRank.style.color = "#d6ac02";
    }
    else if(rt >= 90){
        _scbRank.innerHTML = "A";
        _scbRank.style.color = "#1d9e09";
    }
    else if(rt >= 80){
        _scbRank.innerHTML = "B";
        _scbRank.style.color = "#1137a8";
    }
    else if(rt >= 70){
        _scbRank.innerHTML = "C";
        _scbRank.style.color = "#a13389";
    }
    else{
        _scbRank.innerHTML = "D";
        _scbRank.style.color = "#520404";
    }
}

function retry(){
    document.getElementById("_Game_Audio").currentTime = 0;
}