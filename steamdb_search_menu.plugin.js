//META{"name":"searchSteamDBAppOption"}*//
var searchSteamDBAppOption = function(){};

searchSteamDBAppOption.prototype.replace = function(){
};

searchSteamDBAppOption.prototype.onMessage = function(){
};
searchSteamDBAppOption.prototype.onSwitch = function(){
};
searchSteamDBAppOption.prototype.start = function(){
    $(document).ready(function() {
        $("body").mousedown(function(ev){
          if(ev.which == 3){
              setTimeout(function(){
                  if($('.context-menu .item span')[1].innerHTML.indexOf('Google') > 0)
                    $('.context-menu .item-group:contains("Google")')
                        .append('',"<div class=\"item-group\" onclick=\"window.open('https://steamdb.info/search/?a=app&q='+encodeURIComponent(window.getSelection().toString()))\"><div class=\"item\"><span>Search AppName on SteamDB</span> </div></div></div ><div class=\"hint\">");
              },250);
              // if you are reading this and have a better solution to this, feel free to leave a PR or pm me about it -cate#4444/Ckath
          }
        });
    });
};
searchSteamDBAppOption.prototype.load = function(){};
searchSteamDBAppOption.prototype.unload = function(){};
searchSteamDBAppOption.prototype.stop = function(){
    $("body").off('mousedown');
};
searchSteamDBAppOption.prototype.getSettingsPanel = function(){
    return "";
};
searchSteamDBAppOption.prototype.getName = function(){
    return "Search on SteamDB";
};
searchSteamDBAppOption.prototype.getDescription = function(){
    return "Adds option to search text among apps on SteamDB";
};
searchSteamDBAppOption.prototype.getVersion = function(){
    return "0.0.1";
};
searchSteamDBAppOption.prototype.getAuthor = function(){
    return "dimon222";
};
