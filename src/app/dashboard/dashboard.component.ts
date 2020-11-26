import { Identifiers } from '@angular/compiler';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductService } from '../product.service';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';  
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  Username:string = "Shani";
  Product:any = [];
  modalRef: BsModalRef;
  newProduct:any = {};

  addForm: FormGroup;

  constructor(private _ProductService: ProductService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.Product = this._ProductService.Products;
    
    this.addForm = new FormGroup({
      "Pname": new FormControl(null, Validators.required),
      "Prate": new FormControl(null, Validators.required),
      "Pquantity": new FormControl(null, Validators.required),
    });
  }

  addProduct(template: TemplateRef<any>) {  
        this.addForm.reset();
        this.modalRef = this.modalService.show( 
          template,  
          Object.assign({}, { class: 'gray modal-lg' })  
        );
  }

  deleteProducts(){
    this._ProductService.onDelete(Identifiers);
  }

  onSubmit(){
    this.newProduct = this.addForm.value;
    console.log(this.newProduct);
    this._ProductService.addProduct(this.newProduct);
  }


}
