import { Injectable } from '@nestjs/common';
import { Car } from '../interfaces/car.interface';
@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: '1',
            brand: 'Toyota',
            model: 'Corolla',
            year: 2020
        },
        {
            id: '2',
            brand: 'BMW',
            model: 'X6',
            year: 2021
        },
        {
            id: '3',
            brand: 'Mercedes',
            model: 'Benz',
            year: 2022
        },
        {
            id: '4',
            brand: 'Jaguar',
            model: 'F-Type',
            year: 2023
        }
    ];
    findAll(): Car[] {
        return this.cars;
    }
    findOne(id: string): Car {
        return this.cars.find(car => car.id === id);
    }
    
}
