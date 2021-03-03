const path = require('path');

module.exports = (app) => {
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
  );
  app.get('/post', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/post.html'))
  );
  app.get('/search', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/search.html'))
  );
}
