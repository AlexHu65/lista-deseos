import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage  {

  constructor(private router: Router) { }

  public volver() {
    this.router.navigateByUrl('');
  }

}
