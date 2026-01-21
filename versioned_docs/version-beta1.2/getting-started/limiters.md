# Limiters - beta1.1

API rate limiting helps ensure fair usage and system stability. Rate limits have been enhanced in beta1.1.

## Rate Limits

Rate limits are applied to prevent abuse and ensure service availability:

- **Standard**: 2000 requests per minute per API key (increased from 1000)
- **Burst**: Up to 200 requests per second (increased from 100)

## Rate Limit Headers

Every API response includes rate limit information:

```
X-RateLimit-Limit: 2000
X-RateLimit-Remaining: 1995
X-RateLimit-Reset: 1609459200
```

- `X-RateLimit-Limit`: Maximum requests allowed in the time window
- `X-RateLimit-Remaining`: Remaining requests in the current window
- `X-RateLimit-Reset`: Unix timestamp when the limit resets

## Handling Rate Limits

When you exceed the rate limit, you'll receive a `429 Too Many Requests` response:

```json
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Rate limit exceeded. Please retry after 60 seconds."
  }
}
```

## New in beta1.1

- Higher rate limits (2x increase)
- More granular rate limit headers
- Better retry-after guidance
- Per-endpoint rate limiting

## Best Practices

- Implement exponential backoff when receiving 429 errors
- Cache responses when possible to reduce API calls
- Monitor rate limit headers in your application
- Use webhooks instead of polling when available
- Contact support if you need higher limits
