const postsContainer = document.getElementById('left-cont');
const left = document.getElementById("left-arr");
const right = document.getElementById("righ-arr");
const lt = document.getElementById("left-title");
const rt = document.getElementById("right-title");
var map = L.map('map').setView([27.994402, -81.760254], 7);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const data=[
    {
        id:0,
        title:"Explore Our Beaches",
        description:"Select a marker on the map to learn more about a specific beach.",
        image:"https://www.visitfortmyers.com/sites/default/files/images/51827-10108.jpg",
    },
    {
        id:1,
        title:"Boca Grande Beach",
        description:"Boca Grande offers several beach access points to enjoy the beautiful beaches of Gasparilla Island.",
        image:"https://www.visitfortmyers.com/sites/default/files/2021-12/amy_in_florida-Instagram-2653-ig-18030604084285766.jpg",
        lat:"26.7583",
        lng:"-82.2646"
    },
    {
        id:2,
        title:"Gasparilla Island State Park",
        description:"On the southern end of Gasparilla Island, the highlight of this state park is the historic Port Boca Grande Lighthouse. Originally built in 1890, this beautifully preserved lighthouse is also a museum.",
        image:"https://www.visitfortmyers.com/sites/default/files/2021-12/Boca%20Grande%20Lighthouse%20and%20beach%20%285%29.jpg",
        lat:"26.7283715",
        lng:"-82.2611628"
    },
    {
        id:3,
        title:"Cayo Costa State Park",
        description:"Currently Closed. Accessible only by boat, Cayo Costa is a natural island with 9 miles of secluded beaches. Known for its pristine shells, the state park also features tent camping sites and primitive cabins near the beach.",
        image:"https://www.visitfortmyers.com/sites/default/files/2021-12/Beach%20on%20Cayo%20Costa%20%281%29.jpg",
        lat:"26.687",
        lng:"-82.2517"
    },
]

var curr=2;

postsContainer.innerHTML = `
    <div><img class="ig" src=${data[curr-2].image} alt=""></div>
    <div class="dis">
    <div class="head">${data[curr-2].title}</div>
    <div class="des">${data[curr-2].description}</div>
    <div class="botm"><button class="btn">Learn More</button></div>
    </div>
    `;
rt.innerHTML=`${data[curr-1].title}`;
lt.innerHTML=`${data[curr-2].title}`;

right.addEventListener("click",nextCurr);
left.addEventListener("click",prevCurr);
function nextCurr() {
    if(curr<=data.length){
    curr=curr+1;
    change(curr);
    }
}
function prevCurr() {
    if(curr>2){
        curr=curr-1;
        change(curr);
    }
}

function change(curr) {
    if(curr==2){
        let latlng = L.latLng(27.994402, -81.760254);
        map.flyTo(latlng,7);
    }
    if(curr>2){
        var latlng = L.latLng(data[curr-2].lat, data[curr-2].lng);
        map.flyTo(latlng,10);
    }
    if(curr<=data.length){  
    rt.innerHTML=`${data[curr-1].title}`;
    }
    if(curr>2){
        lt.innerHTML=`${data[curr-3].title}`;
    }

    postsContainer.innerHTML = `
    <div><img class="ig" src=${data[curr-2].image} alt=""></div>
    <div class="dis">
    <div class="head">${data[curr-2].title}</div>
    <div class="des">${data[curr-2].description}</div>
    <div class="botm"><button class="btn">Learn More</button></div>
    </div>
    `;
}

data.forEach(beach=>{
    if(beach.id>0){
        var marker =L.marker([beach.lat, beach.lng]).addTo(map);
        marker.on('click', onMapClick);
        // var circle = L.circle([beach.lat, beach.lng], {
        //     color: 'black',
        //     fillColor: 'rgb(19 78 74)',
        //     fillOpacity: 1,
        //     radius: 10000
        // }).addTo(map)
    }
})

// var popup = L.popup();
function onMapClick(e) {
    map.flyTo(e.latlng,10)
    data.forEach(beach=>{
        if(beach.id>0){
            let latlng = L.latLng(beach.lat, beach.lng);
            console.log(latlng.lat,e.latlng.lat)
            if(latlng.lat==e.latlng.lat && latlng.lng==e.latlng.lng){
                curr=beach.id+2;
                change(curr);
            }
        }
    })
    // popup
    // .setLatLng(e.latlng)
    // .setContent("You clicked the map at " + e.latlng.toString())
    // .openOn(map);
}

// map.on('click', onMapClick);