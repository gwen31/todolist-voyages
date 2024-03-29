const Location = require('../models/locations');

// GET All locations
const getAllLocations = async (req, res) => {
    try {
      const locations = await Location.getAll();
      res.status(200).json(locations[0]);
    } catch (error) {
      console.log(error);
      res.status(500).send('An error occured while retrieving locations');
    }
  };

  //GET One locations
const getLocations = async (req, res) => {
  try {
      const {id} = req.params;
      const [locations] = await Location.getOne(id);
      res.status(200).json(locations[0]);
  } catch (error) {
      console.log(error);
      res.status(500).send('An error occured while retrieving location infos');    
  }
};
//GET the details of a location
const getDetailsLocations = async (req, res) => {
  try {
    const {id} = req.params;
    const [detailLocation] = await Location.getDetailLocation(id);
    res.status(200).json(detailLocation);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while retrieving details locations infos');  
  }
}

//POST Add Locations
const createLocations = async (req, res) => {
  try {
      const { body } = req;
      const { insertId } = await Location.create(body);
      res.status(201).json({
          id: insertId,
          ...body,
      });
  } catch {
      console.log(error);
      res.status(500).send('An error occured while creating locations')
  }
};

//PUT  Update locations
const updateLocations = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await Location.update(id, body);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while updating Locations');
  }
};

// DELETE delete locations
const deleteLocations = async (req, res) => {
  try {
    const { id } = req.params;
    await Location.deleteOne(id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occured while deleting Locations');
  }
};

  module.exports = {
    getAllLocations,
    getLocations,
    getDetailsLocations,
    createLocations,
    updateLocations,
    deleteLocations
  }