const pool = require('../Config/database');

module.exports = {

create: (data, callBack) => {
    pool.query(
        `INSERT into team(name,email,position,imagelink,linkedin) 
        VALUES(?,?,?,?,?)`,
        [
            data.name,
            data.email,
            data.position,
            data.imagelink,
            data.linkedin
        ],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results)
        }
    );
},


getAll: callBack => {
    pool.query(
        `select * FROM team`, [],
        (error, results, fields) => {
            if (error) {
                return callBack(error)
            }
            return callBack(null, results)
        }
    );
}

}