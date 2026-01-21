# Card Encryption

Card encryption ensures that sensitive card data is securely transmitted and stored.

## Overview

Card encryption protects cardholder data by encrypting it before transmission and storage. This is essential for PCI DSS compliance.

## How It Works

1. Card data is encrypted on the client side
2. Encrypted data is sent to the API
3. API processes the encrypted data securely
4. Card data is never stored in plain text

## Client-Side Encryption

### JavaScript Example

```javascript
// Include the encryption library
<script src="https://cdn.iyzico.com/js/v2/iyzipay.js"></script>

// Encrypt card data
const cardData = {
  cardNumber: '5528790000000008',
  expireMonth: '12',
  expireYear: '2030',
  cvc: '123'
};

const encryptedCard = iyzipay.encrypt(cardData);
```

## Server-Side Integration

### Using Encrypted Card Data

```json
{
  "paymentCard": {
    "cardHolderName": "John Doe",
    "encryptedCardNumber": "encrypted_card_number_data",
    "encryptedExpireMonth": "encrypted_expire_month_data",
    "encryptedExpireYear": "encrypted_expire_year_data",
    "encryptedCvc": "encrypted_cvc_data"
  }
}
```

## Security Best Practices

- Always use HTTPS for transmission
- Never log encrypted card data
- Implement proper key management
- Follow PCI DSS guidelines
- Regularly update encryption libraries
- Use strong encryption algorithms
- Implement tokenization for stored cards

## PCI DSS Compliance

Using card encryption helps with PCI DSS compliance by:

- Reducing the scope of PCI DSS requirements
- Protecting cardholder data in transit
- Minimizing data exposure
- Meeting compliance requirements more easily

## Tokenization

For recurring payments, consider using tokenization:

```json
{
  "paymentCard": {
    "cardToken": "card_token_from_previous_payment",
    "cardUserKey": "user_key_from_previous_payment"
  }
}
```
