const {create,getAll} = require("../Model/contact");


module.exports = {

    //Create User 
    createContact: (req, res) => {
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
    getAllContact: (req, res) => {
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
    }

}