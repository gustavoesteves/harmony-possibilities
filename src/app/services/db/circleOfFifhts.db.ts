import { INotes } from '../interfaces/notes.interface';
import { EAccident } from '../interfaces/accident.enum';

export const CircleOfFifhts: INotes[] = [
    { id: 1, name: 'C', accident: EAccident.flat },
    { id: 8, name: 'G', accident: EAccident.sharp },
    { id: 3, name: 'D', accident: EAccident.sharp },
    { id: 10, name: 'A', accident: EAccident.sharp },
    { id: 5, name: 'E', accident: EAccident.sharp },
    { id: 12, name: 'B', accident: EAccident.sharp },
    { id: 7, name: 'Gb', accident: EAccident.flat },
    { id: 2, name: 'Db', accident: EAccident.flat },
    { id: 9, name: 'Ab', accident: EAccident.flat },
    { id: 4, name: 'Eb', accident: EAccident.flat },
    { id: 11, name: 'Bb', accident: EAccident.flat },
    { id: 6, name: 'F', accident: EAccident.flat }
];
