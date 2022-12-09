use clap::{Arg, ArgMatches, Command};
mod cli {
    pub mod formatted_text;
    pub mod provisioner;
}

pub fn configurator() -> [Command<'static>; 2] {
    return [Command::new("config")
        .short_flag('c')
        .about("Helps you configure Express-Cassandra")
        .args(&[Arg::new("construct_new_connector")
            .short('n')
            .long("new")
            .help("Constructs the file according to your preference, run new for constructing a new file from scratch or run default as Cassey -c -n new/default")
            .takes_value(true)]),
            Command::new("test").short_flag('t').about("Tests your connection in your respective environment")];
}

fn main() {
    let cli:ArgMatches = Command::new("Cassey CLI")
        .version("0.1.0")
        .about("This program lets you configure, work with Cassandra and Express-Cassandra without hassle.\nThis will configure your cassandra cluster for your express cassandra project.")
        .after_help(
            "Longer explanation to appear after the options when \
                 displaying the help information from --help or -h",
        )
        .subcommands(configurator())
        .get_matches();
    {
        if cli
            .subcommand_matches("config")
            .unwrap()
            .value_of("construct_new_connector")
            .unwrap()
            == "new"
        {
            match cli::provisioner::create() {
                Err(e) => println!("{:?}", e),
                _ => (),
            }
        } else if cli
            .subcommand_matches("config")
            .unwrap()
            .value_of("construct_new_connector")
            .unwrap()
            == "default"
        {
            match cli::provisioner::default() {
                Err(e) => println!("{:#?}", e),
                _ => (),
            }
        }
    }
}
