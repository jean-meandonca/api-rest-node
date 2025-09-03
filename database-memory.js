import {randomUUID} from "node:crypto"

export class DatabaseMemory {
    #videos = new Map()     //chave privada por isso a serquilha

    // set = como se fosse um array em js e não aceita valores duplicadosa
    // map = como se fosse um objeto em js

    
    list(){
        return Array.from(this.#videos.entries()).map((videoArray) => {
            const id = videoArray[0]
            const data = videoArray[1]

            return {
                id,
                ...data,
            }
        })
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