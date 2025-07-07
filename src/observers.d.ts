/* eslint-disable prettier/prettier */
import { Entity, Id, Query, World } from "@rbxts/jecs";

interface ObservableWorld extends World {
    added<T>(this: ObservableWorld, id: Id<T>, callback: (e: Entity, id: Id, value: T) => void): () => void;
    removed<T>(this: ObservableWorld, id: Id<T>, callback: (e: Entity, id: Id) => void): () => void;
    changed<T>(this: ObservableWorld, id: Id<T>, callback: (e: Entity, id: Id, value: T) => void): () => void
    observer<T extends unknown[]>(this: ObservableWorld, query: Query<T>, callback?: (e: Entity) => void): void & IterableFunction<T>;
    monitor(this: ObservableWorld, query: Query<unknown[]>, callback: (e: Entity, id: Id) => void): void;
}

type Observers = (world: World) => ObservableWorld;

declare const observers: Observers;

export = observers;
