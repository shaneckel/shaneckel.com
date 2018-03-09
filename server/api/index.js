import { Router } from 'express'

import users from './users'
import abstracts from './abstracts'

const router = Router()

router.use(users)
router.use(abstracts)

export default router
