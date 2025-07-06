import "./jecs";
import obs from "./observers";
declare namespace JecsAddons {
  type PatchedWorld = ReturnType<typeof obs>;
  const observers: typeof obs;
}

export = JecsAddons;
