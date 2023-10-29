const {getAllPlanets} = require('../../models/planets.model');

function httpgetAllPlanets(rep, res) {
   return res.status(200).json(getAllPlanets());
}

module.exports = {
    httpgetAllPlanets,
}