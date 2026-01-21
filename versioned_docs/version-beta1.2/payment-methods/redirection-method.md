# Sessions Flows - (Adyen Session Flows) - Bizim CF Aynısı - Tek POST request

Adyen Clone Sample;
- https://docs.adyen.com/online-payments/build-your-integration/sessions-flow

iyzico CF Sample;
- https://docs.iyzico.com/en/payment-methods/checkoutform

The Redirection Method allows you to redirect customers to a secure payment page hosted by iyzico, where they can complete their payment securely.

## Overview

Redirection Method is a payment flow where:
- Customer is redirected to iyzico's secure payment page
- Payment is processed on iyzico's servers
- Customer is redirected back to your site after payment
- No sensitive card data touches your servers

## Benefits

- **PCI Compliance**: No PCI DSS requirements for your servers
- **Security**: All sensitive data handled by iyzico
- **Simplicity**: Minimal integration required
- **Mobile Optimized**: Responsive payment pages
- **Multi-language**: Support for multiple languages

## Flow

1. **Initialize Payment**: Create a payment request
2. **Get Redirect URL**: Receive redirect URL from API
3. **Redirect Customer**: Send customer to iyzico payment page
4. **Payment Processing**: Customer completes payment on iyzico
5. **Callback**: Customer redirected back to your site
6. **Verify Payment**: Verify payment status via callback

## Implementation

### Step 1: Initialize Payment

```javascript
// POST baseUrl/v1/payment/redirect

const paymentRequest = {
  amount: '100.00',
  currency: 'TRY',
  orderId: 'ORDER_12345',
  callbackUrl: 'https://www.merchant.com/callback',
  successUrl: 'https://www.merchant.com/success',
  failureUrl: 'https://www.merchant.com/failure',
  billingInfo: {
    contactName: 'John Doe',
    city: 'Istanbul',
    country: 'Turkey',
    address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
    zipCode: '34732'
  }
};

const response = await fetch('baseUrl/v1/payment/redirect', {
  method: 'POST',
  headers: {
    'Authorization': 'Basic YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(paymentRequest)
});

const data = await response.json();
```

### Step 2: Response

```json
{
  "status": "success",
  "redirectUrl": "https://payment.iyzico.com/checkout/abc123",
  "paymentId": "pay_1234567890abcdef",
  "orderId": "ORDER_12345"
}
```

### Step 3: Redirect Customer

```javascript
// Redirect customer to payment page
window.location.href = data.redirectUrl;
```

## Request Parameters

### Required Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `amount` | string | Payment amount (format: "100.00") |
| `currency` | string | Currency code (e.g., "TRY", "USD") |
| `orderId` | string | Unique order identifier |
| `callbackUrl` | string | URL for payment status callback |
| `successUrl` | string | URL to redirect on success |
| `failureUrl` | string | URL to redirect on failure |
| `billingInfo` | object | Billing information |

### Optional Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `language` | string | Payment page language (default: "tr") |
| `installment` | integer | Number of installments |
| `items` | array | Order items details |
| `customerInfo` | object | Customer information |

## Callback Handling

### Success Callback

When payment is successful, customer is redirected to `successUrl` with parameters:

```
https://www.merchant.com/success?paymentId=pay_123&status=success&orderId=ORDER_12345
```

### Failure Callback

When payment fails, customer is redirected to `failureUrl` with parameters:

```
https://www.merchant.com/failure?paymentId=pay_123&status=failure&errorCode=5001&errorMessage=Invalid%20card
```

### Verify Payment Status

Always verify payment status on your server:

```javascript
// POST baseUrl/v1/payment/status

const verifyRequest = {
  paymentId: 'pay_1234567890abcdef'
};

const verifyResponse = await fetch('baseUrl/v1/payment/status', {
  method: 'POST',
  headers: {
    'Authorization': 'Basic YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(verifyRequest)
});

const paymentStatus = await verifyResponse.json();
```

## Response Codes

### Success Response

```json
{
  "status": "success",
  "redirectUrl": "https://payment.iyzico.com/checkout/abc123",
  "paymentId": "pay_1234567890abcdef",
  "orderId": "ORDER_12345",
  "amount": "100.00",
  "currency": "TRY"
}
```

### Error Response

```json
{
  "status": "failure",
  "errorCode": "5001",
  "errorMessage": "Invalid amount",
  "errorGroup": "VALIDATION"
}
```

## Security

### HTTPS Required
Always use HTTPS for callback URLs and API requests.

### Signature Verification
Verify callback signatures to ensure authenticity:

```javascript
// Verify callback signature
const signature = request.headers['x-iyzico-signature'];
const isValid = verifySignature(request.body, signature, apiSecret);

if (!isValid) {
  // Reject callback
  return res.status(401).send('Invalid signature');
}
```

### Idempotency
Use idempotency keys to prevent duplicate payments:

```javascript
const paymentRequest = {
  // ... other fields
  idempotencyKey: 'unique-key-' + Date.now()
};
```

## Customization

### Payment Page Language

```javascript
const paymentRequest = {
  // ... other fields
  language: 'en' // 'tr', 'en', 'de', etc.
};
```

### Custom Styling

Payment pages can be customized with your branding (contact support for details).

## Testing

### Test Cards

Use test cards in sandbox environment:
- Success: `5528 7900 0000 0008`
- Failure: `5528 7900 0000 0009`
- 3DS: `5528 7900 0000 0016`

### Sandbox Environment

```javascript
const baseUrl = 'https://sandbox-api.iyzico.com/v1';
```

## Best Practices

1. Always verify payment status on your server
2. Use HTTPS for all URLs
3. Implement proper error handling
4. Log all payment attempts
5. Handle timeouts gracefully
6. Test thoroughly in sandbox
7. Monitor callback URLs

## Error Handling

```javascript
try {
  const response = await fetch('baseUrl/v1/payment/redirect', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(paymentRequest)
  });

  if (!response.ok) {
    const error = await response.json();
    console.error('Payment initialization failed:', error);
    // Handle error
  }

  const data = await response.json();
  // Redirect to payment page
  window.location.href = data.redirectUrl;
} catch (error) {
  console.error('Network error:', error);
  // Handle network error
}
```

## Support

For questions about Redirection Method:
- Check the [Error Codes](/docs/beta1.2/additional/error-codes) reference
- Review the [Authentication](/docs/beta1.2/getting-started/authentication) documentation
- Contact API support
