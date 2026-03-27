import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://www.hanginggate-chapel.co.uk'
const DEFAULT_IMAGE = `${BASE_URL}/images/pub-exterior.jpg`

export default function SEO({ title, description, path = '', image = DEFAULT_IMAGE }) {
  const fullTitle = title
    ? `${title} | The Hanging Gate, Chapel-en-le-Frith, High Peak, Derbyshire`
    : 'The Hanging Gate | Pub & Restaurant | Chapel-en-le-Frith, High Peak, Derbyshire'
  const url = `${BASE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
