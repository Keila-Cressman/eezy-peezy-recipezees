export function useCalendar() {
  const year = new Date().getFullYear()
  const weekday = new Date().getDay()
  const month = new Date().getMonth() + 1
  const date = new Date().getDate()
  const thisMomentInMilliseconds = Date.now()
  const lastMilliOfTheYear = new Date(2025,12,31).getTime()
  const testTodayInMilli = new Date(2025,11,4).getTime()

  // TODO: how many milliseconds are in a week
  //    divide that by last date milliseconds
  // this should get us the number of the week we are in
  function getNameOfWeekday(num: number): string {
    return "Chuesday"
  }

  const sentence = `Today is the ${getNameOfWeekday(
    weekday
  )} day of the week. \n
  The date is ${year}-${month}-${date}`

  return testTodayInMilli
}
