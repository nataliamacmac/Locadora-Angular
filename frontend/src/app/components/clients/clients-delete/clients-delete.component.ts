import { Clientes } from './../clientes.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientsService } from './../clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locadora-clients-delete',
  templateUrl: './clients-delete.component.html',
  styleUrls: ['./clients-delete.component.css'],
  standalone: false
})
export class ClientsDeleteComponent implements OnInit {

  clientes!: Clientes

  constructor(private clientsService: ClientsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.clientsService.readById(id).subscribe((clientes) => {
      this.clientes = clientes;
      console.log(clientes);
    });
  }

  deleteClientes(): void {
    this.clientsService.deletaClientes(this.clientes.id).subscribe(() => {
      this.clientsService.mostraErro("Clientesro Excluído com sucesso!");
      this.router.navigate(["/clientes"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/clientes"]);
  }

}
