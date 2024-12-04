import { Console } from "console";

function greet(name: string) {
    return `Hello, ${name}`;
}

let username = "John";
console.log(greet(username));


// Filtrar Números Pares de un Arreglo

function filterpairs(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
} const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const pairs = filterpairs(numbers);
console.log(pairs); // output:[2, 4, 6, 8]


// Suma de las Diagonales de una Matriz

function sumDiagonals(matrix: number[][]): { diagonalPrincipal: number, diagonalsecondary: number } {
    let sumPrincipal = 0;
    let sumSecondary = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumPrincipal += matrix[i][i];
        sumSecondary += matrix[i][matrix.length - 1 - i]
    }

    return { diagonalPrincipal: sumPrincipal, diagonalsecondary: sumSecondary }

}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const { diagonalPrincipal, diagonalsecondary } = sumDiagonals(matrix);
console.log(`sum Diagonal Principal: ${diagonalPrincipal}`);

// Clase para Representar un Libro

class book {
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    showInfo(): void {
        console.log(`title: ${this.title}, author: ${this.author}, year: ${this.year}`);
    }

    isMoreRecentThan(anotherbook: book): boolean {
        return this.year > anotherbook.year;
    }
}

const book1 = new book("One Hundred Years of Solitude", "Gabriel García Márquez", 1967);
const book2 = new book("Don Quixote", "Miguel de cervantes", 1605);

book1.showInfo();
console.log(book1.isMoreRecentThan(book2)); //output : true

book2.showInfo();
console.log(book2.isMoreRecentThan(book1)); //output : true


// Leer y Escribir un Archivo JSON


import * as fs from 'fs';

interface Product {
    id: number;
    name: string;
    price: number;
}

//Read Json file
function readJsonFile(path: string): Product[] {
    const data = fs.readFileSync(path, 'utf-8');
    return JSON.parse(data);
}

//Write JSON file
function writeJsonFile(path: string, products: Product[]): void {
    const data = JSON.stringify(products, null, 2);
    fs.writeFileSync(path, data, 'utf-8');
}

const filePath = './products.json';

//Read data
let products = readJsonFile(filePath);

//Modify a product
products[0].price = 99.99;

//Whire changes
writeJsonFile(filePath, products);

console.log('File updated successfully.');



// Ordenar un Arreglo de Objetos

interface person {
    name: string;
    age: number;
}

function sortByAge(people: person[]): person[] {
    return people.sort((a, b) => a.age - b.age)
}

const people: person[] = [
    { name: "John", age: 30 },
    { name: "Anna", age: 25 },
    { name: "Louis", age: 35 }
];

const peopleOrdered = sortByAge(people);
console.log(peopleOrdered);

// output: [{name: "Anna", age:25}, {name: "John", age:30}, {name: "Louis", age:35}]
