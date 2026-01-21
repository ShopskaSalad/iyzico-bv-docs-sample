# Frictionless Flow

The frictionless flow allows seamless payment processing without interrupting the customer with additional authentication steps.

## Overview

Frictionless flow is used when:
- The payment is low risk
- The customer has previously authenticated
- The card issuer supports frictionless authentication
- Device and behavior patterns are trusted

## How It Works

1. **Authentication** - Initiate payment with browser info
2. **Risk Assessment** - System evaluates risk level
3. **Frictionless Authorization** - Payment authorized without customer interaction
4. **Capture** - Complete the payment

## Request Flow

### Step 1: Authentication

```json
{
  "amount": "100.00",
  "currency": "TRY",
  "browserInfo": {
    "acceptHeader": "text/html,application/xhtml+xml",
    "language": "tr-TR",
    "userAgent": "Mozilla/5.0..."
  },
  "billingInfo": {
    "contactName": "John Doe",
    "city": "Istanbul",
    "country": "Turkey"
  }
}
```

### Step 2: Authorization (Frictionless)

```json
{
  "transactionId": "tx_1234567890abcdef"
}
```

Response:

```json
{
  "status": "success",
  "authorizationStatus": "AUTHORIZED",
  "flow": "frictionless",
  "chargeKey": "chk_1234567890abcdef"
}
```

## Benefits

- **Seamless Experience**: No customer interaction required
- **Faster Processing**: Instant authorization
- **Lower Abandonment**: No friction in checkout
- **Higher Conversion**: Smoother payment flow

## When Frictionless Is Used

The system automatically determines if frictionless flow can be used based on:

- Transaction amount
- Customer history
- Device fingerprinting
- Risk score
- Card issuer preferences

## Important Notes

- Frictionless flow is automatic - you don't choose it manually
- System decides between frictionless and challenge flow
- If risk is detected, it will switch to challenge flow
- Customer experience is seamless in frictionless mode

## Best Practices

- Provide complete browser information
- Include billing address information
- Use device fingerprinting consistently
- Monitor frictionless success rates
