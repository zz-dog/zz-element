import type { App, Plugin } from "vue";

type SFCWithIstall<T> = T & Plugin;

export const makeInstaller = (components: Plugin[]) => {
  const installer = (app: App) => {
    components.forEach((component) => {
      app.use(component);
    });
  };
  return installer;
};

export const withInstall = <T>(component: T) => {
  (component as SFCWithIstall<T>).install = (app: App) => {
    const name = (component as any).name;
    app.component(name, component as Plugin);
  };
  return component as SFCWithIstall<T>;
};
