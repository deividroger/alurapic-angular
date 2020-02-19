import { NgModule } from '@angular/core';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photos-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { RouterModule } from '@angular/router';
import { PhotoDetailsModule } from './photo-details/photo-details.module';
import { CommonModule } from '@angular/common';

@NgModule({
  
    imports:[  
                PhotoModule, 
                PhotoFormModule, 
                PhotoListModule,
                RouterModule,
                PhotoDetailsModule
                
            ]
})
export class PhotosModule {}