# Authentication

All API requests require authentication using API keys.

## API Keys

You need two keys to authenticate:

- **API Key**: Your public API key
- **Secret Key**: Your private secret key (keep this secure!)

## Authentication Header

Include your API key in the request header:

```bash
Authorization: Basic YOUR_API_KEY
```

Or in JSON format:

```json
{
  "apiKey": "YOUR_API_KEY",
  "secretKey": "YOUR_SECRET_KEY"
}
```

## Security Best Practices

- Never expose your secret key in client-side code
- Store keys in environment variables
- Rotate your keys periodically
- Use different keys for test and production environments

## Example Request

```bash
curl -X POST https://api.iyzibv.com/v1/ \
  -H "Authorization: Basic YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 100,
    "currency": "TRY"
  }'
```
