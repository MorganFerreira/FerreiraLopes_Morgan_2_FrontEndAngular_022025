import { participation } from "./Participation";

export class olympic {
    constructor(public id: number,
                public country: string,
                public participations: participation[]) {}
}
