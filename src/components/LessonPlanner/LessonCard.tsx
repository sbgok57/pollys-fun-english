import React, { useState } from 'react';
import { LessonDay } from '../../types/lessonPlan';

export const LessonCard: React.FC<{
  lesson: LessonDay;
  onEdit: (lesson: LessonDay) => void;
}> = ({ lesson, onEdit }) => {
  const [showTPR, setShowTPR] = useState(false);

  const getBadgeStyle = (type: string) => {
    switch (type) {
      case 'youtube':
        return 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100';
      case 'twinkl':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100';
      case 'baamboozle':
        return 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100';
      case 'canva':
        return 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100';
      default:
        return 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'youtube': return '🎬';
      case 'twinkl': return '📗';
      case 'baamboozle': return '🧩';
      case 'canva': return '🎨';
      default: return '🔗';
    }
  };

  return (
    <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition mb-4">
      <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-md inline-block">
            {lesson.grade} • Unit {lesson.unit} - Lesson {lesson.lessonNumber}
          </span>
          <h3 className="text-lg font-bold text-slate-800 mt-1">{lesson.topic}</h3>
          <p className="text-sm text-slate-500 font-medium">📅 Date: {lesson.date}</p>
        </div>
        <button 
          onClick={() => onEdit(lesson)}
          className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg transition font-semibold"
        >
          ✏️ Edit & Reflow Schedule
        </button>
      </div>

      {/* Cambridge Books References */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs bg-slate-50 p-2.5 rounded-lg mb-3 border border-slate-100">
        <div>
          <span className="font-semibold text-slate-600">📘 Learner's Book:</span> p.{lesson.curriculumReferences.learnersBookPages}
        </div>
        <div>
          <span className="font-semibold text-slate-600">📓 Workbook:</span> p.{lesson.curriculumReferences.workbookPages}
        </div>
        <div>
          <span className="font-semibold text-slate-600">🍎 Teacher's Resource:</span> {lesson.curriculumReferences.teachersResourcePages}
        </div>
      </div>

      {/* Detailed TPR Section with Accordion */}
      <div className="mb-3">
        <button 
          onClick={() => setShowTPR(!showTPR)}
          className="text-xs font-semibold text-amber-800 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-md flex items-center gap-1.5 transition border border-amber-200"
        >
          🤸 {showTPR ? 'Hide TPR Kinesthetic Routine' : 'Show TPR Step-by-Step Instructions'}
        </button>
        {showTPR && (
          <div className="mt-2 p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-lg text-xs text-amber-950 space-y-1.5">
            <p><strong>🎯 TPR Activity:</strong> {lesson.tpr.title}</p>
            <p><strong>🏃 Physical Action:</strong> {lesson.tpr.physicalAction}</p>
            <p><strong>📝 Step-by-Step Instruction:</strong> {lesson.tpr.detailedInstruction}</p>
            <p><strong>🔤 Target Vocabulary:</strong> {lesson.tpr.targetVocab.join(', ')}</p>
            {lesson.tpr.smartBoardPrompt && (
              <p><strong>💻 Smartboard Prompt:</strong> {lesson.tpr.smartBoardPrompt}</p>
            )}
          </div>
        )}
      </div>

      {/* Clickable Digital Materials */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
        {lesson.digitalResources.map((res) => (
          <a
            key={res.id}
            href={res.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full border transition ${getBadgeStyle(res.type)}`}
          >
            {getTypeIcon(res.type)} {res.title} ({res.type})
          </a>
        ))}
      </div>
    </div>
  );
};
