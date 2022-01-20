import { model } from "mongoose";
import { postSchema } from "../../models/posts";

const Post = model("Post", postSchema);

// Adding a new post
export const newBlogPost = (req, res) => {
  let newPost = new Post(req.body);
  newPost.save((err, blogPost) => {
    if (err) {
      res.send(err);
    }
    res.json(blogPost);
  });
};

// Get all posts
// export const getAllPosts = (req, res) => {
//   Post.find({}, (err, blogPost) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json(blogPost);
//   });
// };

// Server Side Rendering
export const getAllPosts = (req, res) => {
  Post.find({}, (err, blogPost) => {
    if (err) {
      res.send(err);
    }
    res.render("index.ejs", { posts: blogPost });
  });
};

// Get a post with ID
export const getPostWithID = (req, res) => {
  Post.findById(req.params.id, (err, blogPost) => {
    console.log(req.params.id);
    if (err) {
      res.send(err);
    }
    res.json(blogPost);
  });
};

// Update a post
export const updatePost = (req, res) => {
  Post.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, useFindAndModify: false },
    (err, blogPost) => {
      if (err) {
        res.send(err);
      }
      res.json(blogPost);
    }
  );
};

// Delete a post
export const deletePost = (req, res) => {
  Post.remove({ _id: req.params.id }, (err, blogPost) => {
    if (err) {
      res.send(err);
    }
    res.json({
      status: true,
      message: "The post succesfully removed!",
    });
  });
};
