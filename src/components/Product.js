import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Grid from '@mui/material/Grid'
import IconDone from './icons/IconDone'
import IconClose from './icons/IconClose'
import IconAskQuestion from './icons/IconAskQuestion'
import CustomButton from './shared/CustomButton'

import './Product.scss'

const Product = (props) => {
  const { product } = props

  const pros = (product?.detailed_info?.pro && product?.detailed_info?.pro.split('|\n')) || []
  const cons = (product?.detailed_info?.con && product?.detailed_info?.con.split('|\n')) || []

  const [isExpend, setIsExpend] = useState(false)

  const toggleMore = () => {
    setIsExpend(!isExpend)
  }

  return (<div className={classNames('product', isExpend ? 'product-expended' : '')}>
    <Grid container spacing={2} className="product-container">

      <Grid item xs={12} sm={12} md={4} className="col-left">
        <h2>{product?.lender_name}</h2>
        <img
          src={product.lender_image}
          alt={product.lender_name}
          loading="lazy"
        />
        <CustomButton variant="contained" text={'Get Offer'} label="on Credello" fullWidth/>
      </Grid>

      <Grid item xs={12} sm={12} md={8} className="col-right">
        <Grid className='metrics'>
          <CustomButton variant="contained" color="secondary" text={`${product?.apr?.min}% - ${product?.apr?.max}%`} label="Est. APR Range"/>
          <CustomButton variant="contained" color="secondary" text={'$500'} label="Mo. Payment"/>
          <CustomButton variant="contained" color="secondary" text={product?.origination_fee?.min} label="Origination Fee"/>
        </Grid>

        <Grid className='good-for'>
          <h3><span className='high-light'>Good For:</span> {product?.best_for}</h3>
        </Grid>

        <Grid className='pros-cons'>
          <h3><span className='high-light'>Pros & Cons</span></h3>
          <div className='lists'>
            <ul>
              {isExpend
                ? (
                    pros.map((pro) => <li key={pro}><IconDone color="#6d7f87"/> <span>{pro}</span></li>)
                  )
                : (
                <li><IconDone color="#6d7f87"/><span>{pros[0]}</span></li>
                  )}
            </ul>
            <ul>
              {isExpend
                ? (
                    cons.map((con) => <li key={con}><IconClose color="#6d7f87"/> <span>{con}</span></li>)
                  )
                : (
                <li><IconClose color="#6d7f87"/> <span>{cons[0]}</span></li>
                  )}
            </ul>
          </div>
        </Grid>

        {
          isExpend && (<>
            <hr/>
            <Grid className='qualification-requirements'>
              <h3>Qualification Requirements</h3>
              <div>
                <span className='label'>Min. Credit Score:</span> <span className='value'>{product?.detailed_info?.min_credit_score}</span>
                <span className='label'>Max. DTI ratio:<IconAskQuestion /></span> <span className='value'>{product?.detailed_info?.max_debt_income_ratio}</span>
              </div>
            </Grid>
            <hr/>
            <Grid className='fees-penality'>
              <h3>Fees & Penality</h3>
              <div>
                <span className='label'>Late Penalties:</span> <span className='value'>{product?.detailed_info?.late_penalties}</span>
                <span className='label'>Prepayment Fees:</span> <span className='value'>{product?.detailed_info?.prepayment_fee}</span>
                <span className='label'>Returned Payment Fees:</span> <span className='value'>{product?.returned_payment_fee}</span>
              </div>
            </Grid>
            </>)
        }

        <Grid className='more-less'>
          <span onClick={toggleMore}>{isExpend ? 'Show Less' : 'More'}</span>
        </Grid>
        { isExpend && (
          <div className='prod-action'>
            <CustomButton variant="outlined" text={'Read Full Review'} fullWidth/>
            <CustomButton variant="contained" text={'Get Offer'} label="on Credello" fullWidth/>
          </div>
        )}
      </Grid>
    </Grid>
  </div>)
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    detailed_info: PropTypes.shape({
      pro: PropTypes.string.isRequired,
      split: PropTypes.string.isRequired,
      con: PropTypes.string.isRequired,
      min_credit_score: PropTypes.number.isRequired,
      max_debt_income_ratio: PropTypes.number.isRequired,
      late_penalties: PropTypes.string.isRequired,
      prepayment_fee: PropTypes.string.isRequired
    }),
    lender_name: PropTypes.string.isRequired,
    lender_image: PropTypes.string.isRequired,
    apr: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired
    }).isRequired,
    origination_fee: PropTypes.shape({
      min: PropTypes.number.isRequired
    }).isRequired,
    best_for: PropTypes.string.isRequired,
    returned_payment_fee: PropTypes.string.isRequired
  })
}

export default Product
