import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import News from '../../components/news/news'

const App = () => {
  const dispatch = useDispatch()
  const { popularNews } = useSelector((store) => store?.news || {})
  const { popularNewsError } = useSelector((store) => store?.errors || {})
  const { loading } = useSelector((store) => store?.loader || {})

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <News
          news={popularNews}
          error={popularNewsError}
          title="Popular News"
        />
      )}
    </div>
  )
}
export default App
