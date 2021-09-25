import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { baseUrl } from '../../config'
import myswal from '../../utils/sweetalert'
import authentication from '../../utils/authentication'

function ProductCard(props) {
  const { data } = props

  // const [showDetail, setShowDetail] = useState(false)

  const {
    cust_id,
    base_id,
    mid_id,
    top_id,
    base_zh,
    mid_zh,
    top_zh,
    bottle_img,
    color,
    price,
    sequence,
  } = data

  // reset related elements state
  // useEffect(() => {
  //   setShowDetail(false)
  // }, [data])

  const purchaseHandler = async () => {
    myswal.addCart()
  }

  // add comma to price
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <>
      <div className="best__prod-card">
        <figure className="best__prod-sequence">
          <img src={baseUrl + `/images/bestseller/${sequence}.svg`} alt="" />
        </figure>
        <div
          className="best__prod-display"
          style={{ background: color }}
          // onClick={() => setShowDetail(!showDetail)}
          // title={!showDetail && '點擊查看說明'}
        >
          <img src={baseUrl + bottle_img} alt={cust_id} />
          <h3 className="best__prod-title">{cust_id}</h3>
          <span className="best__prod-price">
            NT ${numberWithCommas(price)}
          </span>
          <div className="best__prod-shadow"></div>
          <div className="best__prod-detail">
            {/* eslint-disable */}
            <span>
              前調：{top_zh} {top_id}
            </span>
            <span>
              中調：{mid_zh} {mid_id}
            </span>
            <span>
              後調：{base_zh} {base_id}
            </span>
            {/* eslint-enable */}
          </div>
        </div>
        <button
          className="best__prod-btn"
          style={{ background: color }}
          onClick={purchaseHandler}
        >
          訂購
        </button>
      </div>
    </>
  )
}

export default ProductCard
