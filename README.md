# ZERO Mod Panel V2

Vercel backend sederhana untuk project ZERO.

## Endpoint

- `GET /api/validate?key=KEY_KAMU`
- `GET /api/config`
- `GET /api/system/settings`
- `GET /api/download`

## Setup Vercel

Buat Environment Variable:

`ACCESS_KEY=KEY_RAHASIA_KAMU`

Jangan menaruh key rahasia langsung di JavaScript frontend.

`/api/download` hanya aktif jika file `public/files/payload.zip` benar-benar tersedia.
