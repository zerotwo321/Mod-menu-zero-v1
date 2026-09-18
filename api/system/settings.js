export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  return res.status(200).json({
    ok: true,
    maintenance: false,
    version: "2.0.0"
  });
}
