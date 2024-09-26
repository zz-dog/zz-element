import type { InjectionKey } from "vue";
import type { CollapseContext } from "./type";

export const COLLAPSE_CTX_KEY: InjectionKey<CollapseContext> =
  Symbol("CollapseContext");
