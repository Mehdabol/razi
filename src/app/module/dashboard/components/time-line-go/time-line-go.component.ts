import {Component, OnInit} from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-time-line-go',
  templateUrl: './time-line-go.component.html',
  styleUrls: ['./time-line-go.component.scss']
})
export class TimeLineGoComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    const $ = go.GraphObject.make;
    const myDiagram =
      $(go.Diagram, 'myDiagramDiv',
        {
          'undoManager.isEnabled': false,
          layout: $(go.TreeLayout,
            {angle: 90, layerSpacing: 80})
        });

// the template we defined earlier
    myDiagram.nodeTemplate =
      $(go.Node, 'Horizontal',
        $(go.Shape, 'RoundedRectangle',
          { fill: 'white' },
          new go.Binding('fill', 'fill')),
        $(go.TextBlock,
          { margin: 5 },
          new go.Binding('text', 'name'))
        // {background: '#fff'},
        // $(go.Shape, 'Rectangle', {
        //     fill: '#fff',
        //   }, new go.Binding('fill', 'fill'),
        //   new go.Binding('text', 'name'),
        // ),
        // $(go.TextBlock, 'Default Text',
        //   {width: 100, stroke: '#c9c9c', font: 'bold 16px sans-serif'},
        //   new go.Binding('text', 'name'),
        // )
      );

    myDiagram.linkTemplate =
      $(go.Link,
        $(go.Shape),
        $(go.Shape, {toArrow: 'Standard'}),
        $(go.TextBlock,
          {margin: 12, stroke: '#000', font: 'bold 16px samim'},
          new go.Binding('text', 'text'))
      );

    const model = $(go.TreeModel);
    model.nodeDataArray =
      [
        {key: '1', name: 'Don Meow', source: 'cat1.png', text: 'خط 2'},
        {key: '2', parent: '1', name: 'Demeter', source: 'cat2.png', text: 'خط 3', fill: '#ff5722'},
        {key: '3', parent: '1', name: 'Copricat', source: 'cat3.png', text: 'a label', fill: '#ff5722'},
        {key: '4', parent: '3', name: 'Jellylorum', source: 'cat4.png', text: 'a label', fill: '#ff5722'},
        {key: '5', parent: '3', name: 'Alonzo', source: 'cat5.png', text: 'a label', fill: 'blue'},
        {key: '6', parent: '2', name: 'Munkustrap', source: 'cat6.png', text: 'a label', fill: 'red'}
      ];
    myDiagram.model = model;
  }


}
