import { useEffect, useState } from "react";

const SWAGGER_UI_JS_CDN =
  "https://unpkg.com/swagger-ui-dist@5.17.14/swagger-ui-bundle.js";
const SWAGGER_UI_CSS_CDN =
  "https://unpkg.com/swagger-ui-dist@5.17.14/swagger-ui.css";

type SwaggerUIBundle = (config: { url: string; dom_id: string }) => unknown;

const docsOpenApiUrl =
  import.meta.env.VITE_DOCS_OPENAPI_URL;

declare global {
  interface Window {
    SwaggerUIBundle?: SwaggerUIBundle;
  }
}

export function useDocumentationPageLogic() {
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "API Documentation | SWAPI: ROTJ";
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute(
      "content",
      "Interactive OpenAPI documentation for SWAPI: Return of the Jedi.",
    );
    const canonical = document.querySelector('link[rel="canonical"]');
    canonical?.setAttribute("href", `${window.location.origin}/docs`);
  }, []);

  useEffect(() => {
    let cancelled = false;

    const ensureCss = () => {
      if (document.querySelector('link[data-swagger-ui-css]')) return;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = SWAGGER_UI_CSS_CDN;
      link.dataset.swaggerUiCss = "true";
      document.head.appendChild(link);
    };

    const initSwagger = () => {
      if (cancelled) return;
      if (window.SwaggerUIBundle) {
        window.SwaggerUIBundle({
          url: docsOpenApiUrl,
          dom_id: "#swagger-container",
        });
      } else {
        setLoadError("Unable to initialize documentation.");
      }
    };

    const handleError = (error?: Error) => {
      if (!cancelled) setLoadError("Unable to load documentation.");
      if (error) console.error(error);
    };

    const loadScript = () => {
      const existing = document.querySelector('script[data-swagger-ui-bundle]');
      if (existing) {
        if (window.SwaggerUIBundle) {
          initSwagger();
          return;
        }
        existing.addEventListener("load", () => initSwagger(), { once: true });
        existing.addEventListener("error", () => handleError(), { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src = SWAGGER_UI_JS_CDN;
      script.async = true;
      script.dataset.swaggerUiBundle = "true";
      script.addEventListener("load", () => initSwagger(), { once: true });
      script.addEventListener("error", () => handleError(), { once: true });
      document.head.appendChild(script);
    };

    ensureCss();
    loadScript();

    return () => {
      cancelled = true;
    };
  }, []);

  return { loadError };
}
