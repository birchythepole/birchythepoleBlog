//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

let posts = [];

const homeStartingContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ex vulputate, rhoncus massa non, vehicula ligula. Aliquam blandit non sapien quis hendrerit. Mauris at neque vel nisl porta fringilla nec nec leo. Ut at ex eu urna varius rutrum in non mi. Donec a purus enim. Sed hendrerit ultrices lobortis. Vestibulum tortor dui, auctor quis vehicula ut, dignissim non ante. Praesent et lorem sagittis, congue risus sit amet, faucibus dolor. Fusce facilisis justo et commodo ultricies. Fusce quis mauris vulputate, lacinia odio vitae, ultricies arcu.";
const aboutContent =
  "Sed imperdiet sodales feugiat. Aenean aliquam faucibus sapien, ac tincidunt tortor vulputate egestas. Sed vestibulum congue ipsum id interdum. Ut at dui quis odio mollis fringilla efficitur sed arcu. Cras vel vestibulum sapien, sit amet condimentum neque. Cras ullamcorper, arcu non dictum convallis, sem ante maximus magna, scelerisque venenatis lorem nibh in urna. Donec blandit dui id tincidunt dignissim. Sed cursus tincidunt erat, quis cursus ipsum dignissim sit amet. Proin sed interdum orci, non volutpat neque. Praesent nulla libero, fermentum id rutrum vel, porta eget orci. Proin volutpat lacus nulla, a mattis dolor pulvinar quis. Nullam id rutrum tellus. Fusce lorem dui, placerat nec posuere et, rutrum sed lectus. Nunc eu lacinia ligula.";
const contactContent =
  "Sed sit amet sem ut mauris vulputate cursus accumsan vel lorem. Aliquam nec metus non justo faucibus tempus. Pellentesque egestas est velit, at facilisis ligula viverra sit amet. Nunc aliquam, ante quis vehicula varius, dolor magna elementum dolor, a mollis magna sem eu libero. Aliquam nec neque nisl. Nulla consequat arcu euismod turpis cursus gravida. Aliquam mollis tristique finibus. Maecenas a arcu metus. Proin hendrerit venenatis auctor. Quisque urna eros, consequat et tincidunt ac, congue id velit. Vivamus egestas, lorem sit amet efficitur cursus, lacus turpis volutpat ante, id fringilla turpis neque vel dolor.";
const port = 3000;
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//Strona GŁÓWNA
app.get("/", (req, res) => {
  res.render("home", {
    content: homeStartingContent,
    newPosts: posts,
  });
});
//ABOUT
app.get("/about", (req, res) => {
  res.render("about", { content: aboutContent });
});

//CONTACT
app.get("/contact", (req, res) => {
  res.render("contact", { content: contactContent });
});

//COMPOSE
app.get("/compose", (req, res) => {
  res.render("compose", {});
});
app.post("/compose", (req, res) => {
  const newPost = {
    title: req.body.postTitle,
    body: req.body.postContent,
  };
  posts.push(newPost);
  res.redirect("/");
});
//POSTS
app.get("/posts/:postName",(req,res)=>{
  console.log(req.params.postName);
});
// Server Starter
app.listen(port, () => {
  console.log("Server started on port " + port);
});
