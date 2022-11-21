import { db } from "../db.js";

// get all posts
export const getUsers = (req, res) => {
  const q = "SELECT * FROM users";
  db.query(q, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getUser = (req, res) => {
  const q = "SELECT * FROM users WHERE id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const updateUsers = (req, res) => {
  const userId = req.params.id;
  const q = "UPDATE users SET `username`=?, `email`=? ,`img`=? WHERE `id` = ?";

  const values = [req.body.username, req.body.email, req.body.img];

  db.query(q, [...values, userId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("user has been updated.");
  });
};
