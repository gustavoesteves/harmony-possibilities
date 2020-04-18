import { INotes } from '../interfaces/notes.interface';
import { EAccident } from '../interfaces/accident.enum';

export const Sharp: INotes[] = [
    { id: 1, name: 'C', accident: EAccident.flat },
    { id: 2, name: 'C#', accident: EAccident.flat },
    { id: 3, name: 'D', accident: EAccident.flat },
    { id: 4, name: 'D#', accident: EAccident.flat },
    { id: 5, name: 'E', accident: EAccident.flat },
    { id: 6, name: 'F', accident: EAccident.flat },
    { id: 7, name: 'F#', accident: EAccident.flat },
    { id: 8, name: 'G', accident: EAccident.flat },
    { id: 9, name: 'G#', accident: EAccident.flat },
    { id: 10, name: 'A', accident: EAccident.flat },
    { id: 11, name: 'A#', accident: EAccident.flat },
    { id: 12, name: 'B', accident: EAccident.flat }
];
