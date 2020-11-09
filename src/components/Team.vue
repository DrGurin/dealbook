<template>
  <div class="block block-team">
    <div class="block-content">
      <h2 class="block-name">Team</h2>
      <div class="galeryContainer">
        <div v-for="card in getCards" :key="card.name" class="card">
          <img :src="card.img" alt="Foto" class="foto">
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
import borys from '../assets/team/borys.jpg';

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
          img: borys,
          name: this.$t('team_teammate1'),
          position: this.$t('team_teammate1position')
        },
        {
          img: borys,
          name: this.$t('team_teammate2'),
          position: this.$t('team_teammate2position')
        },
        {
          img: borys,
          name: this.$t('team_teammate3'),
          position: this.$t('team_teammate3position')
        },
        {
          img: borys,
          name: this.$t('team_teammate4'),
          position: this.$t('team_teammate4position')
        },
        {
          img: borys,
          name: this.$t('team_teammate5'),
          position: this.$t('team_teammate5position')
        },
        {
          img: borys,
          name: this.$t('team_teammate6'),
          position: this.$t('team_teammate6position')
        },
        {
          img: borys,
          name: this.$t('team_teammate7'),
          position: this.$t('team_teammate7position')
        },
        {
          img: borys,
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
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 25%;
    margin-bottom: 5%;
  }
  .foto {
    width: 80%;
    height: auto;
    margin-bottom: 10px;
  }
  .name {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    text-align: center;
    color: #FFFFFF;
  }
  .position {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 23px;
    text-align: center;
    color: #abb4bd;
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
