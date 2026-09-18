import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const file = path.join(process.cwd(), "public", "files", "payload.zip");

  if (!fs.existsSync(file)) {
    return res.status(404).json({
      ok: false,
      error: "resource_not_configured"
    });
  }

  res.setHeader("Content-Type", "application/zip");
  res.setHeader("Content-Disposition", 'attachment; filename="payload.zip"');
  res.setHeader("Cache-Control", "no-store");

  return res.status(200).send(fs.readFileSync(file));
}
