# OpenAPI Specification

This page provides the OpenAPI (formerly Swagger) specification for the iyzico Payment API.

## Interactive API Documentation

**👉 [View Interactive API Documentation](/api)**

The interactive API documentation provides:
- Complete API reference with all endpoints
- Request/response schemas
- Try-it-out functionality
- Code samples
- Detailed descriptions

## Download OpenAPI Spec

- [openapi.yaml](/openapi.yaml) - OpenAPI 3.0 specification in YAML format

## Alternative Viewers

### Swagger UI (Recommended)

View the API specification in Swagger UI:
- Visit [Swagger Editor](https://editor.swagger.io/)
- Copy the contents of `openapi.yaml`
- Paste into the editor
- View interactive API documentation

### Redoc

View in Redoc:
- Visit [Redoc Demo](https://redocly.github.io/redoc/)
- Upload your `openapi.yaml` file

## Using the OpenAPI Spec

### Postman

To import into Postman:

1. Open Postman
2. Click **Import**
3. Select **File** tab
4. Upload `openapi.yaml`
5. Collection will be created with all endpoints

### Code Generation

Generate client libraries using [OpenAPI Generator](https://openapi-generator.tech/):

```bash
# Install OpenAPI Generator
npm install @openapitools/openapi-generator-cli -g

# Generate JavaScript client
openapi-generator-cli generate \
  -i openapi.yaml \
  -g javascript \
  -o ./generated-client

# Generate Python client
openapi-generator-cli generate \
  -i openapi.yaml \
  -g python \
  -o ./generated-client
```

## API Endpoints

The OpenAPI specification includes the following endpoint categories:

### Payments
- `POST /payments` - Create a payment (Non-3DS)
- `POST /payments/auth` - Authorize a payment
- `POST /payments/{paymentId}/capture` - Capture an authorized payment

### 3D Secure
- `POST /payments/3ds-initialize` - Initialize 3D Secure payment
- `POST /payments/3ds-complete` - Complete 3D Secure payment

### Refunds
- `POST /payments/{paymentId}/cancel` - Cancel an authorized payment
- `POST /payments/{paymentId}/refund` - Refund a payment
- `POST /payments/{paymentId}/reversal` - Reverse a payment

### BIN Check
- `POST /bins/check` - Check BIN (Bank Identification Number)
- `POST /installments` - Check installment options

## Authentication

All endpoints require API key authentication. Include your API key in the `Authorization` header:

```
Authorization: Basic YOUR_API_KEY
```

## Request/Response Examples

The OpenAPI specification includes detailed request and response examples for each endpoint. Refer to the [interactive API documentation](/api) for complete examples.

## Validation

The OpenAPI specification includes:

- Request/response schemas
- Required fields
- Data formats (email, IP, card numbers, etc.)
- Enum values
- Example values

## Support

For questions about the API specification:

- Check the [Error Codes](/docs/additional/error-codes) reference
- Review the [Authentication](/docs/getting-started/authentication) documentation
- Contact API support
