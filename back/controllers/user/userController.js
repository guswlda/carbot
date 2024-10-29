const database = require('../../database/database');

exports.custom_car = async (req, res) => {
  try {
    const { customer_no, car_info_no, make, model, year, car_type } = req.body;

    const result = await database.query(
      `INSERT INTO customer_car (customer_no, car_info_no, make, model, year, car_type, car_created_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW())`,
      [customer_no, car_info_no, make, model, year, car_type]
    );

    res.status(201).json({ message: 'Customer car added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
