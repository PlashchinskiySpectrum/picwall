"use strict";

let workingModule = (function () {

    let photoPosts = [
        {
            id: '1',
            description: 'Самый прогрессивный медведь!',
            createdAt: new Date('2018-03-05T1:27:00'),
            author: 'progressive_mdk',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['Progressive', 'Bear'],
        },

        {
            id: '2',
            description: 'Как высоко мы сможем взлететь?',
            createdAt: new Date('2018-03-04T20:31:00'),
            author: 'plashchinskiy.spectrum',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['spherespectrum', 'progressive', 'metalcore', 'symphonic', "deathcore"],
        },

        {
            id: '3',
            description: ' 11.03.2018 в зоопарк бесплатно пустят всех желающих!',
            createdAt: new Date('2018-03-03T08:20:20'),
            author: 'kak_tut_jit',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['zoo', 'forfree', 'cat'],
        },

        {
            id: '4',
            description: 'Как вам моё новое творение?',
            createdAt: new Date('2018-03-02T20:11:00'),
            author: 'pacras_lampas',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['art', 'building'],
        },

        {
            id: '5',
            description: 'Эти ребята снова радуют нас своими релизами!',
            createdAt: new Date('2018-03-01T18:31:00'),
            author: 'belarussian_underground_scene',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['post_rock', 'alt_rock'],
        },

        {
            id: '6',
            description: 'New single Flying High is already available for listening!',
            createdAt: new Date('2018-02-28T19:18:00'),
            author: 'sphere.spectrum.official',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['symphonic', 'deathcore', 'progressive', 'metalcore', 'djent', 'spherespectrum'],
        },

        {
            id: '7',
            description: 'Большие морозы! Открыты мини-медпункты.',
            createdAt: new Date('2018-02-27T15:45:00'),
            author: 'citydog',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['cold', 'minsk'],
        },

        {
            id: '8',
            description: 'Недяля гастрофеста началась! Не упусти!',
            createdAt: new Date('2018-02-26T11:11:00'),
            author: 'gastro_fest_minsk',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['gastrofest', 'minsk', 'food', 'taste'],
        },

        {
            id: '9',
            description: 'Скидки в магазине Marc OPolo! Не забудь заглянуть!',
            createdAt: new Date('2018-02-25T20:31:00'),
            author: 'onliner_official',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['onliner', 'sales'],
        },

        {
            id: '10',
            description: 'Немного о моде...',
            createdAt: new Date('2018-02-25T11:51:00'),
            author: 'lepshy_disigner',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['design', 'fashion', 'nice'],
        },

        {
            id: '11',
            description: 'Тур начинается через 5 дней! Ищи свой город в списке и приходи на концерт!',
            createdAt: new Date('2018-02-24T21:24:00'),
            author: 'sphere.spectrum.official',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['anargency', 'spherespectrum'],
        },

        {
            id: '12',
            description: 'Mayones Regius 7 Gothic.',
            createdAt: new Date('2018-02-23T14:39:00'),
            author: 'mayones_guitars',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: [],
        },

        {
            id: '13',
            description: 'Album Exodus is already available for listening and download!',
            createdAt: new Date('2018-02-22T18:43:00'),
            author: 'shokran_band',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['shokran', 'exodus', 'progressive', 'metalcore', 'release', 'new'],
        },

        {
            id: '14',
            description: 'One of my favorite places',
            createdAt: new Date('2018-02-21T20:20:00'),
            author: 'zedpickard',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['aysgarth', 'waterfalls'],
        },

        {
            id: '15',
            description: 'New tattoo. Check it!',
            createdAt: new Date('2018-02-20T04:11:00'),
            author: 'olobersykes',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['bmth', 'bringmethehorizon', 'vocalist', 'tattoo', 'style'],
        },

        {
            id: '16',
            description: 'Man do I miss thejoshuatravis and our special pinch harmonic bond.',
            createdAt: new Date('2018-02-19T23:17:00'),
            author: 'speavegrin',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['chelseagrin', 'family', 'recording', 'guitars', 'musicmanguitars'],
        },

        {
            id: '17',
            descriprtion: 'Весёлые хохмы в 3 утра',
            createdAt: new Date('2018-02-18T03:01:00'),
            author: 'sanoluchina',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['lol', 'kek'],
        },

        {
            id: '18',
            description: 'А кое-кто досвёл EP.',
            createdAt: new Date('2018-02-17T07:13:00'),
            author: 'kirillshtranin',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['invertor', 'band'],
        },

        {
            id: '19',
            description: 'У пчел пять глаз.',
            createdAt: new Date('2018-02-11T10:33:00'),
            author: 'pchelovod',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['bee', 'strange', 'eyes'],
        },

        {
            id: '20',
            description: 'На холоде насекомые дрожат, как и человек.\n',
            createdAt: new Date('2018-02-10T05:15:00'),
            author: 'veterinarmamin',
            photoLink: 'http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg',
            hashTags: ['animals', 'cold'],
            likes: [],
        }
    ];

    function getPhotoPosts(skip = 0, top = 10, filterConfig) {
        let Array = [];
        photoPosts.sort(compareDate);
        let count = 0;

        if (filterConfig === undefined) {
            for (let i = skip; i < top + skip; i++) {
                if (i > photoPosts.length - 1) {
                    return Array;
                }
                Array.push(photoPosts[i]);
            }
        }
        else {
            if(filterConfig.author !== undefined && filterConfig.up !== undefined && filterConfig.bottom !== undefined && filterConfig.hashTags !== undefined){
                for(let i = 0; i < photoPosts.length; i++){
                    if(photoPosts[i].author === filterConfig.author && (photoPosts[i].createdAt).getTime() < (filterConfig.up).getTime() && (photoPosts[i].createdAt).getTime() > (filterConfig.bottom).getTime()  && check(i, filterConfig.hashTags)) {
                        count++;
                        if(count > skip)
                            Array.push(photoPosts[i]);
                        if(Array.length === top)
                            return Array;
                    }
                }
            }

            if(filterConfig.author === undefined && filterConfig.up !== undefined && filterConfig.bottom !== undefined && filterConfig.hashTags !== undefined){
                for(let i = 0; i < photoPosts.length; i++){
                    if(photoPosts[i].createdAt.getTime() < filterConfig.up.getTime() && photoPosts[i].createdAt.getTime() > filterConfig.bottom.getTime() && check(i, filterConfig.hashTags)) {
                        count++;
                        if(count > skip)
                            Array.push(photoPosts[i]);
                        if(Array.length === top)
                            return Array;
                    }
                }
            }

            if(filterConfig.author !== undefined && filterConfig.up === undefined && filterConfig.bottom === undefined && filterConfig.hashTags !== undefined){
                for(let i = 0; i < photoPosts.length; i++){
                    if(photoPosts[i].author === filterConfig.author && check(i, filterConfig.hashTags)) {
                        count++;
                        if(count > skip)
                            Array.push(photoPosts[i]);
                        if(Array.length === top)
                            return Array;
                    }
                }
            }

            if(filterConfig.author !== undefined && filterConfig.up !== undefined && filterConfig.bottom !== undefined && filterConfig.hashTags === undefined){
                for(let i = 0; i < photoPosts.length; i++){
                    if(photoPosts[i].author === filterConfig.author && photoPosts[i].createdAt.getTime() < filterConfig.up.getTime() && photoPosts[i].createdAt.getTime() > filterConfig.bottom.getTime()) {
                        count++;
                        if(count > skip)
                            Array.push(photoPosts[i]);
                        if(Array.length === top)
                            return Array;
                    }
                }
            }

            if(filterConfig.author === undefined && filterConfig.up === undefined && filterConfig.bottom === undefined && filterConfig.hashTags !== undefined){
                for(let i = 0; i < photoPosts.length; i++){
                    if(check(i, filterConfig.hashTags)) {
                        count++;
                        if(count > skip)
                            Array.push(photoPosts[i]);
                        if(Array.length === top)
                            return Array;
                    }
                }
            }

            if(filterConfig.author !== undefined && filterConfig.up === undefined && filterConfig.bottom === undefined && filterConfig.hashTags === undefined){
                for(let i = 0; i < photoPosts.length; i++){
                    if(photoPosts[i].author === filterConfig.author) {
                        count++;
                        if(count > skip)
                            Array.push(photoPosts[i]);
                        if(Array.length === top)
                            return Array;
                    }
                }
            }

            if(filterConfig.author === undefined && filterConfig.up !== undefined && filterConfig.bottom !== undefined && filterConfig.hashTags === undefined){
                for(let i = 0; i < photoPosts.length; i++){
                    if((photoPosts[i].createdAt).getTime() <= (filterConfig.up).getTime() && (photoPosts[i].createdAt).getTime() >= (filterConfig.bottom).getTime()) {
                        count++;
                        if(count > skip)
                            Array.push(photoPosts[i]);
                        if(Array.length === top)
                            return Array;
                    }
                }
            }

            if(filterConfig.author === undefined && filterConfig.up === undefined && filterConfig.bottom === undefined && filterConfig.hashTags === undefined){
                for (let i = skip; i < top + skip; i++) {
                    if (i > photoPosts.length - 1) {
                        if (Array.length === 0)
                            return null;
                        return Array;
                    }
                    Array.push(photoPosts[i]);
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
        if (getPhotoPost(str) !== false && Obj.id === undefined && Obj.author === undefined && Obj.createdAt === undefined && Obj !== undefined){
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
        if (getPhotoPost(str) !== false) {
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