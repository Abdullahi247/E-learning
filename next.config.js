// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src *.splitmulti.com;
  style-src 'self' *.splitmulti.com;
  font-src 'self';  
`
const securityHeaders = [
	// { key: 'X-Frame-Options', value: 'DENY' },
	// {
	// 	key: 'X-XSS-Protection',
	// 	value: '1; mode=block'
	// },
	// { key: 'X-Content-Type-Options', value: 'nosniff' },
	// { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
	// // { key: 'Content-Type', value: 'text/html; charset=UTF-8' },
	// { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
	// { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
	// { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
	// {
	// 	key: 'Content-Security-Policy',
	// 	value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
	// }
]

module.exports = {
	env: {
		NEXT_BASE_URL: process.env.NEXT_BASE_URL,
		NEXT_BASE: process.env.NEXT_BASE,
		NEXT_LIVE_URL: process.env.NEXT_LIVE_URL,
		NEXT_TRANSACT_URL: process.env.NEXT_TRANSACT_URL,
		NEXT_SITE_URL: process.env.NEXT_SITE_URL,
		NEXT_TICKET_URL: process.env.NEXT_TICKET_URL,
		NEXT_CALL_BACK: process.env.NEXT_CALL_BACK,
		NEXT_BANK_URL:process.env.NEXT_BANK_URL,
		NEXT_MARKET_URL:process.env.NEXT_MARKET_URL,
		NEXT_GOKARI_PASSWORD:process.env.NEXT_GOKARI_PASSWORD,
		NEXT_GOKARI_EMAIL:process.env.NEXT_GOKARI_EMAIL,
		NEXT_GOKARI_API:process.env.NEXT_GOKARI_API,
	},
	// async headers() {
	// 	return [
	// 		{
	// 			// Apply these headers to all routes in your application.
	// 			source: '/:path*',
	// 			headers: securityHeaders,
	// 		},
	// 	]
	// },
	poweredByHeader: false,
};
