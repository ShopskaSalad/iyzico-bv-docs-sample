# Test Cards

Test card numbers for sandbox environment testing.

## Overview

Use these test cards in the sandbox environment to test different scenarios. These cards will not charge real money.

## Successful Payment Cards

### MasterCard - Successful

```
Card Number: 5528790000000008
Expire Month: 12
Expire Year: 2030
CVV: 123
Cardholder: Test User
```

### Visa - Successful

```
Card Number: 4603450000000000
Expire Month: 12
Expire Year: 2030
CVV: 123
Cardholder: Test User
```

### Amex - Successful

```
Card Number: 370000000000002
Expire Month: 12
Expire Year: 2030
CVV: 1234
Cardholder: Test User
```

## Failed Payment Cards

### Insufficient Funds

```
Card Number: 5528790000000016
Expire Month: 12
Expire Year: 2030
CVV: 123
```

### Card Declined

```
Card Number: 5528790000000024
Expire Month: 12
Expire Year: 2030
CVV: 123
```

### Expired Card

```
Card Number: 5528790000000032
Expire Month: 01
Expire Year: 2020
CVV: 123
```

### 3DS Authentication Required

```
Card Number: 5528790000000040
Expire Month: 12
Expire Year: 2030
CVV: 123
```

Use these cards to test 3DS authentication flow.

### 3DS Authentication Failed

```
Card Number: 5528790000000057
Expire Month: 12
Expire Year: 2030
CVV: 123
```

## Installment Test Cards

### 2 Installments Available

```
Card Number: 5528790000000065
Expire Month: 12
Expire Year: 2030
CVV: 123
```

### 6 Installments Available

```
Card Number: 5528790000000073
Expire Month: 12
Expire Year: 2030
CVV: 123
```

### 9 Installments Available

```
Card Number: 5528790000000081
Expire Month: 12
Expire Year: 2030
CVV: 123
```

## Test Scenarios

### Test Successful Payment

```json
{
  "paymentCard": {
    "cardHolderName": "Test User",
    "cardNumber": "5528790000000008",
    "expireMonth": "12",
    "expireYear": "2030",
    "cvc": "123"
  },
  "price": "100.00",
  "currency": "TRY"
}
```

### Test Failed Payment (Insufficient Funds)

```json
{
  "paymentCard": {
    "cardHolderName": "Test User",
    "cardNumber": "5528790000000016",
    "expireMonth": "12",
    "expireYear": "2030",
    "cvc": "123"
  },
  "price": "100.00",
  "currency": "TRY"
}
```

### Test 3DS Flow

```json
{
  "paymentCard": {
    "cardHolderName": "Test User",
    "cardNumber": "5528790000000040",
    "expireMonth": "12",
    "expireYear": "2030",
    "cvc": "123"
  },
  "price": "100.00",
  "currency": "TRY",
  "callbackUrl": "https://your-callback-url.com"
}
```

## Test Card BINs

Use these BINs for BIN check testing:

- **552879**: MasterCard, Garanti BBVA
- **460345**: Visa, Test Bank
- **370000**: Amex, Test Bank

## Important Notes

- ⚠️ **Only use test cards in sandbox environment**
- ⚠️ **Never use test cards in production**
- ⚠️ **Test cards will not work in production**
- Test cards may change - always check latest documentation
- Test cards are for development and testing only
- Some test scenarios may require specific configurations
- Contact support if test cards don't work as expected

## Testing Best Practices

1. **Test all scenarios**: Success, failure, 3DS, installments
2. **Test error handling**: Invalid cards, expired cards, declined cards
3. **Test edge cases**: Minimum amounts, maximum amounts, special characters
4. **Test different card types**: Credit, debit, commercial
5. **Test 3DS flow**: Complete the full 3DS authentication flow
6. **Test refunds**: Test refund scenarios with test cards
7. **Test webhooks**: Verify webhook delivery with test payments

## Production Cards

For production testing:

- Use real cards with small amounts
- Test in production environment carefully
- Monitor all test transactions
- Refund test transactions immediately
- Never use production cards for automated testing
