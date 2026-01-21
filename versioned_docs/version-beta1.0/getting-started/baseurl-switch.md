# baseUrl / switch on off

Configure the base URL and switch between different environments for your API requests.

## Base URL Configuration

The base URL determines which API environment you're connecting to:

### Production
```
https://api.iyzibv.com/v1/
```

### Sandbox (Test)
```
https://sandbox-api.iyzibv.com/v1/
```

## Environment Switching

You can switch between environments by changing the base URL in your configuration.

### Configuration Example

```javascript
const config = {
  production: {
    baseUrl: 'https://api.iyzibv.com/v1/',
    apiKey: 'PRODUCTION_API_KEY',
    secretKey: 'PRODUCTION_SECRET_KEY'
  },
  sandbox: {
    baseUrl: 'https://sandbox-api.iyzibv.com/v1/',
    apiKey: 'SANDBOX_API_KEY',
    secretKey: 'SANDBOX_SECRET_KEY'
  }
};

// Use environment variable to switch
const env = process.env.NODE_ENV === 'production' ? 'production' : 'sandbox';
const currentConfig = config[env];
```

## Best Practices

- Always use the sandbox environment for testing
- Never use production credentials in development
- Use environment variables for configuration
- Test thoroughly before switching to production
- Monitor API responses when switching environments
