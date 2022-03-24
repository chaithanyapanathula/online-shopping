<template>
  <div>
    <footer>
      <div class="footer-gray">
        <div class="footer-custom">
          <div class="footer-lists">
            <div class="footer-list-wrap">
              <h6 class="ftr-hdr">Order Toll Free</h6>
              <ul class="ftr-links-sub">
                <li>800-952-5592</li>
              </ul>
              <h6 class="ftr-hdr">International</h6>
              <ul class="ftr-links-sub">
                <li><a href="#" rel="nofollow">India </a></li>
                <li><a href="#" rel="nofollow">Indonesia</a></li>
              </ul>
            </div>
            <!--/.footer-list-wrap-->
            <div class="footer-list-wrap">
              <h6 class="ftr-hdr">Customer Service</h6>
              <ul class="ftr-links-sub">
                <li><a>Contact Us</a></li>
                <li><a>Ordering</a></li>
                <li><a>Shipping &amp; Delivery</a></li>
                <li><a>Returns</a></li>
                <li><a>FAQs</a></li>
              </ul>
            </div>
            <div class="footer-list-wrap">
              <h6 class="ftr-hdr">About</h6>
              <ul class="ftr-links-sub">
                <li><a>Our Company</a></li>
                <li><a>Careers</a></li>
              </ul>
            </div>
          </div>
          <!--/.footer-lists-->
          <div class="footer-email">
            <h6 class="ftr-hdr">
              Sign up for exclusive offers and inspiration
            </h6>
            <div id="ftr-email" class="ftr-email-form">
              <form id="ftrEmailForm" method="post">
                <div class="error">Please enter a valid email address</div>
                <input
                  type="text"
                  name="email_address_"
                  id="ftrEmailInput"
                  class="input"
                  placeholder="Enter email address"
                />

                <input type="submit" class="button" value="SUBMIT" />
              </form>
            </div>
          </div>
          <!--/.footer-email-->
          <div class="footer-social">
            <h6 class="ftr-hdr">Follow Us</h6>
            <ul>
              <li>
                <a>
                  <img
                    class="image"
                    alt="Like us on Facebook"
                    src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/fb.png"
                    width="29px"
                    height="29px"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    class="image"
                    alt="Follow us on Google+"
                    src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/gplus.png"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    class="image"
                    alt="Follow us on Pinterest"
                    src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/pin-badge.png"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    class="image"
                    alt="Follow us on Instagram"
                    src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/instagram-badge.png"
                  />
                </a>
              </li>
              <li>
                <a>
                  <img
                    class="image"
                    alt="Follow us on Twitter"
                    src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/twitter.png"
                  />
                </a>
              </li>
            </ul>
          </div>
          <!--/.footer-social-->
          <div class="footer-legal">
            <p>
              &copy; Supplies.com Inc. All Rights Reserved. |
              <a>Privacy Policy</a> | <a>Terms of Use</a> | <a>Terms of Sale</a>
            </p>
            <p>
              Supplies.com are trademarks or registered trademarks of
              Supplies.com Inc.
            </p>
            <p>
              Various aspects of this website are covered by issued patent
              applications.
            </p>
          </div>

          <!--/.footer-payment-->
        </div>
        <!--/.footer-custom-->
      </div>
      <!--/.footer-gray-->
    </footer>
  </div>
</template>
<script>
export default {
  name: "footerDetails",
};
</script>

<style scoped>
.hidden {
  display: none;
}

.footer-gray {
  background-color: #efefef;
  width: 100%;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;
}

.footer-custom {
  color: #888;
  font: normal normal 12px/1.4 "HelveticaNeue-Light", "Helvetica Neue Light",
    "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  max-width: 1008px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 24px;
}

.footer-custom:after {
  display: table;
  clear: both;
  content: "";
}

.footer-lists:after {
  display: table;
  clear: both;
  content: "";
}

.ftr-hdr {
  color: #000;
  font: 22px/1.4 "BebasNeueRegular", BebasNeue, "Bebas Neue", Arial, sans-serif;
  margin: 1em 0 0;
}

@media only screen and (min-width: 768px) {
  .ftr-hdr {
    font-size: 18px;
  }
}

.footer-list-wrap {
  width: 50%;
  float: left;
  box-sizing: border-box;
}

@media only screen and (min-width: 568px) {
  .footer-list-wrap {
    width: 33.3333%;
  }
}

@media only screen and (min-width: 768px) {
  .footer-list-wrap {
    width: 25%;
  }
}

.ftr-links-sub {
  padding: 0;
  margin: 0;
}

.ftr-links-sub:after {
  display: table;
  clear: both;
  content: "";
}

.ftr-links-sub li {
  display: block;
  list-style-type: none;
  margin: 0;
  padding: 3px 0;
  color: #888;
  font: normal normal 12px "HelveticaNeue-Light", "Helvetica Neue Light",
    "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  text-transform: uppercase;
  /*width: 150px;*/
}

