import { makeInstaller } from "@zz-element/utils";
import components from "./components";
const installer = makeInstaller(components);

export * from "@zz-element/components";
export default installer;
