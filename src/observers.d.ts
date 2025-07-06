/* eslint-disable prettier/prettier */
import { Entity, Id, Query, World } from "@rbxts/jecs";

interface PatchedWorld extends World {
    added<T>(this: PatchedWorld, id: Id<T>, callback: (e: Entity, id: Id, value: T) => void): () => void;
    removed<T>(this: PatchedWorld, id: Id<T>, callback: (e: Entity, id: Id) => void): () => void;
    changed<T>(this: PatchedWorld, id: Id<T>, callback: (e: Entity, id: Id, value: T) => void): () => void
    observer<T extends unknown[]>(this: PatchedWorld, query: Query<T>, callback?: (e: Entity) => void): void & IterableFunction<T>;
    monitor(this: PatchedWorld, query: Query<unknown[]>, callback: (e: Entity, id: Id) => void): void;
}

type Observers = (world: World) => PatchedWorld;
declare const observers: Observers
export = observers;
