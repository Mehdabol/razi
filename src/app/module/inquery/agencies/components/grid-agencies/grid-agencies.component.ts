import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalText} from '../../../../../core/grid/ag-grid_fa';
import {AgenciesService} from '../../service/agencies.service';

@Component({
  selector: 'app-grid-agencies',
  templateUrl: './grid-agencies.component.html',
  styleUrls: ['./grid-agencies.component.scss']
})
export class GridAgenciesComponent implements OnInit {
  static self: GridAgenciesComponent;

  rowSelection;
  gridApi;
  gridColumnApi;
  columnDefs;
  defaultColDef;
  rowModelType;
  sideBar;
  rowData = [];
  maxConcurrentDatasourceRequests;
  rowGroupPanelShow;
  cacheBlockSize;
  localeText;
  frameworkComponents;

  city = '';
  ostan = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: AgenciesService) {
    this.city = route.snapshot.paramMap.get('city');
    this.ostan = route.snapshot.paramMap.get('ostan');
    this.GridOption();
  }

  ngOnInit() {
    GridAgenciesComponent.self = this;
  }


  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    const dataSource = {
      getRows(params) {
        const data = {ProvinceCode: GridAgenciesComponent.self.ostan, CityCode: GridAgenciesComponent.self.city};
        GridAgenciesComponent.self.service.getGridAgencies(data)
          .subscribe((res: any) => {
            if (data) {
              params.successCallback(res.Data.agencies, res.Data.agencies.length);
              GridAgenciesComponent.self.autoSize();
              if (res.Data.agencies.length === 0 || res.Data.agencies == null) {
                GridAgenciesComponent.self.gridApi.showNoRowsOverlay();
                GridAgenciesComponent.self.gridApi.sizeColumnsToFit();
              } else {
                GridAgenciesComponent.self.gridApi.hideOverlay();

              }
            } else {
              params.failCallback();
            }
          });
      }
    };
    params.api.setServerSideDatasource(dataSource);

  }

  autoSize() {
    const allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach((column) => {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }


  onFirstDataRendered(params) {
    const allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach((column) => {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds);
  }


  GridOption() {
    this.rowSelection = 'single';
    this.columnDefs = [
      {
        headerName: 'id',
        field: 'id',
        hide: true
      },
      {
        headerName: 'نام',
        field: 'name',
      },
      {
        headerName: 'کد نمایندگی',
        field: 'code',
      },
      {
        headerName: 'تلفن',
        field: 'tel',
      }, {
        headerName: 'نمابر',
        field: 'fax',
      }, {
        headerName: 'تلفن همراه',
        field: 'mobile',
      }, {
        headerName: 'شهر',
        field: 'city',
      }, {
        headerName: 'آدرس',
        field: 'address',
      },

    ];
    this.cacheBlockSize = 100;
    this.localeText = LocalText;
    // this.frameworkComponents = {detailButton: GridDetailButtonComponent, timeLine: TimlineButtonGridComponent};
    this.defaultColDef = {
      width: 260,
      sortable: true,
      resizable: true,
      filter: true,
      enableCellChangeFlash: true
    };

    this.rowModelType = 'serverSide';
    this.maxConcurrentDatasourceRequests = 3;
    this.rowGroupPanelShow = 'always';
  }


  onBack() {
    this.router.navigate(['pages/agencies']);
  }

}
