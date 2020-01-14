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

  canStartButton = false;


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
              GridGridDashboardComponent.self.autoSize();
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
        headerName: 'کاربر',
        field: 'Code',
      },
      {
        headerName: 'پیشرفت',
        field: 'PackatGoshayesheDate',
      },
      {
        headerName: 'تاریخ ثبت',
        field: 'Code',
      }, {
        headerName: 'نام مناقصه گذار',
        field: 'MonagheseGozar',
      }, {
        headerName: 'موضوع مناقصه',
        field: 'MonaghesTopic',
      }, {
        headerName: 'شماره مناقصه',
        field: 'Code',
      }, {
        headerName: 'گروه بیمه',
        field: 'BimeGroupID',
      }, {
        headerName: 'حق بیمه پیشنهادی',
        field: 'LastYearHagheBimeAmount',
      },  {
        headerName: 'تاریخ برگزاری مناقصه',
        field: 'BargorzariDate',
      },  {
        headerName: 'وضعیت درخواست',
        field: 'StateTitle',
      }, {
        headerName: '',
        cellRenderer: 'timeLine',
        cellRendererParams: {
          onClick: this.onCliTime.bind(this),
          label: 'گردش کار مناقصه',
          icon: 'fa fa-percent'
        }
      },
      {
        headerName: ' ',
        cellRenderer: 'detailButton',
        minWidth: 85,
        cellRendererParams: {
          onClick: this.onDetailButton.bind(this),
          label: 'جزئیات',
          icon: 'fa fa-info'
        }
      },

    ];
    this.cacheBlockSize = 100;
    this.localeText = LocalText;
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


  //
  // ngOnInit() {
  //   this.getGrid();
  // }

  onDetailButton(event) {

    const data = event.rowData.Controllername; // DevelopmentManagerTopicCondsReviewController
    if (data.includes('Development')) {
      this.router.navigate([`pages/detail1/${event.rowData.BPID}`]);
    } else if (data.includes('Tender')) {
      this.router.navigate([`pages/detail2/${event.rowData.BPID}`]);
    } else {
      this.router.navigate([`pages/detail2/${event.rowData.BPID}`]);
    }
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
