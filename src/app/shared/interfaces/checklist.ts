export interface Checklist {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
}

export type AddChecklist = Omit<Checklist, 'id'>;
export type EditChecklist = { id: Checklist['id']; data: AddChecklist };
export type RemoveChecklist = Checklist['id'];
