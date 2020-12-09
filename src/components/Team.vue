<template>
  <div class="block block-team">
    <div class="block-content">
      <h2 class="block-name">Team</h2>
      <div class="galeryContainer">
        <div v-for="card in getCards" :key="card.name" class="card">
          <!-- <img :src="card.img" alt="Foto" class="foto"> -->
          <div class="photo-wrapper" :style="{backgroundImage: 'url(' + card.img + ')'}"></div>
          <p class="name">{{ card.name }}</p>
          <p class="position">{{ card.position }}</p>
        </div>
      </div>
      <div class="warning_block">
            <img src="../assets/common/warning.svg" class="warning_icon" alt="Warning icon">
            <p class="warning_text">{{$t("team_warning")}}</p>
      </div>
    </div>
    <button class="arrowButton" v-scroll-to="'#donate'">
      <img src="../assets/common/arrow.svg" alt="Arrow" class="arrow">
    </button>
  </div>
</template>

<script>
import ph1 from '../assets/team/1.jpg';
import ph2 from '../assets/team/2.jpg';
import ph3 from '../assets/team/3.jpg';
import ph4 from '../assets/team/4.jpg';
import ph5 from '../assets/team/5.jpg';
import ph6 from '../assets/team/6.jpg';
import ph7 from '../assets/team/7.jpg';
import ph8 from '../assets/team/8.jpg';

export default {
  data() {
    return {
      //
    }
  },
  computed: {
    getCards() {
      return [
        {
          img: ph1,
          name: this.$t('team_teammate1'),
          position: this.$t('team_teammate1position')
        },
        {
          img: ph2,
          name: this.$t('team_teammate2'),
          position: this.$t('team_teammate2position')
        },
        {
          img: ph3,
          name: this.$t('team_teammate3'),
          position: this.$t('team_teammate3position')
        },
        {
          img: ph4,
          name: this.$t('team_teammate4'),
          position: this.$t('team_teammate4position')
        },
        {
          img: ph5,
          name: this.$t('team_teammate5'),
          position: this.$t('team_teammate5position')
        },
        {
          img: ph6,
          name: this.$t('team_teammate6'),
          position: this.$t('team_teammate6position')
        },
        {
          img: ph7,
          name: this.$t('team_teammate7'),
          position: this.$t('team_teammate7position')
        },
        {
          img: ph8,
          name: this.$t('team_teammate8'),
          position: this.$t('team_teammate8position')
        }
      ]
    }
  }
}
</script>

<style scoped>
  .galeryContainer {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    margin-top: 7%;
  }
  .card {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    width: 25%;
    margin-bottom: 5%;
    padding: 0 10px;
  }
  .foto {
    width: 80%;
    height: auto;
    margin-bottom: 10px;
  }
  .photo-wrapper{
    width: 93px;
    height: 100px;
    border: 1px solid #FFFFFF;
    background-position: center;
    background-size: cover;
    margin-bottom: 10px;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }
  .name {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    text-align: center;
    color: #FFFFFF;
    line-height: 1.0;
    margin-bottom: 10px;
  }
  .position {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 23px;
    text-align: center;
    color: #abb4bd;
    line-height: 1.2;
  }
  .aboutTeam {
    border: 1px solid #888888;
    border-radius: 5px;
    width: 70%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .triangle {
    width: 15px;
    height: auto;
    margin-right: 3%;
  }
  .aboutTeamText {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #787878;
  }
  @media (max-width: 770px) {
    .card {
      width: 45%;
    }
    .aboutTeam  {
      width: 95%;
    }
    .name {
      font-size: 13px;
    }
    .position {
      font-size: 13px;
    }
  }
</style>
