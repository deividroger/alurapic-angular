import { NgModule } from '@angular/core';
import { VMMessageComponent } from './vmessage.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [VMMessageComponent],
    exports: [VMMessageComponent],
    imports:[CommonModule]
})
export class VMessageModule {

}