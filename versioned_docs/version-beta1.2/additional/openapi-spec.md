# OpenAPI Specification - beta1.1

This page provides the OpenAPI (formerly Swagger) specification for the iyzico Payment API version beta1.1.

## Interactive API Documentation

**👉 [View Interactive API Documentation](/api)**

The interactive API documentation provides:
- Complete API reference with all endpoints
- Request/response schemas
- Try-it-out functionality
- Code samples
- Detailed descriptions

## Download OpenAPI Spec

- [openapi-beta1.1.yaml](/openapi-beta1.1.yaml) - OpenAPI 3.0 specification in YAML format for beta1.1

## New Endpoints in beta1.1

The beta1.1 API introduces new v1 endpoints:

### Payment Flow

1. **Authentication**: `POST /v1/payment/`
   - Initiates payment process
   - Requires: amount, currency, browserInfo, ads, billingInfo
   - Returns: transactionId

2. **Authorization**: `POST /v1/authorization/`
   - Authorizes payment
   - Requires: transactionId
   - Returns: chargeKey

3. **Capture**: `POST /v1/capture`
   - Completes payment
   - Requires: chargeKey
   - Returns: capture status

## Using the OpenAPI Spec

### Swagger UI

You can view the API specification interactively using Swagger UI:

1. Visit [Swagger Editor](https://editor.swagger.io/)
2. Copy the contents of `openapi-beta1.1.yaml`
3. Paste into the editor
4. View interactive API documentation

### Postman

To import into Postman:

1. Open Postman
2. Click **Import**
3. Select **File** tab
4. Upload `openapi-beta1.1.yaml`
5. Collection will be created with all endpoints

### Code Generation

Generate client libraries using [OpenAPI Generator](https://openapi-generator.tech/):

```bash
# Install OpenAPI Generator
npm install @openapitools/openapi-generator-cli -g

# Generate JavaScript client for beta1.1
openapi-generator-cli generate \
  -i openapi-beta1.1.yaml \
  -g javascript \
  -o ./generated-client-beta1.1

# Generate Python client
openapi-generator-cli generate \
  -i openapi-beta1.1.yaml \
  -g python \
  -o ./generated-client-beta1.1
```

## API Endpoints

The OpenAPI specification includes the following endpoint categories:

### Authentication
- `POST /v1/payment/` - Authenticate a payment

### Authorization
- `POST /v1/authorization/` - Authorize a payment

### Capture
- `POST /v1/capture` - Capture an authorized payment

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
- Data formats (amounts, currency, etc.)
- Enum values
- Example values
- Browser information structure
- Billing information structure
- Additional data (ads) structure

## Differences from beta1.0

- New v1 endpoints instead of v2
- Three-step payment flow (authentication → authorization → capture)
- Enhanced browser information collection
- Support for frictionless and challenge flows
- Different request/response structures

## Support

For questions about the API specification:

- Check the [Error Codes](/docs/beta1.1/additional/error-codes) reference
- Review the [Authentication](/docs/beta1.1/getting-started/authentication) documentation
- Contact API support
