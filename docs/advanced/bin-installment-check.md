# Bin ve Installment Check

BIN (Bank Identification Number) and Installment checking allows you to verify card details and available installment options.

## Overview

BIN and Installment Check helps you:

- Verify card information
- Check available installment options
- Determine card type (credit/debit)
- Get bank information
- Validate card eligibility

## BIN Check

Check card BIN to get card information:

```bash
POST /v2/bins/check
```

```json
{
  "binNumber": "552879"
}
```

### BIN Check Response

```json
{
  "status": "success",
  "binNumber": "552879",
  "cardType": "CREDIT_CARD",
  "cardAssociation": "MASTER_CARD",
  "cardFamily": "Bonus",
  "bankName": "Garanti BBVA",
  "bankCode": 62,
  "commercial": 0,
  "installments": [
    {
      "installmentNumber": 1,
      "price": 100.00,
      "totalPrice": 100.00
    },
    {
      "installmentNumber": 2,
      "price": 51.50,
      "totalPrice": 103.00
    },
    {
      "installmentNumber": 3,
      "price": 34.67,
      "totalPrice": 104.00
    }
  ]
}
```

## Installment Check

Check available installment options for a specific amount:

```bash
POST /v2/installments
```

```json
{
  "binNumber": "552879",
  "price": "100.00",
  "currency": "TRY"
}
```

### Installment Check Response

```json
{
  "status": "success",
  "installmentDetails": [
    {
      "binNumber": "552879",
      "price": "100.00",
      "currency": "TRY",
      "installmentPrices": [
        {
          "installmentNumber": 1,
          "price": "100.00",
          "totalPrice": "100.00"
        },
        {
          "installmentNumber": 2,
          "price": "51.50",
          "totalPrice": "103.00"
        },
        {
          "installmentNumber": 3,
          "price": "34.67",
          "totalPrice": "104.00"
        },
        {
          "installmentNumber": 6,
          "price": "17.67",
          "totalPrice": "106.00"
        },
        {
          "installmentNumber": 9,
          "price": "11.89",
          "totalPrice": "107.00"
        }
      ]
    }
  ]
}
```

## Card Information

Response includes card details:

- **cardType**: CREDIT_CARD or DEBIT_CARD
- **cardAssociation**: VISA, MASTER_CARD, AMEX, etc.
- **cardFamily**: Card product name
- **bankName**: Issuing bank name
- **bankCode**: Bank code
- **commercial**: Commercial card flag (0 or 1)

## Installment Options

Installment information includes:

- **installmentNumber**: Number of installments
- **price**: Monthly payment amount
- **totalPrice**: Total amount with interest
- **interestRate**: Interest rate (if applicable)

## Use Cases

### Pre-payment Check

Check installment options before showing to customer:

```javascript
async function checkInstallments(binNumber, amount) {
  const response = await fetch('/v2/installments', {
    method: 'POST',
    body: JSON.stringify({
      binNumber: binNumber,
      price: amount,
      currency: 'TRY'
    })
  });
  
  const data = await response.json();
  return data.installmentDetails[0].installmentPrices;
}
```

### Card Type Detection

Determine card type for UI adjustments:

```javascript
if (binInfo.cardType === 'DEBIT_CARD') {
  // Hide installment options for debit cards
  hideInstallments();
}
```

## Important Notes

- BIN check requires at least 6 digits
- Installment options vary by bank and card
- Some cards may not support installments
- Commercial cards may have different rates
- Installment availability depends on merchant agreement
- Rates are subject to change

## Best Practices

- Check BIN early in the checkout process
- Cache BIN information when possible
- Update installment options when amount changes
- Display installment options clearly
- Show total price including interest
- Handle errors gracefully (card not found, etc.)
- Validate BIN format before making requests
