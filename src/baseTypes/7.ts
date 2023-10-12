/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
  Monday = "working",
  Tuesday = "working",
  Wednesday = "working",
  Thursday = "working",
  Friday = "working",
  Saturday = "day off",
  Sunday = "day off",
}

const isWeekend = (day: DaysOfWeek) => {
  return day;
};

console.log(isWeekend(DaysOfWeek.Monday));
