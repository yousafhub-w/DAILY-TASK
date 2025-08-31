function createCounter(init) {
  let val = init;
  return {
    increment() {
      return ++val;
    },
    decrement() {
      return --val;
    },
    reset() {
      return (val = init);
    }
  };
}