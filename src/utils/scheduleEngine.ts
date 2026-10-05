import { LessonPlanDetailed } from '../types/lessonPlanner';

/**
 * Format local date as YYYY-MM-DD
 */
export const formatLocalDate = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

/**
 * Parse YYYY-MM-DD string into a local Date safe from DST shifts
 */
export const parseLocalDate = (dateStr: string): Date => {
  const parts = dateStr.split('-');
  if (parts.length !== 3) return new Date();
  const y = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10) - 1;
  const d = parseInt(parts[2], 10);
  return new Date(y, m, d, 12, 0, 0);
};

/**
 * Hafta sonlarını (Cumartesi = 6, Pazar = 0) atlayarak bir sonraki iş gününü bulur.
 */
export const getNextWorkingDay = (date: Date): Date => {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + 1);
  
  while (nextDate.getDay() === 0 || nextDate.getDay() === 6) {
    nextDate.setDate(nextDate.getDate() + 1);
  }
  return nextDate;
};

/**
 * Tüm müfredatı baştan sona tarar, 'completed' olanların tarihini korur,
 * 'pending' veya 'postponed' olanları sırasıyla ileriye kaydırır.
 */
export const recalculateSchedule = (
  lessons: LessonPlanDetailed[], 
  anchorDate: Date
): LessonPlanDetailed[] => {
  // Dersleri müfredat sırasına göre diz
  const sortedLessons = [...lessons].sort((a, b) => a.orderIndex - b.orderIndex);
  
  let currentSimulatedDate = new Date(anchorDate);
  // Eğer başlangıç günü hafta sonuysa ilk iş gününe al
  while (currentSimulatedDate.getDay() === 0 || currentSimulatedDate.getDay() === 6) {
    currentSimulatedDate.setDate(currentSimulatedDate.getDate() + 1);
  }

  return sortedLessons.map(lesson => {
    if (lesson.status === 'completed') {
      // Yapılmış dersin tarihi değişmez, ancak sonraki ders ondan SONRAKİ güne planlanır.
      if (lesson.completedDate) {
        currentSimulatedDate = getNextWorkingDay(parseLocalDate(lesson.completedDate));
      }
      return { ...lesson };
    } 
    
    // Yapılmadıysa (Postponed veya Pending) mevcut simüle edilen tarihi ata
    const updatedLesson: LessonPlanDetailed = {
      ...lesson,
      scheduledDate: formatLocalDate(currentSimulatedDate)
    };
    
    // Bir sonraki ders için tarihi 1 iş günü ileri al
    currentSimulatedDate = getNextWorkingDay(currentSimulatedDate);
    
    return updatedLesson;
  });
};
