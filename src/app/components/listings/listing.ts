export interface Listing {
    weekNum: number,
    unitNum: number,
    numBedrooms: number,
    occupancy: number,
    privacy: number,
    contactName: string,
    email: string,
    phone: string,
    description: string,
    notes: string,
    submittedUpdated: Date
}

export class Listing {  
    constructor (public weekNum: number,
                    public unitNum: number,
                    public numBedrooms: number,
                    public occupancy: number,
                    public privacy: number,
                    public contactName: string,
                    public email: string,
                    public phone: string,
                    public description: string,
                    public notes: string,
                    public submittedUpdated: Date) { }
} 
