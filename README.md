# ZERO Panel

Simple Vercel API project for an Android client you control.

## Endpoints

- `GET /api/system/settings`
- `POST /api/validate`
- `GET /api/download`

## Deploy

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Add an Environment Variable named `ACCESS_KEY`.
4. Deploy.
5. Put your own `payload.zip` in `public/files/`.

Example validation request:

```bash
curl -X POST https://YOUR-DOMAIN.vercel.app/api/validate \
  -H "Content-Type: application/json" \
  -d '{"key":"YOUR_KEY"}'
```

The project is intentionally generic: only use files/payloads you own or are authorized to distribute.
