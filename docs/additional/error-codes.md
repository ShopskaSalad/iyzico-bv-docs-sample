# Error Codes

Complete reference of error codes and their meanings.

## Overview

API responses include error codes to help identify and resolve issues. All errors follow a consistent format.

## Error Response Format

```json
{
  "status": "failure",
  "errorCode": "5001",
  "errorMessage": "Invalid API key",
  "errorGroup": "AUTHENTICATION"
}
```

## Error Groups

Errors are grouped into categories:

- **AUTHENTICATION**: Authentication and authorization errors
- **VALIDATION**: Input validation errors
- **PAYMENT**: Payment processing errors
- **SYSTEM**: System and server errors
- **BUSINESS**: Business logic errors

## Authentication Errors

| Code | Message | Description |
|------|---------|-------------|
| 5001 | Invalid API key | API key is missing or invalid |
| 5002 | Invalid secret key | Secret key is missing or invalid |
| 5003 | Authentication failed | Credentials are incorrect |
| 5004 | Token expired | Authentication token has expired |

## Validation Errors

| Code | Message | Description |
|------|---------|-------------|
| 5101 | Required field missing | A required field is missing |
| 5102 | Invalid field format | Field format is incorrect |
| 5103 | Invalid card number | Card number is invalid |
| 5104 | Invalid expiration date | Card expiration date is invalid |
| 5105 | Invalid CVV | CVV code is invalid |
| 5106 | Invalid amount | Payment amount is invalid |
| 5107 | Invalid currency | Currency code is invalid |

## Payment Errors

| Code | Message | Description |
|------|---------|-------------|
| 5201 | Payment failed | Payment processing failed |
| 5202 | Insufficient funds | Card has insufficient funds |
| 5203 | Card declined | Card was declined by issuer |
| 5204 | Card expired | Card has expired |
| 5205 | Card blocked | Card is blocked |
| 5206 | 3DS authentication failed | 3DS authentication failed |
| 5207 | Payment cancelled | Payment was cancelled |
| 5208 | Duplicate transaction | Transaction already exists |

## System Errors

| Code | Message | Description |
|------|---------|-------------|
| 5301 | Internal server error | Server encountered an error |
| 5302 | Service unavailable | Service is temporarily unavailable |
| 5303 | Timeout | Request timed out |
| 5304 | Rate limit exceeded | Too many requests |

## Business Errors

| Code | Message | Description |
|------|---------|-------------|
| 5401 | Merchant not found | Merchant account not found |
| 5402 | Merchant inactive | Merchant account is inactive |
| 5403 | Transaction not found | Transaction does not exist |
| 5404 | Invalid operation | Operation not allowed |
| 5405 | Refund not allowed | Refund is not allowed for this payment |

## HTTP Status Codes

API uses standard HTTP status codes:

- **200 OK**: Request successful
- **400 Bad Request**: Invalid request (validation errors)
- **401 Unauthorized**: Authentication failed
- **403 Forbidden**: Access denied
- **404 Not Found**: Resource not found
- **429 Too Many Requests**: Rate limit exceeded
- **500 Internal Server Error**: Server error
- **503 Service Unavailable**: Service temporarily unavailable

## Error Handling Best Practices

### Client-Side Handling

```javascript
try {
  const response = await fetch('/v2/payments', options);
  const data = await response.json();
  
  if (data.status === 'failure') {
    switch (data.errorCode) {
      case '5001':
        // Handle authentication error
        redirectToLogin();
        break;
      case '5203':
        // Handle card declined
        showErrorMessage('Card was declined. Please try another card.');
        break;
      default:
        // Handle generic error
        showErrorMessage(data.errorMessage);
    }
  }
} catch (error) {
  // Handle network errors
  showErrorMessage('Network error. Please try again.');
}
```

### Server-Side Handling

```javascript
if (response.status === 'failure') {
  // Log error for monitoring
  logger.error('Payment failed', {
    errorCode: response.errorCode,
    errorMessage: response.errorMessage,
    paymentId: paymentId
  });
  
  // Handle specific errors
  if (response.errorGroup === 'AUTHENTICATION') {
    // Refresh credentials
  } else if (response.errorGroup === 'VALIDATION') {
    // Return validation errors to client
  }
}
```

## Retry Logic

Some errors are retryable:

- **500 Internal Server Error**: Retry with exponential backoff
- **503 Service Unavailable**: Retry after delay
- **429 Rate Limit Exceeded**: Retry after rate limit resets

Do not retry:

- **400 Bad Request**: Fix the request first
- **401 Unauthorized**: Check credentials
- **403 Forbidden**: Check permissions
- **404 Not Found**: Resource doesn't exist

## Getting Help

If you encounter an error:

1. Check the error code and message
2. Review the request format
3. Check API documentation
4. Verify your credentials
5. Contact support with error details
