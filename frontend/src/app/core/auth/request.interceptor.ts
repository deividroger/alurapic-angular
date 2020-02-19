import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { TokenService } from '../token/token.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService){

    }
    
    intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {

        if(this.tokenService.hasToken()){
            const token = this.tokenService.getToken();
            
            req = req.clone({
                setHeaders:{
                    'x-access-token': token
                }
            });
        }

        return next.handle(req);

    }

}