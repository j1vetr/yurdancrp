import { useEffect } from "react";

const DEFAULT_TITLE = "Yurdan Carpet | Handwoven Luxury Carpets";
const DEFAULT_DESC = "A private archive of the world's finest handmade carpets. Silk, wool and antique pieces available by private inquiry.";
const DEFAULT_IMAGE = "/og-logo.png";

function setMetaProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setMetaName(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

interface PageMeta {
  title: string;
  description?: string;
  image?: string;
}

export function usePageMeta({ title, description = DEFAULT_DESC, image = DEFAULT_IMAGE }: PageMeta) {
  useEffect(() => {
    const absImage = image.startsWith("http") ? image : `${window.location.origin}${image}`;

    document.title = title;
    setMetaProperty("og:title", title);
    setMetaProperty("og:description", description);
    setMetaProperty("og:image", absImage);
    setMetaName("twitter:title", title);
    setMetaName("twitter:description", description);
    setMetaName("twitter:image", absImage);

    return () => {
      document.title = DEFAULT_TITLE;
      setMetaProperty("og:title", DEFAULT_TITLE);
      setMetaProperty("og:description", DEFAULT_DESC);
      const absDefault = `${window.location.origin}${DEFAULT_IMAGE}`;
      setMetaProperty("og:image", absDefault);
      setMetaName("twitter:title", DEFAULT_TITLE);
      setMetaName("twitter:description", DEFAULT_DESC);
      setMetaName("twitter:image", absDefault);
    };
  }, [title, description, image]);
}
