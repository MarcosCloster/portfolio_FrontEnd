import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{

  experienciaTrabajo:any;
  educacionList: { img: string, name: string, info: string, anio: string }[] = [];


  constructor(private datosPortfolio:PortfolioService){}
      
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.experienciaTrabajo = data.trabajo;

      this.educacionList=Object.values(data.estudios);
      console.log("Hola mundo-------------------------");
      console.log(this.experienciaTrabajo);
      console.log(this.educacionList);
    });
  }

}
