export const move = <T>(oldIndex: number, newIndex: number, array: T[]) => {
  const item = array.splice(oldIndex, 1)[0];
  array.splice(newIndex, 0, item);

  return array;
};
