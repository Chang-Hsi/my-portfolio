<template>
  <div>
    <IntroHero />
    <AboutMe />
    <Portfolio />
    <Services />
    <Projects title="參與開發的專案" />
    <SkillStack />
  </div>
</template>

<script setup>
import Projects from "../components/common/Projects.vue";
import AboutMe from "../components/home/AboutMe.vue";
import IntroHero from "../components/home/IntroHero.vue";
import Portfolio from "../components/home/Portfolio.vue";
import Services from "../components/home/Services.vue";
import SkillStack from "../components/home/SkillStack.vue";
</script>
