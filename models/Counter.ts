import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree";
import { withSetPropAction } from "./helpers/withSetPropAction";

export const CounterModel = types
  .model("Counter")
  .props({
    counterValue: types.optional(types.number, 0),
  })
  .actions((self) => ({
    increaseCounter: () => {
      self.counterValue += 1; // Increment counterValue directly
    },
    decreaseCounter: () => {
      self.counterValue -= 1;
    },
    ...withSetPropAction(self), // Include actions from withSetPropAction helper
  }))
  .views((counter) => ({
    get readCounter() {
      return counter.counterValue;
    },
  }));

export interface Counter extends Instance<typeof CounterModel> {}
export interface CounterSnapshotOut extends SnapshotOut<typeof CounterModel> {}
export interface CounterSnapshotIn extends SnapshotIn<typeof CounterModel> {}
