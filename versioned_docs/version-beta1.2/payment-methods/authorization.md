# Authorization

Authorization completes the payment process after authentication. This step authorizes the payment using the transaction ID from the authentication step.

## Endpoint

```bash
POST /v1/authorization/
```

## Request Parameters

### Required Fields

- **transactionId**: Transaction ID from the authentication response

## Request Example

```bash
POST https://api.iyzico.com/v1/authorization/
```

```json
{
  "transactionId": "tx_1234567890abcdef"
}
```

## Response Example

```json
{
  "status": "success",
  "transactionId": "tx_1234567890abcdef",
  "authorizationStatus": "AUTHORIZED",
  "chargeKey": "chk_1234567890abcdef",
  "amount": "100.00",
  "currency": "TRY"
}
```

## Important Notes

- Use the `transactionId` from the authentication response
- The `chargeKey` returned is required for the capture step
- Authorization may trigger 3DS authentication (challenge flow)
- Store the `chargeKey` for capture operations

## 3DS Authentication Flow

If the authorization requires 3DS authentication:

1. You'll receive a redirect URL or HTML content
2. Redirect the customer to complete 3DS authentication
3. After authentication, the authorization will complete automatically

## Error Handling

If authorization fails:

```json
{
  "status": "failure",
  "errorCode": "5203",
  "errorMessage": "Authorization failed",
  "transactionId": "tx_1234567890abcdef"
}
```

## Next Steps

After successful authorization:
- [Capture](/docs/beta1.1/payment-methods/capture) - Capture the authorized payment
- [Frictionless Flow](/docs/beta1.1/payment-methods/frictionless-flow) - Learn about frictionless authentication
- [Challenge Flow](/docs/beta1.1/payment-methods/challenge-flow) - Learn about challenge authentication
