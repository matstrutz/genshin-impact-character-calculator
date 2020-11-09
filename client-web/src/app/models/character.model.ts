export class Character {
    nameId: string;
    name: string;
    imageUrl: string;
    vision: string;

    constructor(nameId: string, name: string, imageUrl: string, vision: string){
        this.nameId = nameId;
        this.name = name;
        this.imageUrl = imageUrl;
        this.vision = vision;
    }
}