import { LessonDay } from '../types/lessonPlan';

/**
 * Format a Date object into local YYYY-MM-DD string without UTC shift.
 */
export function formatLocalDate(d: Date): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Recalculates curriculum schedule forward from a specified start index.
 * Automatically skips weekends (Saturday & Sunday) to ensure continuous Monday-Friday school days.
 */
export function recalculateSchedule(
  lessons: LessonDay[],
  startIndex: number,
  newStartDate: string,
  excludeWeekends: boolean = true
): LessonDay[] {
  if (!lessons || startIndex < 0 || startIndex >= lessons.length) {
    return lessons || [];
  }

  // Parse YYYY-MM-DD safely into local Date
  const parts = newStartDate.split('-');
  const y = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10) - 1;
  const d = parseInt(parts[2], 10);
  let currentDate = new Date(y, m, d);

  const updated = lessons.map(item => ({ ...item }));

  for (let i = startIndex; i < updated.length; i++) {
    if (excludeWeekends) {
      while (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
        currentDate.setDate(currentDate.getDate() + 1);
      }
    }
    updated[i].date = formatLocalDate(currentDate);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return updated;
}
