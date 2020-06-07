const pool = require('../Config/database');

module.exports = {

create: (data, callBack) => {
    pool.query(
        `INSERT into contact(name,email,phonenum,occupation) 
        VALUES(?,?,?,?)`,
        [
            data.name,
            data.email,
            data.phonenum,
            data.occupation
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
        `select * FROM contact`, [],
        (error, results, fields) => {
            if (error) {
                return callBack(error)
            }
            return callBack(null, results)
        }
    );
}

}