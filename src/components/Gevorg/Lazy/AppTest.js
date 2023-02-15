import React, { useEffect , useState } from 'react'
import List from './List';
import Pagination from './Pagination';

export default function AppTest() {
  const [value,setValue] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);


  useEffect(() => {
    function generateArray(count){
      const posts = new Array(count)
      .fill()
      .map((elem,index) => `Lorem ipsum dolor sit amet-${++index}.`)
      setValue(posts)
    }
    generateArray(100)
  },[])

  const changePage = (page) => setCurrentPage(page)

  const lastPostIndex = currentPage * perPage
  const firstPostIndex = lastPostIndex - perPage
  const currentPosts = value.slice(firstPostIndex, lastPostIndex)
 console.log(currentPosts);

  return (
    <div>
      <List currentPosts={currentPosts}/>
      <Pagination perPage={perPage} length={value.length} changePage={(id) => changePage(id)}/>
    </div>
  )
}
