<template>
  <div class="footer">
      <div class="footer-item block-social">
          <a class="social-item-button">
              <img src="../assets/footer/twitter.svg" alt="Twitter icon" class="button-icon">
          </a>
          <a class="social-item-button">
              <img src="../assets/footer/ld.svg" alt="Linkedin icon" class="button-icon">
          </a>
          <a class="social-item-button">
              <img src="../assets/footer/fb.svg" alt="Facebook icon" class="button-icon">
          </a>
          <a class="social-item-button">
              <img src="../assets/footer/tg.svg" alt="Telegram icon" class="button-icon">
          </a>
      </div>
      <div class="footer-item warning-block">
          <img src="../assets/footer/warning.svg" class="warning-item warning-icon" alt="Warning icon">
          <p class="warning-item warning-text">Donations are completely free-will and are non-obligatory, but they will help us to develop further and  faster. <u>The team consists of volunteers and fans of the idea</u></p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* start bulding footer by mobile-first */

#app .footer{
    height: fit-content;
    width: 100vw;
    padding: 4vh 2vw;
    background: #252525;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: #70777E;
    overflow: hidden;
    }
/* block with socials  */
.footer .block-social{
    width: 100%;
    padding: 0 8vw;
    max-width: 600px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3vh;
}
.footer .block-social .social-item-button .button-icon{
    height: 100%;
    width: 100%;
}
/* block with socials  */

/* block with warning  */
.footer .warning-block{
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    white-space: unset;
}
.footer .warning-icon{
    margin-right: 2vw;
    margin-top: 5px;
    height: fit-content;
}
.footer .warning-text{
    text-decoration: unset;
    color: #70777E;
}
.footer .warning-text u{
    color: #70777E;
}
</style>