# Bin ve Installment Check - beta1.1

BIN (Bank Identification Number) and Installment checking allows you to verify card details and available installment options. Enhanced in beta1.1.

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

## Installment Check

Check available installment options for a specific amount:

```bash
POST /v2/installments
```

## New in beta1.1

- Enhanced BIN database accuracy
- More installment options
- Improved response times
- Better installment calculation
- Support for additional banks

## Important Notes

- BIN check requires at least 6 digits
- Installment options vary by bank and card
- Some cards may not support installments
- Commercial cards may have different rates
- Installment availability depends on merchant agreement
