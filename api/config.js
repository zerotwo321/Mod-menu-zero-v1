export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  return res.status(200).json({
    ok: true,
    app: "ZERO",
    version: "2.0.0",
    maintenance: false,
    message: "Panel aktif.",
    download: {
      available: false,
      path: null
    }
  });
}
