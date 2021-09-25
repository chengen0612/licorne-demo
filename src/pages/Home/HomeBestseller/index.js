import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import './style.css'
import initData from '../../../data/bestseller/bestseller.json'

import HomeBestsellerProduct from './components/HomeBestsellerProduct'

function HomeBestseller() {
  const [productData, setProductData] = useState([])

  useEffect(() => {
    const initData = getDataFromJson()
    const response = pickUpProducts(initData)
    addSequenceProperty(response)
    setProductData(response)
  }, [])

  const getDataFromJson = () => {
    Object.freeze(initData)
    return initData
  }

  const pickUpProducts = (products) => {
    let response = []
    for (let i = 0; i < 4; i++) {
      response.push(products[i])
    }
    return response
  }

  const addSequenceProperty = (products) => {
    products.forEach((product, i) => {
      product['sequence'] = i + 1
    })
  }

  return (
    <>
      <article className="total">
        {/* <!-- 標題區塊 --> */}
        <div className="text-center mb-5">
          <div className="popular__title">人氣熱銷商品</div>
          <div className="popular__text mt-2">
            以下是最受歡迎的客製化商品，可以滑動到商品卡上查看香調組成
          </div>
        </div>
        {/* <!-- 標題區塊 --> */}
        {/* <!-- 商品區塊 --> */}
        <div className="popular__ranking">
          {productData.map((product, i) => {
            return <HomeBestsellerProduct key={i} data={product} />
          })}
        </div>
        {/* <!-- 商品區塊 --> */}
        {/* <!-- 前往排行榜區塊 --> */}
        <div className="d-flex justify-content-end">
          <Link className="popular__aArrow" to="/bestseller">
            前往排行榜 <FiArrowRight />
          </Link>
        </div>
        {/* <!-- 前往排行榜區塊 --> */}
      </article>
    </>
  )
}

export default HomeBestseller
