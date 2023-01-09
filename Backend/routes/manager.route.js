const router = require("express").Router();
const Manager = require("../model/manager.model");

router.post("/", async (req, res) => {
  try {
    // Create new manager
    let manager = new Manager({
      managerName: req.body.managerName,
      bankName: req.body.bankName,
      bankGuranteeExpireDate: req.body.bankGuranteeExpireDate,
      company: req.body.company,
      bankGuranteeCode: req.body.bankGuranteeCode,
      bankGuranteeAmount: req.body.bankGuranteeAmount,
      email: req.body.email,
    });
    // Save manager
    await manager.save();
    res.json(manager);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    let Manager = await Manager.find();
    res.json(manager);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // Find manager by id
    let manager = await Manager.findById(req.params.id);

    // Delete manager from db
    await manager.remove();
    res.json(manager);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    let manager = await Manager.findById(req.params.id);
    const data = {
      managerName: req.body. managerName || manager. managerName,
      bankName: req.body.bankName || manager.bankName,
      bankGuranteeExpireDate: req.body.bankGuranteeExpireDate || manager.bankGuranteeExpireDate,
      company: req.body.company || manager.company,
      bankGuranteeCode: req.body.bankGuranteeCode || manager.bankGuranteeCode,
      bankGuranteeAmount: req.body.bankGuranteeAmount || manager.bankGuranteeAmount,
      email: req.body.email || manager.email,
    };
    manager = await Manager.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(manager);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // Find manager by id
    let manager = await Manager.findById(req.params.id);
    res.json(manager);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
