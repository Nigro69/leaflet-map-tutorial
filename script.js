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
    {
        id:4,
        title: "Alison Hagerup Beach Park",
        description:"This beach park, also known as Captiva Beach, has been called one of the most romantic beaches. You won't want to miss the amazing sunset views.",
        image:"https://www.visitfortmyers.com/sites/default/files/2021-12/CaptivaDSCF5851.jpg",
        lat:"26.5261834",
        lng: "-82.193837"
    },
    {
        id: 5,
        title: "Turner Beach",
        description: "<p>A seashell haven and a fishing hot spot. This stretch of sand is the first beach you see upon entering Captiva Island. Located on the north side of Blind Pass bridge, seashells blanket the shoreline and a small jetty guides boats through the Pass.&nbsp;</p>\r\n",
        image:"https://www.visitfortmyers.com/sites/default/files/2021-12/Turner%20Beach.jpg",
        lat:"26.48302",
        lng: "-82.18347"
    },
    {
        id:6,
        title:"Blind Pass Beach Park",
        description:"<p>Positioned on the south side of the Blind Pass Bridge on Sanibel Island, this stretch of beach is a popular spot for seashells.</p>\r\n",
        image: "https://www.visitfortmyers.com/sites/default/files/2021-12/32%20Blind%20Pass%20Beach%20Captiva_WEB.jpg",
        lat: "26.48175",
        lng:"-82.18179",
    },
    {
        id:7,
        title:"Bowman's Beach Park",
        description: "<p>A popular beach on Sanibel Island. This picturesque stretch of shoreline is known for it's shells, along with short walking trails, picnic areas and a children's playground.&nbsp;</p>\r\n",
        image:"https://www.visitfortmyers.com/sites/default/files/2021-12/BFMS_bowmans%20%281%29.jpg",
        lat:"26.4702",
        lng:"-82.1734"
    },
    {
        id:8,
        title:"Tarpon Bay Beach",
        description:"<p>This beautiful beach on Sanibel Island is just a short walk from a public parking lot. It offers nice amenities and is in close proximity to island walking and nature trails.</p>\r\n",
        image:"https://www.visitfortmyers.com/sites/default/files/2021-12/SunsetBeachWavesSky_Sanibel_beccabydesign_2021_05.jpg",
        lat:"26.4232854",
        lng: "-82.0822294"
    },
    {
        id:9,
        title:"Gulfside City Beach Park",
        description:"<p>Known locally as Algiers Beach, this stretch of Sanibel Island is a beautiful place to relax. A loop trail offers an interpretive nature walk, and leashed pets are welcome.</p>\r\n",
        image: "https://www.visitfortmyers.com/sites/default/files/2021-12/tala.91-Instagram-2653-ig-18027563617160231.jpg",
        lat:"26.4254408",
        lng: "-82.0682641"
    },
    {
        id:10,
        title: "Lighthouse Beach Park",
        description:"<p><strong>Currently Closed</strong></p>\r\n",
        image:  "https://www.visitfortmyers.com/sites/default/files/2021-12/Sanibel%20Lighthouse%20horizontal_WEB.jpg",
        lat:"26.45266",
        lng: "-82.01566"
    },
    {
        id:11,
        title:  "Causeway Islands Park",
        description:"<p><strong>Currently Closed</strong></p>\r\n\r\n<p>This beach park along the Sanibel Causeway bridge provides easy access for vehicles to pull right up to the water's edge. This is a popular spot for swimming, fishing, windsurfing, and enjoying a picnic.</p>\r\n",
        image:   "https://www.visitfortmyers.com/sites/default/files/2021-12/Sanibel%20causeway%20at%20punta%20rassa%20boat%20ramp_WEB.jpg",
        lat:"26.4677",
        lng: "-82.0299"
    },
    {
        id:12,
        title: "Yacht Club Beach",
        description:"<p><strong>Currently Closed</strong></p>\r\n\r\n<p>Located on the Caloosahatchee River in Cape Coral, the Yacht Club Community Park offers a public beach, fishing pier, playground and waterfront restaurant.</p>\r\n",
        image:    "https://www.visitfortmyers.com/sites/default/files/2021-12/yodamacb-instagram-3660539856-1.jpg",
        lat:"26.5423669",
        lng:  "-81.9538707"
    },
    {
        id:13,
        title: "Bunche Beach",
        description:"<p>Located in Fort Myers near the Sanibel Causeway, this is a popular spot for swimming, fishing and birdwatching. Kayak rentals and a paddlecraft launch are also available here.</p>\r\n",
        image:  "https://www.visitfortmyers.com/sites/default/files/2021-12/Bunche%20DSCF7049_WEB.jpg",
        lat:"26.4806",
        lng: "-81.9638"
    },
    {
        id:14,
        title: "Bowditch Point Park",
        description: "<p><strong>Currently Closed</strong></p>\r\n\r\n<p>Located on the northern tip of Fort Myers Beach, this 17-acre beach park includes beach access on the Gulf and back bay, along with hiking trails, picnic areas and a free public boat dock.&nbsp;</p>\r\n",
        image:   "https://www.visitfortmyers.com/sites/default/files/2021-12/Bowditch%20BRAND%20DSCF6770_WEB.jpg",
        lat:"26.46412",
        lng: "-81.96683"
    },
    {
        id:15,
        title: "Lynn Hall Memorial Park",
        description:  "<p>A beachfront park at the heart of Fort Myers Beach. Located next to Times Square and the Fort Myer Beach Pier.</p>\r\n",
        image:   "https://www.visitfortmyers.com/sites/default/files/2021-12/Lynn%20Hall%20Memorial%20Park_WEB.jpg",
        lat:"26.45382",
        lng: "-81.95712"
    },
    {
        id:16,
        title: "Crescent Beach Family Park",
        description:  "<p><strong>Currently Closed</strong></p>\r\n\r\n<p>This beach park on Fort Myers Beach sits at the foot of the Matanzas Pass Bridge, mere steps from the shops and restaurants of Times Square and the Fort Myers Beach Pier.</p>\r\n",
        image:   "https://www.visitfortmyers.com/sites/default/files/2021-12/trekofjoy-Instagram-Crescent%20%20Beach01817.jpg",
        lat:"26.45239",
        lng: "-81.95483"
    },
    {
        id:17,
        title: "Newton Beach Park",
        description:   "<p><strong>Currently Closed</strong></p>\r\n\r\n<p>Small beachfront park on Fort Myers Beach with historic cottage.</p>\r\n",
        image:   "https://www.visitfortmyers.com/sites/default/files/images/newton-beach-park_2.jpg",
        lat:"26.4367449",
        lng: "-81.9242102"
    },
    {
        id:18,
        title: "Lovers Key State Park",
        description:    "<p><strong>Currently Closed</strong></p>\r\n\r\n<p>Two miles of beach offers plenty of space to relax, but there are also endless activities to enjoy. Hike or bike the multiuse trails, or explore serene canals and lagoons by kayak or paddleboard.&nbsp;</p>\r\n",
        image:  "https://www.visitfortmyers.com/sites/default/files/2021-12/Lovers%20Key_F_C5A6794_WEB.jpg",
        lat: "26.3912",
        lng:  "-81.8781"
    },
    {
        id:19,
        title:"Dog Beach Park",
        description:    "<p>Located in Bonita Springs just south of Lovers Key State Park, dogs (and their owners) can run off leash in the calm waters of the back bay.&nbsp;</p>\r\n",
        image:   "https://www.visitfortmyers.com/sites/default/files/2021-12/Dog%20Beach_1_Bonita%20Springs_Jason%20Boeckman_0.jpg",
        lat:"26.3795647",
        lng: "-81.8631517"
    },
    {
        id:20,
        title: "Little Hickory Island Park",
        description:   "<p><strong>Currently Closed</strong></p>\r\n\r\n<p>Located on a small island in Bonita Springs, this secluded park is quaint and is just down the road from nearby Bonita Beach.</p>\r\n",
        image:    "https://www.visitfortmyers.com/sites/default/files/2021-12/Big%20hickory%20Island%20Bonita%20Springs_WEB.jpg",
        lat:"26.3585",
        lng: "-81.8594"
    },
    {
        id:21,
        title: "Bonita Beach Park",
        description:  "<p>Located on Little Hickory Island between Fort Myers Beach and Bonita Springs, this popular beachfront park features swimming, sheltered picnic areas, a sand volleyball court, and a nearby beachfront restaurant just steps away on the sand.</p>\r\n",
        image:   "https://www.visitfortmyers.com/sites/default/files/2021-12/genovaflorida-Instagram-2653-ig-17863168276723593.jpg",
        lat:"26.33105",
        lng: "-81.84563"
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