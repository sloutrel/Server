const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("animal sounds");
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(
    `<h1>You're now looking at post: ${postId} on the ${subreddit} subreddit</h1>`
  );
});

app.post("/cats", (req, res) => {
  res.send("alt-meow");
});

app.get("/cats", (req, res) => {
  res.send("meow");
});
app.post("/dogs", (req, res) => {
  res.send("alt-woof");
});
app.get("/dogs", (req, res) => {
  res.send("woof");
});
app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("nothing searched!");
  } else {
    res.send(`<h2>Search results for: ${q}</h1>`);
  }
});

app.get("*", (req, res) => {
  res.send("i don't know that path");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
