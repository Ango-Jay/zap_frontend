import Dexie, { type EntityTable } from 'dexie';

interface Note {
  id: number;
  title: string;
  content: string;
}

const db = new Dexie('ZAP_STORE') as Dexie & {
  notes: EntityTable<
    Note,
    'id' // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  notes: '++id, title, content' // primary key "id" (for the runtime!)
});

export type { Note };
export { db };