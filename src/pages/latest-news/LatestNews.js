import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import News from '../../components/news/news'

const LatestNews = () => {
  const dispatch = useDispatch()
  const { latestNews } = useSelector((store) => store?.news || {})
  const { latestNewsError } = useSelector((store) => store?.errors || {})
  const { loading } = useSelector((store) => store?.loader || {})

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <News news={latestNews} error={latestNewsError} title="Latest News" />
      )}
    </div>
  )
}

export default LatestNews
