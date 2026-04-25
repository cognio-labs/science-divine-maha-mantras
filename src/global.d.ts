// Lightweight global declarations to satisfy the TS language server in this workspace.
// These help remove editor/TS errors when full `@types/react` aren't installed.

declare module 'react';
declare module 'react-dom';
declare module 'react-dom/client';
declare module 'motion/react';
declare module 'lucide-react';

// Allow importing image assets (png/jpg/jpeg/webp) — Vite already provides similar shims,
// but keep a fallback here to ensure the editor recognises them.
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.webp' {
  const src: string;
  export default src;
}

// Provide a minimal JSX namespace so TSX elements are accepted by the language server.
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
