import { Router } from 'express'

const router = Router()

const modern = [
  { name: 'modern1' },
  { name: 'modern2' },
  { name: 'modern3' },
]
const pittsburgh = [
  { name: 'pittsburgh1' },
  { name: 'pittsburgh2' },
  { name: 'pittsburgh3' },
]
const untitled = [
  { name: 'untitled1' },
  { name: 'untitled2' },
  { name: 'untitled3' },
]

router.get('/abstracts/:id', function (req, res, next) {
  const id = req.params.id
  console.log(id);
  if (id === 'modern') {
    res.json(modern)
  } else if(id === 'pittsburgh') {
    res.json(pittsburgh)
  // }
   // else if(id === 'untitled') {
  //   res.json(untitled)
  } else {
  //   console.log("\n\n\n404\n\n\n")
    res.sendStatus(404)
  }
})

export default router
