import { Router } from 'farrow-http'

import { router as todos } from './todos'

export const router = Router()

router.use(todos)
