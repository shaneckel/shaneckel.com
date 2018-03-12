import { Router } from 'express'

const router = Router()

const ASSET_PATH = process.env.ASSET_PATH || '/';
const IMG_FOLDER = process.env.IMG_FOLDER || 'img/';

router.get('/abstracts/:id', function (req, res, next) {
  const id = req.params.id
  if (id === 'modern') {
    res.json(modern)
  } else if(id === 'pittsburgh') {
    res.json(pittsburgh)
  } else if(id === 'untitled') {
    res.json(untitled)
  } else if(id === 'incomplete') {
    res.json(incomplete)
  } else {
    res.sendStatus(404)
  }
})

const modern = [
  {
    name: 'untitled 6',
    year: '2014',
    description: '',
    src: ASSET_PATH + IMG_FOLDER + 'abstract-modern-2014.jpg'
  },
  {
    name: 'untitled 5',
    year: '2011',
    description: '',
    src: ASSET_PATH + IMG_FOLDER + 'abstract-modern-2011.jpg'
  }
]
const pittsburgh = [
  {
    name: 'Clemente',
    year: '2008',
    description: 'The Roberto Clemente bridge was first built in 1819 and rebuilt several times over the years. An iconic social pittsburgh bridge, it represents a great deal for both sports and Pittsburgh history. I\'ve always loved what it stood for growing up.',
    src: ASSET_PATH + IMG_FOLDER + 'abstract-pittsburgh2-2007.jpg'
  },
  {
    name: 'Fort Wayne',
    year: '2006',
    description: 'The Fort Wayne Railroad Bridge, to me, is a good representation of Pittsburgh. Rusted and gritty but does the neccessary work.',
    src: ASSET_PATH + IMG_FOLDER + 'abstract-pittsburgh1-2007.jpg'
  }
]
const incomplete = [
  {
    name: 'incomplete 6',
    year: '',
    description: '',
    src: ASSET_PATH + IMG_FOLDER + 'abstract-incomplete6-2007.jpg'
  },
  {
    name: 'incomplete 4',
    year: '2007',
    description: '',
    src: ASSET_PATH + IMG_FOLDER + 'abstract-incomplete4-2007.jpg'
  },
  {
    name: 'incomplete 3',
    year: '2007',
    description: '',
    src: ASSET_PATH + IMG_FOLDER + 'abstract-incomplete3-2007.jpg'
  },
  {
    name: 'incomplete 2',
    year: '2006',
    description: '',
    src: ASSET_PATH + IMG_FOLDER + 'abstract-incomplete2-2007.jpg'
  }
]
const untitled = [
  {
    name: 'untitled 80',
    year: '2006',
    description: '',
    src: ASSET_PATH + IMG_FOLDER + 'abstract-untitled80-2006.jpg'
  },
  {
    name: 'untitled 79',
    year: '2006',
    description: '',
    src: ASSET_PATH + IMG_FOLDER + 'abstract-untitled79-2006.jpg'
  },
  {
    name: 'untitled 75',
    year: '2006',
    description: '',
    src: ASSET_PATH + IMG_FOLDER + 'abstract-untitled75-2006.jpg'
  },
  {
    name: 'untitled 71',
    year: '2005',
    description: '',
    src: ASSET_PATH + IMG_FOLDER + 'abstract-untitled71-2005.jpg'
  },
  {
    name: 'untitled 70',
    year: '2005',
    description: '',
    src: ASSET_PATH + IMG_FOLDER + 'abstract-untitled70-2005.jpg'
  },
  {
    name: 'untitled 68',
    year: '2005',
    description: '',
    src: ASSET_PATH + IMG_FOLDER + 'abstract-untitled68-2005.jpg'
  },
  {
    name: 'untitled 65',
    year: '2005',
    description: '',
    src: ASSET_PATH + IMG_FOLDER + 'abstract-untitled65-2005.jpg'
  },
  {
    name: 'untitled 59',
    year: '2004',
    description: '',
    src: ASSET_PATH + IMG_FOLDER + 'abstract-untitled59-2004.jpg'
  },
  {
    name: 'untitled 43',
    year: '2004',
    description: '',
    src: ASSET_PATH + IMG_FOLDER + 'abstract-untitled43-2004.jpg'
  },
  {
    name: 'untitled 31',
    year: '2003',
    description: '',
    src: ASSET_PATH + IMG_FOLDER + 'abstract-untitled31-2003.jpg'
  }
]


export default router
