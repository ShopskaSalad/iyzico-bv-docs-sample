# Cancel & Refund & Reversal

Learn how to cancel, refund, and reverse payments using the iyzico API.

## Overview

Three operations for handling payment adjustments:

- **Cancel**: Cancel an authorized payment before capture
- **Refund**: Return funds for a captured payment
- **Reversal**: Reverse a payment (typically for fraud or errors)

## Cancel Payment

Cancel an authorized payment that hasn't been captured yet:

```bash
POST /v2/payments/{paymentId}/cancel
```

```json
{
  "ip": "85.34.78.112"
}
```

### Cancel Response

```json
{
  "status": "success",
  "paymentId": "12345678",
  "paymentStatus": "CANCELLED",
  "price": 100.00,
  "currency": "TRY"
}
```

## Refund Payment

Refund a captured payment (full or partial):

```bash
POST /v2/payments/{paymentId}/refund
```

### Full Refund

```json
{
  "ip": "85.34.78.112"
}
```

### Partial Refund

```json
{
  "price": "50.00",
  "ip": "85.34.78.112"
}
```

### Refund Response

```json
{
  "status": "success",
  "paymentId": "12345678",
  "refundStatus": "SUCCESS",
  "price": 100.00,
  "currency": "TRY",
  "refundedPrice": 100.00
}
```

## Reversal Payment

Reverse a payment (typically used for fraud or errors):

```bash
POST /v2/payments/{paymentId}/reversal
```

```json
{
  "ip": "85.34.78.112"
}
```

### Reversal Response

```json
{
  "status": "success",
  "paymentId": "12345678",
  "paymentStatus": "REVERSED",
  "price": 100.00,
  "currency": "TRY"
}
```

## Differences

| Operation | Use Case | Timing | Amount |
|-----------|----------|--------|--------|
| **Cancel** | Before capture | Authorization stage | Full amount only |
| **Refund** | After capture | Payment completed | Full or partial |
| **Reversal** | Fraud/Error | Payment completed | Full amount only |

## Important Notes

- Cancellations must occur before capture
- Refunds can be full or partial
- Reversals are typically for fraud cases
- Check payment status before attempting operations
- Process time varies by operation type
- Some operations may have time limits
- Keep records of all cancellation/refund/reversal operations
