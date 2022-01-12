export class DateTimeHelper {
  constructor() {
  }

  public static DateNowString(): string {
    const now = new Date();
    return now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + (now.getDate());
  }

  public static GetOnlyDate(date: Date): any {
    return date.toString().substr(0, 10);
  }

  public static GetCurrentDate(): Date {
    const currentDate = new Date();
    return new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  }

  public static GetFromDateMonday(date: Date): Date {
    let fromDate = new Date(date);
    switch (fromDate.getDay()) {
      case 1: fromDate = fromDate; break;
      case 2: fromDate.setDate(fromDate.getDate() - 1); break;
      case 3: fromDate.setDate(fromDate.getDate() - 2); break;
      case 4: fromDate.setDate(fromDate.getDate() - 3); break;
      case 5: fromDate.setDate(fromDate.getDate() - 4); break;
      case 6: fromDate.setDate(fromDate.getDate() - 5); break;
      default: fromDate.setDate(fromDate.getDate() - 6); break;
    }
    return fromDate;
  }

  public static GetToDateSunday(date: Date): Date {
    let toDate = new Date(date);
    switch (toDate.getDay()) {
      case 1: toDate.setDate(toDate.getDate() + 6); break;
      case 2: toDate.setDate(toDate.getDate() + 5); break;
      case 3: toDate.setDate(toDate.getDate() + 4); break;
      case 4: toDate.setDate(toDate.getDate() + 3); break;
      case 5: toDate.setDate(toDate.getDate() + 2); break;
      case 6: toDate.setDate(toDate.getDate() + 1); break;
      default: toDate = toDate; break;
    }
    return toDate;
  }

  public static AddZeroToFontNumber(item: string) {
    if (item.toString().length === 1) {
      item = '0' + item;
    }
    return item;
  }

  public static GetDateFromAspNetFormat(date: string): Date {
    const re = /-?\d+/;
    const m = re.exec(date);

    return new Date(parseInt(m[0], 10));
  }

  public static ParseDate(date: Date) {
    const parseDate = new Date(date);
    return parseDate.getDate() + "-" + (parseDate.getMonth() + 1) + "-" + parseDate.getFullYear();
  }
}
