import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IX6amEevgfceuqFxpwIkqNz61KGrLtbnh9h2NfxTeLQZsI1irfr35uPY21hpe8pGWZduxgVE9oXG0ofsgmxd9EI00IHscaZ6Z';

    const onToken = token => {
        alert('Payment Successful')
    }
    
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing LTD'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description= {`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton