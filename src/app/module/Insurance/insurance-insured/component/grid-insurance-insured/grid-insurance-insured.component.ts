import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertService} from '../../../../../core/services/alert.service';
import {LocalText} from '../../../../../core/grid/ag-grid_fa';
import {InsuranceInsuredService} from '../../service/insurance-insured.service';

@Component({
  selector: 'app-grid-insurance-insured',
  templateUrl: './grid-insurance-insured.component.html',
  styleUrls: ['./grid-insurance-insured.component.scss']
})
export class GridInsuranceInsuredComponent implements OnInit {
  static self: GridInsuranceInsuredComponent;

  nationalCode = ''; // '0057901015';
  paramGrid;
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
              private service: InsuranceInsuredService) {
    this.GridOption();
  }

  ngOnInit() {
    GridInsuranceInsuredComponent.self = this;
  }


  onRowClicked(event: any) {
  }

  onSearch() {
    this.onGridReady(this.paramGrid);
  }

  onGridReady(params) {
    this.paramGrid = params;
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    const dataSource = {
      getRows(params) {
        const data = params.request;
        const filter = JSON.stringify({nationalCode: GridInsuranceInsuredComponent.self.nationalCode});
        if (GridInsuranceInsuredComponent.self.nationalCode !== '' && GridInsuranceInsuredComponent.self.nationalCode !== null) {
          GridInsuranceInsuredComponent.self.service.getGridData(filter)
            .subscribe((res: any) => {
              if (data) {
                params.successCallback(res.Data, res.Data.length);
                (res.Data.length === 0 || res.Data == null) ? GridInsuranceInsuredComponent.self.gridApi.showNoRowsOverlay() :
                  GridInsuranceInsuredComponent.self.gridApi.hideOverlay();
              } else {
                params.failCallback();
              }
            });
        }
      }
    };
    params.api.setServerSideDatasource(dataSource);

  }


  GridOption() {
    this.rowSelection = 'single';
    this.columnDefs = [
      {
        headerName: 'id',
        field: 'bid',
        hide: true
      },
      {
        headerName: 'نام',
        field: 'firstName',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'نام خانوادگی',
        field: 'lastName',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'کد بیمه‌گزار',
        field: 'insurerCode',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'تاریخ شروع بیمه‌نامه',
        field: 'beginDate',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'موبایل',
        field: 'mobile',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'کد ملی بیمه‌گزار',
        field: 'nid',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: ' تاریخ صدور ',
        field: 'issueDate',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'کد رشته بیمه',
        field: 'policyTypeCode',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'رشته بیمه',
        field: 'policyType',
        enableRowGroup: true,
        minWidth: 150
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

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }
}
