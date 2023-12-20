import Menu from "./Menu.js";

class Makanan extends Menu {
  tambahMakanan() {
    const makanan = super.aksesPrivate();
    Menu.tambahMakanan(makanan);
  }
}

function createMenuMakanan(nama, harga, stock) {
  const makanan = new Makanan(nama, harga, stock);
  makanan.tambahMakanan();
}

createMenuMakanan("Mie Ayam", "15000", 0);
createMenuMakanan("Bakso", "20000", 1);

Menu.lihatMenu("makanan");
