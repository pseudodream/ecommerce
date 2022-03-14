import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import useHistory from "react-router"
import axios from "axios";

const Pay=()=>{

    const [stripeToken,setStripeToken]=useState(null)
    const history=useHistory();
    const onToken=()=>{
        setStripeToken(token);

    }

    useEffect(()=>{
        const makeRequest=async()=>{
            try{
                const res=await axios.post("http://localhost:5000/api/checkout/payment",
                {
                    tokenId: stripeToken.id,
                    amount:2000
                })
                console.log(res.data)
                history.push("/success")
            }catch(err){
                console.log(err)
            }
        }
        if(stripeToken) makeRequest
    },[stripeToken,history])

    

    return (
        <div>
            {stripeToken?(<span>Processing...</span>):
            (
            <StripeCheckout name="gallery shop"
             image=""
             billingAddress
             shippingAddress
             description="total is 20"
             amount={2000}
             token={onToken}
             stripeKey={process.env.STRIPE_PUBLIC_KEY}
            />
            )}
            <button>pay</button>
        </div>
    )
}