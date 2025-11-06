// Product Data - 100+ items for e-commerce
const PRODUCTS_DATA = [
    // Purun Collection (30 items)
    { id: 1, name: 'Purun Basket', subtitle: 'Keranjang Purun', category: 'purun', description: 'Anyaman purun dengan pola geometris hangat dan desain klasik', price: 'Rp 150.000', icon: '🧺' },
    { id: 2, name: 'Purun Wall Art', subtitle: 'Seni Dinding Purun', category: 'purun', description: 'Panel dekorasi purun dengan komposisi kontemporer yang elegan', price: 'Rp 250.000', icon: '🖼️' },
    { id: 3, name: 'Purun Organizer', subtitle: 'Organizer Purun', category: 'purun', description: 'Kotak organizer purun dengan detail tenun rapat dan fungsional', price: 'Rp 180.000', icon: '📦' },
    { id: 4, name: 'Purun Vase', subtitle: 'Vas Bunga Purun', category: 'purun', description: 'Vas bunga purun dengan desain minimalis dan elegan', price: 'Rp 95.000', icon: '🌺' },
    { id: 5, name: 'Purun Lamp Shade', subtitle: 'Tudung Lampu Purun', category: 'purun', description: 'Tutup lampu purun dengan pola anyaman tradisional', price: 'Rp 220.000', icon: '💡' },
    { id: 6, name: 'Purun Coaster Set', subtitle: 'Set Alas Gelas Purun', category: 'purun', description: 'Set alas gelas purun dengan motif etnik yang cantik', price: 'Rp 75.000', icon: '🍷' },
    { id: 7, name: 'Purun Placemats', subtitle: 'Alas Meja Purun', category: 'purun', description: 'Set alas meja purun dengan tekstur alami yang lembut', price: 'Rp 120.000', icon: '🍽️' },
    { id: 8, name: 'Purun Bowl', subtitle: 'Mangkuk Purun', category: 'purun', description: 'Mangkuk purun dengan finishing halus dan tahan lama', price: 'Rp 85.000', icon: '🥣' },
    { id: 9, name: 'Purun Tray', subtitle: 'Nampan Purun', category: 'purun', description: 'Nampan purun untuk penyajian dengan desain minimalis', price: 'Rp 110.000', icon: '🍲' },
    { id: 10, name: 'Purun Wall Hanging', subtitle: 'Hiasan Dinding Purun', category: 'purun', description: 'Hiasan dinding purun dengan detail intrik dan artistik', price: 'Rp 280.000', icon: '🎨' },
    { id: 11, name: 'Purun Storage Box', subtitle: 'Kotak Penyimpan Purun', category: 'purun', description: 'Kotak penyimpan purun bersusun dengan desain modern', price: 'Rp 195.000', icon: '📪' },
    { id: 12, name: 'Purun Decoration', subtitle: 'Dekorasi Purun', category: 'purun', description: 'Dekorasi rumah purun dengan bentuk artistik', price: 'Rp 145.000', icon: '✨' },
    { id: 13, name: 'Purun Table Runner', subtitle: 'Taplak Meja Purun', category: 'purun', description: 'Taplak meja purun dengan motif tradisional yang elegan', price: 'Rp 165.000', icon: '🧣' },
    { id: 14, name: 'Purun Wine Holder', subtitle: 'Tempat Botol Purun', category: 'purun', description: 'Tempat botol wine purun dengan desain unik', price: 'Rp 135.000', icon: '🍾' },
    { id: 15, name: 'Purun Tissue Box', subtitle: 'Kotak Tisu Purun', category: 'purun', description: 'Kotak tisu purun dengan ukiran detail yang indah', price: 'Rp 105.000', icon: '📄' },
    { id: 16, name: 'Purun Plant Pot', subtitle: 'Pot Tanaman Purun', category: 'purun', description: 'Pot tanaman purun untuk tanaman indoor', price: 'Rp 125.000', icon: '🪴' },
    { id: 17, name: 'Purun Wall Panel', subtitle: 'Panel Dinding Purun', category: 'purun', description: 'Panel dinding purun untuk aksen ruangan', price: 'Rp 310.000', icon: '🏠' },
    { id: 18, name: 'Purun Candle Holder', subtitle: 'Tempat Lilin Purun', category: 'purun', description: 'Tempat lilin purun dengan desain elegan', price: 'Rp 115.000', icon: '🕯️' },
    { id: 19, name: 'Purun Pendant', subtitle: 'Gantungan Purun', category: 'purun', description: 'Gantungan purun dengan detail traditional', price: 'Rp 140.000', icon: '⭐' },
    { id: 20, name: 'Purun Book Holder', subtitle: 'Pemegang Buku Purun', category: 'purun', description: 'Pemegang buku purun untuk koleksi buku', price: 'Rp 130.000', icon: '📚' },
    { id: 21, name: 'Purun Napkin Holder', subtitle: 'Pemegang Serbet Purun', category: 'purun', description: 'Pemegang serbet purun untuk meja makan', price: 'Rp 95.000', icon: '🧻' },
    { id: 22, name: 'Purun Door Hanging', subtitle: 'Hiasan Pintu Purun', category: 'purun', description: 'Hiasan pintu purun dengan motif asli', price: 'Rp 160.000', icon: '🚪' },
    { id: 23, name: 'Purun Breadbasket', subtitle: 'Keranjang Roti Purun', category: 'purun', description: 'Keranjang roti purun untuk hiasan meja', price: 'Rp 170.000', icon: '🥖' },
    { id: 24, name: 'Purun Mirror Frame', subtitle: 'Bingkai Cermin Purun', category: 'purun', description: 'Bingkai cermin purun dengan ukiran indah', price: 'Rp 225.000', icon: '🪞' },
    { id: 25, name: 'Purun Box Set', subtitle: 'Set Kotak Purun', category: 'purun', description: 'Set kotak purun bersusun dengan berbagai ukuran', price: 'Rp 240.000', icon: '🎁' },
    { id: 26, name: 'Purun Wall Clock', subtitle: 'Jam Dinding Purun', category: 'purun', description: 'Jam dinding purun dengan desain artistik', price: 'Rp 185.000', icon: '🕐' },
    { id: 27, name: 'Purun Desk Organizer', subtitle: 'Organizer Meja Kerja', category: 'purun', description: 'Organizer meja kerja purun yang fungsional', price: 'Rp 155.000', icon: '📋' },
    { id: 28, name: 'Purun Hat', subtitle: 'Topi Purun', category: 'purun', description: 'Topi purun tradisional dengan desain modern', price: 'Rp 175.000', icon: '🎩' },
    { id: 29, name: 'Purun Cushion', subtitle: 'Bantal Purun', category: 'purun', description: 'Bantal purun untuk kenyamanan duduk', price: 'Rp 205.000', icon: '🛋️' },
    { id: 30, name: 'Purun Table Mat', subtitle: 'Tatakan Meja Purun', category: 'purun', description: 'Tatakan meja purun dengan pola geometris', price: 'Rp 100.000', icon: '📐' },

    // Rotan Collection (35 items)
    { id: 31, name: 'Rotan Lounge Chair', subtitle: 'Kursi Rotan', category: 'rotan', description: 'Kursi rotan dengan siluet organik dan bantalan nyaman', price: 'Rp 1.200.000', icon: '🪑' },
    { id: 32, name: 'Rotan Pendant', subtitle: 'Lampu Gantung Rotan', category: 'rotan', description: 'Lampu gantung rotan dengan pola bayangan dramatis', price: 'Rp 450.000', icon: '💡' },
    { id: 33, name: 'Rotan Coffee Table', subtitle: 'Meja Kopi Rotan', category: 'rotan', description: 'Meja kopi rotan dengan permukaan kaca bundar', price: 'Rp 800.000', icon: '☕' },
    { id: 34, name: 'Rotan Bookshelf', subtitle: 'Rak Buku Rotan', category: 'rotan', description: 'Rak buku rotan dengan desain minimalis modern', price: 'Rp 650.000', icon: '📖' },
    { id: 35, name: 'Rotan Mirror Frame', subtitle: 'Bingkai Cermin Rotan', category: 'rotan', description: 'Bingkai cermin rotan dengan ukiran detail', price: 'Rp 380.000', icon: '🪞' },
    { id: 36, name: 'Rotan Plant Stand', subtitle: 'Rak Tanaman Rotan', category: 'rotan', description: 'Rak tanaman rotan dengan ketinggian adjustable', price: 'Rp 320.000', icon: '🌿' },
    { id: 37, name: 'Rotan Room Divider', subtitle: 'Pembagi Ruang Rotan', category: 'rotan', description: 'Pembagi ruang rotan dengan desain artistik', price: 'Rp 950.000', icon: '📏' },
    { id: 38, name: 'Rotan Dining Chair', subtitle: 'Kursi Makan Rotan', category: 'rotan', description: 'Kursi makan rotan dengan bantalan empuk', price: 'Rp 600.000', icon: '🍽️' },
    { id: 39, name: 'Rotan Side Table', subtitle: 'Meja Samping Rotan', category: 'rotan', description: 'Meja samping rotan dengan permukaan marmer', price: 'Rp 420.000', icon: '⚪' },
    { id: 40, name: 'Rotan Basket', subtitle: 'Keranjang Rotan', category: 'rotan', description: 'Keranjang rotan untuk penyimpanan dengan tutup', price: 'Rp 280.000', icon: '🧺' },
    { id: 41, name: 'Rotan Wall Art', subtitle: 'Seni Dinding Rotan', category: 'rotan', description: 'Panel rotan untuk aksen dinding yang elegan', price: 'Rp 520.000', icon: '🎨' },
    { id: 42, name: 'Rotan Sofa', subtitle: 'Sofa Rotan', category: 'rotan', description: 'Sofa rotan dengan desain kontemporaer', price: 'Rp 2.500.000', icon: '🛋️' },
    { id: 43, name: 'Rotan Armchair', subtitle: 'Kursi Berlengan Rotan', category: 'rotan', description: 'Kursi berlengan rotan yang ergonomis', price: 'Rp 750.000', icon: '🪑' },
    { id: 44, name: 'Rotan Lamp Base', subtitle: 'Basis Lampu Rotan', category: 'rotan', description: 'Basis lampu rotan dengan desain unik', price: 'Rp 380.000', icon: '💡' },
    { id: 45, name: 'Rotan Storage Chest', subtitle: 'Peti Penyimpan Rotan', category: 'rotan', description: 'Peti penyimpan rotan untuk barang koleksi', price: 'Rp 900.000', icon: '🎁' },
    { id: 46, name: 'Rotan Hanging Chair', subtitle: 'Kursi Gantung Rotan', category: 'rotan', description: 'Kursi gantung rotan untuk santai di teras', price: 'Rp 1.100.000', icon: '🪁' },
    { id: 47, name: 'Rotan Desk', subtitle: 'Meja Kerja Rotan', category: 'rotan', description: 'Meja kerja rotan dengan laci penyimpan', price: 'Rp 1.400.000', icon: '💼' },
    { id: 48, name: 'Rotan Headboard', subtitle: 'Kepala Tempat Tidur Rotan', category: 'rotan', description: 'Kepala tempat tidur rotan dengan desain mewah', price: 'Rp 1.800.000', icon: '🛏️' },
    { id: 49, name: 'Rotan Bed Frame', subtitle: 'Rangka Tempat Tidur Rotan', category: 'rotan', description: 'Rangka tempat tidur rotan yang kokoh', price: 'Rp 3.200.000', icon: '🛏️' },
    { id: 50, name: 'Rotan Console Table', subtitle: 'Meja Konsol Rotan', category: 'rotan', description: 'Meja konsol rotan untuk entri rumah', price: 'Rp 580.000', icon: '📦' },
    { id: 51, name: 'Rotan Bar Stool', subtitle: 'Kursi Bar Rotan', category: 'rotan', description: 'Kursi bar rotan dengan bantalan tinggi', price: 'Rp 350.000', icon: '🍺' },
    { id: 52, name: 'Rotan Nesting Table', subtitle: 'Meja Bersarang Rotan', category: 'rotan', description: 'Set meja bersarang rotan yang praktis', price: 'Rp 620.000', icon: '📦' },
    { id: 53, name: 'Rotan Wall Sconce', subtitle: 'Lampu Dinding Rotan', category: 'rotan', description: 'Lampu dinding rotan dengan desain vintage', price: 'Rp 420.000', icon: '🕯️' },
    { id: 54, name: 'Rotan Ceiling Light', subtitle: 'Lampu Plafon Rotan', category: 'rotan', description: 'Lampu plafon rotan untuk ruang tamu', price: 'Rp 540.000', icon: '💡' },
    { id: 55, name: 'Rotan Floor Lamp', subtitle: 'Lampu Lantai Rotan', category: 'rotan', description: 'Lampu lantai rotan dengan tinggi adjustable', price: 'Rp 480.000', icon: '💡' },
    { id: 56, name: 'Rotan Outdoor Chair', subtitle: 'Kursi Outdoor Rotan', category: 'rotan', description: 'Kursi outdoor rotan tahan cuaca', price: 'Rp 520.000', icon: '🪑' },
    { id: 57, name: 'Rotan Outdoor Table', subtitle: 'Meja Outdoor Rotan', category: 'rotan', description: 'Meja outdoor rotan untuk teras', price: 'Rp 860.000', icon: '☕' },
    { id: 58, name: 'Rotan Outdoor Sofa', subtitle: 'Sofa Outdoor Rotan', category: 'rotan', description: 'Sofa outdoor rotan dengan cushion', price: 'Rp 1.600.000', icon: '🛋️' },
    { id: 59, name: 'Rotan Magazine Holder', subtitle: 'Tempat Majalah Rotan', category: 'rotan', description: 'Tempat majalah rotan untuk ruang santai', price: 'Rp 280.000', icon: '📰' },
    { id: 60, name: 'Rotan Umbrella Stand', subtitle: 'Tempat Payung Rotan', category: 'rotan', description: 'Tempat payung rotan untuk entri', price: 'Rp 220.000', icon: '☂️' },
    { id: 61, name: 'Rotan Rocking Chair', subtitle: 'Kursi Goyang Rotan', category: 'rotan', description: 'Kursi goyang rotan yang nyaman', price: 'Rp 680.000', icon: '🪑' },
    { id: 62, name: 'Rotan Ottoman', subtitle: 'Pijakan Kaki Rotan', category: 'rotan', description: 'Pijakan kaki rotan dengan bantalan', price: 'Rp 380.000', icon: '🪑' },
    { id: 63, name: 'Rotan Pouffe', subtitle: 'Dudukan Rotan', category: 'rotan', description: 'Dudukan rotan yang fleksibel', price: 'Rp 350.000', icon: '🪑' },
    { id: 64, name: 'Rotan Ladder', subtitle: 'Tangga Rotan', category: 'rotan', description: 'Tangga rotan dekoratif untuk dinding', price: 'Rp 420.000', icon: '🪜' },
    { id: 65, name: 'Rotan Shelving Unit', subtitle: 'Unit Rak Rotan', category: 'rotan', description: 'Unit rak rotan modular yang fungsional', price: 'Rp 1.050.000', icon: '📦' },

    // Eceng Gondok Collection (35+ items)
    { id: 66, name: 'Eceng Gondok Tote', subtitle: 'Tas Eceng Gondok', category: 'eceng-gondok', description: 'Tote bag eceng gondok dengan aksen kulit', price: 'Rp 120.000', icon: '👜' },
    { id: 67, name: 'Eceng Gondok Storage', subtitle: 'Penyimpanan Eceng Gondok', category: 'eceng-gondok', description: 'Set keranjang penyimpanan eceng gondok modular', price: 'Rp 200.000', icon: '📦' },
    { id: 68, name: 'Eceng Gondok Planter', subtitle: 'Pot Tanaman Eceng Gondok', category: 'eceng-gondok', description: 'Pot tanaman eceng gondok dengan finishing matte', price: 'Rp 95.000', icon: '🪴' },
    { id: 69, name: 'Eceng Gondok Basket', subtitle: 'Keranjang Eceng Gondok', category: 'eceng-gondok', description: 'Keranjang anyam eceng gondok dengan pegangan ergonomis', price: 'Rp 150.000', icon: '🧺' },
    { id: 70, name: 'Eceng Gondok Wall Hanging', subtitle: 'Hiasan Dinding Eceng Gondok', category: 'eceng-gondok', description: 'Hiasan dinding eceng gondok dengan desain unik', price: 'Rp 185.000', icon: '🎨' },
    { id: 71, name: 'Eceng Gondok Lamp Shade', subtitle: 'Tudung Lampu Eceng Gondok', category: 'eceng-gondok', description: 'Tudung lampu eceng gondok dengan tekstur alami', price: 'Rp 240.000', icon: '💡' },
    { id: 72, name: 'Eceng Gondok Coaster', subtitle: 'Alas Gelas Eceng Gondok', category: 'eceng-gondok', description: 'Set alas gelas eceng gondok yang praktis', price: 'Rp 65.000', icon: '🍷' },
    { id: 73, name: 'Eceng Gondok Table Runner', subtitle: 'Taplak Meja Eceng Gondok', category: 'eceng-gondok', description: 'Taplak meja eceng gondok dengan motif tradisional', price: 'Rp 155.000', icon: '🧣' },
    { id: 74, name: 'Eceng Gondok Placemats', subtitle: 'Alas Meja Eceng Gondok', category: 'eceng-gondok', description: 'Set alas meja eceng gondok yang tahan lama', price: 'Rp 110.000', icon: '🍽️' },
    { id: 75, name: 'Eceng Gondok Bowl', subtitle: 'Mangkuk Eceng Gondok', category: 'eceng-gondok', description: 'Mangkuk eceng gondok untuk penyajian buah', price: 'Rp 85.000', icon: '🥣' },
    { id: 76, name: 'Eceng Gondok Hat', subtitle: 'Topi Eceng Gondok', category: 'eceng-gondok', description: 'Topi eceng gondok dengan desain tradisional', price: 'Rp 140.000', icon: '🎩' },
    { id: 77, name: 'Eceng Gondok Bag', subtitle: 'Tas Eceng Gondok', category: 'eceng-gondok', description: 'Tas shoulder eceng gondok yang stylish', price: 'Rp 175.000', icon: '👜' },
    { id: 78, name: 'Eceng Gondok Backpack', subtitle: 'Ransel Eceng Gondok', category: 'eceng-gondok', description: 'Ransel eceng gondok untuk daily use', price: 'Rp 195.000', icon: '🎒' },
    { id: 79, name: 'Eceng Gondok Clutch', subtitle: 'Dompet Eceng Gondok', category: 'eceng-gondok', description: 'Dompet eceng gondok dengan aksen modern', price: 'Rp 85.000', icon: '👛' },
    { id: 80, name: 'Eceng Gondok Wall Panel', subtitle: 'Panel Dinding Eceng Gondok', category: 'eceng-gondok', description: 'Panel dinding eceng gondok untuk aksen ruangan', price: 'Rp 220.000', icon: '📐' },
    { id: 81, name: 'Eceng Gondok Wall Art', subtitle: 'Seni Dinding Eceng Gondok', category: 'eceng-gondok', description: 'Seni dinding eceng gondok dengan motif intrik', price: 'Rp 280.000', icon: '🎨' },
    { id: 82, name: 'Eceng Gondok Mirror Frame', subtitle: 'Bingkai Cermin Eceng Gondok', category: 'eceng-gondok', description: 'Bingkai cermin eceng gondok dengan finishing halus', price: 'Rp 210.000', icon: '🪞' },
    { id: 83, name: 'Eceng Gondok Tissue Box', subtitle: 'Kotak Tisu Eceng Gondok', category: 'eceng-gondok', description: 'Kotak tisu eceng gondok yang elegan', price: 'Rp 95.000', icon: '📄' },
    { id: 84, name: 'Eceng Gondok Candle Holder', subtitle: 'Tempat Lilin Eceng Gondok', category: 'eceng-gondok', description: 'Tempat lilin eceng gondok untuk meja', price: 'Rp 105.000', icon: '🕯️' },
    { id: 85, name: 'Eceng Gondok Decoration', subtitle: 'Dekorasi Eceng Gondok', category: 'eceng-gondok', description: 'Dekorasi rumah eceng gondok artistik', price: 'Rp 135.000', icon: '✨' },
    { id: 86, name: 'Eceng Gondok Plant Pot', subtitle: 'Pot Tanaman Eceng Gondok', category: 'eceng-gondok', description: 'Pot tanaman eceng gondok untuk indoor', price: 'Rp 115.000', icon: '🪴' },
    { id: 87, name: 'Eceng Gondok Door Hanging', subtitle: 'Hiasan Pintu Eceng Gondok', category: 'eceng-gondok', description: 'Hiasan pintu eceng gondok dengan motif asli', price: 'Rp 165.000', icon: '🚪' },
    { id: 88, name: 'Eceng Gondok Breadbasket', subtitle: 'Keranjang Roti Eceng Gondok', category: 'eceng-gondok', description: 'Keranjang roti eceng gondok untuk meja makan', price: 'Rp 160.000', icon: '🥖' },
    { id: 89, name: 'Eceng Gondok Box Set', subtitle: 'Set Kotak Eceng Gondok', category: 'eceng-gondok', description: 'Set kotak eceng gondok bersusun', price: 'Rp 235.000', icon: '🎁' },
    { id: 90, name: 'Eceng Gondok Desk Organizer', subtitle: 'Organizer Meja Kerja', category: 'eceng-gondok', description: 'Organizer meja kerja eceng gondok', price: 'Rp 145.000', icon: '📋' },
    { id: 91, name: 'Eceng Gondok Book Holder', subtitle: 'Pemegang Buku Eceng Gondok', category: 'eceng-gondok', description: 'Pemegang buku eceng gondok untuk rak', price: 'Rp 120.000', icon: '📚' },
    { id: 92, name: 'Eceng Gondok Napkin Holder', subtitle: 'Pemegang Serbet', category: 'eceng-gondok', description: 'Pemegang serbet eceng gondok untuk meja', price: 'Rp 85.000', icon: '🧻' },
    { id: 93, name: 'Eceng Gondok Wine Holder', subtitle: 'Tempat Botol Eceng Gondok', category: 'eceng-gondok', description: 'Tempat botol wine eceng gondok', price: 'Rp 130.000', icon: '🍾' },
    { id: 94, name: 'Eceng Gondok Table Mat', subtitle: 'Tatakan Meja Eceng Gondok', category: 'eceng-gondok', description: 'Tatakan meja eceng gondok dengan pola geometric', price: 'Rp 100.000', icon: '📐' },
    { id: 95, name: 'Eceng Gondok Cushion', subtitle: 'Bantal Eceng Gondok', category: 'eceng-gondok', description: 'Bantal eceng gondok untuk kenyamanan', price: 'Rp 200.000', icon: '🛋️' },
    { id: 96, name: 'Eceng Gondok Rug', subtitle: 'Karpet Eceng Gondok', category: 'eceng-gondok', description: 'Karpet eceng gondok dengan desain artistik', price: 'Rp 380.000', icon: '🟫' },
    { id: 97, name: 'Eceng Gondok Shoes', subtitle: 'Sepatu Eceng Gondok', category: 'eceng-gondok', description: 'Sepatu eceng gondok dengan desain casual', price: 'Rp 220.000', icon: '👟' },
    { id: 98, name: 'Eceng Gondok Slippers', subtitle: 'Sandal Eceng Gondok', category: 'eceng-gondok', description: 'Sandal eceng gondok untuk di rumah', price: 'Rp 95.000', icon: '👡' },
    { id: 99, name: 'Eceng Gondok Flip Flops', subtitle: 'Sandal Jepit Eceng Gondok', category: 'eceng-gondok', description: 'Sandal jepit eceng gondok yang nyaman', price: 'Rp 75.000', icon: '🩴' },
    { id: 100, name: 'Eceng Gondok Box Cushion', subtitle: 'Bantal Kotak Eceng Gondok', category: 'eceng-gondok', description: 'Bantal kotak eceng gondok untuk dekorasi', price: 'Rp 155.000', icon: '🎀' },
];

