export default function exit(_, res) {
  res.clearPreviewData();
  res.writeHead(307, { Loaction: '/' });
  res.end();
}
