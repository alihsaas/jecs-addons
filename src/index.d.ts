import obs from "./observer";
import "./jecs";
export namespace jecsAddons {
  export const observers: obs;
  export type PatchedWorld = ReturnType<obs>;
}
