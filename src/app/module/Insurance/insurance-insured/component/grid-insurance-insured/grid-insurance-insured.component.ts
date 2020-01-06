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
        GridInsuranceInsuredComponent.self.service.getGridData()
          .subscribe((res: any) => {
            if (data) {
              for (let i = 0; i < res.Data.length; i++) {
                res.Data[i].firstName = res.Data[i].firstName + res.Data[i].lastName;
                res.Data[i].isBimeGozar = res.Data[i].isBimeGozar ? 'بیمه گذار' : 'بیمه شده';
              }
              params.successCallback(res.Data, res.Data.length);
              (res.Data.length === 0 || res.Data == null) ? GridInsuranceInsuredComponent.self.gridApi.showNoRowsOverlay() :
                GridInsuranceInsuredComponent.self.gridApi.hideOverlay();
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
        field: 'bid',
        hide: true
      }, {
        headerName: '#',
        field: '',
        hide: false
      }, {
        headerName: 'نام و نام خانوادگی',
        field: 'firstName',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: 'رشته بیمه',
        field: 'policyType',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: 'کد رشته بیمه ای',
        field: 'policyTypeCode',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: ' بیمه شده',
        field: 'insured',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: 'تاریخ صدور ',
        field: 'issueDate',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: 'کد ملی بیمه‌گزار',
        field: 'insurerNid',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: ' موبایل',
        field: 'mobile',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: 'کد صدور بیمه‌نامه',
        field: 'issuerCode',
        enableRowGroup: true,
        minWidth: 110
      },
      {
        headerName: 'کد نماینده',
        field: 'agentCode',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: 'نام نمایندگی',
        field: 'agentDesc',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: 'تاریخ شروع بیمه‌نامه ',
        field: 'beginDate',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: ' تاریخ اتمام بیمه‌نامه',
        field: 'endDate',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: 'تاریخ صدور بیمه‌نام',
        field: 'issuanceDate',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: 'کد بیمه‌گزار ',
        field: 'insurerCode',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: 'نام بیمه',
        field: 'insurerName',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: 'حق بیمه کل',
        field: 'premium',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: 'کد ملی بیمه‌گزار',
        field: 'nid',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: 'نوع بیمه شده',
        field: 'isBimeGozar',
        enableRowGroup: true,
        minWidth: 110
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

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }
}
