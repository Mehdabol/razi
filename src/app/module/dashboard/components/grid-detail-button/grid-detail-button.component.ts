import {Component} from '@angular/core';

import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-grid-detail-button',
  templateUrl: './grid-detail-button.component.html',
  styleUrls: ['./grid-detail-button.component.scss']
})
export class GridDetailButtonComponent implements ICellRendererAngularComp {

  params;
  label: string;
  icon: string;
  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
    this.icon = this.params.icon || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      const params = {
        event: $event,
        rowData: this.params.node.data
      };
      this.params.onClick(params);

    }
  }

}
