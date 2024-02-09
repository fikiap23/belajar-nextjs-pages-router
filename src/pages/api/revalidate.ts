import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  revalidated: boolean
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //   console.log(req.query)
  if (req.query.token !== process.env.REVALIDATE_TOKEN) {
    return res
      .status(401)
      .json({ revalidated: false, message: 'Invalid token' })
  }
  if (req.query.data === 'product') {
    try {
      await res.revalidate('/product/static')
      return res.json({ revalidated: true })
    } catch (error) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      return res.status(500).send({ revalidated: false })
    }
  }
  return res.status(200).json({
    revalidated: false,
    message: 'Pilih data mana yang mau di revalidate',
  })
}
