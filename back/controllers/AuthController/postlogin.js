const database = require('../database/database'); // database 가져오기

exports.getCarType = async (req, res) => {
  try {
    const result = await database.query('SELECT * FROM vehicle_type');
    return res.status(200).json(result.rows);
  } catch (error) {
    return res.status(500).json({ msg: 'Get Items Fail' + error });
  }
};
