
/*export default async function handler( req, res) {
    res.json({msjs: "asdasdsa"})
}*/

import paypal from "@paypal/checkout-server-sdk";
// Creating an environment
let clientId = "AZ51IszbJLx4g0E2qXG5BFDUO1EdcAlau4MEoyDOmrpeQflg8xAJeHW5oU3-zLkq8PaXJO5AuGLOHKea";
let clientSecret = "EGBVzO3S4CJtSDygR6fVakQQ9ZCYG8vjm1YEm5-Z2OeLbdSyMoC_MfQ8PNL-hYouplFf3TttJhld8J_9";


// This sample uses SandboxEnvironment. In production, use LiveEnvironment
let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
let client = new paypal.core.PayPalHttpClient(environment);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: `${req.query.price}`,
          },
        },
      ],
    });
    const response = await client.execute(request);

    return res.json({ id: response.result.id });
  }
}



