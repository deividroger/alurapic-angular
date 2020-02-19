import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './sinup.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { userNamePasswordValidator } from './username-password.validator';

@Component({
    templateUrl: './signup.component.html',
    providers:[UserNotTakenValidatorService]
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;
    @ViewChild('emailInput',null) emailInput: ElementRef<HTMLInputElement>;
    constructor(private formBuilder: FormBuilder,
               private userNotTakenService : UserNotTakenValidatorService,
               private signupService :SignUpService,
               private router: Router,
               private platformDetectorService: PlatformDetectorService) {

    }

    ngOnInit(): void {

        const fn = this.userNotTakenService.checkUserNameTaken();

        this.signupForm = this.formBuilder.group({
            email: ['', [Validators.required, 
                         Validators.email]],
            fullName: ['', [Validators.required,
                            Validators.minLength(2), 
                            Validators.maxLength(40)]
            ],
            userName: ['',[ Validators.required, 
                            Validators.minLength(2), 
                            Validators.maxLength(30),
                            lowerCaseValidator,
                        ],this.userNotTakenService.checkUserNameTaken()],
            password: ['', [Validators.required, 
                            Validators.minLength(8),
                            Validators.maxLength(14)]],
},{
    validator: userNamePasswordValidator
});
        
        this.platformDetectorService.isPlatformBrowser() && 
        
        this.emailInput.nativeElement.focus();
    }

    signup(){

        if(this.signupForm.valid && !this.signupForm.pending){
        
            const newUser = this.signupForm.getRawValue() as NewUser;

            this.signupService.signup(newUser)
                .subscribe(()=> this.router.navigate(['']),
                err => console.log(err));
        }

        
    }
}