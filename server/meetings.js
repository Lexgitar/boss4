const meetingsRouter = require('express').Router()

module.exports = meetingsRouter

const {
    getAllFromDatabase,
    addToDatabase,
    deleteAllFromDatabase,
    createMeeting
}= require('./db')

const dryPath ='/'
const dryType = 'meetings'

meetingsRouter.get(dryPath, (req, res, next)=>{
    res.send(getAllFromDatabase(dryType))
})

meetingsRouter.post(dryPath, (req, res, next)=>{
    const newMeeting = addToDatabase(dryType, createMeeting())
    res.status(201).send(newMeeting)
})

meetingsRouter.delete(dryPath, (req, res, next)=>{
    deleteAllFromDatabase(dryType)
    res.status(204).send()
})