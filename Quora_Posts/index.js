const express = require("express");
const path = require("path");

const app = express();

const port = 8088;

app.use(express.urlencoded({ encoded: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    ProfilePic:
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fHww",
    username: "sri",
    content: "This is the content of post.",
  },
  {
    ProfilePic:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fHww",
    username: "rohith",
    content: "This is the love.",
  },
  {
    ProfilePic:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fHww",
    username: "surya",
    content: "This is the content of surya.",
  },
];

app.get("/", (req, res) => {
  res.send("<h1>server is running...</h1>");
});

app.get("/post", (req, res) => {
  res.render("index.ejs", { posts });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
