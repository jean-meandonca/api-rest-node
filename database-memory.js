import {randomUUID} from "node:crypto"

export class DatabaseMemory {
    #videos = new Map()     //chave privada por isso a serquilha

    // set = como se fosse um array em js e não aceita valores duplicadosa
    // map = como se fosse um objeto em js

    
    list(){
        return this.#videos.values();
    }
    
    create(video) {
        const videoId = randomUUID();

        this.#videos.set(videoId, video);
    }

    update(id, video) {
        this.#videos.set(id, video); 
    }

    delete(id){
        this.#videos.delete(id);
    }
}