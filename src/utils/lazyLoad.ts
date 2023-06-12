import dynamic from "next/dynamic";

export const lazyLoad = (componentPath: string) => {
  return dynamic(() => import(componentPath));
};
