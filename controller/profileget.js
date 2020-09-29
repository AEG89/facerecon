const handleProfileget=(req,res,pgdb)=> {

	 const{id}=req.params;
	
	pgdb.select('*').from('users').where({id})
	.then(user => {
			if(user.length){
				res.json(user[0])
			}
			else{
				res.status(200).json('not found')
			}
	})
	.catch(err => res.status(200).json('not found'))
}

module.exports ={
	handleProfileget: handleProfileget
};