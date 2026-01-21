# Challenge Flow

The challenge flow requires customer interaction for additional authentication, typically 3D Secure (3DS) authentication.

## Overview

Challenge flow is used when:
- Payment is medium or high risk
- Card issuer requires 3DS authentication
- Strong Customer Authentication (SCA) is required
- Customer authentication is needed for security

## How It Works

1. **Authentication** - Initiate payment
2. **Risk Assessment** - System evaluates and determines challenge is needed
3. **Challenge Initiation** - Customer redirected to 3DS authentication
4. **Customer Authentication** - Customer completes 3DS challenge
5. **Authorization Completion** - Payment authorized after successful challenge
6. **Capture** - Complete the payment

## Request Flow

### Step 1: Authentication

```json
{
  "amount": "500.00",
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

### Step 2: Authorization (Triggers Challenge)

```json
{
  "transactionId": "tx_1234567890abcdef"
}
```

Response (Challenge Required):

```json
{
  "status": "challenge_required",
  "transactionId": "tx_1234567890abcdef",
  "challengeUrl": "https://3dsecure.iyzico.com/challenge/tx_1234567890abcdef",
  "htmlContent": "<iframe src='https://3dsecure.iyzico.com/challenge/...'></iframe>"
}
```

### Step 3: Handle Challenge

Redirect customer to `challengeUrl` or display `htmlContent` in an iframe.

### Step 4: Challenge Completion

After customer completes 3DS authentication, check authorization status:

```json
{
  "transactionId": "tx_1234567890abcdef"
}
```

Final Response:

```json
{
  "status": "success",
  "authorizationStatus": "AUTHORIZED",
  "flow": "challenge",
  "chargeKey": "chk_1234567890abcdef"
}
```

## Challenge Methods

Customers may authenticate using:

- **Password**: Enter password registered with card issuer
- **SMS Code**: Enter code sent to registered phone
- **Biometric**: Use fingerprint or face ID
- **Mobile App**: Approve in bank's mobile app

## Implementation Options

### Option 1: Redirect

```javascript
window.location.href = response.challengeUrl;
```

### Option 2: Iframe

```html
<iframe src="{{challengeUrl}}" width="100%" height="500px"></iframe>
```

### Option 3: Popup

```javascript
window.open(response.challengeUrl, '3DS Challenge', 'width=600,height=500');
```

## Callback Handling

You can provide a callback URL to be notified when challenge completes:

```json
{
  "transactionId": "tx_1234567890abcdef",
  "callbackUrl": "https://your-domain.com/payment/callback"
}
```

## Important Notes

- Challenge flow is triggered automatically by the system
- Customer must complete authentication for payment to proceed
- Challenge URLs are valid for a limited time
- Always verify final authorization status after challenge

## Best Practices

- Provide clear instructions to customers during challenge
- Handle challenge timeouts gracefully
- Monitor challenge completion rates
- Test challenge flow in sandbox environment

## Error Handling

If challenge fails:

```json
{
  "status": "failure",
  "errorCode": "5206",
  "errorMessage": "3DS authentication failed",
  "transactionId": "tx_1234567890abcdef"
}
```
