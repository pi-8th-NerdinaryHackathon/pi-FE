export default ({ config }) => ({
    ...config,
    extra: {
      WEB_APP_URL: process.env.WEB_APP_URL || 'http://localhost:5173'
    }
  });
  