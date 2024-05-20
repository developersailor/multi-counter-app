import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree";
import { CounterModel } from "./Counter";

export const CounterAppStoreModel = types
  .model("CounterAppStore", {
    counters: types.optional(types.array(CounterModel), []),
  })
  .actions((self) => ({
    addCounter() {
      self.counters.push(CounterModel.create()); // Create and add a new counter
    },
    removeCounter() {
      self.counters.pop();
    },
  }));

export interface CounterAppStore
  extends Instance<typeof CounterAppStoreModel> {}
export interface CounterAppStoreSnapshotOut
  extends SnapshotOut<typeof CounterAppStoreModel> {}
export interface CounterAppStoreSnapshotIn
  extends SnapshotIn<typeof CounterAppStoreModel> {}
