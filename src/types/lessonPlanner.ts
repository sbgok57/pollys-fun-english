export type LessonStatus = 'pending' | 'completed' | 'postponed';
export type GradeLevel = 'Global English 1' | 'Global English 2';

export interface BilingualText {
  en: string;
  tr: string;
}

export interface DetailedTPR {
  action: BilingualText;
  teacherRole: BilingualText;
  studentRole: BilingualText;
  targetVocabulary: string[];
}

export interface DigitalMaterial {
  name: string;
  url: string;
  type: 'SmartBoard' | 'Baamboozle' | 'Twinkl' | 'YouTube' | 'Canva';
  isInteractive: boolean;
}

export interface LessonPlanDetailed {
  id: string;
  orderIndex: number; // Dersin müfredattaki mutlak sırası
  grade: GradeLevel;
  unit: number;
  topic: BilingualText;
  outcomes: BilingualText[]; // Kazanımlar
  
  // Cambridge Referansları
  references: {
    learnersBook: string;
    workbook: string;
    teachersResource: string;
  };

  // Aktiviteler
  tpr: DetailedTPR;
  materials: DigitalMaterial[];
  
  // Dinamik Takvimleme İçin
  status: LessonStatus;
  scheduledDate: string | null; // ISO Date String YYYY-MM-DD
  completedDate: string | null;
}
