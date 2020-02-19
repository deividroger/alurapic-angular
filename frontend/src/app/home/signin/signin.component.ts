import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
    
    fromUrl: string;
    loginForm: FormGroup;
    @ViewChild('userNameInput',null) userNameInput: ElementRef<HTMLInputElement>;

    constructor(private formBUilder: FormBuilder    
               ,private authService: AuthService
               ,private router: Router
               ,private platformDetectorService: PlatformDetectorService
               ,private activatedRoute: ActivatedRoute
              ){}

    ngOnInit(): void {

        this.activatedRoute.queryParams
                        .subscribe(params=> this.fromUrl = params['fromUrl']);
                          

        this.loginForm = this.formBUilder.group({
        username: ['',Validators.required],
        password: ['',Validators.required]
       });

       this.platformDetectorService.isPlatformBrowser() && 
       this.userNameInput.nativeElement.focus();
    }

    login(){

        const username = this.loginForm.get('username').value;
        const password = this.loginForm.get('password').value;

        this.authService.authenticate(username,password)
            .subscribe(
                ()=> 
                    
                this.fromUrl 
                ? this.router.navigateByUrl(this.fromUrl)
                : this.router.navigate(['user', username])
                
            ,err => {
                console.log(err);
                this.loginForm.reset();

                this.platformDetectorService.isPlatformBrowser() && 
                    this.userNameInput.nativeElement.focus();

            alert('invalid username or password');
            } );
    }
}