import React from 'react'

import { baseUrl } from '../../config'
import myswal from '../../utils/sweetalert'

function ProductCard(props) {
  const { data } = props

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

  const purchaseHandler = async () => {
    myswal.addCart()
  }

  // add comma to price
  function addCommasToNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <>
      <div className="best__prod-card">
        <figure className="best__prod-sequence">
          <img src={baseUrl + `/images/bestseller/${sequence}.svg`} alt="" />
        </figure>
        <div className="best__prod-display" style={{ background: color }}>
          <img src={baseUrl + bottle_img} alt={cust_id} />
          <h3 className="best__prod-title">{cust_id}</h3>
          <span className="best__prod-price">
            NT ${addCommasToNumber(price)}
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
