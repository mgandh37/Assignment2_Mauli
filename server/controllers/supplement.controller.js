import Supplement from '../models/supplement.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'
const create = async (req, res) => {
    const supplement = new Supplement(req.body)
    try {
        await supplement.save()
        return res.status(200).json({
            message: "Successfully added supplement!"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}
const list = async (req, res) => {
    try {
        let supplement = await Supplement.find();//.select('name email updated created')
        res.json(supplement)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const supplementByID = async (req, res, next, id) => {
    try {
        let supplement = await Supplement.findById(id)
        if (!supplement)
            return res.status('400').json({
                error: "Supplement not found"
            })
        req.profile = supplement
        next()
    } catch (err) {
        return res.status('400').json({
            error: "Could not retrieve supplement"
        })
    }
}
const update = async (req, res) => {
    try {
        let supplement = req.profile
        supplement = extend(supplement, req.body)
        await supplement.save()
        res.json(supplement)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}
const remove = async (req, res) => {
    try {
        let supplement = req.profile
        let deletedSupplement = await supplement.deleteOne()
        res.json(deletedSupplement)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}
const removeAll = async (req, res) => {
    try {
        let deletedSupplements = await Supplement.deleteMany({})
        res.json(deletedSupplements)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}
const read = (req, res) => {
    return res.json(req.profile)
}
export default { create, supplementByID, list, remove, removeAll, update, read }

