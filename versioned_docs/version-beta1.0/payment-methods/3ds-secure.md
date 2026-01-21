# 2-post-3ds Secure

3D Secure (3DS) is an additional security layer for online card payments that requires cardholder authentication.

## Overview

3D Secure adds an extra authentication step where the cardholder must verify their identity, typically with:

- A password
- SMS code
- Biometric authentication
- Mobile app approval

## Benefits

- Reduced fraud liability
- Lower chargeback rates
- Enhanced security
- Better customer trust
- Compliance with Strong Customer Authentication (SCA)

## Request Example

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
 "reference": "{{$guid}}",
 "paymentMethod": {
 "type": "scheme",
 "encryptedCardNumber": "test_4035501428146300",
 "encryptedExpiryMonth": "test_03",
 "encryptedExpiryYear": "test_2030",
 "encryptedSecurityCode": "test_737",
 "holderName": "John Smith"
},
 "authenticationData": {
 "threeDSRequestData": {
 "nativeThreeDS": "preferred"
}
},
 "billingAddress": {
 "country": "US",
 "city": "New York",
 "street": "Redwood Block",
 "houseNumberOrName": "37C",
 "stateOrProvince": "NY",
 "postalCode": "10039"
},
 "shopperEmail": "s.hopper@test.com",
 "shopperIP": "192.0.2.1",
 "browserInfo": {
 "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
 "acceptHeader": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
 "language": "nl-NL",
 "colorDepth": 24,
 "screenHeight": 723,
 "screenWidth": 1536,
 "timeZoneOffset": 0,
 "javaEnabled": true
},
 "channel": "Web",
 "origin": "https://your-company.example.com",
 "returnUrl": "https://your-company.example.com/checkout/",
 "merchantAccount": "{{YOUR_MERCHANT_ACCOUNT}}"
}
```

## Response Example

```json
{
  "status": "success",
  "paymentId": "12345678",
  "htmlContent": "<iframe src='https://3dsecure.iyzico.com/3dsecure/...'></iframe>",
  "redirectUrl": "https://3dsecure.iyzico.com/3dsecure/payment/12345678",
  "mpiData": {
    "cavv": "abc",
    "cavvAlgorithm":"DEF",
    "eci":"sample-eci-value",
    "threeDSVersion":"X.X.X",
    "xid":"sample-xid"
  }
}
```

## 3DS Flow

1. **Initialize 3DS**: Create a 3DS payment request
2. **Redirect Customer**: Redirect to 3DS authentication page
3. **Authentication**: Customer completes authentication
4. **Callback**: Receive callback with payment result
5. **Complete Payment**: Process the authenticated payment

## Callback Handling

Handle the callback from the 3DS provider:

```bash
POST /v2/payments/capture
```

```json
{
  "paymentId": "12345678",
  "mpiDetails" "object"
}
```

### Callback Response

```json
{
  "status": "success",
  "paymentId": "12345678",
  "paymentStatus": "SUCCESS",
  "fraudStatus": 1,
  "price": 100.00,
  "paidPrice": 100.00
}
```

## Important Notes

- 3DS is required for Strong Customer Authentication (SCA) in Europe
- Some card issuers may require 3DS authentication
- The callback URL must be accessible from the internet
- Handle authentication failures gracefully
- Provide clear instructions to customers during authentication
