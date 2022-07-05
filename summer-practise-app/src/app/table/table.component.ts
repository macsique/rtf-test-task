import { Component, OnInit, Inject, Injector } from '@angular/core';
import { TuiDay } from '@taiga-ui/cdk';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { NewCompanyFormComponent } from '../new-company-form/new-company-form.component';

interface Item {
  readonly name: string;
  readonly address: string;
  readonly ogrn: string;
  readonly inn: string;
  readonly createDate: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  private readonly dialog = this.dialogService.open<number>(
    new PolymorpheusComponent(NewCompanyFormComponent, this.injector),
    {
      data: 237,
      dismissible: true,
      label: 'Юридическое лицо',
    }
  );

  readonly options = { updateOn: 'blur' } as const;

  public companyList: readonly Item[] = [
    {
      name: 'УГМК',
      address: 'Сибирская 31',
      ogrn: '1236137835678',
      inn: '713-584-434 42',
      createDate: '22.07.2012',
    },
    {
      name: 'Сима-Ленд',
      address: 'Ленина 51',
      ogrn: '723313783678',
      inn: '513-684-234 51',
      createDate: '31.09.2020',
    },
  ] as const;

  public onValueChange<K extends keyof Item>(
    value: Item[K],
    key: K,
    current: Item,
    data: readonly Item[]
  ): void {
    const updated = { ...current, [key]: value };

    this.companyList =
      data === this.companyList
        ? this.companyList.map((item) => (item === current ? updated : item))
        : this.companyList;
  }

  readonly columns = [
    'name',
    'address',
    'ogrn',
    'inn',
    'createDate',
    'actions',
  ];

  public remove(item: Item): void {
    this.companyList = this.companyList.filter((user) => user !== item);
  }

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {}

  showDialog(): void {
    this.dialog.subscribe({
      next: (data) => {
        console.info(`Dialog emitted data = ${data}`);
      },
      complete: () => {
        console.info('Dialog closed');
      },
    });
  }
  ngOnInit(): void {}
}
