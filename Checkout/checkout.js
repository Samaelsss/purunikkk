// checkout.js - render summary from cart or from query params

function formatRupiah(num){
  if (typeof num === 'string') {
    return num.startsWith('Rp') ? num : 'Rp ' + num;
  }
  return 'Rp ' + Number(num).toLocaleString('id-ID');
}

function parsePriceToNumber(price){
  if (typeof price === 'number') return price;
  const digits = String(price).replace(/[^0-9]/g, '');
  return Number(digits || 0);
}

// Prefer a temporary selection when coming from "Beli Sekarang" or Cart selection
const selection = JSON.parse(localStorage.getItem('checkoutSelection')||'null');
const cart = Array.isArray(selection) && selection.length
  ? selection
  : JSON.parse(localStorage.getItem('cart')||'[]');

function renderSummary(){
  const list = document.getElementById('summary-list');
  const totalItemsEl = document.getElementById('total-items');
  const subtotalEl = document.getElementById('subtotal');
  if (!list) return;
  list.innerHTML = '';

  let totalQty = 0;
  let subtotal = 0;

  cart.forEach(item => {
    const price = parsePriceToNumber(item.price);
    const qty = Number(item.qty || 1);
    totalQty += qty;
    subtotal += price * qty;

    const div = document.createElement('div');
    div.className = 'summary-item';
    div.innerHTML = `
      <div>
        <div class="name">${item.name || 'Produk'}</div>
        <div class="meta">Model: ${item.model || '-'} · Motif: ${item.motif || '-'}</div>
      </div>
      <div class="price">${formatRupiah(price * qty)}</div>
      <div class="qty">x ${qty}</div>
    `;
    list.appendChild(div);
  });

  totalItemsEl.textContent = `${totalQty} Pesanan`;
  subtotalEl.textContent = formatRupiah(subtotal);
}

renderSummary();

// Fake place order -> WhatsApp intent message (optional)
const placeBtn = document.getElementById('place-order');
placeBtn?.addEventListener('click', ()=>{
  const nameEl = document.getElementById('fullname');
  const addrEl = document.getElementById('address');
  const phoneEl = document.getElementById('phone');
  const errName = document.getElementById('err-fullname');
  const errAddr = document.getElementById('err-address');
  const errPhone = document.getElementById('err-phone');
  const fullname = (nameEl?.value || '').trim();
  const address = (addrEl?.value || '').trim();
  const phone = (phoneEl?.value || '').trim();

  // reset errors
  if (errName) errName.textContent = '';
  if (errAddr) errAddr.textContent = '';
  if (errPhone) errPhone.textContent = '';

  let hasError = false;
  if (!fullname) { if (errName) errName.textContent = 'Wajib diisi'; nameEl?.focus(); hasError = true; }
  if (!address) { if (errAddr) errAddr.textContent = 'Wajib diisi'; if (!hasError) addrEl?.focus(); hasError = true; }
  if (!phone) { if (errPhone) errPhone.textContent = 'Wajib diisi'; if (!hasError) phoneEl?.focus(); hasError = true; }
  const digits = phone.replace(/\D/g,'');
  if (!hasError && digits.length < 9) { if (errPhone) errPhone.textContent = 'No. HP tidak valid'; phoneEl?.focus(); hasError = true; }
  if (hasError) return;

  const messageLines = cart.map(c=>`• ${c.name} (${c.model} - ${c.motif}) x${c.qty} = ${formatRupiah(parsePriceToNumber(c.price)*c.qty)}`);
  const total = cart.reduce((s,c)=> s + (parsePriceToNumber(c.price)*c.qty), 0);
  const header = `Data Pembeli:%0ANama: ${encodeURIComponent(fullname)}%0AAlamat: ${encodeURIComponent(address)}%0ANo. HP: ${encodeURIComponent(phone)}`;
  const items = `Pesanan:%0A${messageLines.map(encodeURIComponent).join('%0A')}`;
  const totalLine = `Total: ${encodeURIComponent(formatRupiah(total))}`;
  const text = `${header}%0A%0A${items}%0A%0A${totalLine}`;
  const wa = `https://wa.me/?text=${text}`;
  window.open(wa, '_blank');
});
