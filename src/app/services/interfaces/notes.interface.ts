import { EAccident } from './accident.enum';

export interface INotes {
    id: number,
    name: string,
    accident: EAccident
}