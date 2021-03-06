import React from 'react'
import { Link } from 'react-router-dom'

import { FiX } from 'react-icons/fi'

import baseUrl from '../../../config/index'
import './style.scss'

function Entrance() {
  /* eslint-disable */
  return (
    <>
      <div className="c-entrance">
        <h3 className="c-entrance__greet">是否有過製作香水的經驗呢</h3>
        <div className="c-entrance__btn-wrap">
          <Link to={baseUrl + '/custom/process'} className="c-entrance__btn">是</Link>
          <Link to={baseUrl + '/custom/introduction'} className="c-entrance__btn">否</Link>
        </div>
        <Link to={baseUrl} >
          <FiX className="c-entrance__close-btn" />
        </Link>
      </div>
    </>
  )
  /* eslint-enable */
}

export default Entrance
