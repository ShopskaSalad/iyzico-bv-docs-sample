# Fraud

Fraud detection and prevention features to protect your business.

## Overview

Our fraud detection system helps identify and prevent fraudulent transactions using:

- Machine learning algorithms
- Risk scoring
- Real-time analysis
- Behavioral patterns
- Device fingerprinting

## Fraud Status

Each payment includes a fraud status:

- **1**: Approved / Low risk
- **0**: Rejected / High risk
- **-1**: Review required / Medium risk

### Response Example

```json
{
  "status": "success",
  "paymentId": "12345678",
  "fraudStatus": 1,
  "price": 100.00,
  "paidPrice": 100.00
}
```

## Risk Scoring

The system assigns a risk score from 0-100:

- **0-30**: Low risk (typically approved)
- **31-70**: Medium risk (review required)
- **71-100**: High risk (typically rejected)

## Fraud Check Parameters

Include additional information for better fraud detection:

```json
{
  "buyer": {
    "id": "BY789",
    "name": "John",
    "surname": "Doe",
    "email": "email@email.com",
    "identityNumber": "74300864791",
    "ip": "85.34.78.112",
    "city": "Istanbul",
    "country": "Turkey",
    "zipCode": "34732"
  },
  "shippingAddress": {
    "contactName": "John Doe",
    "city": "Istanbul",
    "country": "Turkey",
    "address": "Full address"
  }
}
```

## Fraud Detection Features

### Device Fingerprinting

Tracks device characteristics to identify suspicious patterns:

- Browser fingerprint
- Device ID
- IP address
- Screen resolution
- Timezone

### Behavioral Analysis

Analyzes user behavior patterns:

- Transaction velocity
- Purchase patterns
- Account age
- Previous fraud history
- Geographic patterns

### Machine Learning

Continuously learns from transaction patterns to improve detection.

## Handling Fraud Results

### Approved (fraudStatus: 1)

Process the payment normally.

### Review Required (fraudStatus: -1)

- Manually review the transaction
- Contact the customer if needed
- Make decision based on your risk tolerance
- Consider additional verification

### Rejected (fraudStatus: 0)

- Payment is automatically declined
- Customer receives error message
- Review the reason if available
- Log for analysis

## Best Practices

- Always include complete buyer information
- Provide shipping address when available
- Monitor fraud rates regularly
- Review medium-risk transactions
- Adjust risk thresholds as needed
- Use 3DS for high-value transactions
- Implement additional checks for high-risk scenarios
- Keep fraud rules up to date

## Fraud Reporting

Access fraud reports via:

- Merchant panel
- API endpoints
- SFTP reports
- Webhooks

## Custom Rules

Contact support to configure custom fraud rules based on your business needs:

- Transaction amount limits
- Velocity limits
- Geographic restrictions
- Merchant category rules
