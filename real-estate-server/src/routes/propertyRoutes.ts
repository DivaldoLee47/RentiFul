import express from 'express'
import {
  getProperties,
  getProperty,
  createProperty,
  getPropertyLeases,
} from '../controllers/propertyControllers'
import { authMiddleware } from '../middleware/authMiddleware'
import multer from 'multer'

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const router = express.Router()

router.get('/', getProperties)
router.get('/:id', getProperty)
router.post(
  '/',
  authMiddleware(['manager']),
  upload.array('photos'),
  createProperty,
)
router.get('/:id/leases', authMiddleware(['manager']), getPropertyLeases)

export default router
