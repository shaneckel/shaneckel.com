import { Router } from 'express'

import abstracts from './abstracts'
import history from './history'

const router = Router()

router.use(abstracts)
router.use(history)

export default router
