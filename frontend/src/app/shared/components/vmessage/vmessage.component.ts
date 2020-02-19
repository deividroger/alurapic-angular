import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-message',
    templateUrl: './vmessage.component.html'
    
})
export class VMMessageComponent {

    @Input() text= '';



}