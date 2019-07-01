#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -u

readonly BINPATH="$(realpath "$(dirname "$0")")"

_main() {
  pushd "${BINPATH}/.."
  local definition_file='typings/index.d.ts'
  local current_checksum
  current_checksum="$(shasum "${definition_file}")"
  npm run build:typescript

  if [[ "$(shasum "${definition_file}")" != "${current_checksum}" ]]; then
    echo "FAILURE: Updated typescript definition file has been generated/changed.
         Please commit the updated file '${definition_file}' to fix the build."
    exit 1
  fi
}

_main "$@"
