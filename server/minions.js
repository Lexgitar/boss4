const minionsRouter = require('express').Router()

module.exports = minionsRouter

const {
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
} = require('./db')

minionsRouter.param('minionId', (req, res, next, id) => {
    const minion = getFromDatabaseById('minions', id);
    if (minion) {
      req.minion = minion;
      next();
    } else {
      res.status(404).send();
    }
  });

const dryPath = '/'
const dryPathId = '/:minionId'
const dryType = 'minions'

minionsRouter.get(dryPath, (req, res, next)=>{
    let allMinions = getAllFromDatabase(dryType)
    res.status(200).send(allMinions)
})
minionsRouter.post(dryPath, (req, res, next)=>{
   let newMinion =  addToDatabase(dryType, req.body)
    res.status(201).send(newMinion)
})
minionsRouter.get(dryPathId, (req, res, next)=>{
    
    res.send(req.minion)
})
minionsRouter.put(dryPathId, (req, res, next)=>{
    let putMinion = updateInstanceInDatabase(dryType, req.body)
    res.send(putMinion)
})
minionsRouter.delete(dryPathId, (req, res, next)=>{
    let deletedMinion = deleteFromDatabasebyId(dryType, req.params.minionId)
    if(deletedMinion){
        res.status(204)
    }else{
        res.status(500)
    }
    res.send()
})