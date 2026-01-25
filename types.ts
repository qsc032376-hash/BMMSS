export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  type: 'workshop' | 'competition' | 'social' | 'guest_speaker';
}

export interface Officer {
  name: string;
  role: string;
  major: string;
  image?: string;
}

export interface ProjectIdea {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  mathConcepts: string[];
}
