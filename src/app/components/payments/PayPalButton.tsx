import { PayPalButtons } from "@paypal/react-paypal-js";
import { PayPalScriptProvider } from "@paypal/react-paypal-js/dist/types/components/PayPalScriptProvider";
import React from "react";
const PayPalButton = () => {
    return (
      <PayPalScriptProvider options={{ clientId: "your-paypal-client-id" }}>
        <PayPalButtons
          createOrder={(data, actions) => {
            if (actions && actions.order) {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: "USD",
                      value: "88.44",
                    },
                  },
                ],
                intent: "CAPTURE",
              });
            }
            // handle the case when actions.order is undefined
            return Promise.reject("Invalid actions object");
          }}
          onApprove={(data, actions) => {
            if (actions && actions.order) {
                return actions.order.capture().then((details: any) => {
                    if (details.payer && details.payer.name && details.payer.name.given_name) {
                      const name = details.payer.name.given_name;
                      alert(`Transaction completed by ${name}`);
                    } else {
                      alert('Transaction completed');
                    }
                  });
            }
            // handle the case when actions.order is undefined
            return Promise.reject("Invalid actions object");
          }}
        />
      </PayPalScriptProvider>
    );
  };

export default PayPalButton;
