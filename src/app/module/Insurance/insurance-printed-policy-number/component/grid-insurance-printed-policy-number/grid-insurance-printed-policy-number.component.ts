import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertService} from '../../../../../core/services/alert.service';
import {InsuranceInsuredService} from '../../../insurance-insured/service/insurance-insured.service';
import {LocalText} from '../../../../../core/grid/ag-grid_fa';

@Component({
  selector: 'app-grid-insurance-printed-policy-number',
  templateUrl: './grid-insurance-printed-policy-number.component.html',
  styleUrls: ['./grid-insurance-printed-policy-number.component.scss']
})
export class GridInsurancePrintedPolicyNumberComponent implements OnInit {

  static self: GridInsurancePrintedPolicyNumberComponent;
  compony = null;
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
  componyType = [
    {id: '4', title: 'بيمه دي'},
    {id: '2', title: 'بيمه ايران'},
    {id: '3', title: 'بيمه آسیا'},
    {id: '6', title: 'بيمه البرز'},
    {id: '1', title: 'بيمه دانا'},
    {id: '7', title: 'بيمه معلم'},
    {id: '8', title: 'بيمه پارسیان'},
    {id: '9', title: 'بيمه کار آفرین'},
    {id: '11', title: 'بيمه رازی'},
    {id: '12', title: 'بيمه توسعه'},
    {id: '10', title: 'بيمه سینا'},
    {id: '13', title: 'بيمه ملت'},
    {id: '15', title: 'بيمه سامان'},
    {id: '16', title: 'بيمه نوین'},
    {id: '17', title: 'بيمه پاسارگاد'},
    {id: '5', title: 'بيمه میهن'},
    {id: '18', title: 'بيمه کوثر'},
    {id: '19', title: 'بيمه ما'},
    {id: '21', title: 'بيمه آرمان'},
    {id: '29', title: 'بيمه تعاون'},
    {id: '33', title: 'بيمه سرمد'},
    {id: '30', title: 'بيمه اتکایی امین'},
    {id: '24', title: 'بيمه امید'},
    {id: '23', title: 'بيمه حافظ'},
    {id: '25', title: 'بيمه ایران معین'},
    {id: '31', title: 'بيمه آسماری'},
    {id: '32', title: 'بيمه متقابل اطمينان متحد قشم'},
    {id: '28', title: 'بيمه اتكايي ايرانيان'},
    {id: '26', title: 'بيمه متقابل کیش'},
    {id: '22', title: 'دانا(شركت هاي ادغامي)'},
    {id: '34', title: 'بيمه تجارت نو'},
    {id: '50', title: 'اتکایی بیمه مرکزی ج.ا.ا'},
    {id: '51', title: 'حساب اتكايي ويژه'},
    {id: '52', title: 'بیمه حكمت صبا'},
    {id: '35', title: 'بيمه زندگي خاورميانه'},
    {id: '27', title: 'بيمه زندگي باران'},
  ];

  constructor(private router: Router,
              private alertService: AlertService,
              private service: InsuranceInsuredService) {
    this.GridOption();
  }

  ngOnInit() {
    GridInsurancePrintedPolicyNumberComponent.self = this;
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
        const filterValue = {
          companyCode: GridInsurancePrintedPolicyNumberComponent.self.compony,
          policyIdfullBNo: GridInsurancePrintedPolicyNumberComponent.self.policyId
        };
        if (GridInsurancePrintedPolicyNumberComponent.self.policyId !== '' ||
          GridInsurancePrintedPolicyNumberComponent.self.compony !== null) {
          GridInsurancePrintedPolicyNumberComponent.self.service.getPolicyInsuranceGrid(filterValue)
            .subscribe((res: any) => {
              if (data) {
                params.successCallback(res.Data, res.Data.length);
                (res.Data.length === 0 || res.Data == null) ? GridInsurancePrintedPolicyNumberComponent.self.gridApi.showNoRowsOverlay() :
                  GridInsurancePrintedPolicyNumberComponent.self.gridApi.hideOverlay();
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
        headerName: 'نام شرکت',
        field: 'companyName',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: 'نام فیلد',
        field: 'fieldName',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: 'تاریخ صدور',
        field: 'issueDate',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: 'تاریخ شروع بیمه نامه',
        field: 'startDate',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: 'تاریخ پایان بیمه نامه',
        field: 'endDate',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: 'تاریخ صدور میلادی',
        field: 'gregorianIssueDate',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: 'نام',
        field: 'name',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: 'کد ملی بیمه‌گزار',
        field: 'nid',
        enableRowGroup: true,
        minWidth: 110
      }, {
        headerName: 'شماره چاپی بیمه نامه',
        field: 'fullBNo',
        enableRowGroup: true,
        minWidth: 110
      },
      {
        headerName: 'کد یکتای بیمه نامه ',
        field: 'policyId',
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
