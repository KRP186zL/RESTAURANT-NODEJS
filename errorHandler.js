class ValidasiError extends Error {
  constructor(message) {
    super(message);
    this.name = "Validasi Error";
  }
}

function validasiInputData(...data) {
  const [nama, email, password] = data;
  //   Validasi nama
  if (!nama) {
    throw new ValidasiError("Nama tidak boleh kosong !");
  }
}

function validasiPesanan(pesanan) {
  if (pesanan.length === 0) {
    throw new ValidasiError("Pilih Minimal 1 menu !");
  }
}

validasiPesanan([]);
