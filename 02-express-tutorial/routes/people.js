const express = require("express");
const router = express.Router();

const {
  createPerson,
  createPersonPostman,
  getPeople,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// router.post("/", createPerson);

// router.post("/postman", createPersonPostman);

// router.get("/", getPeople);

// router.put("/:id"), updatePerson;

// router.delete("/:id", deletePerson);

//one way to set up routes is to chain them, less lines and bundled
router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);
module.exports = router;
