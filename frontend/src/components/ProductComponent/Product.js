import React, {useState, useEffect} from 'react'

function Product() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const url = 'https://backendapi.turing.com/products'
        fetch(url).then(res => res.json())
        .then(data => console.log(data.data))

    }, [])



  return (
    <div>Product</div>
  )
}

export default Product