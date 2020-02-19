import { NgModule } from '@angular/core';
import { PhotosFormComponent } from './photos-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { PhotoModule } from '../photo/photo.module';
import { ImmediateClickModule } from 'src/app/shared/directives/imediate-click/imediate-click.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[PhotosFormComponent],
    imports: [CommonModule, 
              ReactiveFormsModule, 
              VMessageModule,
              FormsModule,
              PhotoModule,
              ImmediateClickModule,
              RouterModule ]
    
})
export class PhotoFormModule {

}