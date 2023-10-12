/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<SomeType extends object, OtherType extends object>(
  objA: SomeType,
  objB: OtherType
) {
  return Object.assign(objA, objB);
}

export {};
