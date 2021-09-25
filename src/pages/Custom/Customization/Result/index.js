import React from 'react'
import { Link } from 'react-router-dom'

import {
  FiX,
  FiRefreshCw,
  FiHeart,
  FiShoppingBag,
  FiUpload,
} from 'react-icons/fi'

import { baseUrl } from '../../../../config'
import myswal from '../../../../utils/sweetalert'

import './style.scss'

import CostList from './CostList'

function Result(props) {
  const { productDetail, setProductDetail } = props
  // console.log(productDetail)

  const {
    topNote,
    middleNote,
    baseNote,
    serieName,
    serieDescription,
    productCode,
    productImage,
  } = productDetail

  const purchaseHandler = async () => {
    // remove http request and validation for demo
    myswal.addCart()
  }

  const collectHandler = async () => {
    // remove http request and validation for demo
    myswal.addCollection()
  }

  return (
    <>
      <div className="cust">
        {/* background blob */}
        <div className="cust__pink-blob"></div>
        <div className="cust__orange-blob"></div>
        <div className="cust__yellow-blob"></div>
        {/* background blob end */}
        <div className="cust-res__top-bar">
          <span>
            {serieName}&nbsp;&nbsp;{productCode}
          </span>
        </div>
        <Link to="/">
          <FiX className="cust__close-btn" />
        </Link>
        <article className="cust__description blob-orange">
          <p className="cust__description__title">成分說明</p>
          <span className="cust__description__content">{serieDescription}</span>
        </article>
        <figure className="cust-res__image-top">
          <img
            className="cust-res__image"
            src={baseUrl + productImage}
            alt=""
          />
        </figure>
        <CostList
          topNote={topNote}
          middleNote={middleNote}
          baseNote={baseNote}
        />
        <button
          className="cust-res__btn-reset"
          onClick={() => setProductDetail({})}
        >
          <FiRefreshCw /> 重做
        </button>
        <button className="cust-res__btn-favorite" onClick={collectHandler}>
          <FiHeart /> 收藏
        </button>
        <button className="cust-res__btn-purchase" onClick={purchaseHandler}>
          <FiShoppingBag /> 訂購
        </button>
        {/* <button className="cust-res__btn-share">
          <FiUpload /> 分享
        </button> */}
      </div>
    </>
  )
}

export default Result
