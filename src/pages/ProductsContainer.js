import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'

import { FetchProducts } from '../store/products/action'
import Product from '../components/Product'
import Header from '../components/Header'

import './ProductsContainer.scss'

class Products extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedOption: 'Monthly Payment'
    }

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange (value) {
    this.setState({
      selectedOption: value
    })
  }

  componentDidMount () {
    document.title = 'iQuanti (Products)'
    this.props.FetchProducts()
  }

  renderFilteredProducts () {
    const { productsData } = this.props

    if (!productsData) {
      return null
    }

    // Sort the productsData array based on the sortKey
    const sortedProducts = productsData.slice().sort((a, b) => {
      if (this.state.selectedOption === 'APR Min') {
        return a.apr.min - b.apr.min
      } else if (this.state.selectedOption === 'APR Max') {
        return a.apr.max - b.apr.max
      } else if (this.state.selectedOption === 'Origination Fee') {
        return a.origination_fee.min - b.origination_fee.min
      }
      return a - b
    })

    return sortedProducts.map((item, index) => (
      <Product product={item} key={index} />
    ))
  }

  render () {
    return <div className='products-container'>

      <Header selectedOption={this.state.selectedOption} handleFilterChange={this.handleFilterChange}/>

      {this.props?.productsLoading
        ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </div>
          )
        : (
        <Grid container maxWidth="md" className='product-list'>
          {this.renderFilteredProducts()}
        </Grid>
          )}

    </div>
  }
}

const mapStateToProps = (state) => {
  return { ...state.products }
}
const mapDispatchToProps = (dispatch) => {
  return {
    FetchProducts: () => dispatch(FetchProducts())
  }
}

Products.propTypes = {
  FetchProducts: PropTypes.func.isRequired,
  productsData: PropTypes.array.isRequired,
  productsLoading: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
