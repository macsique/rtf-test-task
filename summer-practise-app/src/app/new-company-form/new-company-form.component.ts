import { Component, OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  Inject,
  TemplateRef,
} from '@angular/core';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-new-company-form',
  templateUrl: './new-company-form.component.html',
  styleUrls: ['./new-company-form.component.css'],
})
export class NewCompanyFormComponent implements OnInit {
  public name: string = '';
  public address: string = '';
  public ogrn: string = '';
  public inn: string = '';
  public createDate: string = '';

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<number, number>
  ) {}

  get hasValue(): boolean {
    return this.name !== null;
  }

  get data(): number {
    return this.context.data;
  }

  submit(): void {
  }

  showDialog(content: TemplateRef<TuiDialogContext<void>>): void {
    this.dialogService.open(content, { dismissible: true }).subscribe();
  }

  ngOnInit(): void {}
}
