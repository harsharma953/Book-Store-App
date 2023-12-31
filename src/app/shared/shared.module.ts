import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
   
    ToolbarComponent,
    FooterComponent,
    //NotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [ToolbarComponent, FooterComponent],
})
export class SharedModule { }
