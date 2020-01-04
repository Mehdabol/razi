import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertService} from '../../../../../core/services/alert.service';
import {LocalText} from '../../../../../core/grid/ag-grid_fa';
import {InsuranceTransporterService} from '../../service/Insurance-transporter.service';

@Component({
  selector: 'app-grid-insurance-transporter',
  templateUrl: './grid-insurance-transporter.component.html',
  styleUrls: ['./grid-insurance-transporter.component.scss']
})
export class GridInsuranceTransporterComponent implements OnInit {
  static self: GridInsuranceTransporterComponent;

  nationalCode = '';
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
              private service: InsuranceTransporterService) {
    this.GridOption();
  }

  ngOnInit() {
    GridInsuranceTransporterComponent.self = this;
  }

  onSearch() {
    this.onGridReady(this.paramGrid);
  }

  onRowClicked(event: any) {
  }

  onGridReady(params) {
    this.paramGrid = params;

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    const dataSource = {
      getRows(params) {
        const data = params.request;
        const filter = JSON.stringify({nationalCode: GridInsuranceTransporterComponent.self.nationalCode});
        if (GridInsuranceTransporterComponent.self.nationalCode !== '' && GridInsuranceTransporterComponent.self.nationalCode !== null) {
          GridInsuranceTransporterComponent.self.service.getGridData(filter).subscribe((res: any) => {
            if (data) {
              params.successCallback(res.Data, res.Data.length);
              (res.Data.length === 0 || res.Data == null) ? GridInsuranceTransporterComponent.self.gridApi.showNoRowsOverlay() :
                GridInsuranceTransporterComponent.self.gridApi.hideOverlay();
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
        headerName: 'نام بیمه',
        field: 'insurerName',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'کد بیمه‌گزار ',
        field: 'insurerCode',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'تاریخ صدور بیمه‌نام',
        field: 'issuanceDate',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'حق بیمه کل',
        field: 'premium',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: ' تاریخ اتمام بیمه‌نامه',
        field: 'endDate',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'تاریخ شروع بیمه‌نامه ',
        field: 'beginDate',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'نام نمایندگی',
        field: 'agentDesc',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'کد نماینده',
        field: 'agentCode',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'کد صدور بیمه‌نامه',
        field: 'issuerCode',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: ' موبایل',
        field: 'mobile',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'کد ملی بیمه‌گزار',
        field: 'insurerNid',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'تاریخ صدور ',
        field: 'issueDate',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: ' بیمه شده',
        field: 'insured',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'کد رشته بیمه ای',
        field: 'policyTypeCode',
        enableRowGroup: true,
        minWidth: 150
      },
      {
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
