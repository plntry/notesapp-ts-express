export interface BaseINote {
    name: string;
    content: string;
    category: string;
    date: Date;
    status: string;
}
  
export interface INote extends BaseINote {
    id: number;
}