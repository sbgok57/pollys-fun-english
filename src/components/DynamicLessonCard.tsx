import React, { useState } from 'react';
import { LessonPlanDetailed, LessonStatus } from '../types/lessonPlanner';

interface Props {
  lesson: LessonPlanDetailed;
  onStatusChange: (id: string, status: LessonStatus) => void;
  language: 'en' | 'tr';
}

export const DynamicLessonCard: React.FC<Props> = ({ lesson, onStatusChange, language }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status: LessonStatus) => {
    switch(status) {
      case 'completed': return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'postponed': return 'bg-rose-100 text-rose-800 border-rose-300';
      default: return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  return (
    <div className={`border-2 rounded-2xl p-5 mb-4 shadow-sm transition-all duration-300 ${getStatusColor(lesson.status)}`}>
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-bold text-sm bg-white/70 px-3 py-1 rounded-full shadow-sm">
              {lesson.grade} | Unit {lesson.unit}
            </span>
            <span className="font-mono text-sm font-semibold opacity-70">
              📅 {lesson.scheduledDate}
            </span>
          </div>
          <h2 className="text-xl font-extrabold mb-1">{lesson.topic[language]}</h2>
          
          <div className="flex gap-4 text-xs font-medium mt-3 bg-white/50 p-2 rounded-lg inline-flex border border-white/60">
            <span>📚 LB: p.{lesson.references.learnersBook}</span>
            <span>📝 WB: p.{lesson.references.workbook}</span>
            <span>👩‍🏫 TR: p.{lesson.references.teachersResource}</span>
          </div>
        </div>

        {/* Aksiyon Butonları (Yapıldı / Ertelendi) */}
        <div className="flex flex-col gap-2 bg-white/80 p-2 rounded-xl shadow-sm border border-white">
          <button 
            onClick={() => onStatusChange(lesson.id, 'completed')}
            className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${lesson.status === 'completed' ? 'bg-emerald-500 text-white shadow-md' : 'bg-slate-100 hover:bg-emerald-100 text-slate-600'}`}
          >
            ✅ {language === 'en' ? 'Done' : 'Yapıldı'}
          </button>
          <button 
            onClick={() => onStatusChange(lesson.id, 'postponed')}
            className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${lesson.status === 'postponed' ? 'bg-rose-500 text-white shadow-md' : 'bg-slate-100 hover:bg-rose-100 text-slate-600'}`}
          >
            ⏭️ {language === 'en' ? 'Postpone' : 'Ertelendi'}
          </button>
        </div>
      </div>

      {/* Detay Gösterim Butonu */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 w-full text-center py-2 bg-white/60 hover:bg-white/90 rounded-lg text-sm font-bold transition-all border border-black/5"
      >
        {isExpanded ? (language === 'en' ? '🔼 Hide Details' : '🔼 Detayları Gizle') : (language === 'en' ? '🔽 Show Full Lesson Plan' : '🔽 Tüm Planı Gör')}
      </button>

      {/* İnce Ayrıntı (Expanded Content) */}
      {isExpanded && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Kazanımlar */}
          <div className="bg-white/80 p-4 rounded-xl shadow-inner">
            <h4 className="font-bold border-b pb-2 mb-2">🎯 {language === 'en' ? 'Outcomes' : 'Kazanımlar'}</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {lesson.outcomes.map((outcome, idx) => (
                <li key={idx}>{outcome[language]}</li>
              ))}
            </ul>
          </div>

          {/* TPR Bölümü */}
          <div className="bg-amber-50/90 p-4 rounded-xl shadow-inner border border-amber-200">
            <h4 className="font-bold border-b border-amber-200 pb-2 mb-2 text-amber-900">🤸 {language === 'en' ? 'TPR Action Plan' : 'Fiziksel TPR Hareket Planı'}</h4>
            <div className="text-sm space-y-2 text-amber-950">
              <p><strong>{language === 'en' ? 'Action:' : 'Eylem:'}</strong> {lesson.tpr.action[language]}</p>
              <p><strong>{language === 'en' ? 'Teacher:' : 'Öğretmen:'}</strong> {lesson.tpr.teacherRole[language]}</p>
              <p><strong>{language === 'en' ? 'Students:' : 'Öğrenciler:'}</strong> {lesson.tpr.studentRole[language]}</p>
              <p><strong>{language === 'en' ? 'Vocab:' : 'Hedef Kelimeler:'}</strong> <span className="bg-amber-200 px-2 rounded">{lesson.tpr.targetVocabulary.join(', ')}</span></p>
            </div>
          </div>

          {/* Dijital Materyaller */}
          <div className="bg-indigo-50/90 p-4 rounded-xl shadow-inner border border-indigo-200 md:col-span-2">
            <h4 className="font-bold border-b border-indigo-200 pb-2 mb-3 text-indigo-900">🖥️ Smart Board & Games</h4>
            <div className="flex flex-wrap gap-2">
              {lesson.materials.map((mat, idx) => (
                <a 
                  key={idx} 
                  href={mat.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white hover:bg-indigo-600 hover:text-white border border-indigo-300 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center gap-2"
                >
                  {mat.type === 'Twinkl' ? '🦉' : mat.type === 'Baamboozle' ? '🎲' : (mat.type === 'YouTube' ? '🎥' : (mat.type === 'Canva' ? '🎨' : '🚀'))} 
                  {mat.name}
                </a>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
};
