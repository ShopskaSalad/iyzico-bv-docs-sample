# Limiters

API rate limiting helps ensure fair usage and system stability.

## Rate Limits

Rate limits are applied to prevent abuse and ensure service availability:

- **Standard**: 1000 requests per minute per API key
- **Burst**: Up to 100 requests per second

## Rate Limit Headers

Every API response includes rate limit information:

```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 995
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

## Best Practices

- Implement exponential backoff when receiving 429 errors
- Cache responses when possible to reduce API calls
- Monitor rate limit headers in your application
- Use webhooks instead of polling when available
- Contact support if you need higher limits

## Exponential Backoff Example

```javascript
async function makeRequestWithRetry(url, options, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.status === 429) {
        const delay = Math.pow(2, i) * 1000; // Exponential backoff
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      return response;
    } catch (error) {
      if (i === retries - 1) throw error;
    }
  }
}
```
