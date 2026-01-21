# Advanced Flow - Adyen Dropin/Advanced

Adyen Sample;
- https://docs.adyen.com/online-payments/build-your-integration/sessions-flow?platform=Web&integration=Drop-in&version=6.28.0

PaymentsOS Sample;
- https://developers.paymentsos.com/docs/getting-started/collecting-card-information.html#what-you-should-know-about-tokenization

Sample JS Fields
- https://jsfiddle.net/iyzicoKamil/vy50r7mn/1/

Smart Fields provide an enhanced form experience with intelligent field validation, auto-completion, and improved user experience.

## Overview

Smart Fields are intelligent form inputs that:
- Automatically validate card information
- Provide real-time feedback
- Support auto-completion
- Enhance security with tokenization

## Features

### Card Number Validation
Smart Fields automatically validate card numbers as users type, providing immediate feedback on card type and validity.

### Expiry Date Formatting
Automatic formatting of expiry dates (MM/YY) with validation.

### CVV Security
Secure CVV input with masking and validation.

### Cardholder Name
Auto-completion and validation for cardholder names.

## Implementation

### Basic Integration

```javascript
// Initialize Smart Fields
const smartFields = new SmartFields({
  apiKey: 'YOUR_API_KEY',
  environment: 'sandbox' // or 'production'
});

// Render card number field
smartFields.create('cardNumber', {
  containerId: 'card-number-container',
  placeholder: 'Card Number',
  onValidationChange: (isValid) => {
    console.log('Card number valid:', isValid);
  }
});
```

### Configuration Options

```javascript
{
  containerId: 'string',        // Required: DOM element ID
  placeholder: 'string',         // Optional: Field placeholder
  onValidationChange: 'function', // Optional: Validation callback
  onFocus: 'function',          // Optional: Focus event handler
  onBlur: 'function',           // Optional: Blur event handler
  styles: {                     // Optional: Custom styles
    base: {
      fontSize: '16px',
      color: '#333'
    }
  }
}
```

## Field Types

### Card Number Field
```javascript
smartFields.create('cardNumber', {
  containerId: 'card-number',
  placeholder: '1234 5678 9012 3456'
});
```

### Expiry Date Field
```javascript
smartFields.create('expiryDate', {
  containerId: 'expiry-date',
  placeholder: 'MM/YY'
});
```

### CVV Field
```javascript
smartFields.create('cvv', {
  containerId: 'cvv',
  placeholder: 'CVV',
  length: 3 // or 4 for Amex
});
```

### Cardholder Name Field
```javascript
smartFields.create('cardholderName', {
  containerId: 'cardholder-name',
  placeholder: 'John Doe'
});
```

## Tokenization

Smart Fields automatically tokenize sensitive card data:

```javascript
// Get tokenized card data
const tokenizedData = await smartFields.tokenize();

// Use token in payment request
const paymentRequest = {
  amount: '100.00',
  currency: 'TRY',
  cardToken: tokenizedData.token,
  // ... other fields
};
```

## Validation

### Real-time Validation
Fields validate input in real-time and provide visual feedback.

### Validation Events
```javascript
smartFields.on('validation', (data) => {
  if (data.isValid) {
    // Enable submit button
  } else {
    // Show error message
    console.log(data.error);
  }
});
```

## Security

- PCI DSS compliant
- No sensitive data stored in your servers
- Tokenization for secure storage
- 3D Secure support

## Error Handling

```javascript
smartFields.on('error', (error) => {
  console.error('Smart Fields error:', error);
  // Handle error appropriately
});
```

## Best Practices

1. Always validate on the server side
2. Use HTTPS for all communications
3. Implement proper error handling
4. Test in sandbox before production
5. Monitor for security updates

## Support

For questions about Smart Fields:
- Check the [Error Codes](/docs/beta1.2/additional/error-codes) reference
- Review the [Authentication](/docs/beta1.2/getting-started/authentication) documentation
- Contact API support
