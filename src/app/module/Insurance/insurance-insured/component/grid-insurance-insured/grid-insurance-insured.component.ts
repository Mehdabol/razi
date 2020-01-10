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
              GridInsuranceInsuredComponent.self.sizeTofix();
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
        headerName: 'نام',
        field: 'insuredName',
        enableRowGroup: true,

      }, {
        headerName: 'وضعیت',
        field: 'isBimeGozar',
        enableRowGroup: true,

      }, {
        headerName: 'اعتبار',
        field: '',
        enableRowGroup: true,

      }, {
        headerName: 'وضعیت اعتبار',
        field: '',
        enableRowGroup: true,

      }, {
        headerName: 'شماره بیمه نامه',
        field: 'bno',
        enableRowGroup: true,

      }, {
        headerName: 'کد آنلاین بیمه نامه',
        field: 'bid',
        enableRowGroup: true,

      },
    ];
    this.cacheBlockSize = 100;
    this.localeText = LocalText;

    this.defaultColDef = {
      width: 150,
      sortable: true,
      resizable: true,
      filter: true,
      enableCellChangeFlash: true
    };

    this.rowModelType = 'serverSide';
    this.maxConcurrentDatasourceRequests = 3;
    this.rowGroupPanelShow = 'always';
  }

  sizeTofix() {
    this.gridApi.sizeColumnsToFit();
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }
}
