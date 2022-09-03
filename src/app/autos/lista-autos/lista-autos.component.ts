import { Component, OnInit } from '@angular/core';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Auto } from "src/app/datos/auto"

@Component({
    selector: "lista-autos",
    templateUrl: "./lista-autos.component.html",
    styleUrls: ['./lista-autos.component.css']
})
export class ListaAutosComponent implements OnInit{ //declaración de variables
    
    faStar = faStar;
    startList = [];
    
    tituloListaAutos: string = "Lista de Automóviles";

    listaAutos: Auto[] = [];
    listaAutosFiltrados: Auto[] = [];
    imageWidth = 200;
    imageMargin = 2;
    muestraImagen: boolean = false;
   // filtro: string = "";

    descripcion = "Prueba de enlace entre componentes";


    private _filtro: string = "";
    get filtro(): string {
        return this._filtro
    }

    set filtro( filtro: string ){
        this._filtro = filtro;
        console.log( this._filtro );
        this.filtraAutos( this._filtro );
    }

    filtraAutos( filtrarPor: string ): void {
        filtrarPor = filtrarPor.toLocaleLowerCase();
        this.listaAutosFiltrados = this.listaAutos.filter(
            ( auto: Auto ) => auto.marca.toLocaleLowerCase().includes( filtrarPor )
        )
    }


    constructor() { }

    ngOnInit(): void {
        this.listaAutos = [
            {
                id: 1,
                marca: "Mercedes Benz",
                modelo: "Eléctrico EQC",
                anio: 2022,
                color: "gris plateado",
                kilometros: 100000,
                calificacion: 4,
                precio: 33000,
                imagenUrl: "assets/imagenAutos/mercedes.png"
            },
            {
                id: 2,
                marca: "BMW",
                modelo: "X2",
                anio: 2023,
                color: "amarillo mostaza",
                kilometros: 895000,
                calificacion: 4,
                precio: 45000,
                imagenUrl: "assets/imagenAutos/bmw.png"
            },
            {
                id: 3,
                marca: "Honda",
                modelo: "HR-V",
                anio: 2022,
                color: "blanco",
                kilometros: 100000,
                calificacion: 5,
                precio: 26000,
                imagenUrl: "assets/imagenAutos/honda.png"
            },
            {
                id: 4,
                marca: "Lexus",
                modelo: "LX",
                anio: 2022,
                color: "blanco",
                kilometros: 100000,
                calificacion: 3,
                precio: 40000,
                imagenUrl: "assets/imagenAutos/lexus.png"
            },
            {
                id: 5,
                marca: "Nissan",
                modelo: "Nismo",
                anio: 2021,
                color: "Gris plateado",
                kilometros: 100000,
                calificacion: 2,
                precio: 28000,
                imagenUrl: "assets/imagenAutos/nissan.png"
            }
        ];

        this.listaAutosFiltrados = this.listaAutos;
    }


    muestraImagenes(): void {
        this.muestraImagen = !this.muestraImagen;
    }

    onClickCalificacion( mensaje: string ): void {
        alert( "Dieron click en la calificacion: " + mensaje );
      }

}


