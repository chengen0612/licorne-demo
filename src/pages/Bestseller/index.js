import React, { useState, useEffect } from 'react'

import './style.scss'
import jsonData from '../../data/bestseller/bestseller.json'

// public components
import Spinner from './Spinner'
import SecondaryFooter from '../../components/SecondaryFooter'

// components
import ProductCard from './ProductCard'
import Filters from './Filters'

function Bestseller() {
  // state for spinner
  const [didMount, setDidMount] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // state for filters
  const [checkedSeries, setCheckedSeries] = useState([])
  const [sortBy, setSortBy] = useState('每月人氣銷售')

  // state for display
  const [initData, setInitData] = useState([])
  const [display, setDisplay] = useState([])
  const [otherProducts, setOtherProducts] = useState([]) // products not in top three

  const getDataFromJson = () => {
    Object.freeze(jsonData)
    return jsonData
  }

  const updateDisplay = (data) => {
    const [first, second, third, ...others] = data
    setDisplay(data)
    setOtherProducts(others)
  }

  const manipulateDataByUserOptions = (data) => {
    data = checkedSeries.length ? selectDataBySeries(data) : data
    sortDataBySortBy(data)
    data = sliceTopFifteen(data)
    addSequenceProperty(data)

    return data
  }

  const selectDataBySeries = (data) => {
    let response = []
    for (let i = 0; i < checkedSeries.length; i++) {
      const result = data.filter((item) => item.serie_zh === checkedSeries[i])
      response = [...response, ...result]
    }
    return response
  }

  const sortDataBySortBy = (data) => {
    switch (sortBy) {
      case '價格由高至低':
        data.sort((a, b) => b.price - a.price)
        break
      case '價格由低至高':
        data.sort((a, b) => a.price - b.price)
        break
      default:
        // '每月人氣銷售'
        data.sort((a, b) => b.popularity - a.popularity)
        break
    }
  }

  const sliceTopFifteen = (data) => {
    const quantity = Math.min(data.length, 15)
    const response = data.slice(0, quantity)
    return response
  }

  const addSequenceProperty = (data) => {
    data.forEach((item, i) => {
      item['sequence'] = i + 1
    })
  }

  // first render
  useEffect(() => {
    const data = getDataFromJson()
    setInitData(data)

    let newData = [...data]
    newData = manipulateDataByUserOptions(newData)
    updateDisplay(newData)

    setDidMount(true)
  }, [])

  // update display when filter is changed
  /* eslint-disable */
  useEffect(() => {
    if (didMount === false) return
    setIsLoading(true)
    let newData = [...initData]
    newData = manipulateDataByUserOptions(newData)
    updateDisplay(newData)
    setTimeout(() => { setIsLoading(false) }, 500)
  }, [checkedSeries, sortBy])
  /* eslint-enable */

  const renderProducts = () => {
    return (
      <>
        <div className="best__display-wrap">
          <ProductCard key={0} data={display[0]} />
        </div>
        <div className="best__display-wrap">
          <ProductCard key={1} data={display[1]} />
          <ProductCard key={2} data={display[2]} />
        </div>
        <div className="best__display-wrap">
          {otherProducts.map((item, i) => {
            return <ProductCard key={i + 3} data={item} />
          })}
        </div>
      </>
    )
  }

  return (
    <>
      {display.length > 0 && (
        <>
          {isLoading && <Spinner />}
          <div className="best-wrapper">
            <h3 className="best__title">人氣熱銷排行榜</h3>
            <Filters
              checkedSeries={checkedSeries}
              setCheckedSeries={setCheckedSeries}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
            {!isLoading && renderProducts()}
          </div>
          <SecondaryFooter />
        </>
      )}
    </>
  )
}

export default Bestseller
