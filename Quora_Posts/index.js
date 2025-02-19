const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const app = express();

const port = 8088;

app.use(express.urlencoded({ encoded: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    ProfilePic:
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fHww",
    username: "sri",
    years: "5y",
    content: "This is the content of post.",
  },
  {
    ProfilePic:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fHww",
    username: "rohith",
    years: "3y",
    content:
      "This is the love. This content belongs to rohith and one and only rohith, as Rohith is the best. Rohoith loves cats very much and I am Rohith and know everything about rohith. This post does not make any sense ans it is written just fir the feel of the web page.",
  },
  {
    ProfilePic:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "surya",
    years: "2y",
    content:
      "This is the content of surya.\n Surya is all about anime and staying healthy. This does not mean that I am not focussing on other things but just I am saying that it is all about staying healthy and living healthy.\n Even If I write an essay on this topic, I wll be the winner.\n That is Surya, My Attitude, My way!",
  },
];

app.get("/", (req, res) => {
  res.send("<h1>server is running...</h1>");
});

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  const { ProfilePic, username, years, content } = req.body;
  posts.push({ ProfilePic, username, years, content });
  res.redirect("/posts");
});

app.get("/posts/:username", (req, res) => {
  const { username } = req.params;
  let post = posts.find((con) => con.username === username);
  res.render("show.ejs", { post });
});

app.patch("/posts/:username", (req, res) => {
  const { username } = req.params;
  let nc = req.body.content;
  let post = posts.find((con) => con.username === username);
  post.content = nc;
  res.redirect("/posts");
});

app.get("/posts/:username/edit", (req, res) => {
  const { username } = req.params;
  let post = posts.find((con) => con.username === username);
  res.render("edit.ejs", { post });
});

app.delete("/posts/:username", (req, res) => {
  const { username } = req.params;
  let post = posts.find((con) => con.username === username);
  posts = posts.filter((p) => username !== p.username);
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
