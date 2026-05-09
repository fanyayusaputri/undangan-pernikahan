  document.getElementById("btnBuka").addEventListener("click", function () {
    const musik = document.getElementById("musik");

    musik.volume = 0;

    musik.addEventListener("loadedmetadata", () => {
      musik.currentTime = 64;
      musik.play();
    });

    // fallback kalau sudah ready
    musik.currentTime = 64;
    musik.play();

    let vol = 0;
    const interval = setInterval(() => {
      if (vol < 0.3) {
        vol += 0.05;
        musik.volume = vol;
      } else {
        clearInterval(interval);
      }
    }, 200);
  });
  function playMusic() {
      const musik = document.getElementById("musik");
      musik.play();
    }
  const params = new URLSearchParams(window.location.search);
    const nama = params.get("to");

    if (nama) {
      const namaDecode = decodeURIComponent(nama);

      // tampil di hero
      const elNama = document.getElementById("namaTamu");
      if (elNama) elNama.innerText = namaDecode;

      // isi otomatis ke form
      const inputNama = document.getElementById("nama");
      if (inputNama) inputNama.value = namaDecode;
  }

  function playMusic() {
    document.getElementById("music").play();
  }
  function copyRek(no) {
    navigator.clipboard.writeText(no);

    const toast = document.getElementById("toast");
    toast.innerText = "Rekening " + no + " berhasil disalin ✨";

    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  }

  let dataRSVP = {};

  document.getElementById("rsvpForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // simpan data dulu
    dataRSVP.nama = document.getElementById("nama").value;
    dataRSVP.jumlah = document.getElementById("jumlah").value;
    dataRSVP.status = document.getElementById("status").value;
    dataRSVP.ucapan = document.getElementById("ucapan").value;

    // tampilkan popup
    document.getElementById("popupWA").style.display = "flex";
  });

  function kirimWA(tujuan) {
    const nomor = tujuan === "noval"
      ? "6281281419884"
      : "6281348313011";

    const text = `Konfirmasi Kehadiran - Noval & Nabila 💍

  Nama: ${dataRSVP.nama}
  Jumlah Tamu: ${dataRSVP.jumlah}
  Status: ${dataRSVP.status}

  Ucapan:
  ${dataRSVP.ucapan}`;

    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    tutupPopup();
  }

  function tutupPopup() {
    document.getElementById("popupWA").style.display = "none";
  }

    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', () => {
      sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          sec.classList.add('show');
        }
      });
    });

    const targetDate = new Date("May 31, 2026 00:00:00").getTime();

  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "Hari Bahagia Telah Tiba 💖";
    }
  }, 1000);



  const slider = document.querySelector('.gallery-slider');

  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
  });

  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // kecepatan geser
    slider.scrollLeft = scrollLeft - walk;
  });

