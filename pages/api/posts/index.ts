import { posts } from '../../../data'

export default (_req, res) => {
  res.status(200).json(posts)
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}
