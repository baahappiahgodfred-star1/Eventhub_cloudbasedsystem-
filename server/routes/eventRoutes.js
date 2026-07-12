router.delete("/:id", async (req, res) => {

    try {
  
      await Event.findByIdAndDelete(req.params.id);
  
      res.json({
        message: "Event deleted"
      });
  
    } catch (err) {
  
      res.status(500).json({
        message: err.message
      });
  
    }
  
  });