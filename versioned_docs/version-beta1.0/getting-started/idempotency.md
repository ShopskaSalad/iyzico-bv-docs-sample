# İdempotency

Idempotency ensures that you can safely retry API requests without unintended side effects.

## What is Idempotency?

An idempotent operation produces the same result regardless of how many times it's executed. This is crucial for payment operations where network issues might cause duplicate requests.

## Using Idempotency Keys

To make a request idempotent, include an `idempotency-key` header:

```bash
Idempotency-Key: unique-request-id-12345
```

### Rules

- The idempotency key must be unique per request
- Keys are valid for 24 hours
- Use a UUID or a unique string that you generate
- Store the key with your request for reference

## Example

```bash
curl -X POST https://api.iyzico.com/v2/payments \
  -H "Authorization: Basic YOUR_API_KEY" \
  -H "Idempotency-Key: 550e8400-e29b-41d4-a716-446655440000" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 100,
    "currency": "TRY"
  }'
```

## Response Behavior

- **First request**: Processed normally, returns result
- **Duplicate request (same key)**: Returns the same result as the first request
- **After 24 hours**: Treated as a new request

## Best Practices

- Always use idempotency keys for payment operations
- Generate unique keys using UUIDs
- Store the key with your transaction record
- Handle idempotent responses appropriately in your code
