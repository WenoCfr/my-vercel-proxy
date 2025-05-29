import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer({});

export default function handler(req, res) {
  const target = 'http://' + req.url.slice(1); // removes the leading slash

  proxy.web(req, res, { target }, err => {
    res.status(500).send('Proxy error: ' + err.message);
  });
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
