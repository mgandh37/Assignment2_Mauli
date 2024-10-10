import express from 'express'
 import supplementCtrl from '../controllers/supplement.controller.js' 
 const router = express.Router()

 router.route('/store/supplements').get(supplementCtrl.list)
 router.route('/store/supplements').post(supplementCtrl.create)
 router.route('/store/supplements').delete(supplementCtrl.removeAll)
 router.route('/store/supplements/:supplementId').get(supplementCtrl.read)
 router.param('supplementId', supplementCtrl.supplementByID)
 router.route('/store/supplements/:supplementId').put(supplementCtrl.update)
 router.route('/store/supplements/:supplementId').delete(supplementCtrl.remove)

 export default router
