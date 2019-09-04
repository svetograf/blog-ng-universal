import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: 'articles.component.html'
})
export class ArticlesComponent {
  articles = [
    {
      id: 1,
      title: 'First',
      content: 'Lorem ipsum dolor ....',
      image: '',
    },
    {
      id: 2,
      title: 'Second',
      content: 'Lorem ipsum dolor ....',
      image: '',
    },
  ];
}
