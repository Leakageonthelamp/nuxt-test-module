import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import duration from "dayjs/plugin/duration";

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(duration);

const isTimeError = (time: any) => time === "Invalid Date";
const timeWrapper = (time: any, defaultTime: string) =>
  isTimeError(time) ? defaultTime : time;

const dateFormat = "YYYY-MM-DD";
const dateTimeFormat = "YYYY-MM-DD HH:mm:ss";
const timeFormat = "HH:mm";

export class TimeHelper {
  static toUTC = (time: string): string => {
    if (!time) {
      return time;
    }

    try {
      const newTime = dayjs(time).subtract(7, "hour").format(dateTimeFormat);

      return timeWrapper(newTime, time);
    } catch (e: any) {
      return time.toString();
    }
  };

  static toLocal = (time: string): string => {
    if (!time) {
      return time;
    }

    try {
      const newTime = dayjs(time).add(7, "hour").format(dateTimeFormat);

      return timeWrapper(newTime, time);
    } catch (e: any) {
      return time;
    }
  };

  static getCurrentDate = (): string => {
    const newTime = dayjs().format(dateFormat);

    return timeWrapper(newTime, "");
  };

  static getDateFormTime = (time: string): string => {
    if (!time) {
      return time;
    }

    const newTime = dayjs(time).format(dateFormat);

    return timeWrapper(newTime, time);
  };

  static getDateFormTimeWithLocal = (time: string): string => {
    if (!time) {
      return time;
    }

    const newTime = dayjs(TimeHelper.toLocal(time)).format(dateFormat);

    return timeWrapper(newTime, time);
  };

  static getISODateTimeFormTime = (time: string): string => {
    if (!time) {
      return time;
    }

    const testTime = dayjs(time).format(dateTimeFormat);

    if (isTimeError(testTime)) {
      return time;
    }

    const newTime = dayjs(time).toISOString();

    return isTimeError(newTime) || !newTime ? time : newTime;
  };

  static getDateTimeFormTime = (time: string): string => {
    if (!time) {
      return time;
    }

    const newTime = dayjs(time).format(dateTimeFormat);

    return timeWrapper(newTime, time);
  };

  static getTimeFormTime = (time: string): string => {
    if (!time) {
      return time;
    }

    const newTime = dayjs(time).format(timeFormat);

    return timeWrapper(newTime, time);
  };

  static getCurrentDateTime = (): string => {
    const newTime = dayjs().format(dateTimeFormat);

    return timeWrapper(newTime, "");
  };
}
