const Destination = require("../models/Destination"); // Adjust the path based on your project structure

const deleteDestination = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the destination by its ID
    const deletedDestination = await Destination.findByIdAndDelete(id);

    if (!deletedDestination) {
      return res.status(404).json({ message: "Destination not found" });
    }

    res.status(200).json({ message: "Destination deleted successfully" });
  } catch (error) {
    console.error("Error deleting destination:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = deleteDestination;
