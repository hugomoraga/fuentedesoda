<template>
    <article>
            <div class="container mx-auto mt-12 mb-40 space-y-12">
                <div class="m-10 flex  bg-white shadow-lg rounded-lg overflow-hidden" v-for="(card, index) in cards" :key="index" style="margin: 20px;">
                    <img class="w-1/3 bg-cover" :src="card.img" style="max-width:500px;"/>
                    <div class="w-2/3 p-10">
                        <h3 class="font-semibold text-lg leading-tight truncate py-3">{{ card.title }}</h3>
                        <p class="mt-2 py-3 ">
                            {{ card.excerpt }}
                        </p>    
                        <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                        </p>

                        <a :href="card.link"  class=" hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Ver Ubicacion</a>
                    </div>
                </div>
            </div>
        
    </article>
</template>


<script>
export default {
  data() {
    return {
      title: "Sucursales",
      order: 3, 
      cards: [
      {
        title: "Sucursal Santiago",
        excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining",
        link: "/fuentedesoda/sucursales/santiago/",
        img: "https://ventuscorp.pe/wp-content/uploads/2019/01/VENTUS-CORP-02-Implementa-una-fuente-de-soda-con-las-mejores-maquinas.jpg"
      }, {
        title: "Sucursal Villarrica",
        excerpt: "in Feburary 2019, the U.S. Secretary of the Interior signed Secretarial Order 3362, a framework designed to improve habitat quality and protect crucial migration corridors for several species of wildlife including pronghorn, elk, and mule deer.",
        link: "/fuentedesoda/sucursales/villarrica/",

        img: "https://gazzettahedone.mx/wp-content/uploads/2019/03/Fuente-de-Sodas.jpg"
      }
 
    ]
    };
  },
};
</script>
