export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  res.status(200).json({
    success: true,
    settings: {
      maintenanceMode: false,
      appVersion: "1.0.0",
      downloadLink: "/api/download",
      globalNotice: "Welcome to ZERO Panel"
    }
  });
}
