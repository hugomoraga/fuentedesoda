const { createClient } = supabase;

supabase = createClient(
  "https://ncjymzvhdpnxtbalacvu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5janltenZoZHBueHRiYWxhY3Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ4OTg0MjcsImV4cCI6MTk2MDQ3NDQyN30.H5vtVB1lI3Q4C7rvs8WrsdDnBENSldAmh3UA95avm7I"
);

async function loadcarta() {
  const ul = document.getElementById("carta");
  const list = document.createDocumentFragment();
  const { data: productos, error } = await supabase
    .from("productos")
    .select("*");
  let mostrarproductos = productos;
  console.log(productos)

  mostrarproductos.map(function (producto) {
    let li = document.createElement("li");
    li.className = "px-8 py-8 rounded overflow-hidden shadow-lg bg-slate-50 producto";

    let nombre = document.createElement("h4");
    let descripcion = document.createElement("p");
    let ingredientes = document.createElement("p");
    let precio = document.createElement("p");
    let a = document.createElement("a");
    let link = document.createTextNode("Ver Producto");
    let img = document.createElement("img");
    img.src = producto.imagen;

    a.appendChild(link); 
    a.href=`/fuentedesoda/pages/carta/producto`;


    nombre.innerHTML = `${producto.nombre} <span class="badge rounded-pill fs-6 bg-primary">${producto.precio}</span>`;
    descripcion.innerHTML = `<strong>descripcion:</strong> ${producto.descripcion}`;
    ingredientes.innerHTML = `<strong>Ingredientes: </strong>${producto.ingredientes} , ${producto.region}`;
    precio.innerHTML = `<strong>Precio:</strong> $ ${producto.precio}`;
    

    li.appendChild(img);
    li.appendChild(nombre);
    li.appendChild(descripcion);
    li.appendChild(ingredientes);
    li.appendChild(precio);
    li.appendChild(a);
    list.appendChild(li);
  });

  ul.appendChild(list);
}

loadcarta();