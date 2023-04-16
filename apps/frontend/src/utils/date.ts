import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault('Asia/Tokyo');

export function formatDateTime(date: string): string {
  return dayjs(date).format('YYYY/MM/DD HH:mm:ss');
}

export function formatDate(date: string, format: string = 'YYYY/MM/DD'): string {
  return dayjs(date).format(format);
}

export function formatDayOfWeek(date: string): string {
  return dayjs(date).format('ddd');
}

export function formatTime(date: string): string {
  return dayjs(date).format('HH:mm');
}

export function isAfterDate(date: string): boolean {
  return dayjs(date).isAfter(dayjs());
}
