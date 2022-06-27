const Service = require("../models/Service");

// Return all services in services table
const getAllServices = async (req, res, next) => {

  let services;

  try {
    services = await Service.findAll();
  } catch (err) {

    return res.status(500).json({
      success: false,
      message: "Error occurred fetching services"
    })
  }

  if (services) {
    count = services.length;
  } else {
    count = 0;
  }

  return res.status(200).json({
    success: true,
    services: services,
    count: count,
  });
};

//Add new service
const createService = async (req, res, next) => {
  const { title } = req.body;

  // If title missing from request body..
  if (!title) {
    return res.status(422).json({
      success: false,
      message: "Missing required paramaters",
    });
  }

  let service;

  try {
    service = await Service.create({
      title: title,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: "Error ting",
    });
  }

  return res.status(200).json({
    success: true,
    service: service,
  });
};

//Delete service
// Must pass the service ID of service to bne deleted in request body
const deleteService = async (req, res, next) => {

  const { id } = req.body;

  // If id missing from request body..
  if (!id) {
    return res.status(422).json({
      success: false,
      message: "Missing required paramaters",
    });
  }

  try {
    const deletedService = await Service.destroy({
      where: {
        id: id,
      },
    });

    // If service not found with provided ID.. 
    if (!deletedService) {
      return res
        .status(404)
        .json({ success: false, message: "Service not found!" });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server Error! Please try again later.",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Service deleted successfully",
  });
};

// Deletes all rows in services table
const deleteAllServices = async (req, res, next) => {
  try {
    await Service.destroy({
      // leave WHERE empty = delete ALL services
      where: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err,
    });
  }

  return res.status(200).json({
    success: true,
    message: "All entries in services table deleted",
  });
};

//Edit service
// Must pass the service ID and the new title in request body
const editService = async (req, res, next) => {
  const { id, title } = req.body;

  // If id OR title missing from request body..
  if (!id || !title) {
    return res.status(422).json({
      success: false,
      message: "Missing required paramaters - new title and service ID required",
    });
  }

  let service;

  try {
    service = await Service.update(
      {
        title: title,
      },
      {
        where: { id: id },
      }
    );

    // If no service found with provided ID
    if (service == 0) {
      return res
        .status(404)
        .json({ success: false, message: "Service not found!" });
    }
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      message: "Server error editing service"
    })
  }

  return res.status(200).json({
    success: true,
    message: "Service edited successfully",
  });
};

// EXECUTES: DROP TABLE IF EXISTS "Services";
const dropServicesTable = async (req, res, next) => {
  try {
    await Service.drop();
  } catch (err) {
    console.log(err);
  }

  return res.status(200).json({
    success: true,
    message: "Services table dropped",
  });
};

exports.getAllServices = getAllServices;
exports.createService = createService;
exports.deleteService = deleteService;
exports.deleteAllServices = deleteAllServices;
exports.dropServicesTable = dropServicesTable;
exports.editService = editService;
