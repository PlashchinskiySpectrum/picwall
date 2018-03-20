const Dom = (function () {
    let userName = null;
    let posts = document. querySelector('.posts');
    let count = 0;

    function makePost(el) {
        let post = document.createElement('section');
        let postContent = document.createElement('div');
        postContent.className = 'post';

        let authorLogo = document.createElement('img');
        authorLogo.src = el.logo;
        authorLogo.alt = 'picwall';
        authorLogo.className = 'profilePhoto';
        authorLogo.width="70";
        authorLogo.height="70";
        postContent.appendChild(authorLogo);

        let author = document.createElement('a1');
        author.innerHTML = el.author;
        postContent.appendChild(author);

        let date = document.createElement('a2');
        let time = document.createElement('a3');
        let s1, s2, s3;
        s1 = '' + el.createdAt.getHours();
        s2 = '' + el.createdAt.getMinutes();
        if (s1.length == 1)
            s1 = '0' + s1;
        if (s2.length == 1)
            s2 = '0' + s2;
        time.innerHTML = s1 + ':' + s2;
        let day;
        s1 = '' + el.createdAt.getDate();
        s2 = '' + (el.createdAt.getMonth() + 1);
        s3 = '' + el.createdAt.getFullYear();
        if (s1.length == 1)
            s1 = '0' + s1;
        if (s2.length == 1)
            s2 = '0' + s2;
        date.innerHTML = s1 + '.' + s2 + '.' + s3;

        postContent.appendChild(date);
        postContent.appendChild(time);

        let img_box = document.createElement('div');
        let img = document.createElement('img');
        img.src = el.photoLink;
        img.alt = 'picwall';
        img.className = 'photo';
        img_box.appendChild(img);
        postContent.appendChild(img_box);

        let like = document.createElement('img');
        like.src = 'like.png';
        like.alt = 'picwall';
        like.className = 'like';
        postContent.appendChild(like);

        if (userName === el.author) {
            let userArea = document.createElement('ul');
            let change = document.createElement('li');
            change.className = "delete";
            let udalit = document.createElement('img');
            udalit.src = "udalit.png";
            udalit.alt = "picwall";
            udalit.width="42";
            udalit.height="42";
            change.appendChild(udalit);
            let deletePost = document.createElement('li');
            let redact = document.createElement("img");
            redact.src = "redact.png";
            redact.width="42";
            redact.height="60";
            deletePost.className = 'redact';
            deletePost.appendChild(redact);
            userArea.appendChild(change);
            userArea.appendChild(deletePost);
            postContent.appendChild(userArea); // 7 - ый
        }

        let tags = document.createElement('div');
        tags.className = 'tags';
        let tagsHeader = document.createElement('a');
        tagsHeader.innerHTML = '#Tags:';
        tags.appendChild(tagsHeader);
        postContent.appendChild(tags);

        let tagsArea = document.createElement('div');
        tagsArea.className = 'tagsArea';
        let tagsText = document.createElement('a');
        for(let i = 0; i < el.hashTags.length; i++) {
            tagsText.textContent += " #" + el.hashTags[i];
        }
        tagsArea.appendChild(tagsText);
        postContent.appendChild(tagsArea);

        let description = document.createElement('div');
        description.className = 'tags';
        let descriptionHeader = document.createElement('a');
        descriptionHeader.innerHTML = 'Описание:';
        description.appendChild(descriptionHeader);
        postContent.appendChild(description);

        let descriptionArea = document.createElement('div');
        descriptionArea.className = 'tagsArea';
        let descriptionText = document.createElement('a');
        descriptionText.innerHTML = el.description;
        descriptionArea.appendChild(descriptionText);
        postContent.appendChild(descriptionArea);

        let clear  = document.createElement('div');
        clear.id = 'clear';
        postContent.appendChild(clear);

        post.appendChild(postContent);
        post.id = el.id;
        return post;
    }

    function showUser(name, user, logo){

        let naame = document.getElementById("name");
        naame.innerHTML = name;

        let useer = document.getElementById("userName");
        useer.innerHTML = user;


        if (count === 0) {
            let logotip = document.querySelector(".userLogo");
            let userLogo = document.createElement("img");
            userLogo.src = logo;
            userLogo.id = logo;
            userLogo.alt = "logo";
            userLogo.width = "70";
            userLogo.hight = "70";
            userLogo.className = "profile";
            logotip.insertBefore(userLogo, logotip.firstChild);
            userName = user;
            console.log(userName);

            let userField = document.querySelector('.info');
            let addPhoto = document.getElementById("header");
            let plus = document.createElement('img');
            plus.src = "plus.png";
            plus.className = "plus";
            plus.alt = "plus";
            plus.width = "70";
            plus.hight = "70"
            addPhoto.appendChild(plus);
            count++;
        }

        else {
            let redact = document.querySelector(".userLogo");
            console.log(redact.childNodes);
            redact.childNodes[0].setAttribute("src", logo);
        }
    }

    function addPhotoPost(newPost) {
        posts.insertBefore(makePost(newPost), posts.firstChild);
    }

    function editPhotoPost(id, changes){
        if(document.getElementById(id)){
            let current = workingModule.getPhotoPost(id);
            let currentDom = document.getElementById(id);
            let post = currentDom.childNodes[0];

            if (changes.photoLink !== undefined) {
                let imgBox = post.childNodes[4];

                let img = document.createElement('img');

                img.src = changes.photoLink;
                img.alt = 'Picwall';
                img.className = 'photo';
                imgBox.removeChild(imgBox.firstChild);
                imgBox.appendChild(img);
            }

            if (changes.description !== undefined) {
                let postDescription = post.childNodes[9];
                let postDescriptionText = postDescription.childNodes[0];
                postDescriptionText.textContent = changes.description;
            }

            if (changes.hashTags !== undefined) {
                let hashTags = post.childNodes[8];
                let hashTagsText = hashTags.childNodes[0];
                hashTagsText.textContent = "";
                for (let i = 0; i < changes.hashTags.length; i++) {
                    hashTagsText.textContent += " #" + changes.hashTags[i];
                }
            }
        }
    }

    function deletePhotoPost(id){
        if(document.getElementById(id)){
            posts.removeChild(document.getElementById(id));
        }
    }

    function showAll (photoPosts) {
        for(let i = 0; i<photoPosts.length; i++) {
            posts.appendChild(createPost(photoPosts[i]));
        }
    }

    return {
        showUser: showUser,
        makePost: makePost,
        showAll: showAll,
        addPhotoPost: addPhotoPost,
        editPhotoPost: editPhotoPost,
        deletePhotoPost: deletePhotoPost
    }
})();

function addPhotoPost(newPost) {
    if(workingModule.addPhotoPost(newPost)){
        Dom.addPhotoPost(newPost);
    }
}

function showPhotoPosts(skip, top, filterConfig){
    let photoPosts = workingModule.getPhotoPosts(skip, top, filterConfig);
    Dom.showAll(photoPosts);
}

function editPhotoPost(id, photoPost) {
    if (workingModule.editPhotoPost(id, photoPost)) {
        Dom.editPhotoPost(id, photoPost);
    }
}

function removePhotoPost(id){
    if(workingModule.removePhotoPost(id)){
        Dom.deletePhotoPost(id);
    }
}

function sign(name, user, logo) {
    Dom.showUser(name, user, logo);
}


