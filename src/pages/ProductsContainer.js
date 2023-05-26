import React from 'react';
import { connect } from 'react-redux';
import { fetch_products } from '../store/products/action';
import Product from '../components/Product'

class Products extends React.Component {
  componentDidMount(){
      this.props.fetch_products()
  }
  render() {
    return <>
      {this.props?.productsLoading ? (
        <p>Data loading</p>
      ) : (
        this.props?.productsData?.map((item, index) => (
          <Product product={item}/>
        ))
      )}
    </>
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
