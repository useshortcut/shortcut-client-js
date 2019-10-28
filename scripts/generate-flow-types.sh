#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -u

readonly IFS=$'\n\t'

_main() {
  for file in $(find ./lib -name *.d.ts -type f); do
    flowgen --add-flow-header "${file}" -o "${file/.d.ts/.js.flow}"
  done
}

_main "$@"
