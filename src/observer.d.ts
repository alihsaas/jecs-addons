import { Entity, Id, Query, World } from "@rbxts/jecs";

interface PatchedWorld extends World {
    added<T>(this: PatchedWorld, id: Id<T>, callback: (e: Entity, id: Id, value: T) => void): () => void;
    removed<T>(this: PatchedWorld, id: Id<T>, callback: (e: Entity, id: Id) => void): () => void;
    changed<T>(this: PatchedWorld, id: Id<T>, callback: (e: Entity, id: Id, value: T) => void): () => void
    observer(this: PatchedWorld, arg: Query<unknown[]>, callback: (e: Entity) => void): void;
    monitor(this: PatchedWorld, arg: Query<unknown[]>, callback: (e: Entity, id: Id) => void): void;
}

type observer = (world: World) => PatchedWorld;
export = observer;
