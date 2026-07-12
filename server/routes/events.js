const express = require("express");

const Event = require("../models/Event");
const auth =
require("../middleware/auth");
const router = express.Router();

router.get("/", async (req, res) => {

  const events =
    await Event.find();

  res.json(events);

});
router.get("/mine", auth, async (req, res) => {

    try {
  
      const events = await Event.find({
        user: req.user.id
      });
  
      res.json(events);
  
    } catch (err) {
  
      res.status(500).json(err);
  
    }
  
  });
router.post("/", auth, async (req, res) => {

    try {
  
      const event = await Event.create({
        ...req.body,
        user: req.user.id
      });
  
      res.json(event);
  
    } catch (err) {
  
      res.status(500).json(err);
  
    }
  
  });

router.put("/:id", async (req, res) => {

  const event =
    await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

  res.json(event);

});
router.put("/:id", auth, async (req, res) => {

    try {
  
      const event = await Event.findById(req.params.id);
  
      if (!event) {
        return res.status(404).json({
          message: "Event not found"
        });
      }
  
      if (event.user.toString() !== req.user.id) {
        return res.status(403).json({
          message: "Unauthorized"
        });
      }
  
      const updatedEvent =
        await Event.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
  
      res.json(updatedEvent);
  
    } catch (err) {
  
      res.status(500).json(err);
  
    }
  
  });
router.delete("/:id", async (req, res) => {

  await Event.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message: "Deleted"
  });
  router.delete("/:id", auth, async (req, res) => {

    try {
  
      const event = await Event.findById(req.params.id);
  
      if (!event) {
        return res.status(404).json({
          message: "Event not found"
        });
      }
  
      if (event.user.toString() !== req.user.id) {
        return res.status(403).json({
          message: "Unauthorized"
        });
      }
  
      await Event.findByIdAndDelete(
        req.params.id
      );
  
      res.json({
        message: "Event deleted"
      });
  
    } catch (err) {
  
      res.status(500).json(err);
  
    }
  
  });

});

module.exports = router;