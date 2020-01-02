import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-timline-button-grid',
  templateUrl: './timline-button-grid.component.html',
  styleUrls: ['./timline-button-grid.component.scss']
})
export class TimlineButtonGridComponent implements ICellRendererAngularComp {

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
