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
    // this.go();


    const $ = go.GraphObject.make;
    const myDiagram =
      $(go.Diagram, 'myDiagramDiv',
        {
          'undoManager.isEnabled': false, // enable Ctrl-Z to undo and Ctrl-Y to redo
          layout: $(go.TreeLayout, // specify a Diagram.layout that arranges trees
            {angle: 90, layerSpacing: 80})
        });

// the template we defined earlier
    myDiagram.nodeTemplate =
      $(go.Node, 'Horizontal',
        {background: '#fff'},
        // $(go.Picture,
        //   {margin: 10, width: 50, height: 50, background: '#fff'},
        //   new go.Binding('source')),
        $(go.Shape, 'Rectangle', {
            fill: '#fff',
          }, new go.Binding('fill', 'fill'),
          new go.Binding('text', 'name'),
        ),
        // $(go.TextBlock, 'Default Text',
        //   {width: 100, stroke: '#c9c9c', font: 'bold 16px sans-serif'},
        //   new go.Binding('text', 'name'),
        //   new go.Binding('color', 'fill')
        // )
      );

    myDiagram.linkTemplate =
      $(go.Link,
        $(go.Shape),                           // this is the link shape (the line)
        $(go.Shape, {toArrow: 'Standard'}),  // this is an arrowhead
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

  go() {
    const $ = go.GraphObject.make;
    const myDiagram =
      $(go.Diagram, 'myDiagramDiv',
        {
          'undoManager.isEnabled': false // enable Ctrl-Z to undo and Ctrl-Y to redo
        });

    myDiagram.nodeTemplate =
      $(go.Node, 'Horizontal',
        {background: '#44CCFF'},
        $(go.Picture,
          {margin: 10, width: 50, height: 50, background: 'red'},
          new go.Binding('source')),
        $(go.TextBlock,
          'Default Text',
          {margin: 12, stroke: 'white', font: 'bold 16px sans-serif'},
          new go.Binding('text', 'name'))
      );
    myDiagram.linkTemplate =
      $(go.Link,
        $(go.Shape),                           // this is the link shape (the line)
        $(go.Shape, {toArrow: 'Standard'}),  // this is an arrowhead
        $(go.TextBlock,
          {margin: 12, stroke: '#000', font: 'bold 16px samim'},
          new go.Binding('text', 'text'))
      );

    const model = $(go.TreeModel);
    model.nodeDataArray =
      [ // note that each node data object holds whatever properties it needs;
        {key: '1', parent: '', name: 'Don Meow', source: 'cat1.png', text: 'خط 2'},
        {key: '2', parent: '1', name: 'Demeter', source: 'cat2.png', text: 'خط 3', fill: '#ff5722'},
        {key: '3', parent: '1', name: 'Copricat', source: 'cat3.png', text: 'a label', fill: '#ff5722'},
        {key: '4', parent: '3', name: 'Jellylorum', source: 'cat4.png', text: 'a label', fill: '#ff5722'},
        {key: '5', parent: '3', name: 'Alonzo', source: 'cat5.png', text: 'a label', fill: 'blue'},
        {key: '6', parent: '2', name: 'Munkustrap', source: 'cat6.png', text: 'a label', fill: 'red'}
      ];

    // const model = $(go.TreeModel);
    myDiagram.model = model;
  }


}
