<template>
  <PageWrapper title="About Me">
    <div class="about-container">
      <!-- Left Column: Text -->
      <div class="about-text">
        <h2 class="subtitle">Who Am I?</h2>
        <p>
          I’m <strong>Nimsha Erin</strong>.
          <br>
          A Product Designer with a background in software engineering and AI, 
          passionate about building intuitive, scalable, and user-centered digital products.
        </p>

        <p>
          With 3+ years of professional experience in <strong>mobile (iOS/Android) and web UX/UI design</strong>, 
          I work closely with engineers, product managers, and cross-functional teams to design 
          end-to-end product experiences — from user research and UX flows to polished, production-ready UI.
        </p>

        <p>
          I specialize in <strong>UX strategy</strong>, <strong>interaction design</strong>, <strong>design systems</strong>, 
          and <strong>data-informed product improvement</strong>. My approach combines qualitative research 
          (user interviews, usability testing) and quantitative analysis to continuously refine 
          user experiences and drive measurable product impact.
        </p>

        <h2 class="subtitle">What I Do</h2>
        <ul class="skills">
          <li>Mobile App UX/UI Design (iOS & Android)</li>
          <li>UX Flow & Information Architecture Design</li>
          <li>Wireframing, Prototyping (Figma, Adobe XD)</li>
          <li>User Research (Interviews, Surveys, Usability Testing)</li>
          <li>Product Release Collaboration & Iterative Improvement</li>
          <li>Design Systems & Cross-Functional Collaboration</li>
        </ul>

        <p class="closing">
          I’m passionate about designing inclusive and consistent financial experiences 
          that simplify complexity and create trust for users.
        </p>
      </div>

      <!-- Right Column: Image + Social Links -->
      <div class="about-side">
         <!--<img
          class="profile-img"
          src="@/assets/profile.png"
          alt="Profile Picture"
        />-->

        <SocialLinks />
      </div>
    </div>
  </PageWrapper>
</template>

<script>
import PageWrapper from "@/components/PageWrapper.vue";
import SocialLinks from "@/components/SocialLinks.vue";

export default {
  name: "AboutView",
  components: { PageWrapper, SocialLinks },
};
</script>

<style scoped>
.about-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  margin-top: 2rem;
  position: relative;
}

/* Text content */
.about-text {
  flex: 1.2;
  max-width: 700px;
}

.subtitle {
  font-size: 1.4rem;
  font-weight: 600;
  color: #f8f9fa;
  margin-bottom: 0.5rem;
}

.about-text p {
  margin-bottom: 1.2rem;
  line-height: 1.7;
  color: #c2c2c2;
}

/* Skills list */
.skills {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.skills li {
  background: rgba(141, 141, 141, 0.1);
  border-left: 4px solid #f8f9fa;
  padding: 0.6rem 1rem;
  margin-bottom: 0.7rem;
  border-radius: 6px;
  color: #c2c2c2;
  font-size: 0.95rem;
}

.closing {
  margin-top: 1.5rem;
  font-style: italic;
  color: #c2c2c2;
}

/* Right side: Profile pic + Social links */
.about-side {
  flex: 0.9;
  text-align: center;
  position: relative;
}

.profile-img {
  width: 260px;
  height: 260px;
  object-fit: cover;
  border-radius: 14px;
  box-shadow: 0 0 15px rgba(142, 142, 142, 0.5);
  border: 1.5px solid rgba(255, 255, 255);
}

/* Responsive */
@media screen and (max-width: 900px) {
  .about-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .about-text {
    text-align: left;
  }

  .profile-img {
    margin-bottom: 1.5rem;
  }
}
</style>

