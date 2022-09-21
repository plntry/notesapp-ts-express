export interface BaseINote {
    name: string;
    content: string;
    category: string;

}
  
export interface INote extends BaseINote {
    id: number;
    date: Date;
    status: string;
}