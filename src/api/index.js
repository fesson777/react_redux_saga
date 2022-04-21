import axios from 'axios'

export async function getLatestNews(searchQuery) {
  const response = await axios.get(
    `http://hn.algolia.com/api/v1/search?query=${searchQuery}&hitsPerPage=10&page=0`
  )
  return await response.data
}

export async function getPopularNews() {
  const response = await axios.get(
    `https://hn.algolia.com/api/v1/search?query=&hitsPerPage=10&page=0`
  )
  return await response.data
}
