# Error Codes - beta1.1

Complete reference of error codes and their meanings. Updated for beta1.1.

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

## New Error Codes in beta1.1

- **5109**: Enhanced validation error
- **5209**: New payment processing error
- **5305**: System maintenance error
- **5406**: Feature not available in beta1.0

## Authentication Errors

| Code | Message | Description |
|------|---------|-------------|
| 5001 | Invalid API key | API key is missing or invalid |
| 5002 | Invalid secret key | Secret key is missing or invalid |

## Payment Errors

| Code | Message | Description |
|------|---------|-------------|
| 5201 | Payment failed | Payment processing failed |
| 5202 | Insufficient funds | Card has insufficient funds |

## Support

For questions about the API specification:

- Check the [Error Codes](/docs/beta1.0/additional/error-codes) reference in beta1.0
- Review the [Authentication](/docs/getting-started/authentication) documentation
- Contact API support
