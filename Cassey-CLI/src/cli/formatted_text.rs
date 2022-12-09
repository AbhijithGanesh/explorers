use super::provisioner;

pub fn text(data: provisioner::ExpressConnection) -> String {
    let code: String = format!(
        "
import {{ setDirectory, consistencies }} from  'express-cassandra'

setDirectory(__dirname + '/models').bind(
{{
    clientOptions: {{
    contactPoints: {:?},
    localDataCenter: {:?},
    keyspace: {},
    queryOptions: {{
        consistency:{:?}
    }},
    protocolOptions: {{
            port: {:#?}
    }},
    socketOptions: {{
        read_timeout: {:?}
    }},
    }},
    ormOptions: {{
    defaultReplicationStrategy: {{
        class: 'SimpleStrategy',
        replication_factor: 1,
    }},
    migration: 'safe',
    }},
}},
function (err) {{
    if (err) throw err
    else {{
    console.log(
        'Database successfully connected at port 9042'
    );
    }}
}}
)
    ",
        data.contact_points,
        data.localdatacenter,
        data.keyspace,
        data.query_options.consistency,
        data.protocol_options.port,
        data.socket_options.read_timeout,
    );
    return code;
}
