import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertService} from '../../../../../core/services/alert.service';
import {LocalText} from '../../../../../core/grid/ag-grid_fa';
import {TotalDamageTreatmentService} from '../../service/total-damage-treatment.service';

@Component({
  selector: 'app-grid-total-damage-treatment',
  templateUrl: './grid-total-damage-treatment.component.html',
  styleUrls: ['./grid-total-damage-treatment.component.scss']
})
export class GridTotalDamageTreatmentComponent implements OnInit {

  static self: GridTotalDamageTreatmentComponent;

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
              private service: TotalDamageTreatmentService) {
    this.GridOption();
  }

  ngOnInit() {
    GridTotalDamageTreatmentComponent.self = this;
  }


  onRowClicked(event: any) {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    const dataSource = {
      getRows(params) {
        const data = params.request;
        const filter = JSON.stringify('0057901015');
        GridTotalDamageTreatmentComponent.self.service.getGridData(filter).subscribe((res: any) => {
          if (data) {
            params.successCallback(res.Data, res.Data.length);
            (res.Data.length === 0 || res.Data == null) ? GridTotalDamageTreatmentComponent.self.gridApi.showNoRowsOverlay() :
              GridTotalDamageTreatmentComponent.self.gridApi.hideOverlay();
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
        field: 'insuredId',
        hide: true
      },
      {
        headerName: 'شماره بیمه نامه',
        field: 'bno',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'بیمه شده',
        field: 'insuredName',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'بیماری',
        field: 'disease',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'تاریخ بستری',
        field: 'hospitalizationDate',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'تاریخ حواله',
        field: 'indemnityDate',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: ' مرکز درمانی',
        field: 'healthCenter',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'سریال معرفی نامه',
        field: 'indemnitySerial',
        enableRowGroup: true,
        minWidth: 170
      }, {
        headerName: ' وضعیت پرونده',
        field: 'documentStatus',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'مبلغ درخواستی',
        field: 'requestedAmount',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'مبلغ پرداختی',
        field: 'paidAmount',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'نوع',
        field: 'damageKindText',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'مبلغ مورد تایید کارشناس',
        field: 'confirmAmount',
        enableRowGroup: true,
        minWidth: 200
      }, {
        headerName: 'مبلغ فرانشیز',
        field: 'franshiz',
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
