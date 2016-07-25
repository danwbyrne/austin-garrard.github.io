export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/latest/bin
export JAVA_HOME=$(/usr/libexec/java_home)

alias ll="ls -lGp"

# This function shows you a bunch of colors
function list_colors {
  color=16;
  while [ $color -lt 245 ]; do
    echo -e "$color: \\033[38;5;${color}mhello\\033[48;5;${color}mworld\\033[0m"
    ((color++));
  done  
}

# This function is called in your prompt to output your active git branch.
function parse_git_branch {
  git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

# This function builds your prompt. It is called below
# ♥ ☆  » - Keeping some cool ASCII Characters for reference
function prompt {
  local CHAR="»"
  local COLOR1="\[\033[38;5;165m\]"
  local COLOR2="\[\033[38;5;92m\]"
  local COLOR3="\[\033[38;5;91m\]"
  local COLOR4="\[\033[38;5;90m\]"

  local PROMPT="$COLOR1$CHAR"	
  local USER="$COLOR4<\u@\h>"
  local DATETIME="$COLOR3[\D{%F} \T]"
  local PWD="$COLOR2\w$COLOR1\$(parse_git_branch)"
  local END="\[\e[0m\]"

  export PS1="\n\[$(tput bold)\] $PROMPT $USER $DATETIME $PWD \n $PROMPT $END "
}

# Finally call the function and our prompt is all pretty
prompt


