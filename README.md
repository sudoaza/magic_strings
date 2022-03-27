# magic_strings
Handy bits for CTFs and life

### Bash 

    BASH_ENV='$(id 1>&2)' bash -c 'echo hello'

    env $'BASH_FUNC_myfunc%%=() { id; }' bash -c 'myfunc'
    
    $'\151\144'

