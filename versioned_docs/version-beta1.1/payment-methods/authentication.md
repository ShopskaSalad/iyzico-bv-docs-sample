# Authentication

Authentication is the first step in the payment flow. This endpoint initiates the payment process and returns a transaction ID.

## Endpoint

```bash
POST /v1/payment/
```

## Request Parameters

### Required Fields

- **amount**: Payment amount
- **currency**: Currency code (e.g., TRY, USD, EUR)
- **browserInfo**: Browser information for fraud detection
- **ads**: Additional data structure
- **billingInfo**: Billing address information

## Request Example

```bash
POST https://api.iyzico.com/v1/payment/
```

```json
{
  "amount": "100.00",
  "currency": "TRY",
  "browserInfo": {
    "acceptHeader": "text/html,application/xhtml+xml",
    "language": "tr-TR",
    "screenColorDepth": 24,
    "screenHeight": 1080,
    "screenWidth": 1920,
    "timeZoneOffset": -180,
    "userAgent": "Mozilla/5.0..."
  },
  "ads": {
    "channel": "WEB",
    "merchantId": "MERCHANT_ID",
    "merchantName": "Merchant Name"
  },
  "billingInfo": {
    "contactName": "John Doe",
    "city": "Istanbul",
    "country": "Turkey",
    "address": "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
    "zipCode": "34732"
  }
}
```

## Response Example

```json
{
  "status": "success",
  "transactionId": "tx_1234567890abcdef",
  "fraudStatus": 1,
  "amount": "100.00",
  "currency": "TRY"
}
```

## Important Notes

- The `transactionId` returned is required for the authorization step
- `browserInfo` helps with fraud detection and 3DS authentication
- `billingInfo` is used for address verification
- Always store the `transactionId` for subsequent operations

## Error Handling

If authentication fails, you'll receive an error response:

```json
{
  "status": "failure",
  "errorCode": "5201",
  "errorMessage": "Payment authentication failed"
}
```

## Next Steps

After successful authentication, proceed to:
- [Authorization](/docs/beta1.1/payment-methods/authorization) - Complete the payment authorization
- [Capture](/docs/beta1.1/payment-methods/capture) - Capture an authorized payment
