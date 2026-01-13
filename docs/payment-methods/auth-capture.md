# Auth & Capture

Authorization and Capture is a two-step payment process that allows you to reserve funds and capture them later.

## Overview

The Auth & Capture flow consists of two steps:

1. **Authorization**: Reserve the funds on the card (not immediately charged)
2. **Capture**: Actually charge the reserved amount

This is useful for:
- Pre-authorizing payments
- Shipping goods before charging
- Verifying card validity
- Handling delayed fulfillment

## Step 1: Authorization

Authorize a payment to reserve funds:

```bash
POST /v1/payments/auth
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
}
}
```

### Authorization Response

```json
{
  "status": "success",
  "paymentId": "12345678",
  "paymentStatus": "AUTHORIZED",
  "fraudStatus": 1,
  "price": 1000,
  "paidPrice": 1000
}
```

## Step 2: Capture

Capture the authorized amount:

```bash
POST /v1/payments/{paymentId}/capture
```

```json
{
 "reference": "YOUR_UNIQUE_REFERENCE",
 "merchantAccount": "{{YOUR_MERCHANT_ACCOUNT}}",
 "amount": {
 "value": 2000,
 "currency": "EUR"
}
}
```

### Capture Response

```json
{
  "status": "success",
  "paymentId": "12345678",
  "paymentStatus": "SUCCESS",
  "price": 100.00,
  "paidPrice": 100.00
}
```

## Important Notes

- Authorizations typically expire after 7 days
- You can capture a partial amount (if supported)
- Use the paymentId from the authorization response
- Monitor authorization expiration dates
- Cancel unused authorizations to release funds
