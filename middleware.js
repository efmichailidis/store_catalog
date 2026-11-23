export const config = {
  ['/index.html', '/list.html'],
};

export default function middleware(request) {

  const ALLOWED_DOMAIN = 'https://app.sklavenitismentor.gr';

  return new Response(null, {
      status: 200,
      headers: {
        'x-middleware-next': '1',
        'Content-Security-Policy': `frame-ancestors 'self' ${ALLOWED_DOMAIN}`,
      },
  });
}
