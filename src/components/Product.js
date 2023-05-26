import React, { useState } from 'react';
import classNames from 'classnames';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconDone from "./icons/IconDone"
import './Product.scss'


const Product = (props) => {
  const { product } = props;

  let pros = (product?.detailed_info?.pro && product?.detailed_info?.pro.split("|\n")) || [];
  let cons = (product?.detailed_info?.con && product?.detailed_info?.con.split("|\n")) || [];

  const [isExpend, setIsExpend] = useState(false);

  const toggleMore = () => {
    setIsExpend(!isExpend);
  };
  
  return (<div className={classNames('product',isExpend ? 'product-expended' : '')}>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <h2>{product?.lender_name}</h2>
        <img
          src={product.lender_image}
          alt={product.lender_name}
          loading="lazy"
          height={"50px"}
        />
      </Grid>
      <Grid item xs={8}>

        <Grid className='metrics'>
          <span>{product?.apr?.min}% - {product?.apr?.max}%</span>
          <span>$500</span>
          <span>{product?.origination_fee?.min}</span>
        </Grid>

        <Grid className='good-for'>
          <h3>Good For: {product?.best_for}</h3>
        </Grid>

        <Grid className='pros-cons'>
          <h3>Pros & Cons</h3>
          <div className='lists'>
            <ul>
              {isExpend ? (
                pros.map((pro) => <li key={pro}><IconDone type={2} color="#6d7f87"/> {pro}</li>)
              ) : (
                <li><IconDone type={2} color="#6d7f87"/> {pros[0]}</li>
              )}
            </ul>
            <ul>
              {isExpend ? (
                cons.map((con) => <li key={con}><IconDone type={2} color="#6d7f87"/> {con}</li>)
              ) : (
                <li><IconDone type={2}  color="#6d7f87"/> {cons[0]}</li>
              )}
            </ul>
          </div>
        </Grid>

        
        {
          isExpend && (<>
            <Grid className='qualification-requirements'>
              <h3>Qualification Requirements</h3>
              <div>
                <span>Min. Credit Score: {product?.detailed_info?.min_credit_score}</span>
                <span>Max. DTI ratio: {product?.detailed_info?.max_debt_income_ratio}</span>
              </div>
            </Grid>
            <Grid className='fees-penality'>
              <h3>Fees & Penality</h3>
              <div>
                <span>Late Penalties: {product?.detailed_info?.late_penalties}</span>
                <span>Prepayment Fees: {product?.detailed_info?.prepayment_fee}</span>
                <span>Returned Payment Fees:: {product?.returned_payment_fee}</span>
              </div>
            </Grid>
            </>)
        }

        <Grid className='more'>
          <span onClick={toggleMore}>{isExpend ? 'Show Less' : 'More'}</span>
        </Grid>
        { isExpend && (
          <>
            <Button variant="outlined" size="large">Read Full Review</Button>
            <Button variant="contained" size="large">Get Offer</Button>
          </>
        )}
      </Grid>
    </Grid>
  </div>);
};

export default Product;