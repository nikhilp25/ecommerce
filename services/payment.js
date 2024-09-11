const stripe = require("stripe")(
  "sk_test_51PuphkSCIFTvT0mYLkOJwmG0h0ozaS6HGYXQk74CjzXUTIKl0ZCiP8Un4jJb8YDoCbECshxOEkhUbYpASW0Etyq200MqWHPSUm"
);
module.exports = class PaymentService {
  constructor(paymentRepoInstance) {
    this.paymentRepoInstance = paymentRepoInstance;
  }

  makePayment = async (cartItem) => {
    const priceData = [];
    cartItem.map((data) => {
      let priceObj = {};
      priceObj = {
        price_data: {
          currency: "usd",
          product_data: {
            name: data.name,
          },
          unit_amount: data.price,
        },
        quantity: data.quantity,
      };
      priceData.push(priceObj);
    });
    const session = await stripe.checkout.sessions.create({
      success_url:
        "http://localhost:8000/api/v1/payment/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:8000/api/v1/payment/cancel",
      line_items: priceData,
      mode: "payment",
    });
    return session;
    // res.redirect(session.url);
  };
  getSuccessData = async (sessionId) => {
    const result = Promise.all([
      stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["payment_intent.payment_method"],
      }),
      stripe.checkout.sessions.listLineItems(sessionId),
    ]);
    console.log(JSON.stringify(await result));
    return await result;
  };
};
