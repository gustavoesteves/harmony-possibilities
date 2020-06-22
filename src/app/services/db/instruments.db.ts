import { IInstruments } from '../interfaces/instruments.interface';

export const Instruments: IInstruments[] = [
    { Name: 'Bass 4 strings', Notes: ['E', 'A', 'D', 'G'], NumStrings: 4 },
    { Name: 'Bass 6 strings', Notes: ['B', 'E', 'A', 'D', 'G', 'C'], NumStrings: 6 },
    { Name: 'Bandolim 10 strings', Notes: ['C', 'G', 'D', 'A', 'E'], NumStrings: 5 },
    { Name: 'Bandolim 8 strings', Notes: ['G', 'D', 'A', 'E'], NumStrings: 4 },
    { Name: 'Cavaquinho', Notes: ['D', 'G', 'B', 'D'], NumStrings: 4 },
    { Name: 'Guitar', Notes: ['E', 'A', 'D', 'G', 'B', 'E'], NumStrings: 6 },
    { Name: 'Guitar 7 strings', Notes: ['B', 'E', 'A', 'D', 'G', 'B', 'E'], NumStrings: 7 },
    { Name: 'Guitar Drop D', Notes: ['D', 'A', 'D', 'G', 'B', 'E'], NumStrings: 6 },
    { Name: 'Guitar D Tuning', Notes: ['D', 'G', 'C', 'F', 'A', 'D'], NumStrings: 6 }
];
