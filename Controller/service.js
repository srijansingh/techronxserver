const {create,getAll,fetchOne,fetchSingle} = require("../model/service");

module.exports = {

    //Create User 
    createService: (req, res) => {
        let body = req.body;
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                result: results,
                data: body,
                message:"Post uploaded successfully"
            });
        });
    },


    //Get All User
    getAllService: (req, res) => {
        getAll((err, results) => {
            if (err) {
                console.log(err)
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    //Get Single User
    getSingleServiceById: (req, res) => {
        const serviceid = req.params.serviceid;
        fetchOne(serviceid, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: false,
                    message: "Record Not Found"
                });
            }
            return res.status(200).json({
                success: true,
                data: results
            });
        });
    },

    getSingleService: (req, res) => {
        const id = req.params.id;
        fetchSingle(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: false,
                    message: "Record Not Found"
                });
            }
            return res.status(200).json({
                success: true,
                data: results
            });
        });
    },


    //Update Users Information
    // updateSinglePost: (req, res) => {
    //     const pid = req.params.pid;
    //     const body = req.body;
    //     body.pid = pid;
    //     update(body, (err, results) => {
    //         if (err) {
    //             console.log(err);
    //             return res.status(500).json({
    //                 success: false,
    //                 message: "Server Side Connection Error"
    //             });
    //         }
    //         return res.status(200).json({
    //             success: true,
    //             message: "Post updated successfully"
    //         });
    //     });
    // },

    // deletePost: (req, res) => {
    //     const pid = req.params.pid;
    //     remove(pid, (err, results) => {
    //         if (err) {
    //             console.log(err);
    //             return res.json({
    //                 message: "Something went wrong",
    //             });
    //         }
    //         return res.status(200).json({
    //             success: true,
    //             message: "Post deleted successfully"
    //         })

    //     })
    // }
}