.footer-custom a,
.footer-custom a:link,
.footer-custom a:visited,
.ftr-links-sub li .link {
  text-decoration: none;
  color: #888;
  padding: 5px 0;
  display: block;
}

.footer-custom .footer-legal a {
  display: inline;
}

.footer-custom a:hover,
.footer-custom a:active,
.ftr-links-sub li .link:hover {
  text-decoration: underline;
  color: #888;
  cursor: pointer;
}

@media only screen and (min-width: 768px) {
  .footer-custom a,
  .footer-custom a:link,
  .footer-custom a:visited,
  .ftr-links-sub li .link {
    padding: 0;
  }
}
/* BEGIN EMAIL CAPTURE STYLES*/

.footer-email {
  text-align: center;
}

#ftrEmailForm {
  height: 44px;
}

#ftrEmailForm .error {
  display: none;
  color: red;
  text-align: left;
}

#ftrEmailForm #ftrEmailInput {
  background: none repeat scroll 0 0 #fff;
  border: 1px solid #d6d6d6;
  box-sizing: border-box;
  color: #888;
  float: left;
  font: normal normal 14px/1.4 "HelveticaNeue-Light", "Helvetica Neue Light",
    "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  padding: 5px;
  width: 70%;
  height: 100%;
}

#ftrEmailForm #ftrEmailInput:hover {
  border: 1px solid #888;
}

#ftrEmailForm #ftrEmailInput:focus {
  border: 1px solid #ef9223;
  outline: #ef9223 auto 5px;
}

#ftrEmailForm .button {
  width: 30%;
  height: 100%;
  padding: 5px;
  float: left;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  color: #000;
  font: normal bold 18px/1 BebasFamily, BebasNeueRegular, "Bebas Neue",
    Helvetica, Arial, sans-serif;
  text-align: center;
  text-transform: uppercase;
  background: #fff;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJod…EiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, white),
    color-stop(100%, #e1e1e1)
  );
  background: -webkit-linear-gradient(top, white 0, #e1e1e1 100%);
  background: -moz-linear-gradient(top, white 0, #e1e1e1 100%);
  background: -ms-linear-gradient(top, white 0, #e1e1e1 100%);
  background: -o-linear-gradient(top, white 0, #e1e1e1 100%);
  background: linear-gradient(to bottom, white 0, #e1e1e1 100%);
  cursor: pointer;
  vertical-align: middle;
  outline: none;
}

#ftrEmailForm .button:hover,
#ftrEmailForm .button:active {
  background: black;
  color: #fff;
  outline: none;
}
/* BEGIN SOCIAL STYLES*/

.footer-social {
  text-align: center;
}

.footer-social ul {
  padding: 0;
  display: inline-block;
  list-style-type: none;
}

.footer-social ul:after {
  display: table;
  clear: both;
  content: "";
}

.footer-social li {
  float: left;
  margin: 0 15px 0 0;
  padding: 0;
}

@media only screen and (min-width: 768px) {
  .footer-lists {
    width: 100%;
  }
  .footer-email {
    width: 50%;
    float: left;
    text-align: left;
  }
  .footer-social {
    width: 45%;
    margin-left: 5%;
    float: left;
    text-align: left;
  }
}

@media only screen and (min-width: 1008px) {
  .footer-lists {
    width: 66.6666%;
    float: left;
  }
  .footer-email {
    width: 33.3333%;
  }
  .footer-social {
    width: 33.3333%;
    float: right;
    margin-left: 0;
  }
}

.footer-legal {
  padding: 15px 0 0;
  clear: left;
}

.footer-payment {
  text-align: center;
}

@media only screen and (min-width: 768px) {
  .footer-legal {
    width: 66.6666%;
    float: left;
  }
  .footer-payment {
    width: 33.3333%;
    float: left;
  }
}

@media only screen and (min-width: 1008px) {
  .footer-payment {
    text-align: left;
  }
}

.footer-payment ul {
  padding: 0;
  display: inline-block;
  list-style-type: none;
}

.footer-payment ul li {
  display: inline-block;
  margin: 0 6px;
}

@media only screen and (min-width: 1008px) {
  .footer-payment ul li.ftr-stella {
    margin-left: 0;
  }
}

.ftr-bbb span,
.ftr-stella span {
  background-image: url("http://cache1.artprintimages.com/images/jump_pages/rebrand2/images/subnav2.png");
  background-repeat: no-repeat;
  background-color: transparent;
  cursor: pointer;
  display: inline-block;
  height: 36px;
  margin: 0;
  padding: 0;
}

.ftr-bbb span {
  background-position: -339px -8px;
  width: 96px;
}

.ftr-stella span {
  background-position: -339px -107px;
  width: 57px;
}
</style>

