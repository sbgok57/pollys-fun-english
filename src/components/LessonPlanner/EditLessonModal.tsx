import React, { useState } from 'react';
import { LessonDay } from '../../types/lessonPlan';

export interface EditLessonModalProps {
  lesson: LessonDay;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedLesson: LessonDay, autoReflow: boolean) => void;
}

export const EditLessonModal: React.FC<EditLessonModalProps> = ({
  lesson,
  isOpen,
  onClose,
  onSave
}) => {
  const [date, setDate] = useState(lesson.date);
  const [topic, setTopic] = useState(lesson.topic);
  const [lbPages, setLbPages] = useState(lesson.curriculumReferences.learnersBookPages);
  const [wbPages, setWbPages] = useState(lesson.curriculumReferences.workbookPages);
  const [trPages, setTrPages] = useState(lesson.curriculumReferences.teachersResourcePages);
  const [tprTitle, setTprTitle] = useState(lesson.tpr.title);
  const [tprAction, setTprAction] = useState(lesson.tpr.physicalAction);
  const [tprDetail, setTprDetail] = useState(lesson.tpr.detailedInstruction);
  const [tprVocab, setTprVocab] = useState(lesson.tpr.targetVocab.join(', '));
  const [autoReflow, setAutoReflow] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: LessonDay = {
      ...lesson,
      date,
      topic,
      curriculumReferences: {
        ...lesson.curriculumReferences,
        learnersBookPages: lbPages,
        workbookPages: wbPages,
        teachersResourcePages: trPages
      },
      tpr: {
        ...lesson.tpr,
        title: tprTitle,
        physicalAction: tprAction,
        detailedInstruction: tprDetail,
        targetVocab: tprVocab.split(',').map(s => s.trim()).filter(Boolean)
      }
    };
    onSave(updated, autoReflow);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-xl font-bold text-slate-800">
            ✏️ Edit Lesson Plan — Unit {lesson.unit}, Lesson {lesson.lessonNumber}
          </h2>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-slate-600 text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Lesson Date</label>
            <input 
              type="date" 
              value={date} 
              onChange={e => setDate(e.target.value)}
              className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
              required 
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Topic / Objective</label>
            <input 
              type="text" 
              value={topic} 
              onChange={e => setTopic(e.target.value)}
              className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
              required 
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">LB Pages</label>
              <input 
                type="text" 
                value={lbPages} 
                onChange={e => setLbPages(e.target.value)}
                className="w-full border rounded-lg p-2 text-sm" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">WB Pages</label>
              <input 
                type="text" 
                value={wbPages} 
                onChange={e => setWbPages(e.target.value)}
                className="w-full border rounded-lg p-2 text-sm" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">TR Pages</label>
              <input 
                type="text" 
                value={trPages} 
                onChange={e => setTrPages(e.target.value)}
                className="w-full border rounded-lg p-2 text-sm" 
              />
            </div>
          </div>

          <div className="border-t pt-3 space-y-3">
            <h3 className="font-bold text-sm text-amber-900 flex items-center gap-1.5">
              🤸 Total Physical Response (TPR) Details
            </h3>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">TPR Activity Title</label>
              <input 
                type="text" 
                value={tprTitle} 
                onChange={e => setTprTitle(e.target.value)}
                className="w-full border rounded-lg p-2 text-sm" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Physical Action</label>
              <textarea 
                rows={2} 
                value={tprAction} 
                onChange={e => setTprAction(e.target.value)}
                className="w-full border rounded-lg p-2 text-sm" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Detailed Walkthrough</label>
              <textarea 
                rows={3} 
                value={tprDetail} 
                onChange={e => setTprDetail(e.target.value)}
                className="w-full border rounded-lg p-2 text-sm" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Target Vocabulary (comma separated)</label>
              <input 
                type="text" 
                value={tprVocab} 
                onChange={e => setTprVocab(e.target.value)}
                className="w-full border rounded-lg p-2 text-sm" 
              />
            </div>
          </div>

          {/* Dynamic Reflow Checkbox */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3.5 flex items-center justify-between">
            <div>
              <strong className="text-xs text-indigo-950 block">🗓️ Dynamic Schedule Reflow</strong>
              <span className="text-[11px] text-indigo-700">
                Shift all subsequent lesson dates forward automatically (skips weekends).
              </span>
            </div>
            <input 
              type="checkbox" 
              checked={autoReflow} 
              onChange={e => setAutoReflow(e.target.checked)}
              className="w-5 h-5 text-indigo-600 rounded cursor-pointer" 
            />
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 border rounded-lg text-sm text-slate-600 hover:bg-slate-100 font-semibold"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-bold shadow-md shadow-indigo-200"
            >
              💾 Save & Reflow Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
