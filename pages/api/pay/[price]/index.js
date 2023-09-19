
/*export default async function handler( req, res) {
    res.json({msjs: "asdasdsa"})
}*/

import paypal from "@paypal/checkout-server-sdk";
// Creating an environment
let clientId = "ARaImyHJ2lHwAG-xrLwLi6iY1kEw2xUNQ2ABmte0hk-aOjCqUR5Yj0wj-33CMCT_lAWh6GfPQ1ww9lKM";
let clientSecret = "EFsPOKUYXdV8KPspSsJ83obBq47p-IiBLwLFjdEna0PXkzLJXmKwmuf7GIgbY8QgcbfOrLofUkL_-JSb";


// This sample uses SandboxEnvironment. In production, use LiveEnvironment
let environment = new paypal.core.LiveEnvironment(clientId, clientSecret);
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



