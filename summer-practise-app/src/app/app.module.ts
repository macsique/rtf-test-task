import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiTextfieldControllerModule,
  TuiDataListModule,
} from '@taiga-ui/core';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';

import { TuiTableModule } from '@taiga-ui/addon-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiDataListWrapperModule, TuiInputModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { NewCompanyFormComponent } from './new-company-form/new-company-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    NewCompanyFormComponent,
  ],
  imports: [
    BrowserModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiTableModule,
    FormsModule,
    ReactiveFormsModule,
    TuiTextAreaModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiInputModule,
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
