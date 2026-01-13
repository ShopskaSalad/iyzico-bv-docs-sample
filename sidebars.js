/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'GETTING STARTED',
      items: [
        'getting-started/welcome',
        'getting-started/preliminaries',
        'getting-started/authentication',
        'getting-started/idempotency',
        'getting-started/baseurl-switch',
        'getting-started/limiters',
      ],
    },
    {
      type: 'category',
      label: 'PAYMENT METHODS',
      items: [
        'payment-methods/non3ds',
        'payment-methods/auth-capture',
        'payment-methods/card-encryption',
        'payment-methods/3ds-secure',
      ],
    },
    {
      type: 'category',
      label: 'ADVANCED',
      items: [
        'advanced/cancel-refund-reversal',
        'advanced/webhook',
        'advanced/sftp',
        'advanced/fraud',
        'advanced/bin-installment-check',
      ],
    },
    {
      type: 'category',
      label: 'ADDITIONAL',
      items: [
        'additional/error-codes',
        'additional/test-cards',
        'additional/openapi-spec',
      ],
    },
  ],
};

module.exports = sidebars;
