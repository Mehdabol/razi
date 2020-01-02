export class FilterModel {
    public columnName = '';
    public type: any = '';
    public filterType: any = '';
    public filterValue = '';
    public group = '';

}
export interface IFilterModel {
    [key: string]: FilterModel;
}
