export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  const { key } = req.body || {};
  const configuredKey = process.env.ACCESS_KEY;

  if (!configuredKey) {
    return res.status(500).json({
      success: false,
      message: "ACCESS_KEY is not configured"
    });
  }

  return res.status(200).json({
    success: true,
    valid: key === configuredKey,
    message: key === configuredKey ? "Key valid" : "Invalid key"
  });
}
