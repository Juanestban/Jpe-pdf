const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const isProduction = process.env.NODE_ENV !== 'production';

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: '.next/public',
    disable: isProduction,
    runtimeCaching,
  },
});
