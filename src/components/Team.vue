<template>
  <div class="block block-team">
    <div class="block-content">
      <h2 class="block-name">Team</h2>
      <div class="galeryContainer">
        <div v-for="(card, i) in cards" :key="i" class="card">
          <img :src="card.img" alt="Foto" class="foto">
          <p class="name">{{ card.name }}</p>
          <p class="position">{{ card.position }}</p>
        </div>
      </div>
      <div class="warning_block">
            <img src="../assets/common/warning.svg" class="warning_icon" alt="Warning icon">
            <p class="warning_text">{{$t("warningTeam")}}</p>
      </div>
    </div>
    <button class="arrowButton" @click="test()">
      <img src="../assets/common/arrow.svg" alt="Arrow" class="arrow">
    </button>
  </div>
</template>

<script>
import borys from '../assets/team/borys.jpg';

export default {
  data() {
    return {
      cards: [
        {
          img: borys,
          name: "Yevhenii Hryshchuk",
          position: "CEO, UI/UX Designer"
        },
        {
          img: borys,
          name: "Andrii Fedunin",
          position: "Community Manager, PM"
        },
        {
          img: borys,
          name: "Ilya Lopatko",
          position: "CTO, Backend developer"
        },
        {
          img: borys,
          name: "Mykhailo Hurin",
          position: "Frontend developer"
        },
        {
          img: borys,
          name: "Borys Rohulia",
          position: "Frontend developer"
        },
        {
          img: borys,
          name: "Alexandr Klimenko",
          position: "Targetologist"
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
    width: 30%;
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
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    color: #FFFFFF;
  }
  .position {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
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
