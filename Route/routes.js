const {createService, getAllService, getSingleServiceById,getSingleService} = require("../controller/service");
const {createPost, getAllPost, getSinglePost, updateSinglePost,deletePost} = require("../controller/blog");
const { getAllProject, getSingleProjectById} = require("../controller/testimonial");
const {createContact, getAllContact} = require("../Controller/contact");
const {createTeam, getAllTeam} = require("../Controller/team");
const router = require('express').Router();

router.post('/api/service', createService);
router.get('/api/service',  getAllService);
router.get('/api/service/:serviceid', getSingleServiceById);
router.get('/api/services/:id', getSingleService);

router.post('/posts', createPost);
router.get('/posts',  getAllPost);
router.get('/posts/:id',  getSinglePost);
router.delete('/posts/:id', deletePost);


router.get('/api/testimonial',  getAllProject);
router.get('/api/testimonial/:serviceid', getSingleProjectById);

router.post('/contact', createContact);
router.get('/contact',  getAllContact);

router.post('/team', createTeam);
router.get('/team',  getAllTeam);
module.exports = router;