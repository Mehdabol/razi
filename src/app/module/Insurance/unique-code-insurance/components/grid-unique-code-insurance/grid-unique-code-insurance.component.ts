import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertService} from '../../../../../core/services/alert.service';
import {InsuranceInsuredService} from '../../../insurance-insured/service/insurance-insured.service';
import {LocalText} from '../../../../../core/grid/ag-grid_fa';

@Component({
  selector: 'app-grid-unique-code-insurance',
  templateUrl: './grid-unique-code-insurance.component.html',
  styleUrls: ['./grid-unique-code-insurance.component.scss']
})
export class GridUniqueCodeInsuranceComponent implements OnInit {
  static self: GridUniqueCodeInsuranceComponent;

  policyId = ''; // '0057901015';
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
    GridUniqueCodeInsuranceComponent.self = this;
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
        const filterValue = {policyId: GridUniqueCodeInsuranceComponent.self.policyId};
        if (GridUniqueCodeInsuranceComponent.self.policyId !== '') {
          GridUniqueCodeInsuranceComponent.self.service.getUnicCodeGrid(filterValue)
            .subscribe((res: any) => {
              debugger;
              if (data) {
                params.successCallback(res.Data, res.Data.length);
                (res.Data.length === 0 || res.Data == null) ? GridUniqueCodeInsuranceComponent.self.gridApi.showNoRowsOverlay() :
                  GridUniqueCodeInsuranceComponent.self.gridApi.hideOverlay();
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
      }, {
        headerName: '#',
        field: '',
        hide: false
      }, {
        headerName: 'بيمه ملت',
        field: 'companyName',
        enableRowGroup: true,
        minWidth: 130
      }, {
        headerName: 'شخص ثالث',
        field: 'fieldName',
        enableRowGroup: true,
        minWidth: 130
      }, {
        headerName: 'تاریخ صدور',
        field: 'issueDate',
        enableRowGroup: true,
        minWidth: 130
      }, {
        headerName: 'تاریخ شروع بیمه نامه',
        field: 'startDate',
        enableRowGroup: true,
        minWidth: 130
      }, {
        headerName: 'تاریخ پایان بیمه نامه',
        field: 'endDate',
        enableRowGroup: true,
        minWidth: 130
      }, {
        headerName: 'تاریخ صدور میلادی',
        field: 'gregorianIssueDate',
        enableRowGroup: true,
        minWidth: 130
      }, {
        headerName: 'محمد قریشی',
        field: 'name',
        enableRowGroup: true,
        minWidth: 130
      }, {
        headerName: 'کد ملی بیمه‌گزار',
        field: 'nid',
        enableRowGroup: true,
        minWidth: 130
      }, {
        headerName: 'شماره چاپی بیمه نامه',
        field: 'fullBNo',
        enableRowGroup: true,
        minWidth: 130
      },
      {
        headerName: 'کد یکتای بیمه نامه در بیمه مرکزی',
        field: 'policyId',
        enableRowGroup: true,
        minWidth: 130
      }, {
        headerName: 'نام نمایندگی',
        field: 'agentDesc',
        enableRowGroup: true,
        minWidth: 130
      }, {
        headerName: 'تاریخ شروع بیمه‌نامه ',
        field: 'beginDate',
        enableRowGroup: true,
        minWidth: 130
      }, {
        headerName: ' تاریخ اتمام بیمه‌نامه',
        field: 'endDate',
        enableRowGroup: true,
        minWidth: 130
      }, {
        headerName: 'تاریخ صدور بیمه‌نام',
        field: 'issuanceDate',
        enableRowGroup: true,
        minWidth: 130
      }, {
        headerName: 'کد بیمه‌گزار ',
        field: 'insurerCode',
        enableRowGroup: true,
        minWidth: 130
      }, {
        headerName: 'نام بیمه',
        field: 'insurerName',
        enableRowGroup: true,
        minWidth: 130
      }, {
        headerName: 'حق بیمه کل',
        field: 'premium',
        enableRowGroup: true,
        minWidth: 130
      }, {
        headerName: 'کد ملی بیمه‌گزار',
        field: 'nid',
        enableRowGroup: true,
        minWidth: 130
      }, {
        headerName: 'isBimeGozar',
        field: 'isBimeGozar',
        enableRowGroup: true,
        minWidth: 130
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
