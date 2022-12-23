import React from 'react'
import Text from './Text';

import "./App.scss"

export default function App() {
    const [data, setData] = useState([]);

    const handleDelete = (id) => {
		const newData = data.filter(product => product.id !== id);
		setData(newData)
	}

    useEffect(() => {
        const getData = () => {
            fetch("https://fakestoreapi.com/products")
						.then(res => res.json())
						.then(json => setData(json))
        }
        getData()
    }, [])



  return (
    <div className='List'>
        <Text as={"p"} clName={"box"} theme={"dark"}>
          My Tag
        </Text>
    </div>
  )
}
