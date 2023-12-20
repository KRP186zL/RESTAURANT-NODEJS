class Menu {
  #nama;
  #harga;
  #stock;
  static makanan = [];
  static minuman = [];
  constructor(nama, harga, stock) {
    this.#nama = nama;
    this.#harga = harga;
    this.#stock = stock;
  }

  aksesPrivate() {
    return {
      nama: this.#nama,
      harga: this.#harga,
      stock: this.#stock,
    };
  }

  static tambahMakanan(makanan) {
    Menu.makanan.push(makanan);
  }

  static lihatMenu(jenis) {
    if (jenis === "makanan") {
      Menu.makanan.forEach((makanan, index) => {
        console.log(
          `${index + 1}. ${makanan.nama}, ${makanan.harga}, ${
            makanan.stock > 0 ? "Tersedia" : "Kosong"
          }`
        );
      });
    } else {
      console.log("Test");
    }
  }
}

export default Menu;
