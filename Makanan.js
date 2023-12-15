import Menu from "./Menu.js";

class Makanan extends Menu {
  tambahMakanan() {
    const makanan = super.aksesPrivate();
    Menu.makanan.push(makanan);
  }
}

function createMenuMakanan(nama, harga, stock) {
  const makanan = new Makanan(nama, harga, stock);
  makanan.tambahMakanan();
}

createMenuMakanan("Mie Ayam", "15000", 5);
createMenuMakanan("Bakso", "20000", 0);

Menu.lihatMenu("makanan");
