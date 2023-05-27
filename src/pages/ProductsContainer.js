import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'

import { FetchProducts } from '../store/products/action'
import Product from '../components/Product'
import Header from '../components/Header'

import './ProductsContainer.scss'

const Products = ({ productsData, productsLoading, fetchProducts }) => {
  const [selectedOption, setSelectedOption] = useState('Monthly Payment')

  const handleFilterChange = (value) => {
    setSelectedOption(value)
  }

  useEffect(() => {
    document.title = 'iQuanti (Products)'
    fetchProducts()
  }, [fetchProducts])

  const renderFilteredProducts = React.useMemo(() => {
    if (!productsData) {
      return null
    }

    const sortedProducts = productsData.slice().sort((a, b) => {
      if (selectedOption === 'APR Min') {
        return a.apr.min - b.apr.min
      } else if (selectedOption === 'APR Max') {
        return a.apr.max - b.apr.max
      } else if (selectedOption === 'Origination Fee') {
        return a.origination_fee.min - b.origination_fee.min
      }
      return 0
    })

    return sortedProducts.map((item, index) => (
      <Product product={item} key={index} />
    ))
  }, [productsData, selectedOption])

  return (
    <div className='products-container'>
      <Header
        selectedOption={selectedOption}
        handleFilterChange={handleFilterChange}
      />

      {productsLoading
        ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
          }}
        >
          <CircularProgress />
        </div>)
        : (
          <Grid container maxWidth="md" className="product-list">
            {renderFilteredProducts}
          </Grid>
          )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { ...state.products }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(FetchProducts())
  }
}

Products.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  productsData: PropTypes.array.isRequired,
  productsLoading: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
