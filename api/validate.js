export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  const supplied = String(req.query?.key || "").trim();
  const expected = String(process.env.ACCESS_KEY || "").trim();

  if (!expected) {
    return res.status(503).json({
      ok: false,
      valid: false,
      error: "server_key_not_configured"
    });
  }

  if (!supplied) {
    return res.status(400).json({
      ok: false,
      valid: false,
      error: "missing_key"
    });
  }

  return res.status(200).json({
    ok: true,
    valid: supplied === expected
  });
}
