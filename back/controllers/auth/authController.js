const database = require('../../database/database');
const bcrypt = require('bcrypt');
const salt = 10;

// 회원 가입
exports.signUp = async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.customer_pw, salt); // 비밀번호 해시 생성

    const values = [
      req.body.customer_id,
      hash,
      req.body.customer_email,
      req.body.customer_name,
      req.body.customer_phone,
      req.body.customer_gender,
      req.body.customer_birth,
      req.body.customer_city,
      req.body.customer_has_car,
      new Date(),
      new Date(),
      req.body.customer_status,
    ];

    await database.query(
      `INSERT INTO customers 
      (customer_id, customer_pw, customer_email, customer_name, customer_phone, 
      customer_gender, customer_birth, customer_city, customer_has_car, 
      customer_created_at, customer_updated_at, customer_status) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
      values
    );

    return res.status(201).json({ message: 'Account Created Successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// 로그인
exports.login = async (req, res) => {
  const { customer_id, customer_pw } = req.body;

  try {
    const result = await database.query(
      'SELECT * FROM customers WHERE customer_id = $1',
      [customer_id]
    );
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ message: 'Invalid ID or password' });
    }

    const match = await bcrypt.compare(customer_pw, user.customer_pw);
    if (!match) {
      return res.status(401).json({ message: 'Invalid ID or password' });
    }

    req.session.userId = user.customer_id;
    return res.json({ message: 'Login successful' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// 로그 아웃
exports.logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Logout failed' });
    }
    res.clearCookie('connect.sid');
    return res.json({ message: 'Logout successful' });
  });
};

// 아이디 찾기
exports.findId = async (req, res) => {
  const { customer_name, customer_email } = req.body;

  if (!customer_name || !customer_email) {
    return res
      .status(400)
      .json({ message: '이름과 이메일을 모두 입력해주세요.' });
  }

  try {
    const nameResult = await database.query(
      'SELECT customer_id, customer_email FROM customers WHERE customer_name = $1',
      [customer_name]
    );

    if (nameResult.rows.length === 0) {
      return res.status(404).json({ message: '일치하는 이름이 없습니다.' });
    }

    const user = nameResult.rows.find(
      (user) => user.customer_email === customer_email
    );

    if (user) {
      return res.json({
        message: '아이디 찾기에 성공했습니다.',
        userId: user.customer_id,
      });
    } else {
      return res
        .status(404)
        .json({ message: '이름은 일치하나 이메일이 일치하지 않습니다.' });
    }
  } catch (error) {
    console.error('DB 에러:', error);
    return res.status(500).json({ message: '서버 오류가 발생했습니다.' });
  }
};
