module.exports = function(app) {

	app.get('/', function (req, res) {
    var model = {
			people: req.models.person.find(),
			locales: req.models.locale.find(),
			assets: req.models.asset.find()
		};

		return res.render('index', model);

	});

  app.post('/newPerson', function (req, res) {
    var obj = req.body;
    req.models.person.create(obj, function (err, dbItems) {
      if (err) { return res.send(500, err); }
      return res.send(200, dbItems);
    });
  });

  app.post('/newAsset', function (req, res) {
    var obj = req.body;
    req.models.person.create(obj, function (err, dbItems) {
      if (err) { return res.send(500, err); }
      return res.send(200, dbItems);
    });
  });

  app.post('/newLocale', function (req, res) {
    var obj = req.body;
    req.models.person.create(obj, function (err, dbItems) {
      if (err) { return res.send(500, err); }
      return res.send(200, dbItems);
    });
  });

};
