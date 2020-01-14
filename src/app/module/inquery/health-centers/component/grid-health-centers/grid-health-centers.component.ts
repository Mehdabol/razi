import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AgenciesService} from '../../../agencies/service/agencies.service';
import {LocalText} from '../../../../../core/grid/ag-grid_fa';

@Component({
  selector: 'app-grid-health-centers',
  templateUrl: './grid-health-centers.component.html',
  styleUrls: ['./grid-health-centers.component.scss']
})
export class GridHealthCentersComponent implements OnInit {

  static self: GridHealthCentersComponent;

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
  serviceType = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: AgenciesService) {
    this.city = route.snapshot.paramMap.get('city');
    this.ostan = route.snapshot.paramMap.get('ostan');
    this.ostan = route.snapshot.paramMap.get('ostan');
    this.serviceType = route.snapshot.paramMap.get('service');
    this.GridOption();
  }

  ngOnInit() {
    GridHealthCentersComponent.self = this;
  }


  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    const dataSource = {
      getRows(params) {
        const data = {
          ProvinceCode: GridHealthCentersComponent.self.ostan,
          CityCode: GridHealthCentersComponent.self.city,
          Type: GridHealthCentersComponent.self.serviceType
        };
        GridHealthCentersComponent.self.service.getGridHealthCenter(data)
          .subscribe((res: any) => {
            if (data) {
              params.successCallback(res.Data.agencies, res.Data.agencies.length);
              GridHealthCentersComponent.self.autoSize();
              if (res.Data.agencies.length === 0 || res.Data.agencies == null) {
                GridHealthCentersComponent.self.gridApi.showNoRowsOverlay();
                GridHealthCentersComponent.self.gridApi.sizeColumnsToFit();
              } else {
                GridHealthCentersComponent.self.gridApi.hideOverlay();

              }
            } else {
              params.failCallback();
            }
          }, error => {
            GridHealthCentersComponent.self.gridApi.sizeColumnsToFit();
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
      }, {
        headerName: 'نام',
        field: 'name',
      }, {
        headerName: 'تلفن',
        field: 'tel',
      }, {
        headerName: 'آدرس',
        field: 'address',
      }, {
        headerName: 'نوع',
        field: 'fax',
      }, {
        headerName: 'استان',
        field: 'fax',
      }, {
        headerName: 'شهر',
        field: 'city',
      }, {
        headerName: 'کد',
        field: 'city',
      },

    ];
    this.cacheBlockSize = 100;
    this.localeText = LocalText;
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
    this.router.navigate(['pages/health-centers']);
  }
}
