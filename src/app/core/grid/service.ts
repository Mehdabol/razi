import { IFilterModel, FilterModel } from './filter.model';
export abstract class FilterService {
  private dataFilter: IFilterModel = {};
  public setFilterData(item: IFilterModel) {
    this.dataFilter = Object.assign(this.dataFilter, item);
    return this;
  }
  public getFilterData() {
    const result: FilterModel[] = [];
    Object.keys(this.dataFilter).forEach(key => {
      if (this.dataFilter.hasOwnProperty(key) &&
        this.dataFilter[key].filterValue) {
        result.push(this.dataFilter[key]);
      }
    });
    return result;
  }
  public clearFilterData() {
    this.dataFilter = {};
    return this;
  }
}

