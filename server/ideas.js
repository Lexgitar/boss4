const ideasRouter = require('express').Router()

module.exports = ideasRouter

const {
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
} = require('./db')

const checkMillionDollarIdea = require('./checkMillionDollarIdea')

ideasRouter.param('ideasId', (req, res, next, id) => {
    const idea = getFromDatabaseById(dryType, id);
    if (idea) {
      req.idea = idea;
      next();
    } else {
      res.status(404).send();
    }
  });

const dryPath = '/'
const dryPathId = '/:id'
const dryType = 'ideas'

ideasRouter.get(dryPath, (req, res, next)=>{
    let allIdeas = getAllFromDatabase(dryType)
    res.status(200).send(allIdeas)
})
ideasRouter.post(dryPath,checkMillionDollarIdea, (req, res, next)=>{
   let newIdea =  addToDatabase(dryType, req.body)
    res.status(201).send(newIdea)
})
ideasRouter.get(dryPathId, (req, res, next)=>{
    
    res.send(req.idea)
})
ideasRouter.put(dryPathId,checkMillionDollarIdea, (req, res, next)=>{
    let putIdea = updateInstanceInDatabase(dryType, req.body)
    res.send(putIdea)
})
ideasRouter.delete(dryPathId, (req, res, next)=>{
    let deletedIdea = deleteFromDatabasebyId(dryType, req.params.id)
    if(deletedMinion){
        res.status(204)
    }else{
        res.status(500)
    }
    res.send()
})