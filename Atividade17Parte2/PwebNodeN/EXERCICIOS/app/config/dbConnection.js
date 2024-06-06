const sql = require ('mssql');

module.exports = function(){
    const config = {
        user: 'BD2213032',
        password: '',
        database: 'BD',
        server: 'APOLO',
        options: {
            encrypt: false,
            trustServerCertificate: true
        }
    };

    return sql.connect(config);
}
