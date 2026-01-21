# 1-post-Non3ds (moto and auto clear)

Non-3DS (3D Secure) payments allow you to process card payments without the additional authentication step.

## Overview

Non-3DS payments are faster but typically have lower security requirements. They're suitable for:

- Low-value transactions
- Merchant-initiated transactions
- Recurring payments
- Trusted merchants

## Request Example

```bash
POST /v1/payments/charge
```

```json
{
  {
 "amount": {
 "currency": "EUR",
 "value": 1000
},
 "reference": "Your order number",
 "paymentMethod": {
 "type": "scheme",
 "encryptedCardNumber": "test_4111111111111111",
 "encryptedExpiryMonth": "test_03",
 "encryptedExpiryYear": "test_2030",
 "encryptedSecurityCode": "test_737"
},
 "returnUrl": "https://your-company.example.com/...",
 "merchantAccount": "{{YOUR_MERCHANT_ACCOUNT}}"
},
  "buyer": {
    "id": "BY789",
    "name": "John",
    "surname": "Doe",
    "email": "email@email.com",
    "identityNumber": "74300864791",
    "registrationAddress": "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
    "city": "Istanbul",
    "country": "Turkey",
    "ip": "85.34.78.112"
  },
  "billingAddress": {
    "contactName": "John Doe",
    "city": "Istanbul",
    "country": "Turkey",
    "address": "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1"
  },
  "basketItems": [
    {
      "id": "BI101",
      "name": "Binocular",
      "category1": "Collectibles",
      "category2": "Accessories",
      "itemType": "PHYSICAL",
      "price": "100.00"
    }
  ]
}
```

## Response Example

```json
{
  "status": "success",
  "paymentId": "12345678",
  "fraudStatus": 1,
  "price": 100.00,
  "paidPrice": 100.00,
  "currency": "TRY",
  "installment": 1
}
```

## Important Notes

- Non-3DS payments may have higher risk of fraud
- Some card issuers may still require 3DS authentication
- Consider using fraud checks for additional security
- Monitor chargeback rates regularly
