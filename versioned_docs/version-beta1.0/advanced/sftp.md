# SFTP

SFTP (Secure File Transfer Protocol) integration for batch operations and reporting.

## Overview

SFTP integration allows you to:

- Download transaction reports
- Upload batch payment files
- Retrieve settlement files
- Access historical data

## SFTP Access

### Connection Details

- **Host**: `sftp.iyzico.com`
- **Port**: `22`
- **Protocol**: `SFTP`
- **Authentication**: SSH Key or Username/Password

### Credentials

SFTP credentials are provided separately from API credentials. Contact support to obtain:

- SFTP username
- SFTP password (or SSH key)
- Directory access permissions

## Connection Example

### Using Command Line

```bash
sftp username@sftp.iyzico.com
```

### Using Python

```python
import pysftp

cnopts = pysftp.CnOpts()
cnopts.hostkeys = None  # For testing only

with pysftp.Connection('sftp.iyzico.com', 
                       username='your_username',
                       password='your_password',
                       cnopts=cnopts) as sftp:
    # List files
    files = sftp.listdir('/reports')
    
    # Download a file
    sftp.get('/reports/daily_report_20231201.csv', 
             'local_report.csv')
```

## Directory Structure

```
/
├── reports/          # Daily transaction reports
├── settlements/      # Settlement files
├── batch/            # Batch upload directory
└── archive/          # Archived files
```

## File Formats

### Transaction Reports

CSV format with the following columns:

- Transaction ID
- Payment Date
- Amount
- Currency
- Status
- Customer Information
- Payment Method

### Settlement Files

Settlement files are provided in CSV or XML format and include:

- Settlement date
- Total amount
- Fee breakdown
- Transaction list
- Reconciliation data

## Automated Processing

### Scheduled Downloads

Set up automated scripts to download reports:

```bash
#!/bin/bash
# download_reports.sh

TODAY=$(date +%Y%m%d)
sftp username@sftp.iyzico.com <<EOF
cd reports
get daily_report_${TODAY}.csv
bye
EOF
```

Schedule with cron:

```cron
0 2 * * * /path/to/download_reports.sh
```

## Security Best Practices

- Use SSH keys instead of passwords
- Restrict IP access if possible
- Encrypt downloaded files
- Use secure file transfer protocols
- Rotate credentials periodically
- Monitor access logs
- Implement proper file permissions

## File Retention

- Reports are typically retained for 90 days
- Download and archive important files regularly
- Settlement files are retained for 1 year
- Contact support for extended retention

## Troubleshooting

Common issues:

- **Connection timeout**: Check firewall settings
- **Authentication failed**: Verify credentials
- **File not found**: Check file naming conventions and dates
- **Permission denied**: Verify directory permissions

Contact support if you encounter persistent issues.
