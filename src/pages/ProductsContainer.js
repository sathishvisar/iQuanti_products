import React from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

import { fetch_products } from '../store/products/action';
import Product from '../components/Product'
import Header from '../components/Header'

import './ProductContainer.scss'

class Products extends React.Component {
  componentDidMount(){
      this.props.fetch_products()
  }
  render() {
    return <div className='product-container'>

      <Header />

      {this.props?.productsLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </div>
      ) : (
        <Grid container maxWidth="lg" className='product-list'>
          {
            this.props?.productsData?.map((item, index) => (
              <Product product={item} key={index}/>
            ))
          }
        </Grid>
      )}

    </div>
  }
}

const mapStateToProps = (state) => {
  return { ...state.products };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetch_products: () => dispatch(fetch_products())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
