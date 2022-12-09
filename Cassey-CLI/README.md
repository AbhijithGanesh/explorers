# Cassey-CLI

The CLI tool is being implemented using Clap and Rust.

The CLI tool currently support configuration of connection files for Javascript, it'll soon support Rust, Python and other languages.

The configuration tool is built intuitively for users with less-experience with Cassandra/Express Cassandra.

To get started, pull the executable binary from GitHub and extract the zipped file.

Once done, open Cassey CLI.

## DISCLAIMER: The CLI will return nothing if you run it without any argument

Run help command using `Cassey --help` to get to know about more commands, the commands and flags are self-explanatory.

_** The sub-command: `-c` will help you configure your JS Connection file.**_

There are certain flags you can use:

- n -> New connector file `-n` [Implemented as of stage 1]
  - To create a new file based on custom values, you can run `cassey -c -n new`
  - To create a file based on the [defaults](express-cassandra.readthedocs.io/) of Express Cassandra JS driver, Run: `cassey -c -n default`
- e -> edits a connection file based on input [Stage 2 Implementation]
- c -> Checks for potential bugs in your connection [Stage 3 Implementation]

Other commands under development:

- _** The sub-command `-t` tests your connection according to the platform **_
- _** The sub-commmand `-T` to run your test cases (Jest only) **_
- \__** The sub-command `-m` to migrate your models **_
