import { Router } from 'express'
import history from '../data/history.json'

const router = Router()

router.get('/history', function (req, res) {
  res.json(history)
})

router.get('/history_years', function (req, res) {
  res.json([2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004])
})

export default router
