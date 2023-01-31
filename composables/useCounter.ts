import type { Ref } from "vue";

const increment = (counter: Ref<number>) => () => counter.value++;
const decrement = (counter: Ref<number>) => () => counter.value--;

export const useCounter = () => {
  const counter = useState<number>("counter", () => 0);
  return {
    counter: readonly(counter),
    decrement: decrement(counter),
    increment: increment(counter),
  };
};
