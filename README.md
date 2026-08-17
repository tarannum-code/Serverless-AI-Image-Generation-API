# 🖼️ Hermes Image — Serverless AI Image Generation API

A lightweight, serverless text-to-image API built on **Cloudflare Workers AI** using the **FLUX-1-Schnell** model. Send a text prompt through a simple URL and get a generated image back as a JPEG — no backend server, no infrastructure to manage.

---

## 🚀 Live Demo

**Live API:** [https://hermes-image.tarannum.workers.dev/](https://hermes-image.tarannum.workers.dev/)

**Try it now** — open this in your browser:

```
https://hermes-image.tarannum.workers.dev/?prompt=A%20futuristic%20city%20at%20night
```

---

## 📸 Screenshots

**Project Overview**

![Project Overview](Output_Screenshots/Hermes-Image.png)

**Generated Images**

![Generated Image 1](Output_Screenshots/Screenshot%202026-08-15%20135533.png)
![Generated Image 2](Output_Screenshots/Screenshot%202026-08-15%20135554.png)

---

## ✨ What It Does

```
User / Browser
      │
      ▼
HTTP Request with Prompt
      │
      ▼
Cloudflare Worker
      │
      ▼
Cloudflare Workers AI
      │
      ▼
FLUX-1-Schnell
      │
      ▼
Generated Image
      │
      ▼
JPEG Response
```

The Worker receives the incoming request, forwards the prompt to the FLUX-1-Schnell model via Cloudflare Workers AI, decodes the generated output, and streams the image straight back to the browser — all running at the edge.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Language** | JavaScript |
| **Runtime** | Cloudflare Workers |
| **AI Inference** | Cloudflare Workers AI |
| **Model** | FLUX-1-Schnell |
| **Tooling** | Wrangler |
| **Testing** | Vitest |
| **Architecture** | Serverless / Edge Computing |

---

## 🔑 Key Features

- 🎨 Prompt-to-image generation through a simple HTTP GET endpoint
- ⚡ Fully serverless deployment on Cloudflare Workers
- 🤖 Native Cloudflare Workers AI integration
- 🖌️ Image generation powered by FLUX-1-Schnell
- 📦 Direct `image/jpeg` response — no polling, no callbacks
- 🚄 Edge caching for faster repeat requests
- 🛡️ Basic error handling
- 📊 Worker observability configuration
- ✅ Test suite set up with Vitest

---

## ⚙️ How It Works

1. The user sends a prompt via the `prompt` URL query parameter.
2. The Cloudflare Worker receives and parses the request.
3. The prompt is passed to Cloudflare Workers AI.
4. **FLUX-1-Schnell** generates the image from the prompt.
5. The Worker decodes the generated output.
6. The image is returned directly with a `Content-Type: image/jpeg` header.
7. Cloudflare's edge cache can serve identical repeat requests faster.

### Example Request

```
GET /?prompt=A%20minimalist%20mountain%20landscape
```

---

## 📁 Project Structure

```
hermes-image/
├── src/
│   └── index.js
├── test/
├── Output_Screenshots/
│   ├── Hermes-Image.png
│   ├── Screenshot 2026-08-15 135533.png
│   └── Screenshot 2026-08-15 135554.png
├── package.json
├── package-lock.json
├── wrangler.jsonc
├── vitest.config.js
├── .gitignore
└── README.md
```

---

## 💻 Local Development

**Install dependencies**

```bash
npm install
```

**Start the local development server**

```bash
npm run dev
```

**Run tests**

```bash
npm test
```

**Deploy to Cloudflare**

```bash
npm run deploy
```

---

## ☁️ Deployment

This project is deployed on **Cloudflare Workers** with a **Workers AI binding** connected to the FLUX-1-Schnell model — no separate hosting, servers, or GPUs to provision.

**Live endpoint:**
[https://hermes-image.tarannum.workers.dev/](https://hermes-image.tarannum.workers.dev/)

---

## 🎯 Why I Built This

I wanted to build a lightweight AI image-generation service without relying on a traditional backend server. This project gave me hands-on experience with:

- Serverless AI architecture
- Cloudflare Workers development
- Foundation-model integration
- HTTP API design
- Image response handling at the edge
- Edge caching strategies
- Deployment and observability on Cloudflare

---

## 🔮 Future Improvements

- [ ] Prompt validation and sanitization
- [ ] Authentication and per-user API rate limits
- [ ] Request logging and usage analytics
- [ ] Support for additional image-generation models
- [ ] Configurable image parameters (size, style, seed) where supported
- [ ] A simple frontend interface for non-technical users

---

## 👤 Author

**Tarannum Khan**
*AI Automation Engineer*

---

## 📄 License

This project is available for personal and educational use. Add a license file (e.g., MIT) if you plan to open-source it publicly.
