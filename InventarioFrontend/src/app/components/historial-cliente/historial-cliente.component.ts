import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { query } from '@angular/animations';

@Component({
  selector: 'app-historial-cliente',
  templateUrl: './historial-cliente.component.html',
  styleUrls: ['./historial-cliente.component.css']
})
export class HistorialClienteComponent implements OnInit {
  dataTable:any = [];
  control = new FormControl();
  result = this.control;
  valueToSearch: string = "";
  public clientes: Array<any> = [];
  constructor(
    private apiService: ApiService,
    public modal: NgbModal,
  ){  }

  event(){
    this.apiService.allClientes,
    this.apiService.allHistorial
  }

  ngOnInit(): void {
      this.ObserverChangeSearch();
  }

  ObserverChangeSearch(){
    this.control.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(query => {
        console.log(query);
        this.apiService.searchHistorialFactura(query).subscribe(
          (res:any) => {
            this.clientes = res;
          },
          (object) => {
            console.log(object)
          }
        )
      })
  }

  onDataTable(){
    this.apiService.getHistorial().subscribe(res => {
      this.dataTable = res;
      console.log(res)
    })
  }

}
