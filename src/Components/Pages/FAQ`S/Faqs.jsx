import React from 'react';
import './Faqs.css';





const Faqs = () => {
  

  return (
    
    <div className='bg-question'>
    <div class="container">
      <div className='text-question'>
  <h2 class="text-center mb-2">Frequently Asked Questions</h2>
  <p className='text-center'> Last Updated, 1April 2023</p>
  </div>
  <div class="accordion" id="faqAccordion">

    <div class="accordion-item">
      <h3 class="accordion-header" id="faqQuestion1">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqAnswer1" aria-expanded="false" aria-controls="faqAnswer1">
          What are your shipping options?
        </button>
      </h3>
      <div id="faqAnswer1" class="accordion-collapse collapse" aria-labelledby="faqQuestion1" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          We offer standard shipping, which takes 3-5 business days, and express shipping, which takes 1-2 business days. Shipping costs vary depending on your location and the size of your order.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h3 class="accordion-header" id="faqQuestion2">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqAnswer2" aria-expanded="false" aria-controls="faqAnswer2">
          What is your return policy?
        </button>
      </h3>
      <div id="faqAnswer2" class="accordion-collapse collapse" aria-labelledby="faqQuestion2" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          We accept returns within 30 days of purchase for unused and unopened products. Please contact us to initiate a return and we will provide you with a return label.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h3 class="accordion-header" id="faqQuestion3">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqAnswer3" aria-expanded="false" aria-controls="faqAnswer3">
          What payment methods do you accept?
        </button>
      </h3>
      <div id="faqAnswer3" class="accordion-collapse collapse" aria-labelledby="faqQuestion3" data-bs-parent="#faqAccordion">
        <div class="accordion-body">
          We accept all major credit cards, as well as PayPal and Apple Pay.
        </div>
      </div>
    </div>
   </div>
  </div>
</div>

  );
};

export default Faqs;