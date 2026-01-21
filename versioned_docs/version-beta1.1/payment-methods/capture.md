# Capture

Capture is the final step to charge the authorized payment. Use the charge key from the authorization response to capture the payment.

## Endpoint

```bash
POST /v1/capture
```

## Request Parameters

### Required Fields

- **chargeKey**: Charge key from the authorization response

## Request Example

```bash
POST https://api.iyzico.com/v1/capture
```

```json
{
  "chargeKey": "chk_1234567890abcdef"
}
```

## Response Example

```json
{
  "status": "success",
  "chargeKey": "chk_1234567890abcdef",
  "captureStatus": "CAPTURED",
  "amount": "100.00",
  "currency": "TRY",
  "transactionId": "tx_1234567890abcdef"
}
```

## Payment Flow

The complete payment flow consists of three steps:

1. **Authentication** → Returns `transactionId`
2. **Authorization** → Uses `transactionId`, returns `chargeKey`
3. **Capture** → Uses `chargeKey`, completes the payment

## Important Notes

- Use the `chargeKey` from the authorization response
- Capture can be done immediately after authorization
- Capture can be partial or full (depending on merchant settings)
- Once captured, the payment is complete and funds are charged

## Partial Capture

For partial capture, include the amount:

```json
{
  "chargeKey": "chk_1234567890abcdef",
  "amount": "50.00"
}
```

## Error Handling

If capture fails:

```json
{
  "status": "failure",
  "errorCode": "5204",
  "errorMessage": "Capture failed",
  "chargeKey": "chk_1234567890abcdef"
}
```

## Time Limits

- Authorization is valid for a limited time (typically 24 hours)
- Capture must be completed within this time window
- Expired authorizations cannot be captured
