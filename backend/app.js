const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   console.log('First middleware');
//   next();
// });

// app.use((req, res, next) => {
//   res.send('Hello from express!');
// });

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
  });

 app.get("/", (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(200).json({
      message: 'Skillyou is ready! Are you?'
    });
});


app.post("/api/posts", (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
      message: 'Post added successfully'
    });
});

app.get("/api/posts", (req, res, next) => {
    const posts = [
      {
        id: "fdf12421l",
        title: "First server-side post",
        content: "This is coming from the server"
      },
      {
        id: "ksajflaj132",
        title: "Second server-side post",
        content: "This is coming from the server!"
      }
    ];
    res.status(200).json({
      message: "Posts fetched succesfully!",
      posts: posts
    });
});

app.post("/search", (req, res, next) => {//search request has to be assimilated
    const post = req.body;
    console.log(post);
    res.status(201).json({
      message: 'Search request received successfully'
    });
});

app.post("get_the_bap_url/on_search", (req, res, next) => {//url has to be changed
    //schema has to be changed
    const posts = [
        {
          id: "fdf12421l",
          title: "First server-side post",
          content: "This is coming from the server"
        },
        {
          id: "ksajflaj132",
          title: "Second server-side post",
          content: "This is coming from the server!"
        }
      ];
      res.status(200).json({
        message: "Posts fetched succesfully!",
        posts: posts
      });
});

//replicate the same for select, init, confirm

app.post("/select", (req, res, next) => {//select request has to be assimilated
    const post = req.body;
    console.log(post);
    res.status(201).json({
      message: 'select request received successfully'
    });
});

app.post("/init", (req, res, next) => {//init request has to be assimilated
    const post = req.body;
    console.log(post);
    res.status(201).json({
      message: 'init request received successfully'
    });
});

app.post("/confirm", (req, res, next) => {//confirm request has to be assimilated
    const post = req.body;
    console.log(post);
    res.status(201).json({
      message: 'confirm request received successfully'
    });
});

module.exports = app;