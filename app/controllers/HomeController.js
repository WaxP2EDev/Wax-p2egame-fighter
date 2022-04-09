const Resource = require('../models/Resource');

exports.homePage = (req, res, next) => {
	res.render('home');
};
exports.fightPage = (req, res, next) => {
	res.render('fight');
};

exports.addResource = (req, res, next) => {
	const resource = new Resource({
		userAddress: req.body.userAddress,
		amount: req.body.amount,
		level: req.body.level,
		battleCount: req.body.battleCount,

	});
	resource.save().then(result => {
		console.log(result);
		return res.redirect('/');
	})
	.catch(err => console.log(err));
};

exports.getResource = (req, res, next) => {
	Resource.findOne({
		where: {
			userAddress: req.query.userAddress
		}
	}).then(result => {
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(result))
	})
	.catch(err => console.log(err));
};
exports.updateResource = (req, res) => {
	const userAddress = req.body.userAddress;
  
	Resource.update(req.body, {
	  where: { userAddress: userAddress }
	})
	  .then(result => {
		  res.send({
			amount: req.params.amount,
			level: req.params.level,
			battleCount: req.params.battleCount,
		}) 
		
	  })
	  .catch(err => {
		res.status(500).send({
		  message: "Error updating Tutorial with id="
		});
	  });
  };
