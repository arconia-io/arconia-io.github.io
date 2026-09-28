{ pkgs, lib, config, inputs, ... }:

{
  # https://devenv.sh/packages/
  packages = [
    pkgs.go-task
  ];

  # See full reference at https://devenv.sh/reference/options/
}
