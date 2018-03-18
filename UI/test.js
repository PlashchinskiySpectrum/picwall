console.log("Photoposts: ");
console.log(workingModule.getPhotoPosts(0, 20));

console.log("Filtered by author: sphere.spectrum.official");
let filterObject = {
    author: "sphere.spectrum.official"
};
console.log(workingModule.getPhotoPosts(0, 20, filterObject));
console.log("Filtered by author: sphere.spectrum.official; hashtag: anargency");
filterObject.hashTags = "anargency";
console.log(workingModule.getPhotoPosts(0, 20, filterObject));
let fullFilterObject = {
    author: "sphere.spectrum.official"
};
console.log("Filtered by author: sphere.spectrum.official; hashtag: symphonic, Date: '2018-02-01T08:22:00' - '2018-03-17T08:22:00'");
filterObject.author = "sphere.spectrum.official";
filterObject.hashTags = "symphonic";
filterObject.up = new Date('2018-03-17T08:22:00');
filterObject.bottom= new Date('2018-02-01T08:22:00');
console.log(workingModule.getPhotoPosts(0, 20, filterObject));
console.log("Filter by hashtag: symphonic, 5 posts skipping 3");
let filterHashtag = {
    hashTags: "symphonic"
};
console.log(workingModule.getPhotoPosts(3, 5, filterHashtag));

console.log("Get 15th photopost: ");
console.log(workingModule.getPhotoPost('15'));
console.log("Get 25th photopost:    (doesn't exist)");
console.log(workingModule.getPhotoPost('25'));

console.log("Validation test. Valid post: ");
const valid = {
    id: "33",
    description: "Trying to feed up my demons.",
    createdAt: new Date("2018-02-02T13:27:19"),
    author: "author",
    photoLink: "http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg",
    hashTags: ["concert", "gig", "spherespectrum", "guitarist"],
};
console.log(workingModule.validatePhotoPost(valid));
console.log("Validation test. Non-valid post (id already exists) : ");
let nonValid = {
    id: "17",
    description: "Trying to feed up my demons.",
    createdAt: new Date("2018-02-02T13:27:19"),
    author: "author",
    photoLink: "http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg",
    hashTags: ["concert", "gig", "spherespectrum", "guitarist"],
};

console.log("Add correct photopost: ");
const niceToAdd = {
    id: "35",
    description: "Trying to feed up my demons.",
    createdAt: new Date("2018-02-12T13:27:19"),
    author: "author",
    photoLink: "http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg",
    hashTags: ["concert", "gig", "spherespectrum", "guitarist"],
};
console.log(workingModule.addPhotoPost(niceToAdd));
console.log("Add invalid photopost: (createAt is not Date) ");
const anotherInvalid = {
    id: "579",
    description: "Trying to feed up my demons.",
    createdAt: "Today",
    author: "plashchinskiy.spectrum",
    photoLink: "http://ont.by/webroot/delivery/files/news/2018/02/22/Dom.jpg",
    hashTags: ["demons", "blood"],
};
console.log(workingModule.addPhotoPost(anotherInvalid));

console.log("Change description and photolink of the 1st photopost correctly: ");
console.log("Before: ");
console.log(workingModule.getPhotoPost('1'));
const permittedChanges = {
        description: "I'm on the way to burn down all the bridges",
        photoLink: "Let this be some link"                          
};
console.log("Result of edit: ");
console.log(workingModule.editPhotoPost('1', permittedChanges));
console.log(workingModule.getPhotoPost('1'));
console.log("Change id of the 3rd photo ");
console.log("Before: ");
console.log(workingModule.getPhotoPost('3'));
const forbiddenChanges = {
    id: '567'
};
console.log("Result: ");
console.log(workingModule.editPhotoPost('3', forbiddenChanges));
console.log(workingModule.getPhotoPost('3'));

console.log("Remove photopost with id 8: ");
console.log("Here getPhotoPost(8) will work: ");
console.log(workingModule.getPhotoPost('8'));
console.log("Here we remove the post: ");
console.log(workingModule.removePhotoPost('8'));
console.log("And now look at getPhotoPost(8) call: ");
console.log(workingModule.getPhotoPost('8'));

console.log("And now we'll try to remove photopost with non-existent id: ");
console.log(workingModule.removePhotoPost('2345678'));