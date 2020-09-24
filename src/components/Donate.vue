<template>
  <div class="block block-donate">
    <div class="block-content">
			<div class="container-donate">
				<h2 class="block-name">Donate</h2>

				<button class="sub-btn" @click="sendDonate()">Donate</button>
			</div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {

		};
	},
	methods: {
		sendDonate() {
			console.log('ura, babki babulesiki')
		}
	},
};
</script>

<style scoped>
.sub-btn {
  background: #ffffff;
  border-radius: 5px;
  width: 100%;
  padding: 2% 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  text-transform: uppercase;
  color: #0a0a0a;
  margin-bottom: 5%;
}
.sub-btn:focus,
.sub-btn:active {
  outline: none;
  cursor: pointer;
}
.container-donate {
  background: #1e1e1e;
  border: 1px solid #ffffff;
  border-radius: 5px;
  width: 90%;
  height: 100%;
  margin-top: 10%;
  min-height: 300px;
  padding: 5% 10%;
  display: flex;
  flex-direction: column;
}
</style>