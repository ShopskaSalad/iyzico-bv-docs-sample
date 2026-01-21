# Webhook - beta1.1

Webhooks allow you to receive real-time notifications about payment events. Enhanced webhook features in beta1.1.

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

## Webhook Security

### Signature Verification

Always verify webhook signatures to ensure authenticity.

## New in beta1.1

- Enhanced webhook reliability
- Improved retry mechanisms
- Better error handling
- Webhook testing tools
- Enhanced webhook dashboard

## Webhook Events

Common webhook events:

- `payment.success` - Payment completed successfully
- `payment.failure` - Payment failed
- `payment.refund` - Payment refunded
- `payment.cancelled` - Payment cancelled
- `3ds.completed` - 3DS authentication completed
