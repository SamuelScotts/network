const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let posts = [
    {
        id: 0,
        name: "Danny Thompson",
        content: "Wednesday. Worst day of the week, but we'll get there!",
        hearts: 3,
        shares: 14,
        dialog: false,
        replies: [
           {
            name: "Bev Wilson",
            content: "I cannot wait for Friday. Wine, wine, wine!"
           },
           {
            name: "Laura Davidson",
            content: "Bring on the weekend!"
           },
           {
            name: "Gary Jamieson",
            content: "I love Wednesday. Over the hump!"
           },

        ],
    },
]

app.get('/', (req, res) => {
    res.send(posts);
})

app.post('/', (req, res) => {
    let post = {
      id: posts.length,
      name: req.body.name,
      content: req.body.content,
      hearts: 0,
      shares: 0,
      dialog: false,
      replies: [],
    }
    posts.push(post);
    res.send(posts);
  })

   app.post('/:id', (req, res) => {
    let id = Number(req.params.id);
    let comment = {
      name: req.body.name,
      content: req.body.content,
    }
    posts[id].replies.push(comment);
  })

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})