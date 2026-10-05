import { useState, useEffect, useCallback } from 'react';
import { LessonPlanDetailed, LessonStatus } from '../types/lessonPlanner';
import { recalculateSchedule, formatLocalDate } from '../utils/scheduleEngine';

export const useDynamicPlanner = (initialLessons: LessonPlanDetailed[], startDate: string) => {
  const [lessons, setLessons] = useState<LessonPlanDetailed[]>([]);

  // İlk yüklemede takvimi oluştur
  useEffect(() => {
    const calculated = recalculateSchedule(initialLessons, new Date(startDate));
    setLessons(calculated);
  }, [initialLessons, startDate]);

  // Ders durumunu değiştiren fonksiyon
  const changeLessonStatus = useCallback((lessonId: string, newStatus: LessonStatus) => {
    setLessons(prevLessons => {
      const todayStr = formatLocalDate(new Date());
      const updated = prevLessons.map(l => {
        if (l.id === lessonId) {
          return {
            ...l,
            status: newStatus,
            completedDate: newStatus === 'completed' ? todayStr : null
          };
        }
        return l;
      });

      // Durum değiştiğine göre başlangıç tarihini baz alarak ileriye dönük yeniden hesapla
      return recalculateSchedule(updated, new Date(startDate));
    });
  }, [startDate]);

  return { lessons, changeLessonStatus };
};
