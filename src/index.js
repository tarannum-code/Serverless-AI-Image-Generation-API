export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const prompt =
      url.searchParams.get("prompt") || "A cute orange cat";

    try {
      const result = await env.AI.run(
        "@cf/black-forest-labs/flux-1-schnell",
        {
          prompt,
        }
      );

      if (!result.image) {
        return Response.json(result);
      }

      const bytes = Uint8Array.from(
        atob(result.image),
        c => c.charCodeAt(0)
      );

      return new Response(bytes, {
        headers: {
          "Content-Type": "image/jpeg",
          "Cache-Control": "public, max-age=3600"
        }
      });

    } catch (err) {
      return Response.json(
        {
          error: err.message,
          stack: err.stack
        },
        { status: 500 }
      );
    }
  }
};
