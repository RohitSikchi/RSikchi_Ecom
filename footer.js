const footerHTML = `
<div class="footer-container container">

<div class="content_1">
  <img src="./images/logo3.png" alt="logo" />
  <p>
    Welcome to RSikchi E-com , your ultimate destination for
    cutting-edge gadgets!
  </p>
  <img src="./images/cards.png" alt="cards" />
</div>
<div class="content_2">
  <h4>SHOPPING</h4>
  <a href="#">Computer Store</a>
  <a href="#">Laptop Store</a>
  <a href="#">Accessories</a>
  <a href="#">Sales & Discount</a>
</div>
<div class="content_3">
  <h4>Experience</h4>
  <a href="./contact.html">Contact Us</a>
  <a href="" target="_blank">Payment Method</a>
  <a href="" target="_blank">Delivery</a>
  <a href="" target="_blank">Return and Exchange</a>
</div>

</div>
<div class="f-design">
<div class="f-design-txt">
  <p>RSikchi E-com Design and Code by Rohit Sikchi</p>
</div>
</div> `;

const footerElem = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin", footerHTML);
