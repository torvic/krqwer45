import React, { useState } from 'react'

const images = [
  'https://www.elsoldemexico.com.mx/deportes/automotriz/qgrq3j-estornudos.png/ALTERNATES/FREE_768/ESTORNUDOS.png',
  'https://i.pinimg.com/originals/66/c2/9d/66c29df4a666e30e702dd9b2ef196c3c.jpg',
  'https://1.bp.blogspot.com/-xvRNCW0Q8w8/WsJyBw9kHEI/AAAAAAAASSU/5GsYAjMhZasMawM9YP6ftBCn6GDjs0gHACLcBGAs/s1600/SallyCarreraCars3Artwork.jpg',
  'https://elcomercio.pe/resizer/WGchBQDCEgu6BOhWaOGzXVyJLPc=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/ENJ2RHLHJRBBJLMOFU4BC576AY.jpg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6wAarQIZZmRjInLRc_Rq-2pXzAFLYYHtBpA&usqp=CAU',
	'https://blog.supercarros.com/wp-content/uploads/2017/10/Cars-3-Lightning-McQueen-696x378.jpg',
	'https://image.pngaaa.com/29/4570029-middle.png',
  'https://elcomercio.pe/resizer/WGchBQDCEgu6BOhWaOGzXVyJLPc=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/ENJ2RHLHJRBBJLMOFU4BC576AY.jpg',
  'https://1.bp.blogspot.com/-xvRNCW0Q8w8/WsJyBw9kHEI/AAAAAAAASSU/5GsYAjMhZasMawM9YP6ftBCn6GDjs0gHACLcBGAs/s1600/SallyCarreraCars3Artwork.jpg',
  'https://elcomercio.pe/resizer/WGchBQDCEgu6BOhWaOGzXVyJLPc=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/ENJ2RHLHJRBBJLMOFU4BC576AY.jpg',
]

const initialRandom = [
  {
    id: 1,
    imageUrl: '',
    show: false,
  },
  {
    id: 2,
    imageUrl: '',
    show: false,
  },
  {
    id: 3,
    imageUrl: '',
    show: false,
  },
  {
    id: 4,
    imageUrl: '',
    show: false,
  },
]
const App = () => {
  const [randomImages, setRandomImages] = useState(initialRandom)
  const [message, setMessage] = useState(false)
  const randomImage = () => {
    const randomNumber = Math.floor(Math.random() * 9)
    return images[randomNumber]
  }
  const resetImages = (pData) => {
    const pDataFiltered = pData.filter((el) => !el.show)
    return pDataFiltered.length
  }
  const handleClick = (id) => {
    let newData = randomImages.map((el) =>
      el.id === id && el.imageUrl === ''
        ? {
            ...el,
            imageUrl: randomImage(),
            show: true,
          }
        : el
    )
    setRandomImages(newData)
    if (!resetImages(newData)) {
      setMessage(true)
      setTimeout(() => {
        setRandomImages(initialRandom)
        setMessage(false)
      }, 3000)
    }
  }

  return (
    <div>
      <h1>React Album</h1>
      <div className='l-stack'>
        {randomImages.map((el, index) => (
          <div className='card' key={index} onClick={() => handleClick(el.id)}>
            <figure className='card__figure'>
              {el.show ? (
                <img src={el.imageUrl} alt='' className='card__image' />
              ) : <img src='https://lh3.googleusercontent.com/proxy/iyZX-KZbK0AlwGq53lWcGpSrBh24DFAr5HpWiOTg36YtAXIU-pRTPwK7sxP-klZrR8YLK077Qyl878XkW5et62ndnwKfiFoX1NCzBlK6O56mKJ-DfQE' alt='' className='card__image' />}
            </figure>
          </div>
        ))}
      </div>
      {message ? (
        <h2 style={{ textAlign: 'center' }}>
          Felicitaciones escoge de nuevo ...
        </h2>
      ) : null}
    </div>
  )
}

export default App
