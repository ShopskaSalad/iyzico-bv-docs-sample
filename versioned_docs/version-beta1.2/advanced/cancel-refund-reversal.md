# Cancel & Refund & Reversal - beta1.1

Learn how to cancel, refund, and reverse payments using the iyzico API. Enhanced features in beta1.1.

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

## Refund Payment

Refund a captured payment (full or partial):

```bash
POST /v2/payments/{paymentId}/refund
```

## Reversal Payment

Reverse a payment (typically used for fraud or errors):

```bash
POST /v2/payments/{paymentId}/reversal
```

## New in beta1.1

- Enhanced refund processing speed
- Improved refund status tracking
- Better cancellation workflows
- Automated reversal handling
