export default class Film {
    id: number;
    name: string;
    category: string;
    timeDuration: string;

    constructor(id: number, name: string, category: string, timeDuration: string){
        if (!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]/.test(timeDuration)) throw new Error('Invalid time duration hour');
        this.id = id;
        this.name = name;
        this.category = category;
        this.timeDuration = timeDuration;
    }
}