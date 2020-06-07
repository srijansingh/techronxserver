const pool = require('../Config/database');

module.exports = {

    create: (data, callBack) => {
        pool.query(
            `INSERT into blog(userid,heading,content,thumbnail,keyword) 
            VALUES(?,?,?,?,?)`,
            [
                data.userid,
                data.heading,
                data.content,
                data.thumbnail,
                data.keyword,
              
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
            `select b.userid, u.name, u.userid, u.imageLink, b.id,b.heading,b.thumbnail, b.content, b.keyword, b.created FROM adminuser u, blog b WHERE u.userid = b.userid`, [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },

    fetchOne: (id, callBack) => {
        pool.query(`SELECT b.userid, u.name, u.userid, u.imageLink, b.id,b.heading, b.thumbnail, b.content, b.keyword, b.created FROM adminuser u, blog b WHERE u.userid = b.userid AND id = ?`, [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results[0])
            }
        );
    },


    // update: (data, callBack) => {
    //     pool.query(
    //         `UPDATE posts SET description=? WHERE pid = ? `,
    //         [
    //             data.description,
    //             data.pid
    //         ],
    //         (error, results, fields) => {
    //             if (error) {
    //                 return callBack(error);
    //             }
    //             return callBack(null, results[0])
    //         }
    //     );
    // },


    remove: (id, callBack) => {
        pool.query(`DELETE from blog WHERE id = ?`,[id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results[0])
            }
        );
    }
}