import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BrowserOnly from '@docusaurus/BrowserOnly';

// Import Swagger UI CSS
if (typeof window !== 'undefined') {
  require('swagger-ui-react/swagger-ui.css');
}

function SwaggerUIWrapper() {
  const openApiUrl = useBaseUrl('/openapi.yaml');
  const [SwaggerUI, setSwaggerUI] = useState(null);

  useEffect(() => {
    // Dynamically import SwaggerUI only on client side
    import('swagger-ui-react')
      .then((module) => {
        setSwaggerUI(() => module.default);
      })
      .catch((error) => {
        console.error('Error loading Swagger UI:', error);
      });
  }, []);

  if (!SwaggerUI) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center' }}>
        <h2>Loading API Documentation...</h2>
        <p>Please wait while we load the interactive API documentation.</p>
      </div>
    );
  }

  const SwaggerUIComponent = SwaggerUI;

  return (
    <div style={{ padding: '1rem 0' }}>
      <SwaggerUIComponent 
        url={openApiUrl}
        docExpansion="list"
        defaultModelsExpandDepth={1}
        defaultModelExpandDepth={1}
        displayRequestDuration={true}
        deepLinking={true}
        filter={true}
        showExtensions={true}
        showCommonExtensions={true}
      />
    </div>
  );
}

export default function APIPage() {
  return (
    <Layout title="API Reference" description="Interactive API Documentation">
      <div style={{ minHeight: 'calc(100vh - 60px)' }}>
        <BrowserOnly fallback={
          <div style={{ padding: '3rem', textAlign: 'center' }}>
            <h1>API Documentation</h1>
            <p>Loading interactive API documentation...</p>
          </div>
        }>
          {() => <SwaggerUIWrapper />}
        </BrowserOnly>
      </div>
    </Layout>
  );
}
