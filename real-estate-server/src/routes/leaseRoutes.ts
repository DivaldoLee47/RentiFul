import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware'
import { getLeases, getLeasesPayments } from '../controllers/leaseControllers'

const router = express.Router()

router.get('/', authMiddleware(['manager', 'tenant']), getLeases)
router.get(
  '/:id/payments',
  authMiddleware(['manager', 'tenant']),
  getLeasesPayments,
)

export default router
