const pool = require('../config/database');

module.exports = {


getAll: callBack => {
    pool.query(
        `SELECT * FROM testimonial ORDER BY id DESC`, [ ],
        (error, results, fields) => {
            if (error) {
                return callBack(error)
            }
            return callBack(null, results)
        }
    );
},

fetchOne: (serviceid, callBack) => {
    pool.query(`SELECT * FROM testimonial WHERE serviceid = ?`, [serviceid],
        (error, results, fields) => {
            if (error) {
                return callBack(error)
            }
            return callBack(null, results)
        }
    );
},

}