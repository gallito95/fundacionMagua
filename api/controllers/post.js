import { db } from "../db.js"

export const getPosts = (req,res) =>{
    const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts"

    db.query(q, [req.query.cat], (err,data) => {
        if(err) return res.send(err)
    return res.status(200).json(data)
    } )

}
export const getPost = (req, res) => {
    const q = "SELECT id, `title`, `img`, `desc`, `cat` FROM posts WHERE posts.id=?";
    db.query(q, [req.params.id], (err, data) => {
        if (err) {
            console.error("Database error: ", err);
            return res.status(500).json({ message: "Error retrieving post", error: err });
        }

        if (data.length === 0) {
            return res.status(404).json({ message: "Post not found" });
        }

        return res.status(200).json(data[0]);
    });
};
export const addPost = (req, res) => {
    const q = "INSERT INTO posts(`title`, `img`, `cat`, `desc`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.img,
        req.body.cat,
        req.body.desc
    ];

    db.query(q, [values], (err, data) => {
        if (err) {
            console.error("Database error: ", err);  // Fehlerausgabe in der Konsole
            return res.status(500).json(err);         // Die vollständige Fehlermeldung zurückgeben
        }
        return res.json("Post has been created.");
    });
};


export const deletePost = (req,res) =>{
    const postID = req.params.id
    const q="DELETE FROM posts WHERE id=?"
  db.query(q,[postID], (err, data) => {
    if (err) return res.send(err)
        return res.json("Post has been deleted")
  })
}
export const updatePost = (req, res) => {
    const q = "UPDATE posts SET `title`=?, `desc`=?, `img`=?, `cat`=? WHERE `id`=?";
    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat
    ];
  
    db.query(q, [...values, req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been updated.");
    });
  };