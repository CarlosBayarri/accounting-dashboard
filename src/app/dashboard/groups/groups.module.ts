import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { ExplorerGroupsComponent } from './explorer-groups/explorer-groups.component';
import { MenuGroupsComponent } from './menu-groups/menu-groups.component';
import { MaterialModule } from '../../material/material.module';



@NgModule({
  declarations: [MyGroupsComponent, ExplorerGroupsComponent, MenuGroupsComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class GroupsModule { }
