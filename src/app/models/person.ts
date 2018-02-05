import { Planet } from "./planet";

export class Person {
    public id: number;
    public name: string;
    public height: string;
    public mass: string;
    public hair_color: string; 
    public skin_color: string; 
    public eye_color: string;
    public birth_year: string;
    public gender: string;
    public homeworld: Planet; 

    constructor() { }
}