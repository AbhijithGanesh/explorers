use super::formatted_text;
use colored::Colorize;
use derive;
use serde::{Deserialize, Serialize};
use std::fs::{File, OpenOptions};
use std::io;
use std::io::Write;

#[derive(Debug, Serialize, Deserialize)]
pub struct ProtocolOptions {
    pub port: u32,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct QueryOptions {
    pub consistency: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct SocketOptions {
    pub read_timeout: u64,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ExpressConnection {
    pub size_of_contact_points: u8,
    pub contact_points: Vec<String>,
    pub localdatacenter: String,
    pub keyspace: String,
    pub protocol_options: ProtocolOptions,
    pub socket_options: SocketOptions,
    pub query_options: QueryOptions,
}

pub fn constructor(
    size: u8,
    contact: Vec<String>,
    localdc: String,
    keyspace: String,
    socketopt: SocketOptions,
    protoc_options: ProtocolOptions,
    queryopt: QueryOptions,
) -> ExpressConnection {
    ExpressConnection {
        size_of_contact_points: size,
        contact_points: contact,
        localdatacenter: localdc,
        keyspace: keyspace,
        socket_options: socketopt,
        protocol_options: protoc_options,
        query_options: queryopt,
    }
}

pub fn construct_express() -> ExpressConnection {
    let mut _size: String = String::new();
    println!(
        "{}",
        format!("{}", "Enter the size of contact points").green()
    );
    io::stdin()
        .read_line(&mut _size)
        .expect("Failed to read line");
    let size: u8 = _size.trim().parse().unwrap();

    let mut contact: Vec<String> = vec![];
    for _i in 0..(size) {
        let mut inst: String = String::new();
        println!(
            "{}",
            format!("{}", "Enter the contact points sequentially").yellow()
        );

        io::stdin()
            .read_line(&mut inst)
            .expect("Failed to read line");
        let data = inst.trim();
        contact.push(data.to_string());
    }

    let mut localdc: String = String::new();
    println!(
        "{}",
        format!("{}", "Enter the name of your local data center.").yellow()
    );
    io::stdin()
        .read_line(&mut localdc)
        .expect("Failed to read line");
    let mut keyspace: String = String::new();
    println!(
        "{}",
        format!("{}", "Enter the name of your keyspace").yellow()
    );
    io::stdin()
        .read_line(&mut keyspace)
        .expect("Failed to read line");

    let mut _ports: String = String::new();
    println!("{}", format!("{}", "Enter the port number").yellow());
    io::stdin().read_line(&mut _ports).expect("Failed to read");
    let prot_instance: ProtocolOptions = ProtocolOptions {
        port: _ports.trim().parse().unwrap(),
    };
    println!(
        "{}",
        format!("{}", "Enter the name of your consistency").yellow()
    );
    let mut query_inst: String = String::new();
    io::stdin()
        .read_line(&mut query_inst)
        .expect("Failed to read");
    let queryopt_inst: QueryOptions = QueryOptions {
        consistency: query_inst.trim().to_string(),
    };
    println!(
        "{}",
        format!("{}", "Enter the time in seconds for read timeout.").yellow()
    );
    let mut sockt_inst: String = String::new();
    io::stdin()
        .read_line(&mut sockt_inst)
        .expect("Failed to read");
    let socktoptions_inst: SocketOptions = SocketOptions {
        read_timeout: sockt_inst.trim().parse().unwrap(),
    };
    let query_recognized: ExpressConnection = constructor(
        size,
        contact,
        localdc.trim().to_string(),
        keyspace.trim().to_string(),
        socktoptions_inst,
        prot_instance,
        queryopt_inst,
    );
    return query_recognized;
}

pub fn create() -> std::io::Result<()> {
    println!("This configurator will configure your Express-Cassandra database connection\n");
    let message: String = String::from(
        "Welcome to the constructor, the constructor will construct the client for you.\nThe client will be structured according to the example",

    );
    println!("{}", format!("{}", message).green());

    println!("\nCheck the example down below\n");

    let instance: ExpressConnection = constructor(
        3,
        vec![String::from("127.0.7.1")],
        String::from("datacenter"),
        String::from("test_keyspace"),
        SocketOptions { read_timeout: 6000 },
        ProtocolOptions { port: 80 },
        QueryOptions {
            consistency: String::from("ExpressCassandra.consistencies.one"),
        },
    );
    println!("{:#?}", instance);

    let message: String = String::from("You have called the config command, the CLI will now ask you sequentially to confirm your options.");
    println!("{}", format!("{}", message).blue().on_bright_white());

    let data: ExpressConnection = construct_express();

    println!("{}", format!("\n{:#?}", data).green());
    println!("Is this the configuration you'd like to have ?");
    println!(
        "{}, {}",
        format!("Type Y for yes").green(),
        format!("\nand N for no").red()
    );

    let mut cmd: String = String::new();
    io::stdin().read_line(&mut cmd).expect("Failed to read");

    while cmd.trim() == "N" {
        let data: ExpressConnection = construct_express();
        println!("{}", format!("\n{:#?}", data).green());
        println!(
            "{}, {}",
            format!("Type Y for yes").green(),
            format!("\nand N for no").red()
        );
        io::stdin().read_line(&mut cmd).expect("Failed to read");
    }
    let mut file: File = OpenOptions::new()
        .read(true)
        .write(true)
        .create(true)
        .append(false)
        .open("./connection.js")
        .unwrap();

    file.write(formatted_text::text(data).as_bytes())?;
    Ok(())
}

pub fn default() -> std::io::Result<()> {
    println!("This configurator will configure your Express-Cassandra database connection\n");
    let message: String = String::from(
        "Welcome to the constructor, the constructor will construct the client for you.\nThe client will be structured according to the example",

    );
    println!("{}", format!("{}", message).green());

    println!("\nCheck the example down below\n");
    let code: String = String::from(
        r"
import { setDirectory, consistencies } from 'express-cassandra'

setDirectory(__dirname + '/models').bind(
  {
    clientOptions: {
      contactPoints: ['127.0.0.1'],
      localDataCenter: 'datacenter1',
      protocolOptions: { port: 9042 },
      keyspace: 'CassTest',
      queryOptions: { consistency: consistencies.one },
      socketOptions: { readTimeout: 0 },
    },
    ormOptions: {
      defaultReplicationStrategy: {
        class: 'SimpleStrategy',
        replication_factor: 1,
      },
      migration: 'safe',
    },
  },
  function (err) {
    if (err) throw err
    else {
      console.log('Database successfully connected at port 9042')
    }
  }
)

        ",
    );
    println!("{}", format!("{}", code).yellow());

    println!("\n\n\n{}", format!("{}", "Enter Y for this code").green());
    let mut command: String = String::from("");
    io::stdin()
        .read_line(&mut command)
        .expect("Failed to read line");
    if command.trim() == "Y" {
        let mut file: File = OpenOptions::new()
            .read(true)
            .write(true)
            .create(true)
            .append(false)
            .open("./connection.js")
            .unwrap();
        println!("{}", code);
        file.write(code.as_bytes())?;
    }
    Ok(())
}
