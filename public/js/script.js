  function download(url) {
    window.open(url, '_blank');
  }

  // Fungsi show & hide button download atau icon
  function toggleDownloadView() {
    const buttons = document.querySelectorAll('.buttonDownload');
    const icons = document.querySelectorAll('.iconDownload');
    const isMobile = window.innerWidth < 768; // breakpoint md = 768px

    buttons.forEach((btn, index) => {
      const icon = icons[index];
      if (isMobile) {
        btn.style.display = 'none';
        icon.style.display = 'block';
      } else {
        btn.style.display = 'block';
        icon.style.display = 'none';
      }
    });
  }

  // Jalankan saat load & resize
  window.addEventListener('load', toggleDownloadView);
  window.addEventListener('resize', toggleDownloadView);