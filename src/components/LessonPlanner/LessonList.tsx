import React, { useState, useEffect } from 'react';
import { LessonDay } from '../../types/lessonPlan';
import { LessonCard } from './LessonCard';
import { EditLessonModal } from './EditLessonModal';
import { recalculateSchedule } from '../../utils/scheduler';
import { MOCK_GLOBAL_ENGLISH_CURRICULUM } from '../../data/mockGlobalEnglishCurriculum';

export const LessonList: React.FC = () => {
  const [lessons, setLessons] = useState<LessonDay[]>(() => {
    try {
      const saved = localStorage.getItem('polly_custom_lesson_schedule');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return MOCK_GLOBAL_ENGLISH_CURRICULUM;
  });

  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  const [editingLesson, setEditingLesson] = useState<LessonDay | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('polly_custom_lesson_schedule', JSON.stringify(lessons));
    } catch (e) {}
  }, [lessons]);

  const handleSaveLesson = (updatedLesson: LessonDay, autoReflow: boolean) => {
    const idx = lessons.findIndex(l => l.id === updatedLesson.id);
    if (idx === -1) return;

    let updatedList = [...lessons];
    updatedList[idx] = updatedLesson;

    if (autoReflow) {
      updatedList = recalculateSchedule(updatedList, idx, updatedLesson.date, true);
    }

    setLessons(updatedList);
    setEditingLesson(null);
  };

  const handleResetDefaults = () => {
    if (window.confirm("Reset all lesson plans to Cambridge 2026–2027 defaults?")) {
      setLessons(MOCK_GLOBAL_ENGLISH_CURRICULUM);
      try {
        localStorage.removeItem('polly_custom_lesson_schedule');
      } catch (e) {}
    }
  };

  const filtered = lessons.filter(l => {
    const matchesGrade = selectedGrade === 'all' || l.grade === selectedGrade;
    const matchesSearch = !search || 
      l.topic.toLowerCase().includes(search.toLowerCase()) ||
      l.tpr.targetVocab.some(v => v.toLowerCase().includes(search.toLowerCase())) ||
      l.tpr.title.toLowerCase().includes(search.toLowerCase());
    return matchesGrade && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      {/* Header & Controls */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 mb-6 shadow-xl">
        <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-indigo-500/30 text-indigo-300 rounded-md border border-indigo-400/30">
              📅 Dynamic Calendar Scheduler
            </span>
            <h1 className="text-2xl font-black mt-2">
              Cambridge Global English 1 & 2 Lesson Planner
            </h1>
            <p className="text-sm text-slate-300 mt-1">
              Automatic date reflow skipping weekends · Complete TPR routines · Clickable digital resources
            </p>
          </div>
          <button
            onClick={handleResetDefaults}
            className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3.5 py-2 rounded-lg border border-slate-700 transition"
          >
            🔄 Reset to Defaults
          </button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Filter by Grade</label>
            <select
              value={selectedGrade}
              onChange={e => setSelectedGrade(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="all">All Grades (Global English 1 & 2)</option>
              <option value="Global English 1">🟢 Global English 1 (Stage 1 / Pre-A1)</option>
              <option value="Global English 2">🔵 Global English 2 (Stage 2 / A1)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Search Topic or Vocabulary</label>
            <input
              type="text"
              placeholder="🔍 Search words, TPR, topics..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Lesson Cards List */}
      <div className="space-y-4">
        {filtered.length > 0 ? (
          filtered.map(l => (
            <LessonCard
              key={l.id}
              lesson={l}
              onEdit={lessonToEdit => setEditingLesson(lessonToEdit)}
            />
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200 text-slate-500">
            No lesson days match your current filter. Try searching a different keyword.
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editingLesson && (
        <EditLessonModal
          lesson={editingLesson}
          isOpen={true}
          onClose={() => setEditingLesson(null)}
          onSave={handleSaveLesson}
        />
      )}
    </div>
  );
};
