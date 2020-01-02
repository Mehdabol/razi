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
              private service: InsuranceTransporterService) {
    this.GridOption();
  }

  ngOnInit() {
    GridInsuranceTransporterComponent.self = this;
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
        headerName: 'insurerCode',
        field: 'insurerCode',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'issuanceDate',
        field: 'issuanceDate',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'premium',
        field: 'premium',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'endDate',
        field: 'endDate',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'beginDate',
        field: 'beginDate',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'agentDesc',
        field: 'agentDesc',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'agentCode',
        field: 'agentCode',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'issuerDesc',
        field: 'issuerDesc',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'issuerCode',
        field: 'issuerCode',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'mobile',
        field: 'mobile',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'insurerNid',
        field: 'insurerNid',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'issueDate',
        field: 'issueDate',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'insured',
        field: 'insured',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'policyTypeCode',
        field: 'policyTypeCode',
        enableRowGroup: true,
        minWidth: 150
      },
      {
        headerName: 'policyType',
        field: 'policyType',
        enableRowGroup: true,
        minWidth: 150
      }, {
        headerName: 'fullBid',
        field: 'fullBid',
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
