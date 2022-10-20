import React from "react";
import { FaFacebook, FaInstagram, FaTelegramPlane } from "react-icons/fa";

import './Style.css'
function Footer() {
  return (
    <div className="footer">
        <div className="site-footer">
    <div className="footer-logo">
        <h1 className="logo">Logo</h1>
    </div>
    <div class="credit">
        &copy; copyright @ 2022 by <a href="https://t.me/codiu_team" className="creator">Codium.uz</a> | all rights
        reserved!
      </div>
      <div class="share">
        <a href="https://t.me/hugo_bola">
          <FaTelegramPlane />
        </a>
        <a href="https://t.me/hugo_bola">
          <FaFacebook />
        </a>
        <a href="https://t.me/hugo_bola">
          <FaInstagram />
        </a>
      </div>

      
    </div>
    </div>
  );
}

export default Footer;
