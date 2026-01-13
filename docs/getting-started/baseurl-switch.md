# baseUrl / switch on off

Configure the base URL and switch between different environments for your API requests.

## Base URL Configuration

The base URL determines which API environment you're connecting to:

### Production
```
https://api.iyzico.com/v2/
```

### Sandbox (Test)
```
https://sandbox-api.iyzico.com/v2/
```

## Environment Switching

You can switch between environments by changing the base URL in your configuration.

### Configuration Example

```javascript
const config = {
  production: {
    baseUrl: 'https://api.iyzico.com/v2/',
    apiKey: 'PRODUCTION_API_KEY',
    secretKey: 'PRODUCTION_SECRET_KEY'
  },
  sandbox: {
    baseUrl: 'https://sandbox-api.iyzico.com/v2/',
    apiKey: 'SANDBOX_API_KEY',
    secretKey: 'SANDBOX_SECRET_KEY'
  }
};

// Use environment variable to switch
const env = process.env.NODE_ENV === 'production' ? 'production' : 'sandbox';
const currentConfig = config[env];
```

## Switching On/Off

### Enable/Disable Features

Some features can be toggled via configuration:

```json
{
  "features": {
    "3ds": true,
    "installment": true,
    "fraudCheck": false
  }
}
```

## Best Practices

- Always use the sandbox environment for testing
- Never use production credentials in development
- Use environment variables for configuration
- Test thoroughly before switching to production
- Monitor API responses when switching environments
