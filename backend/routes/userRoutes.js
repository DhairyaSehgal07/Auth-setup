import express from 'express'
import { 
    authUser,
    registerUser,
    logoutUser, 
    getUserProfile, 
    updateUserProfile,
    deleteUserProfile,
 } from '../controllers/userController.js';

 import {protect} from '../middleware/authMiddleware.js'

const router = express.Router();

router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile).delete(protect,deleteUserProfile )

router.post('/')

export default router;