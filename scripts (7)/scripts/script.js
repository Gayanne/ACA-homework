const people = [{
    name: "Shakira",
    info: "singer",
    image: "https://www.shakira.com/uploaded/gallery/thumbs/3e9592b03c5e108e5b83c749047ff8eb.jpg",
    link:"another.html"
}, {
    name: "Jeniffer",
    info: "singer",
    image: "https://media.gettyimages.com/id/1141979804/photo/jennifer-lopez-on-monday-may-6-2019.jpg?s=612x612&w=gi&k=20&c=lre4-TTex_gw-YG3DE5CCraqmULA5aCnOR5nSkoFA64="
   , link:"contact.html"
}, {
    name: "Rihana",
    info: "singer",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Rihanna_Fenty_2018.png",
    link:"about.html"
}]
const root = document.querySelector('body');
for (let person of people) {
    const Container = document.createElement('div');
    Container.className = "person";

    const link=document.createElement('a');
    link.href=person.link;
    
    const photo = document.createElement('img');
    photo.src = person.image;
    link.appendChild(photo);
    


    const Name = document.createElement("h1");
    Name.innerHTML = person.name;
    Container.appendChild(Name);

    Container.appendChild(link);
    root.appendChild(Container);

} 
