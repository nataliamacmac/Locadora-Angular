import { Router, ActivatedRoute } from '@angular/router';
import { ClientsService } from './../clients.service';
import { Clientes } from './../clientes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'locadora-clients-alteracao',
  templateUrl: './clients-alteracao.component.html',
  styleUrls: ['./clients-alteracao.component.css']
})
export class ClientsAlteracaoComponent implements OnInit {

  clientes!: Clientes

  constructor(private clientsService: ClientsService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.clientsService.readById(id).subscribe((clientes) => {
      this.clientes = clientes;
      console.log(clientes);
    });
  }

  alteraClientes(): void {
    this.clientsService.alterarClientes(this.clientes).subscribe(() => {
      this.clientsService.mostraErro("Carro atualizado com sucesso!");
      this.router.navigate(["/clientes"]);
    });
  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  }


}
