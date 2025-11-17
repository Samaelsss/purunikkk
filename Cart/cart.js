// Cart/cart.js - render keranjang dari localStorage dan interaksi
// Struktur item yang didukung:
// { key, id, name, model, motif, price, qty, img/thumb/image }

(function(){
  const rupiah = (v) => 'Rp ' + Number(v||0).toLocaleString('id-ID');
  const getCart = () => JSON.parse(localStorage.getItem('cart')||'[]');
  const setCart = (arr) => localStorage.setItem('cart', JSON.stringify(arr));
  const getWishlist = () => JSON.parse(localStorage.getItem('wishlist')||'[]').map(String);
  const setWishlist = (arr) => localStorage.setItem('wishlist', JSON.stringify(arr));

  const listEl = document.getElementById('cart-list');
  const sumCountEl = document.getElementById('summary-count');
  const sumSubtotalEl = document.getElementById('summary-subtotal');
  const clearBtn = document.getElementById('clear-cart');
  const tpl = document.getElementById('cart-item-tpl');

  function normalizeCartItem(it){
    return {
      key: it.key || String(it.id),
      id: it.id,
      name: it.name || 'Produk',
      model: it.model || '-',
      motif: it.motif || '-',
      price: Number(it.price || 0),
      qty: Math.max(1, Number(it.qty || 1)),
      thumb: it.thumb || it.img || it.image || 'Product/img/IMG_4099.jpg'
    };
  }

  function computeSubtotal(cart){
    return cart.reduce((acc, it)=> acc + Number(it.price||0)*Number(it.qty||0), 0);
  }

  function updateSummary(cart){
    const subtotal = computeSubtotal(cart);
    sumCountEl.textContent = cart.length + ' Pesanan';
    sumSubtotalEl.textContent = rupiah(subtotal);
  }

  function render(){
    let cart = getCart().map(normalizeCartItem);
    listEl.innerHTML = '';

    if (!cart.length){
      listEl.innerHTML = '<div class="empty-cart">Keranjangmu masih kosong.</div>';
      updateSummary(cart);
      return;
    }

    cart.forEach((it)=>{
      const node = tpl.content.cloneNode(true);
      const el = node.querySelector('.cart-item');
      el.dataset.key = it.key;
      el.querySelector('.item-thumb').src = it.thumb;
      el.querySelector('.item-thumb').alt = it.name;
      el.querySelector('.item-name').textContent = it.name;
      const variantEl = el.querySelector('.item-variant');
      if (variantEl) {
        variantEl.innerHTML = `<span>Motif: ${it.motif}</span><span>Model: ${it.model}</span>`;
      }
      el.querySelector('.item-price').textContent = rupiah(it.price);
      el.querySelector('.qty-value').textContent = String(it.qty);
      el.querySelector('.item-total-value').textContent = rupiah(it.price * it.qty);

      // Qty handlers
      el.querySelector('.btn-minus').addEventListener('click', ()=>{
        let c = getCart();
        const idx = c.findIndex(x=> (x.key||String(x.id)) === it.key);
        if (idx>-1){ c[idx].qty = Math.max(1, Number(c[idx].qty||1)-1); setCart(c); render(); }
      });
      el.querySelector('.btn-plus').addEventListener('click', ()=>{
        let c = getCart();
        const idx = c.findIndex(x=> (x.key||String(x.id)) === it.key);
        if (idx>-1){ c[idx].qty = Number(c[idx].qty||1)+1; setCart(c); render(); }
      });

      // Remove item
      el.querySelector('.remove-item').addEventListener('click', ()=>{
        let c = getCart().filter(x=> (x.key||String(x.id)) !== it.key);
        setCart(c); render();
      });

      // Move to wishlist (toggle add)
      el.querySelector('.move-to-wishlist').addEventListener('click', ()=>{
        const idStr = String(it.id);
        let w = getWishlist();
        if (!w.includes(idStr)) w.push(idStr); else w = w.filter(x=>x!==idStr);
        setWishlist(w);
        if (typeof showToast === 'function') {
          showToast('Produk dipindahkan ke wishlist.', 'info');
        } else {
          alert('Produk dipindahkan ke wishlist.');
        }
      });

      listEl.appendChild(node);
    });

    updateSummary(getCart());
  }

  // Clear cart
  clearBtn?.addEventListener('click', async ()=>{
    let proceed = true;
    if (typeof confirmModal === 'function') {
      proceed = await confirmModal({ title: 'Kosongkan Keranjang', message: 'Kosongkan semua item di keranjang?', confirmText: 'Kosongkan', cancelText: 'Batal' });
    } else {
      proceed = confirm('Kosongkan semua item di keranjang?');
    }
    if (proceed){
      setCart([]); render();
      if (typeof showToast === 'function') showToast('Keranjang dikosongkan.', 'info');
    }
  });

  // Go render on load
  render();
})();
