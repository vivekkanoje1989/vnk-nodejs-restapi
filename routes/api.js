// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router();

// const players = require('../models/players');
// const teams = require('../models/team');

const controllers = require('../controllers');

router.get('/:resource', (req, res)=>{
	const resource = req.params.resource;
	const controller = controllers[resource];
	const filters = req.query;
	if(!controller){
		res.json({
			confirmation: "fails",
			message: "Invalid Request."
		})
		return;
	}
	
	controller.get(filters)
		.then(data=>{
			res.json({
				confirmation: "success",
				data: data
			})
		})
		.catch(err =>{
			res.json({
				confirmation: "fails",
				message: err.message
			})
		})	
});

router.get('/:resource/:id', (req, res)=>{
	const resource = req.params.resource;
	const controller = controllers[resource];
	const id = req.params.id;

	if(!controller){
		res.json({
			confirmation: "fails",
			message: "Invalid Request..."
		})
		return;
	}

	controller.getById(id)
		.then(data =>{
			res.json({
				confirmation: "success",
				data: data
			})
		})
		.catch(err=> {
			res.json({
				confirmation: "fails",
				message: err.message
			})
		})
});

//Post create request
router.post('/:resource',(req, res)=>{
	const resource = req.params.resource;
	const controller = controllers[resource];

	if(!controller){
		res.json({
			confirmation: "fails",
			message: "Invalid Request."
		})
	}

	controller.post(req.body)
		.then(data => {
			res.json({
				confirmation: "success",
				data: data
			})
		})
		.catch(err => {
			res.json({
				confirmation: "fails",
				message: err.message
			})
		})
});


router.put('/:resource/:id', (req, res) => {
	const resource = req.params.resource;
	const controller = controllers[resource];

	if(!controller){
		res.json({
			confirmation: "fails",
			message: "Invalid Request"
		})
	}

	controller.put(req.body, req.params.id)
		.then(data=>{
			res.json({
				confirmation: "success",
				data: data
			})
			.catch(err=>{
				res.json({
					confirmation: "fails",
					message: err.message
				})
			})
		})
});

router.delete('/:resource/:id', (req, res) => {
	const resource = req.params.resource;
	const controller = controllers[resource];

	if(!controller){
		res.json({
			confirmation: "fails",
			message: "Invalid Request."
		});
	}

	controller.delete(req.params.id)
		.then(data=>{
			res.json({
				confirmation: "success",
				data: data
			})
			.catch(err => {
				res.json({
					confirmation: "fails",
					message: err.message
				})
			})
		})
});
// router.get('/players', (req, res) => {
// 	players.find(null)
// 		.then(data => {
// 			res.json({
// 				confirmation: "success",
// 				data: data
// 			});
// 		})
// 		.catch(err =>{
// 			res.json({
// 				confirmation: "failure",
// 				message: err.message
// 			});
// 		});
// });

// router.get('/teams', (req, res) => {
// 	teams.find(null)
// 		.then(data => {
// 			res.json({
// 				confirmation: "success",
// 				data: data
// 			});
// 		})
// 		.catch(err =>{
// 			res.json({
// 				confirmation: "failure",
// 				message: err.message
// 			});
// 		});
// });

// const players = [
// 	{firstName: "eli", lastName: "manning", position: "qb", age: 37, team: "nyg"},
// 	{firstName: "to,", lastName: "brady", position: "qb", age: 41, team: "nep"},
// 	{firstName: "jj", lastName: "watt", position: "de", age: 28, team: "hou"}
// ];

// const teams =[
// 	{name: "giants", city: "new york",conference: "nfc"},
// 	{name: "patriots", city: "new england",conference: "afc"},
// 	{name: "texan", city: "houstan",conference: "afc"}
// ];

// const db = {
// 	teams: teams,
// 	players: players
// }

// router.get('/:resource', (req, res)=>{
// 	const resource = req.params.resource;
// 	const data = db[resource];
	// if(resource == 'teams'){
	// 	res.json({
	// 		'confirmation': 'Success',
	// 		'data': teams
	// 	});
	// 	return;
	// }
	
	// if(resource == 'players'){
	// 	res.json({
	// 		'confirmation': 'Success',
	// 		'data': players
	// 	});

	// 	return;
	// }

// 	if(!data){
// 		res.json({
// 			confirmation: "Fails",
// 			data: "Invalid Request. No reasource found."
// 		});
// 		return;
// 	}

// 	res.json({
// 		confirmation: "Success",
// 		data: data
// 	})
// });


// players api endpoint
// router.get('/players', (req, res)=>{
// 	res.json(
// 		{
// 			'confirmation': 'Success',
// 			'data': players
// 		}
// 	);
// });

// // teams api endpoint
// router.get('/teams', (req, res)=>{
// 	res.json(
// 		{
// 			'confirmation': 'Success',
// 			'data': teams
// 		}
// 	);
// });


// // test api endpoint
// router.get('/test', (req, res)=>{
// 	res.json(
// 		{
// 			'confirmation': 'Success',
// 			'data': 'This is a test endpoint'
// 		}
// 	);
// });

/*  This is a sample API route. */

// router.get('/:resource', (req, res) => {
// 	res.json({
// 		confirmation: 'success',
// 		resource: req.params.resource,
// 		query: req.query // from the url query string
// 	})
// })

// router.get('/:resource/:id', (req, res) => {
// 	res.json({
// 		confirmation: 'success',
// 		resource: req.params.resource,
// 		id: req.params.id,
// 		query: req.query // from the url query string
// 	})
// })



module.exports = router
