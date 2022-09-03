import { Injectable } from "@angular/core";
import { Auto } from "../datos/auto";

@Injectable({
    providedIn: "root"
})
export class AutosService{
    listaAutos: Auto[] = [];

    public obtenListaAutos(): Auto[] {
        if( this.listaAutos.length == 0 )
            this.listaAutos = this._determinaListaAutos();
        return this.listaAutos;
    }

    public obtenAuto( id: number ): Auto | undefined {
        if( this.listaAutos.length == 0 ){
            this.listaAutos = this._determinaListaAutos();
        }
        return this.listaAutos.find( auto => auto.id == id );
    }

    private _determinaListaAutos(): Auto[] {        
        let listaAutos =  [
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
        return listaAutos;
    }
}

