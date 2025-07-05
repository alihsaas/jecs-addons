/* eslint-disable prettier/prettier */
import { Entity, Id, World } from "@rbxts/jecs"

interface PatchedWorld extends World {
    added<T>(this, id: Id<T>, callback: (e: Entity, id: Id, value: T) => void): () => void;
    removed<T>(this, id: Id<T>, callback: (e: Entity, id: Id) => void): () => void;
    changed<T>(this, id: Id<T>, callback: (e: Entity, id: Id, value: T) => void): () => void
    observer(this, any, callback: (e: Entity) => void): void;
    monitor(this, any, callback: (e: Entity, id: Id) => void): void;
}

declare function observer(world: World): PatchedWorld;
export = observer;

// export type PatchedWorld = jecs.World & {
// 	added: <T>(PatchedWorld, jecs.Id<T>, (e: jecs.Entity, id: jecs.Id, value: T) -> ()) -> () -> (),
// 	removed: <T>(PatchedWorld, jecs.Id<T>, (e: jecs.Entity, id: jecs.Id) -> ()) -> () -> (),
// 	changed: <T>(PatchedWorld, jecs.Id<T>, (e: jecs.Entity, id: jecs.Id, value: T) -> ()) -> () -> (),
// 	observer: (
// 		PatchedWorld,
// 		any,
// 		(jecs.Entity) -> ()
// 	) -> (),
// 	monitor: (
// 		PatchedWorld,
// 		any,
// 		(jecs.Entity, jecs.Id) -> ()
// 	) -> ()
// }