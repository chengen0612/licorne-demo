import React from 'react'
import { Link } from 'react-router-dom'

import baseUrl from '../../../../config/index'
import './style.scss'

function Exit() {
  return (
    <>
      <div className="c-intro-exit">
        <div className="c-intro-exit__r-blob"></div>
        <h3 className="c-intro-exit__greet">學習完香水的相關知識</h3>
        <h3 className="c-intro-exit__greet">讓我們來製作你的專屬香水吧！</h3>
        <Link
          to={baseUrl + '/custom/process'}
          className="c-intro-exit__ahead-btn"
        >
          開始製作
        </Link>
      </div>
    </>
  )
}

export default Exit
