import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerGroupsComponent } from './explorer-groups.component';

describe('ExplorerGroupsComponent', () => {
  let component: ExplorerGroupsComponent;
  let fixture: ComponentFixture<ExplorerGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
