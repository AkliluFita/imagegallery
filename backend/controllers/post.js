import { db } from "../db.js";

// get all posts
export const getPosts = (req, res) => {
  const q =
    "SELECT u.username, p.id, p.title, p.category, p.disc, p.img, p.date FROM users u JOIN posts p ON u.id = p.uid ORDER BY p.date DESC";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q =
    "SELECT p.id, `username`, `title`, `disc`, p.img, u.img AS userImg, `category`, `date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

//create single post
export const addPost = (req, res) => {
  // check if title is unique
  const checkUniqQ = "SELECT * FROM posts WHERE title = ?";

  db.query(checkUniqQ, [req.body.title], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("the title should be uniq ");

    // create new post
    const insertQ =
      "INSERT INTO posts (`title`, `category`, `disc`, `img`, `date`, `uid`) VALUES (?)";
    const values = [
      req.body.title,
      req.body.category,
      req.body.disc,
      req.body.img,
      req.body.date,
      req.body.uid,
    ];

    db.query(insertQ, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("new post has been created");
    });
  });
};

export const deletePost = (req, res) => {
  const postId = req.params.id;
  const q = "DELETE FROM posts WHERE `id` = ?";

  db.query(q, [postId], (err, data) => {
    if (err) return res.status(403).json("You can delete only your post!");

    return res.json("Post has been deleted!");
  });
};
