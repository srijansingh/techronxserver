const pool = require('../config/database');

module.exports = {

    create: (data, callBack) => {
        pool.query(
            `INSERT into service-intro(id,heading,content,imageurl) 
            VALUES(?,?,?,?)`,
            [
                data.id,
                data.heading,
                data.content,
                data.imageurl
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
            `SELECT * FROM serviceintro ORDER BY indexid DESC`, [ ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },

    fetchOne: (serviceid, callBack) => {
        pool.query(`SELECT * FROM services WHERE serviceid = ?`, [serviceid],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },

    fetchSingle: (id, callBack) => {
        pool.query(`SELECT * FROM serviceintro WHERE id = ?`, [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results[0])
            }
        );
    },


//     update: (data, callBack) => {
//         pool.query(
//             `UPDATE posts SET description=? WHERE pid = ? `,
//             [
//                 data.description,
//                 data.pid
//             ],
//             (error, results, fields) => {
//                 if (error) {
//                     return callBack(error);
//                 }
//                 return callBack(null, results[0])
//             }
//         );
//     },


//     remove: (pid, callBack) => {
//         pool.query(`DELETE from posts WHERE pid = ?`,[pid],
//             (error, results, fields) => {
//                 if (error) {
//                     return callBack(error)
//                 }
//                 return callBack(null, results[0])
//             }
//         );
//     }
// 
}