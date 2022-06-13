<template>
  <ion-footer>
    <div class="footer">
      <div id="links">
        <div class="ft-content">
          <h2 class="ft-left-title">Menu</h2>
          <a class="link" href="/"> Home </a>
          <a class="link" href="/campaigns"> Explore </a>
          <a class="link" href="/contact"> FAQ </a>
        </div>

        <div class="ft-content">
          <h2 class="ft-left-title">Categories</h2>
          <a class="link" href="/"> Staze </a>
          <a class="link" href="/"> Stazisti </a>
          <a class="link" href="/"> Firmy </a>
        </div>

        <div class="ft-content">
          <h2 class="ft-left-title">About</h2>
          <a class="link" href="/"> Terms of Service </a>
          <a class="link" href="/"> Help & Support </a>
          <a class="link" href="/"> Trust & Safety </a>
        </div>
      </div>

      <div class="ft-content ft-name-section">
        <h1>WorkHub</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore cupiditate est quam
          reiciendis itaque pariatur ea adipisci neque, quisquam saepe explicabo voluptatem
          molestias ab fuga repellat excepturi temporibus, suscipit ullam.
        </p>
        <p :style="{ marginTop: '2rem' }">Enjoy the rest of your day!</p>
      </div>
    </div>
  </ion-footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 2rem 0 3rem 0;
  background-color: white;
  border-top: 1px rgb(231, 231, 231) solid;
  color: gray;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  // margin-top: 2rem;
  align-content: space-between;
}

.ft-content {
  max-width: 20rem;
  margin-left: 2rem;
}

#links {
  display: flex;
}

.ft-name-section {
  margin-left: 8rem;
  @media (max-width: 912px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
  }
}

.link {
  transition: color 150ms;
  color: inherit;
  display: block;
  text-decoration: none;
  margin-top: 1rem;
  text-align: left;
  font-size: 1rem;
  line-height: 1em;
}

.link:hover {
  transition: color 150ms;
  color: rgb(195, 195, 195);
}

.ft-content p {
  text-align: left;
  font-size: 0.8rem;
}

.ft-content > h1 {
  font-weight: 600;
  text-align: left;
  margin-bottom: 1rem;
  margin-top: 0;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 1.5rem;
  color: rgb(61, 61, 61);
}

.ft-content > h2 {
  letter-spacing: 0.15em;
  font-size: 1.2rem;
  text-align: left;
  text-transform: uppercase;
  color: rgb(61, 61, 61);
}

.ft-left-title {
  padding-bottom: 0;
  margin-bottom: 0;
}
</style>
