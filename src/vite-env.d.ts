/// <reference types="vite/client" />

declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.glb" {
  const src: string;
  export default src;
}
declare module "*.gltf" {
  const src: string;
  export default src;
}

declare module "*.fbx" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.mp3" {
  const src: string;
  export default src;
}

declare const meta: string;
declare const shopify: string;
declare const starbucks: string;
declare const tesla: string;

export { meta, shopify, starbucks, tesla };