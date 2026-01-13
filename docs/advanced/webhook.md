# Webhook

Webhooks allow you to receive real-time notifications about payment events.

## Overview

Webhooks are HTTP callbacks that notify your server when specific events occur, such as:

- Payment completed
- Payment failed
- Refund processed
- Chargeback received
- 3DS authentication completed

## Setting Up Webhooks

Configure your webhook URL in the merchant panel or via API:

```bash
POST /v2/webhooks/configure
```

```json
{
  "url": "https://www.merchant.com/webhooks/iyzico",
  "events": [
    "payment.success",
    "payment.failure",
    "refund.success"
  ]
}
```

## Webhook Payload

Webhook payloads include event information:

```json
{
  "event": "payment.success",
  "timestamp": "2023-12-01T10:00:00Z",
  "paymentId": "12345678",
  "data": {
    "paymentId": "12345678",
    "price": 100.00,
    "currency": "TRY",
    "status": "SUCCESS",
    "fraudStatus": 1
  }
}
```

## Webhook Security

### Signature Verification

Always verify webhook signatures to ensure authenticity:

```javascript
const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  const computedSignature = hmac.update(JSON.stringify(payload)).digest('hex');
  return computedSignature === signature;
}

// In your webhook handler
const signature = req.headers['x-iyzico-signature'];
const isValid = verifyWebhookSignature(req.body, signature, WEBHOOK_SECRET);

if (!isValid) {
  return res.status(401).send('Invalid signature');
}
```

## Webhook Handler Example

```javascript
app.post('/webhooks/iyzico', (req, res) => {
  // Verify signature
  const signature = req.headers['x-iyzico-signature'];
  if (!verifySignature(req.body, signature)) {
    return res.status(401).send('Invalid signature');
  }

  const event = req.body.event;
  const data = req.body.data;

  switch (event) {
    case 'payment.success':
      handlePaymentSuccess(data);
      break;
    case 'payment.failure':
      handlePaymentFailure(data);
      break;
    case 'refund.success':
      handleRefundSuccess(data);
      break;
    default:
      console.log('Unknown event:', event);
  }

  // Always return 200 to acknowledge receipt
  res.status(200).send('OK');
});
```

## Retry Logic

Webhooks use exponential backoff for retries:

- Initial retry: 1 minute
- Second retry: 5 minutes
- Third retry: 30 minutes
- Final retry: 2 hours

Always return 200 OK to acknowledge receipt, even if processing fails.

## Webhook Events

Common webhook events:

- `payment.success` - Payment completed successfully
- `payment.failure` - Payment failed
- `payment.refund` - Payment refunded
- `payment.cancelled` - Payment cancelled
- `3ds.completed` - 3DS authentication completed
- `chargeback.created` - Chargeback received

## Best Practices

- Verify webhook signatures
- Implement idempotency for webhook handlers
- Return 200 OK immediately
- Process webhooks asynchronously
- Log all webhook events
- Handle retries gracefully
- Test webhooks in sandbox environment
