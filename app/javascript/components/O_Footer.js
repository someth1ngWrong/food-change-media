import React from 'react'
import FooterLogo from 'images/footer_logo.svg'

const O_Footer = () => {
  return (
    <div class="footer-container">
      <div class="footer-logo">
        <img src={FooterLogo}></img>
      </div>
      <div class="footer-note">
        Сборник кулинарных рецептов с гибкой заменой ингредиентов
      </div>
      <div class="footer-option-container">
        <div class="footer-option-block">
          <div class="footer-option">О сервисе</div>
          <div class="footer-option">Партнерам</div>
          <div class="footer-option">Контакты</div>
          <div class="footer-option">Приватность</div>
        </div>
        <div class="footer-option-block">
          <div class="footer-option">Instagram</div>
          <div class="footer-option">Facebook</div>
          <div class="footer-option">TikTok</div>
        </div>
      </div>
      <div class="footer-content">2021 © Essen</div>
    </div>
  )
}

export default O_Footer
