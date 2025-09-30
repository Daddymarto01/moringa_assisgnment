const express = require('express');
const router = express.Router();
const Image = require('../models/images');

// 🆕 ADD THIS ROUTE to render index.ejs with image data
router.get('/', async (req, res) => {
  try {
    const images = await Image.find({});
    res.render('index', { images }); // 👈 now your EJS has access to 'images'
  } catch (err) {
    console.error(err);
    res.status(500).send('Images failed to pull!');
  }
});

router.get('/:id', (req, res) => {
  Image.findById(req.params.id, function (err, image) {
    if (err) console.log(err);
    res.render('singleImage', { title: 'Single Image', image: image });
  });
});

router.put('/:id', (req, res) => {
  Image.findOneAndUpdate(
    { _id: req.params.id },
    { name: req.body.name },
    { new: true },
    function (err, image) {
      if (err) console.log(err);
      res.redirect('/');
    }
  );
});

router.delete('/:id', (req, res) => {
  Image.deleteOne({ _id: req.params.id }, function (err) {
    if (err) console.log(err);
    res.redirect('/');
  });
});

module.exports = router;
