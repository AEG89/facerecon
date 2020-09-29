const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey : '8155d6e0d4ae4aaa8e3000b330eb98b6'
}); 

const handleApiCall = (req,res) =>{
app.models
	.predict(Clarifai.FACE_DETECT_MODEL,req.body.input)
	.then(data => {
		res.json(data);
	})
	.catch(err => res.status(400).json('unable to work with api'))
}

const handleImage=(req,res,pgdb) =>{

	const{id}=req.body;
	pgdb('users').where('id', '=', id)
  .increment('entries',1)
  .returning('entries')
  .then(entries => {
  	res.json(entries[0])
  })
  .catch(err => res.status(200).json('unable to get entries'))
}

module.exports ={
	handleImage: handleImage,
	handleApiCall
};
