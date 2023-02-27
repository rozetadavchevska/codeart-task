const accordionItem = document.querySelectorAll('.accordion-open');

accordionItem.forEach((item) => {
    const accordionHeader = item.querySelector('.accordion-header');
    
    accordionHeader.addEventListener('click', () => {
        
        accordionItem.forEach((accordion) => {
            if(accordion !== item){
                accordion.classList.remove('active');   
            }
        });

        item.classList.toggle('active');

  });
});

const firstBuyNowBtn = document.getElementById('first-buy-now');

firstBuyNowBtn.addEventListener('click', () => {
    const sectionFourBuy = document.getElementById('section-04-buy');
    sectionFourBuy.scrollIntoView({behavior: 'smooth'});
});

const secondBuyNowBtn = document.getElementById('second-buy-now');

secondBuyNowBtn.addEventListener('click', () => {
    const sectionSevenBuy = document.getElementById('section-07-buy');
    sectionSevenBuy.scrollIntoView({behavior: 'smooth'});
});