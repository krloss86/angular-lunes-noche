export function x() {

}

export default class Dato {
    private atributo: string;
    private dato: number
    constructor(atributo:string,dato:number) {
        this.atributo = atributo;
        this.dato = dato;
    }

    //get/set
    public getAtributo(): string {
        return this.atributo;
    }

    public getDato(): number {
        return this.dato;
    }

    public setAtributo(atributo: string): void {
        this.atributo = atributo;
    }
    public setDato(dato: number): void {
        this.dato = dato;
    }
}