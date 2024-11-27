const router = require("express").Router();
const visitors = require("../controllers/visitorsCtrl");
// const requireAuth = require('../middleware/requireAuth')


// router.use(requireAuth)

router.post("/addmaincount", visitors.mainCount);
router.post("/testcount", visitors.testCount);
router.get("/getcountmain", visitors.getCountMain);


module.exports = router;