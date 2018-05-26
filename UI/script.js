
"use strict";

let workingModule = (function () {
    let photoPosts = [];

    function getPhotoPosts(skip = 0, top = 10, filterConfig) {

        let Array = [];
        photoPosts.sort(compareDate);
        let count = 0;

        switch (filterConfig){                                          //инструкция для filterConfig
            case undefined:                                                 //если filterConfig не определён
                for (let i = skip; i < top + skip; i++) {
                    if (i > photoPosts.length - 1)
                        return Array;
                    Array.push(photoPosts[i]);
                }
                break;
            default:                                                    //если filterConfig определён
                switch(filterConfig.author){                                //инструкция для filterConfig.author
                    case undefined:                                             //если filterConfig.author не определён
                        switch(filterConfig.up){                                    //инструкция для filterConfig.up
                            case undefined:                                             //если filterConfig.up не определён
                                switch(filterConfig.bottom){                                //инструкция для filterConfig.bottom
                                    case undefined:                                             //если filterConfig.bottom не определён
                                        switch(filterConfig.hashTags){                              //инструкция для filterConfig.hashTags
                                            case undefined:                                             //если filterConfig.hashTags не определён
                                                for (let i = skip; i < top + skip; i++) {                   //если все поля не определены
                                                    if (i > photoPosts.length - 1) {
                                                        if (Array.length === 0)
                                                            return null;
                                                        return Array;
                                                    }
                                                    Array.push(photoPosts[i]);
                                                }
                                                break;
                                            default:                                                        //если все поля, кроме hashTags, не определены
                                                for(let i = 0; i < photoPosts.length; i++){
                                                    if(check(i, filterConfig.hashTags)) {
                                                        count++;
                                                    if(count > skip)
                                                        Array.push(photoPosts[i]);
                                                    if(Array.length === top)
                                                        return Array;
                                                    }
                                                }
                                                break;
                                        }

                                }
                            default:                                                //если filterConfig.up определён
                                switch(filterConfig.bottom){                            //инструкция для filterConfig.bottom
                                    case undefined:                                         //если filterConfig.bottom не определён
                                        break;                                                  //выходим
                                    default:                                                //если filterConfig.bottom определён
                                        switch(filterConfig.hashTags){                          //инструкция для filterConfig.hashTags
                                            case undefined:                                         //если filterConfig.hashTags не определён
                                                for(let i = 0; i < photoPosts.length; i++){
                                                    if((photoPosts[i].createdAt).getTime() <= (filterConfig.up).getTime()
                                                     && (photoPosts[i].createdAt).getTime() >= (filterConfig.bottom).getTime()) {
                                                        count++;
                                                        if(count > skip)
                                                            Array.push(photoPosts[i]);
                                                        if(Array.length === top)
                                                            return Array;
                                                    }
                                                }
                                                break;
                                            default:                                                //если filterConfig.hashTags определён
                                                for(let i = 0; i < photoPosts.length; i++){
                                                    if(photoPosts[i].createdAt.getTime() < filterConfig.up.getTime() &&
                                                    photoPosts[i].createdAt.getTime() > filterConfig.bottom.getTime() &&
                                                    check(i, filterConfig.hashTags)) {
                                                        count++;
                                                        if(count > skip)
                                                            Array.push(photoPosts[i]);
                                                        if(Array.length === top)
                                                            return Array;
                                                    }
                                                }
                                                break;
                                        }
                                }
                        }
                    default:                                //если filterConfig.author определён
                        switch(filterConfig.up){                //иструкция для filterConfig.up
                            case undefined:                         //если flterConfig.up не определён
                                switch(filterConfig.bottom){            //инструкция для filterConfig.bottom
                                    case undefined:                         //если filterConfig.bottom не определён
                                        switch(filterConfig.hashTags){          //инструкци для filterConfig.hashTags
                                            case undefined:                         //если filterConfig.hashTags не определён
                                                for(let i = 0; i < photoPosts.length; i++){
                                                    if(photoPosts[i].author === filterConfig.author) {
                                                        count++;
                                                        if(count > skip)
                                                            Array.push(photoPosts[i]);
                                                        if(Array.length === top)
                                                            return Array;
                                                    }
                                                }
                                                break;
                                            default:                                //если filterConfig.hashTags определён
                                                for(let i = 0; i < photoPosts.length; i++){
                                                    if(photoPosts[i].author === filterConfig.author && check(i, filterConfig.hashTags)) {
                                                        count++;
                                                        if(count > skip)
                                                            Array.push(photoPosts[i]);
                                                        if(Array.length === top)
                                                            return Array;
                                                    }
                                                }
                                                break;
                                        }
                                }
                            default:                                //если filterConfig.up определён
                                switch(filterConfig.bottom){            //инструкция для filterConfig.bottom
                                    case undefined:                         //если filterConfig.bottom не определён
                                        switch(filterConfig.hashTags){          //инструкция для filterConfig.hashTags
                                            case undefined:                         //если filterConfig.hashTags не определён
                                                break;
                                        }
                                    default:                            //если filterConfig.bottom определён
                                        switch(filterConfig.hashTags){      //инструкция для filterConfig.hashTags
                                            case undefined:                     //если filterConfig.hashTags не определён
                                                for(let i = 0; i < photoPosts.length; i++){
                                                    if(photoPosts[i].author === filterConfig.author &&
                                                    photoPosts[i].createdAt.getTime() < filterConfig.up.getTime() &&
                                                    photoPosts[i].createdAt.getTime() > filterConfig.bottom.getTime()) {
                                                        count++;
                                                        if(count > skip)
                                                            Array.push(photoPosts[i]);
                                                        if(Array.length === top)
                                                            return Array;
                                                    }
                                                }
                                                break;
                                            default:                            //если filterConfig.hashTags определён
                                                for(let i = 0; i < photoPosts.length; i++){
                                                    if(photoPosts[i].author === filterConfig.author &&
                                                    (photoPosts[i].createdAt).getTime() < (filterConfig.up).getTime() &&
                                                    (photoPosts[i].createdAt).getTime() > (filterConfig.bottom).getTime()  &&
                                                    check(i, filterConfig.hashTags)) {
                                                        count++;
                                                        if(count > skip)
                                                            Array.push(photoPosts[i]);
                                                        if(Array.length === top)
                                                            return Array;
                                                    }
                                                }
                                                break;
                                        }
                                }
                        }
                }
        }
    return Array;
}
    
    function check(i, tag) {
        for(let j = 0; j < (photoPosts[i].hashTags).length; j++)
            if (photoPosts[i].hashTags[j] === tag)
                return true;
        return false;
    }

    function compareDate(a, b) {
        return (b.createdAt).getTime() - (a.createdAt).getTime();
    }

    function getPhotoPost(str) {
        for (let i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id === str)
                return photoPosts[i]
        }
        return false;
    }

    function validatePhotoPost(Obj) {
        for (let i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id === Obj.id)
                return false;
        }
        if (Obj.description === undefined || (Obj.description).length > 200)
            return false;
        if (Obj.photoLink === undefined)
            return false;
        if (Obj.author === undefined)
            return false;
        if (Obj.hashTags === undefined)
            return false;
        if (Obj.createdAt === undefined || !(Obj.createdAt instanceof Date) )
            return false;
        return true;
    }

    function addPhotoPost(Obj) {
        if (validatePhotoPost(Obj) === false)
            return false;
        else {
            photoPosts.push(Obj);
            return true;
        }
    }

    function editPhotoPost(str, Obj) {
        if (getPhotoPost(str) !== undefined &&
         Obj.id === undefined &&
          Obj.author === undefined &&
           Obj.createdAt === undefined &&
            Obj !== undefined){
            if(Obj.description !== undefined && Obj.description.length < 200)
                getPhotoPost(str).description = Obj.description;
            if(Obj.hashTags !== undefined)
                getPhotoPost(str).hashTags = Obj.hashTags;
            if(Obj.photoLink != undefined)
                getPhotoPost(str).photoLink = Obj.photoLink;
            return true;
        }
        return false;
    }

    function removePhotoPost(str) {
        if (getPhotoPost(str) !== undefined) {
            photoPosts.splice(photoPosts.indexOf(getPhotoPost(str)), 1);
            return true;
        }
        else
            return false;
    }

    return {
        getPhotoPosts: getPhotoPosts,
        getPhotoPost: getPhotoPost,
        validatePhotoPost: validatePhotoPost,
        addPhotoPost: addPhotoPost,
        editPhotoPost: editPhotoPost,
        removePhotoPost: removePhotoPost
    }
})();