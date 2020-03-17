import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fishes',
  templateUrl: './fishes.component.html',
  styleUrls: ['./fishes.component.scss']
})
export class FishesComponent  {
  searchText: string = '';
  elements: any = [
    {
      id: 1,
      first: 'Mark',
      last: 'Otto',
      handle: '@mdo',
      collapsed: false,
      masterDetail: [{ orderId: 1, orderDate: '24-07-1996', adress: '35 King George' }],
    },
    {
      id: 2,
      first: 'Jacob',
      last: 'Thornton',
      handle: '@fat',
      collapsed: false,
      masterDetail: [{ orderId: 2, orderDate: '04-01-1992', adress: 'Obere Str. 57' }],
    },
    {
      id: 3,
      first: 'Larry',
      last: 'the Bird',
      handle: '@twitter',
      collapsed: false,
      masterDetail: [{ orderId: 3, orderDate: '15-01-1994', adress: 'Kirchgasse 6' }],
    },
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];
  masterHeadElements = ['IMAGES','Order Id', 'Order Date', 'Adress'];
}


