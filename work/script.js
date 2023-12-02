function selectSlider(tabId) {
  document.querySelectorAll('.slider__item').forEach((tab) => {
    tab.classList.remove('active');
  });

  const activeTab = document.getElementById(tabId);
  activeTab.classList.add('active');
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
}
