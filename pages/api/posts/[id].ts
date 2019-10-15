import Cors from 'micro-cors'
import { posts } from '../../../data'

const cors = Cors({
  allowMethods: ['POST'],
})

const Endpoint = ({ query: { id } }, res) => {
  const filtered = posts.filter(p => p.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}

export default cors(Endpoint as any)
