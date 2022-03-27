import React, { useState, useEffect } from 'react'
import "./Brand.css"


function Men() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    async function fetchData() {
      const productApi = await fetch("https://backendapi.turing.com/products")
        .then((response) => response.json())
      setProduct(productApi.rows)
    }
    fetchData()
  }, [])

  return (
    <div className='container-fluid'>
      <div className="row justify-content-center product men">
        <h1 className='text-white'>Men</h1>
        <div className='text-center'>

          <div className='col-md-4'>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='card_div row justify-content-center'>
          <div className='col-md-3'></div>
          <div className='col-md-9'>
          <div className=' row justify-content-center'>
            {product.map((data) => {
              const { product_id, thumbnail, price, name } = data;
              return (
                <div className="card cards m-2" style={{ width: '18rem' }} key={product_id}>
                  <img src={thumbnail} className="img-fluid img p-4" alt="..." />
                  <div className="card-body text-center">
                    <h6 className="card-title">{name}</h6>
                    <div className='d-flex price-rating'>
                      <h5 className="card-text price">₹ {price}</h5>
                    </div>
                    <button className='btn mr-auto'>Buy Now</button>
                  </div>
                </div>
              )
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Men