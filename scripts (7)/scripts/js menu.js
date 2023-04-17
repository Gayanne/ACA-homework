
const people = [{
    name: "Shakira",
    info: "singer",
    image: "https://www.shakira.com/uploaded/gallery/thumbs/3e9592b03c5e108e5b83c749047ff8eb.jpg",
}, {
    name: "Jeniffer",
    info: "singer",
    image: "https://media.gettyimages.com/id/1141979804/photo/jennifer-lopez-on-monday-may-6-2019.jpg?s=612x612&w=gi&k=20&c=lre4-TTex_gw-YG3DE5CCraqmULA5aCnOR5nSkoFA64="

}, {
    name: "Rihana",
    info: "singer",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Rihanna_Fenty_2018.png"


}]
const roots = document.querySelector('body')
for (let singer of people) {
    const div = document.createElement('a');
    singer.href = "another.html";
   roots.appendChild(div);

}
