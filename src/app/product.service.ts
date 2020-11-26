import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

isDashboardCanACtivate: boolean = false;

Products:any = [
  {
    Pname:"Apple",
    Prate:"100",
    Pquantity:"1 KG",
    Palt:"Apple"
  },
  {
    Pname:"Grapes",
    Prate:"80",
    Pquantity:"1 KG",
    Palt:"Grapes"
  },
  {
    Pname:"Banana",
    Prate:"40",
    Pquantity:"1 Dozen",
    Palt:"Banana"
  },
]

  constructor(private router: Router) { }

  onDelete(id){
    this.Products.splice(id, 1);
  }

  addProduct(newProduct:any){
    console.log("In Service:" + newProduct);
    this.Products.push(newProduct);
    console.log(this.Products);
  }

  getLoginDetails(details){
    console.log("Login details in service" + details);
    if(details.value.password == "Test123" && details.value.email == "Test@test.com") {
      this.isDashboardCanACtivate = true;
      this.router.navigate(['dashboard']);
    }
  }

}
