import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TenderService} from '../../service/tender.service';
import {AlertService} from '../../../../core/services/alert.service';
import {LocalText} from '../../../../core/grid/ag-grid_fa';
import {GridDetailButtonComponent} from '../grid-detail-button/grid-detail-button.component';
import {TimlineButtonGridComponent} from '../timline-button-grid/timline-button-grid.component';

@Component({
  selector: 'app-grid-grid-dashboard',
  templateUrl: './grid-grid-dashboard.component.html',
  styleUrls: ['./grid-grid-dashboard.component.scss']
})
export class GridGridDashboardComponent implements OnInit {
  static self: GridGridDashboardComponent;

  canStartButton: boolean = false;


  showFormat = {
    format: 'jYYYY/jMM/jDD'
  };
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

  constructor(private router: Router,
              private alertService: AlertService,
              private service: TenderService) {
    this.canStart();
    this.GridOption();
  }

  ngOnInit() {
    GridGridDashboardComponent.self = this;
  }


  onRowClicked(event: any) {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    const dataSource = {
      getRows(params) {
        const data = params.request;
        GridGridDashboardComponent.self.service.getGrid(data.startRow, data.endRow)
          .subscribe((res: any) => {
            if (data) {
              params.successCallback(res.Items, res.TotalRecord);
              (res.Items.length === 0 || res.Items == null) ? GridGridDashboardComponent.self.gridApi.showNoRowsOverlay() :
                GridGridDashboardComponent.self.gridApi.hideOverlay();
            } else {
              params.failCallback();
            }
          });
      }
    };
    params.api.setServerSideDatasource(dataSource);

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
        headerName: 'کاربر',
        field: 'Code',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'پیشرفت',
        field: 'PackatGoshayesheDate',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'تاریخ ثبت',
        field: 'Code',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'نام مناقصه گذار',
        field: 'MonagheseGozar',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'موضوع مناقصه',
        field: 'MonaghesTopic',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'شماره مناقصه',
        field: 'Code',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'گروه بیمه',
        field: 'BimeGroupID',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'حق بیمه پیشنهادی',
        field: 'LastYearHagheBimeAmount',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'تاریخ برگزاری مناقصه',
        field: 'BargorzariDate',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'وضعیت درخواست',
        field: 'StateTitle',
        enableRowGroup: true,
        minWidth: 180
      },
      {
        headerName: '',
        cellRenderer: 'timeLine',
        minWidth: 90,
        cellRendererParams: {
          onClick: this.onCliTime.bind(this),
          label: 'گردش کار مناقصه',
          icon: 'fa fa-percent'
        }
      },
      {
        headerName: ' ',
        cellRenderer: 'detailButton',
        minWidth: 90,
        cellRendererParams: {
          onClick: this.onDetailButton.bind(this),
          label: 'جزئیات',
          icon: 'fa fa-info'
        }
      },

    ];
    this.cacheBlockSize = 100;
    this.localeText = LocalText;
    // this.sideBar = {
    //   toolPanels: [
    //     {
    //       id: 'appSearch',
    //       labelDefault: 'جستجو',
    //       labelKey: 'appSearch',
    //       iconKey: 'app-search',
    //       toolPanel: 'searchComponent'
    //     }
    //   ],
    //   defaultToolPanel: 'appSearch'
    // };
    this.frameworkComponents = {detailButton: GridDetailButtonComponent, timeLine: TimlineButtonGridComponent};


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

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }


  //
  // ngOnInit() {
  //   this.getGrid();
  // }

  onDetailButton(event) {
    this.router.navigate(['pages/detail2/2']);
  }

  onAdd() {
    this.router.navigate(['pages/add']);
  }


  canStart() {
    this.service.canStart().subscribe((res: boolean) => {
      this.canStartButton = res;
    });
  }

  onSearch() {
  }

  onCliTime(event) {
    this.router.navigate(['pages/time']);
  }
}
