import { Types } from "./types";
import { fetchProducts } from '../../services/products';


const data = [
  {
    "lender_id": 1,
    "apr": {
      "min": 5.99,
      "max": 21.49
    },
    "origination_fee": {
      "min": 0.0,
      "max": null
    },
    "returned_payment_fee": "",
    "best_for": "Offers longest loan term, no fees",
    "lender_name": "LightStream",
    "lender_image": "https://d2vear48ydilfx.cloudfront.net/production/logo/Lightstream.jpg",
    "detailed_info": {
      "pro": "No fees or prepayment penalties |\nSame day funding, conditions apply|\nNo collateral required | Rates quoted with AutoPay option. Invoicing option is 0.50% points higher.",
      "con": "Prefers borrowers with excellent credit",
      "min_credit_score": 660,
      "max_debt_income_ratio": null,
      "prepayment_fee": 0.0,
      "late_penalties": "0"
    },
    "ratings": {
      "bbb_rating": "A+",
      "trust_pilot": 1.8,
      "jd_power": 719.0
    },
    "review_url": "/personal-loans/reviews/lightstream/",
    "apply_url": "/personal-loans-preapproval/?lender=lightstream",
    "source": "Lightstream",
    "status": "Enable",
    "cosigner": "TRUE",
    "code": "lightstream",
    "resized_logo_desktop": "https://d2vear48ydilfx.cloudfront.net/production/logo/new_logos/desktop/Branding---Logo---Horizontal---Color.png",
    "resized_logo_mobile": "https://d2vear48ydilfx.cloudfront.net/production/logo/new_logos/mobile/Branding---Logo---Horizontal---Color.png",
    "funds_details": {
      "time_to_receive_funds_value": "",
      "time_to_receive_funds_unit": "",
      "time_to_receive_funds_detailed_text": "Same day funding available (conditions apply)"
    }
  },
  {
    "lender_id": 2,
    "apr": {
      "min": 6.99,
      "max": 22.28
    },
    "origination_fee": {
      "min": 0.0,
      "max": null
    },
    "returned_payment_fee": "0",
    "best_for": "High loan amounts available, no fees",
    "lender_name": "SoFi",
    "lender_image": "https://d2vear48ydilfx.cloudfront.net/production/logo/Sofi.png",
    "detailed_info": {
      "pro": "No fees|\nAutopay rate discount of 0.25%|\nOffers unemployment protection|\nHigh loan amounts available",
      "con": "High credit score requirement|\nNo refinancing option|\nDoesn't offer direct payment to creditors with debt consolidation loans",
      "min_credit_score": 680,
      "max_debt_income_ratio": 36.0,
      "prepayment_fee": 0.0,
      "late_penalties": "0"
    },
    "ratings": {
      "bbb_rating": "A+",
      "trust_pilot": 3.5,
      "jd_power": 738.0
    },
    "review_url": "/personal-loans/reviews/sofi/",
    "apply_url": "https://track.supermoney.com/aff_c?offer_id=1618&aff_id=1911&partner=credello",
    "source": "Supermoney",
    "status": "Enable",
    "cosigner": "TRUE",
    "code": "sofi",
    "resized_logo_desktop": "https://d2vear48ydilfx.cloudfront.net/production/logo/new_logos/desktop/layer1.png",
    "resized_logo_mobile": "https://d2vear48ydilfx.cloudfront.net/production/logo/new_logos/mobile/layer1.png",
    "funds_details": {
      "time_to_receive_funds_value": "",
      "time_to_receive_funds_unit": "",
      "time_to_receive_funds_detailed_text": "3-6 business days (up to 15 if self-employed)"
    }
  },
  {
    "lender_id": 3,
    "apr": {
      "min": 5.99,
      "max": 24.99
    },
    "origination_fee": {
      "min": 0.0,
      "max": 5.0
    },
    "returned_payment_fee": "0",
    "best_for": "Eliminating high-interest credit card debt",
    "lender_name": "Happy Money",
    "lender_image": "https://d2vear48ydilfx.cloudfront.net/production/logo/Payoff.png",
    "detailed_info": {
      "pro": "Fixed, low rates|\nNo hidden fees|\nOffers online educational resources and financial tools",
      "con": "Limitations on loan usage: only for credit card debt consolidation|\nNo joint loan options|\nPossible origination fee",
      "min_credit_score": 600,
      "max_debt_income_ratio": 50.0,
      "prepayment_fee": 0.0,
      "late_penalties": "0"
    },
    "ratings": {
      "bbb_rating": "A+",
      "trust_pilot": 2.6,
      "jd_power": 667.0
    },
    "review_url": "/personal-loans/reviews/payoff/",
    "apply_url": "https://track.supermoney.com/aff_c?offer_id=1618&aff_id=1911&partner=credello",
    "source": "Supermoney",
    "status": "Enable",
    "cosigner": "FALSE",
    "code": "payoff",
    "resized_logo_desktop": "https://d2vear48ydilfx.cloudfront.net/production/logo/new_logos/desktop/happy_money.png",
    "resized_logo_mobile": "https://d2vear48ydilfx.cloudfront.net/production/logo/new_logos/mobile/happy_money.png",
    "funds_details": {
      "time_to_receive_funds_value": "",
      "time_to_receive_funds_unit": "",
      "time_to_receive_funds_detailed_text": "2-5 business days"
    }
  },
  {
    "lender_id": 4,
    "apr": {
      "min": 5.94,
      "max": 35.97
    },
    "origination_fee": {
      "min": 2.9,
      "max": 8.0
    },
    "returned_payment_fee": "10",
    "best_for": "Low loan amount",
    "lender_name": "Upgrade",
    "lender_image": "https://d2vear48ydilfx.cloudfront.net/production/logo/Upgrade.png",
    "detailed_info": {
      "pro": "Wide range of loan amounts|\nAllows joint applicants| Flexible payment date",
      "con": "Charges origination fee|\nHigh maximum APR",
      "min_credit_score": 560,
      "max_debt_income_ratio": 75.0,
      "prepayment_fee": 0.0,
      "late_penalties": "up to $10"
    },
    "ratings": {
      "bbb_rating": "A+",
      "trust_pilot": 4.7,
      "jd_power": 693.0
    },
    "review_url": "/personal-loans/reviews/upgrade/",
    "apply_url": "https://track.supermoney.com/aff_c?offer_id=1618&aff_id=1911&partner=credello",
    "source": "Supermoney",
    "status": "Enable",
    "cosigner": "TRUE",
    "code": "upgrade",
    "resized_logo_desktop": "https://d2vear48ydilfx.cloudfront.net/production/logo/new_logos/desktop/upgrade-logo.png",
    "resized_logo_mobile": "https://d2vear48ydilfx.cloudfront.net/production/logo/new_logos/mobile/upgrade-logo.png",
    "funds_details": {
      "time_to_receive_funds_value": "4",
      "time_to_receive_funds_unit": "business days",
      "time_to_receive_funds_detailed_text": ""
    }
  },
  {
    "lender_id": 5,
    "apr": {
      "min": 9.95,
      "max": 35.99
    },
    "origination_fee": {
      "min": 0.0,
      "max": 4.75
    },
    "returned_payment_fee": "15",
    "best_for": "Fast funding",
    "lender_name": "Avant",
    "lender_image": "https://d2vear48ydilfx.cloudfront.net/production/logo/Avant.png",
    "detailed_info": {
      "pro": "Wide range of loan amounts|\nHighly-rated mobile app lets you see your payment history and manage upcoming payments on the go|\nNo prepayment fees",
      "con": "No option to include co-borrower or cosigner |\nHigh APR caps|\nNumerous fees, including origination, dishonored payment, and late fees",
      "min_credit_score": 580,
      "max_debt_income_ratio": null,
      "prepayment_fee": 0.0,
      "late_penalties": "25"
    },
    "ratings": {
      "bbb_rating": "A",
      "trust_pilot": 4.7,
      "jd_power": 683.0
    },
    "review_url": "/personal-loans/reviews/avant/",
    "apply_url": "https://track.supermoney.com/aff_c?offer_id=1618&aff_id=1911&partner=credello",
    "source": "Supermoney",
    "status": "Enable",
    "cosigner": "FALSE",
    "code": "avant",
    "resized_logo_desktop": "https://d2vear48ydilfx.cloudfront.net/production/logo/new_logos/desktop/avant-vector-logo.png",
    "resized_logo_mobile": "https://d2vear48ydilfx.cloudfront.net/production/logo/new_logos/mobile/avant-vector-logo.png",
    "funds_details": {
      "time_to_receive_funds_value": "1",
      "time_to_receive_funds_unit": "business day",
      "time_to_receive_funds_detailed_text": ""
    }
  },
  {
    "lender_id": 6,
    "apr": {
      "min": 9.99,
      "max": 35.99
    },
    "origination_fee": {
      "min": 0.0,
      "max": 6.0
    },
    "returned_payment_fee": "",
    "best_for": "Fast funding",
    "lender_name": "LendingPoint",
    "lender_image": "https://d2vear48ydilfx.cloudfront.net/production/logo/Lendingpoint.svg",
    "detailed_info": {
      "pro": "Low credit score threshold|\nFast loan approval and funding|\nNo prepayment fee",
      "con": "High APR caps|\nNo joint or cosigned loans|\nPossible origination fee",
      "min_credit_score": 585,
      "max_debt_income_ratio": 40.0,
      "prepayment_fee": 0.0,
      "late_penalties": "30"
    },
    "ratings": {
      "bbb_rating": "A+",
      "trust_pilot": 4.9,
      "jd_power": 668.0
    },
    "review_url": "/personal-loans/reviews/lendingpoint/",
    "apply_url": "https://track.supermoney.com/aff_c?offer_id=1618&aff_id=1911&partner=credello",
    "source": "Supermoney",
    "status": "Enable",
    "cosigner": "FALSE",
    "code": "lendingpoint",
    "resized_logo_desktop": "https://d2vear48ydilfx.cloudfront.net/production/logo/new_logos/desktop/lending%20point-logo.png",
    "resized_logo_mobile": "https://d2vear48ydilfx.cloudfront.net/production/logo/new_logos/mobile/lending%20point-logo.png",
    "funds_details": {
      "time_to_receive_funds_value": "1",
      "time_to_receive_funds_unit": "business day",
      "time_to_receive_funds_detailed_text": ""
    }
  }
]

const start_fetch_products = () => ({
  type: Types.START_GET_PRODUCTS_LIST,
  payload: {}
});

const end_fetch_products = (success, error) => ({
  type: Types.END_GET_PRODUCTS_LIST,
  payload: {
    success: data,
    error
  }
});

export const fetch_products = () => async (dispatch) => {
  dispatch(start_fetch_products());
  const [response, error] = await fetchProducts();
  dispatch(end_fetch_products(response, error));
};

