const products = [
  {
    id: 1,
    name: "Tas Anyaman Purun",
    price: "Rp150.000",
    mainImage: "https://via.placeholder.com/350x350",
    thumbnails: [
      "https://via.placeholder.com/60",
      "https://via.placeholder.com/60",
      "https://via.placeholder.com/60"
    ],
    category: "Tas Selempang & Bahu Wanita",
    material: "Purun",
    size: "10 cm × 20 cm × 15 cm",
    strapLength: "115 cm",
    additional: "Muat HP dan dompet kecil, cocok digunakan untuk jalan-jalan.",
    description: "Tas anyaman tangan dengan desain etnik modern. Dibuat dari bahan purun alami yang ramah lingkungan."
  },
  {
    id: 2,
    name: "Tas Anyaman Rotan",
    price: "Rp175.000",
    mainImage: "https://via.placeholder.com/350x350",
    thumbnails: [
      "https://via.placeholder.com/60",
      "https://via.placeholder.com/60",
      "https://via.placeholder.com/60"
    ],
    category: "Tas Bahu Wanita",
    material: "Rotan",
    size: "12 cm × 22 cm × 17 cm",
    strapLength: "120 cm",
    additional: "Ringan dan kuat. Desain klasik cocok untuk gaya kasual.",
    description: "Tas rotan berkualitas tinggi, dianyam dengan teliti untuk tampilan elegan dan tahan lama."
  },
  {
    id: 3,
    name: "Tas Anyaman Pandan",
    price: "Rp160.000",
    mainImage: "https://via.placeholder.com/350x350",
    thumbnails: [
      "https://via.placeholder.com/60",
      "https://via.placeholder.com/60",
      "https://via.placeholder.com/60"
    ],
    category: "Tas Bahu",
    material: "Pandan",
    size: "11 cm × 21 cm × 16 cm",
    strapLength: "110 cm",
    additional: "Cocok untuk kegiatan outdoor ringan.",
    description: "Tas pandan tradisional yang stylish dan fungsional, cocok untuk berbagai aktivitas santai."
  }
];
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));
const product = products.find(p => p.id === productId);

if (!product) {
  document.body.innerHTML = "<h2 style='text-align:center;margin-top:50px;'>Produk tidak ditemukan.</h2>";
} else {
  document.getElementById("breadcrumb-product").textContent = product.name;
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-price").textContent = product.price;
  document.getElementById("main-img").src = product.mainImage;

  const thumbContainer = document.getElementById("thumbnail-list");
  thumbContainer.innerHTML = product.thumbnails.map(src => `<img src="${src}" alt="thumbnail">`).join("");

  const specContent = `
    <p><strong>Kategori:</strong> ${product.category}</p>
    <p><strong>Bahan:</strong> ${product.material}</p>
    <p><strong>Ukuran Produk:</strong> ${product.size}</p>
    <p><strong>Panjang Tali:</strong> ${product.strapLength}</p>
    <p><strong>Keterangan Tambahan:</strong> ${product.additional}</p>
  `;
  document.getElementById("spec-content").innerHTML = specContent;
  document.getElementById("desc-content").innerHTML = `<p>${product.description}</p>`;

  const recommendGrid = document.getElementById("recommend-grid");
  const recommendations = products.filter(p => p.id !== productId);
  recommendGrid.innerHTML = recommendations.map(r => `
    <div class="card">
      <div class="thumb" style="background-image:url('${r.mainImage}'); background-size:cover;"></div>
      <h4>${r.name}</h4>
      <p>${r.price}</p>
      <a href="product_detail.html?id=${r.id}" class="detail-btn">Detail</a>
    </div>
  `).join("");
}

const tabSpec = document.getElementById("tab-spec");
const tabDesc = document.getElementById("tab-desc");
const specDiv = document.getElementById("spec-content");
const descDiv = document.getElementById("desc-content");

tabSpec.addEventListener("click", () => {
  tabSpec.classList.add("active");
  tabDesc.classList.remove("active");
  specDiv.style.display = "block";
  descDiv.style.display = "none";
});

tabDesc.addEventListener("click", () => {
  tabDesc.classList.add("active");
  tabSpec.classList.remove("active");
  specDiv.style.display = "none";
  descDiv.style.display = "block";
});

descDiv.style.display = "none";

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const specs = document.querySelector('.specs');
  const desc = document.querySelector('.description');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      if (tab.id === 'tab-spec') {
        specs.classList.add('active');
        desc.classList.remove('active');
      } else {
        desc.classList.add('active');
        specs.classList.remove('active');
      }
    });
  });
});
