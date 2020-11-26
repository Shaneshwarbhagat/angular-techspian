import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateDashboardGuard implements CanActivate {

  constructor(private _productservice: ProductService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this._productservice.isDashboardCanACtivate){
        return true;
      }
      else{
        alert("You Dont have permission to access Dashboard untill you Login, redirecting to Login page");
        this.router.navigate(['login']);
      }
   
  }
  
}