const ITEMS_PER_PAGE = 8;
let currentPage = 1;
let currentCategory = 'all';
let filteredProducts = PRODUCTS_DATA;
let totalPages = Math.ceil(PRODUCTS_DATA.length / ITEMS_PER_PAGE);

// Get filtered products based on category
function getFilteredProducts() {
    if (currentCategory === 'all') {
        return PRODUCTS_DATA;
    }
    return PRODUCTS_DATA.filter(product => product.category === currentCategory);
}

// Loading Screen Management
const loadingScreen = document.getElementById('loadingScreen');
const productPage = document.querySelector('.product-page');

// Simulate loading progress
let loadingProgress = 0;
const loadingInterval = setInterval(() => {
    loadingProgress += Math.random() * 15;
    if (loadingProgress >= 100) {
        loadingProgress = 100;
        clearInterval(loadingInterval);
        
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            productPage.classList.add('loaded');
            
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 800);
        }, 500);
    }
}, 200);

// Get products for current page
function getPageProducts(page) {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, endIndex);
}

// Render product cards
function renderProductCards(page) {
    const productsGrid = document.getElementById('productsGrid');
    const products = getPageProducts(page);
    
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="card-header">
                <div class="card-header-icon">${product.icon}</div>
                <div class="card-header-text">
                    <h3>${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</h3>
                    <p>${product.subtitle}</p>
                </div>
            </div>
            <div class="card-image">
                <span>${product.icon}</span>
            </div>
            <div class="card-content">
                <h2 class="card-title">${product.name}</h2>
                <p class="card-subtitle">${product.subtitle}</p>
                <p class="card-description">${product.description}</p>
                <p class="card-price">${product.price}</p>
                <div class="card-buttons">
                    <button class="btn btn-secondary">Secondary</button>
                    <button class="btn btn-primary">Primary</button>
                </div>
            </div>
        </div>
    `).join('');

    // Add click handlers for cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.btn')) {
                const productId = card.dataset.id;
                const product = PRODUCTS_DATA.find(p => p.id === parseInt(productId));
                if (product) {
                    openLightbox(product);
                    document.body.classList.add('lightbox-open');
                }
            }
        });
    });

    updateNavigationButtons();
}

// Update pagination UI
function updatePaginationUI() {
    const paginationNumbers = document.getElementById('paginationNumbers');
    let paginationHTML = '';
    
    // Update total pages based on filtered products
    totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE) || 1;

    // Show first page
    paginationHTML += `<button class="pagination-number ${currentPage === 1 ? 'active' : ''}" data-page="1">1</button>`;

    // Show ellipsis and middle pages
    if (totalPages <= 7) {
        // Show all pages if 7 or fewer
        for (let i = 2; i <= totalPages; i++) {
            paginationHTML += `<button class="pagination-number ${currentPage === i ? 'active' : ''}" data-page="${i}">${i}</button>`;
        }
    } else {
        // Show ellipsis and limited pages
        if (currentPage > 3) {
            paginationHTML += `<span class="pagination-ellipsis">...</span>`;
        }

        let startPage = Math.max(2, currentPage - 1);
        let endPage = Math.min(totalPages - 1, currentPage + 1);

        for (let i = startPage; i <= endPage; i++) {
            paginationHTML += `<button class="pagination-number ${currentPage === i ? 'active' : ''}" data-page="${i}">${i}</button>`;
        }

        if (currentPage < totalPages - 2) {
            paginationHTML += `<span class="pagination-ellipsis">...</span>`;
        }

        // Show last page
        paginationHTML += `<button class="pagination-number ${currentPage === totalPages ? 'active' : ''}" data-page="${totalPages}">${totalPages}</button>`;
    }

    paginationNumbers.innerHTML = paginationHTML;

    // Add click handlers
    document.querySelectorAll('.pagination-number').forEach(btn => {
        btn.addEventListener('click', () => {
            currentPage = parseInt(btn.dataset.page);
            renderProductCards(currentPage);
            updatePaginationUI();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// Update navigation button states
function updateNavigationButtons() {
    const navPrev = document.getElementById('navPrev');
    const navNext = document.getElementById('navNext');
    const paginationPrev = document.getElementById('paginationPrev');
    const paginationNext = document.getElementById('paginationNext');

    const canGoPrev = currentPage > 1;
    const canGoNext = currentPage < totalPages;

    navPrev.disabled = !canGoPrev;
    navNext.disabled = !canGoNext;
    paginationPrev.disabled = !canGoPrev;
    paginationNext.disabled = !canGoNext;
}

// Navigation handlers
document.getElementById('navPrev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderProductCards(currentPage);
        updatePaginationUI();
    }
});

document.getElementById('navNext').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderProductCards(currentPage);
        updatePaginationUI();
    }
});

document.getElementById('paginationPrev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderProductCards(currentPage);
        updatePaginationUI();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

document.getElementById('paginationNext').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderProductCards(currentPage);
        updatePaginationUI();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Category filter handlers
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', (e) => {
        const category = card.dataset.category;
        currentCategory = category;
        
        // Update active state
        document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        
        // Reset to page 1 and filter products
        currentPage = 1;
        filteredProducts = getFilteredProducts();
        
        // Re-render products
        renderProductCards(currentPage);
        updatePaginationUI();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Lightbox functionality
const lightbox = document.getElementById('galleryLightbox');
const lightboxClose = lightbox.querySelector('.lightbox-close');
let currentProductCard = null;

function openLightbox(product) {
    currentProductCard = product;

    lightbox.querySelector('.lightbox-title').textContent = product.name;
    lightbox.querySelector('.lightbox-subtitle').textContent = product.subtitle;
    lightbox.querySelector('.lightbox-price').textContent = product.price;
    lightbox.querySelector('.lightbox-description').textContent = product.description;
    lightbox.querySelector('.lightbox-image-container').innerHTML = `<div class="lightbox-emoji">${product.icon}</div>`;

    lightbox.classList.add('is-visible');
    lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
    lightbox.classList.remove('is-visible');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
}

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Initialize app
renderProductCards(currentPage);
updatePaginationUI();