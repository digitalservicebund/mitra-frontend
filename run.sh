#!/bin/sh

set -eu

readonly DEBUG="${DEBUG:-unset}"
if [ "${DEBUG}" != unset ]; then
  set -x
fi

_fail() {
  printf "\033[0;31m==> %s\033[0m\n\n" "$1"
}

_success() {
  printf "\033[0;32m==> %s\033[0m\n\n" "$1"
}

_info() {
  printf "\033[1;33m==> %s\033[0m\n\n" "$1"
}

_user() {
  printf "\033[0;33m%s\033[0m" "$1"
}

_setup_git_hooks() {
  _user "Do you want to install the Git hooks ? (y/n) "
  read -r answer
  if [ "$answer" = "y" ]; then
    if ! command -v lefthook > /dev/null 2>&1; then
      _fail "Setup requires Lefthook, please install first: \`brew install lefthook\`"
      exit 1
    fi
    if ! command -v talisman > /dev/null 2>&1; then
      _fail "Setup requires Talisman, please install first: \`brew install talisman\`"
      exit 1
    fi
    lefthook install
    _info "Git hooks installed.."
  fi
}

_init() {
  _setup_git_hooks
}

_commit_message_template() {
  template="$PWD/.git/.gitmessage.txt"
  git config commit.template "$template"
  cat << EOF > "$template"
Subject

Some context/description

Addresses MIT-${1#MIT-}
EOF
}

_help() {
  echo "Usage: ./run.sh [command]"
  echo ""
  echo "Available commands:"
  echo "init                  Set up repository for development"
  echo "cm <issue-number>     Configure commit message template with given issue number;"
  echo "                      issue number can be with or without prefix: 1234, MIT-1234."
}

cmd="${1:-}"
case "$cmd" in
  "init") _init ;;
  "cm")
    shift
    _commit_message_template "$@"
    ;;
  *) _help ;;
esac
