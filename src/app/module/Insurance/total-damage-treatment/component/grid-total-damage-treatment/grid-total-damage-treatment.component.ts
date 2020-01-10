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
  paramGrid;
  nationalCode = '';


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
    this.paramGrid = params;
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    const dataSource = {
      getRows(params) {
        const data = params.request;
        GridTotalDamageTreatmentComponent.self.service.getGridData().subscribe((res: any) => {
          if (data) {
            params.successCallback(res.Data, res.Data.length);
            GridTotalDamageTreatmentComponent.self.autoSize();
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
        headerName: 'نام و نام خانوادگی',
        field: 'insuredName',
        enableRowGroup: true,
        minWidth: 100
      }, {
        headerName: 'کد بیمه شده',
        field: 'insuredId',
        enableRowGroup: true,
        minWidth: 100
      },
      {
        headerName: 'نوع بیماری',
        field: 'disease',
        enableRowGroup: true,
        minWidth: 100
      },
      {
        headerName: 'نوع پرونده',
        field: 'damageKindText',
        enableRowGroup: true,
        minWidth: 100
      },
      {
        headerName: 'تاریخ بستری',
        field: 'hospitalizationDate',
        enableRowGroup: true,
        minWidth: 100
      },
      {
        headerName: 'مبلغ درخواستی',
        field: 'requestedAmount',
        enableRowGroup: true,
        minWidth: 100
      }, {
        headerName: 'مبلغ مورد تایید کارشناس',
        field: 'confirmAmount',
        enableRowGroup: true,
        minWidth: 100
      }, {
        headerName: ' فرانشیز',
        field: 'franshiz',
        enableRowGroup: true,
        minWidth: 100
      }, {
        headerName: 'مبلغ پرداختی',
        field: 'paidAmount',
        enableRowGroup: true,
        minWidth: 100
      }, {
        headerName: 'تاریخ حواله',
        field: 'indemnityDate',
        enableRowGroup: true,
        minWidth: 100
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

}
