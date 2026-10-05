/**
 * Cambridge Global English Lesson Plan & TPR Types
 * Supports comprehensive curriculum references, TPR kinesthetic activities,
 * and clickable digital materials (YouTube, Twinkl, Baamboozle, Canva).
 */

export interface DigitalResource {
  id: string;
  title: string;
  type: 'youtube' | 'twinkl' | 'baamboozle' | 'canva' | 'interactive_board';
  url: string;
}

export interface TPRActivity {
  title: string;
  targetVocab: string[];
  physicalAction: string; // Kinesthetic movement for teacher and students
  detailedInstruction: string; // Step-by-step classroom walkthrough
  smartBoardPrompt?: string; // On-screen prompt or timer
}

export interface CurriculumReferences {
  learnersBookPages: string; // e.g. "10–12"
  workbookPages: string; // e.g. "8–10"
  teachersResourcePages: string; // e.g. "Unit 1.1 (p.24–26)"
  photocopiableId?: string; // e.g. "Worksheet 1.1"
}

export interface LessonDay {
  id: string;
  date: string; // YYYY-MM-DD format
  academicYear: string; // e.g. "2026-2027"
  grade: 'Global English 1' | 'Global English 2' | 'Global English 3' | 'Global English 4';
  unit: number;
  lessonNumber: number;
  topic: string;
  curriculumReferences: CurriculumReferences;
  tpr: TPRActivity;
  digitalResources: DigitalResource[];
  isCompleted?: boolean;
  notes?: string;
}
