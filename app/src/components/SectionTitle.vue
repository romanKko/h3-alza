<template>
  <div class="section-title">
    <h4 class="subtitle-up">{{ subUp }}</h4>
    <h1 class="title">{{ title }}</h1>
    <p class="subtitle-down"><slot></slot></p>
  </div>
</template>

<script>
export default {
  props: {
    subUp: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin-top: 6rem;
}
.subtitle-up {
  font-size: 0.9rem;
  word-spacing: 0.3rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: rgb(127, 132, 148);
  font-weight: 700;
}

.title {
  margin: 0;
  font-size: 2.7rem;
  font-weight: 700;
}

.subtitle-down {
  color: rgb(52, 55, 65);
  text-align: center;
}
</style>
