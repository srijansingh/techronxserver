const {getAll,fetchOne} = require("../model/testimonial");

module.exports = {

    //Get All User
    getAllProject: (req, res) => {
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
    getSingleProjectById: (req, res) => {
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
    }
}