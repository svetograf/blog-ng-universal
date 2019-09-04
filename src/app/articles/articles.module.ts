import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ArticlesComponent],
  imports: [
    RouterModule.forChild([
      {path: '', component: ArticlesComponent, pathMatch: 'full'}
    ]),
    CommonModule
  ]
})
export class ArticlesModule {

}
