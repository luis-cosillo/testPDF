import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
        FormsModule,
        MaterialModule,
        NgxExtendedPdfViewerModule
    ],
    declarations: [DashboardComponent]
})

export class DashboardModule {}
