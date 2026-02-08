<template>
  <PageWrapper :title="research.title">
    <div class="research-details">
      <!-- Presentation -->
      <div class="presentation-wrapper">
        <iframe
          class="presentation-frame"
          :src="research.presentation"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <!-- Research Title -->
      <h2 class="section-title">Abstract</h2>
      <p class="description" v-html="research.abstract"></p>

      <!-- Sections -->
      <h2 class="section-title">Research Overview</h2>
      <p class="description" v-html="research.overview">
      </p>

      <h2 class="section-title">Methodology</h2>
      <p class="description" v-html="research.methodology">
      </p>

      <h2 class="section-title">Findings & Results</h2>
      <p class="description" v-html="research.results">
      </p>

      <h2 class="section-title">Conclusion</h2>
      <p class="description" v-html="research.conclusion">
      </p>

      <!-- Reference/Link -->
      <div class="external-link">
        <a :href="research.link" target="_blank">View Full Publication →</a>
      </div>
    </div>
  </PageWrapper>
</template>

<script>
import PageWrapper from "@/components/PageWrapper.vue";

export default {
  name: "Research4",
  components: { PageWrapper },

  data() {
    return {
      research: {
        title: "Predictive Analytics System for Chronic Disease Risk Assessment",
        presentation: "https://docs.google.com/presentation/d/e/2PACX-1vT-ar4u5zYi7CuH0iaKIrrVNvsECV8jwkwBLW5he6md494qnlYPi4UrfI1l-O9TEw/pubembed?start=true&loop=true&delayms=3000",
        abstract:`
          <p>This system assesses an individual’s risk for diabetes, hypertension, and stroke using health data and key risk indicators. By generating personalized insights, the platform supports clinicians in making early, informed decisions and recommending suitable interventions or lifestyle changes. The goal is to promote early detection, improve patient well-being, and support preventive healthcare.</p>
          <p>The system is built on a multi-output logistic regression classifier, designed to handle multi-condition prediction. Results show high reliability, with strong accuracy in identifying risk levels for all three chronic diseases.</p>
        `
        ,
        overview:`
          <p>The system addresses the rising global burden of diabetes, hypertension, and stroke by identifying high-risk individuals early.</p>
          <p>Key findings from related literature:</p>
          <ul>
            <li><b>Urban vs. Rural Disparities (Aggarwal et al., 2021, USA)</b>: Rural and low-income populations show significantly higher rates of chronic diseases. Accessible risk-assessment tools are needed for underserved communities.</li>
            <li><b>Cognitive Decline Links (Verdelho et al., 2007)</b>: Diabetes and hypertension increase the risk of cognitive deterioration and dementia. Early identification can reduce long-term neurological impacts.</li>
            <li><b>H-Type Hypertension Study (Qin & Huo, 2016, China)</b>: Hypertension combined with elevated homocysteine drastically increases stroke risk, highlighting the need for accurate multi-factor assessment.</li>
            <li><b>Older Women’s Health Risks (Cristina et al., 2016)</b>: Self-reported chronic diseases often lack accuracy, creating challenges for healthcare planning. A reliable predictive tool improves disease monitoring in older adults.</li>
            <li><b>LMIC Awareness (Sarfo, 2019)</b>: Many individuals in low- and middle-income countries are unaware of their hypertension and diabetes risks due to limited access to medical checkups.</li>
            <li><b>COVID-19 Comorbidities (Zaki et al., 2020)</b>: Chronic diseases like diabetes, hypertension, and stroke increase COVID-19 severity, reinforcing the value of early risk identification.</li>
          </ul>
        `  
        ,
        methodology:`
          <p>Risk factors were selected based on epidemiological and clinical evidence. Factors include:</p>
          <ul>
            <li><b>Non-modifiable</b>: age, gender</li>
            <li><b>Clinical indicators</b>: cholesterol, BMI, heart disease history</li>
            <li><b>Lifestyle factors</b>: physical activity, smoking, alcohol use</li>
            <li><b>Psychological & general health</b>: stress, depression, overall health</li>
          </ul>
          <p>These variables are widely recognized predictors of chronic conditions and enhance the accuracy of the predictive model.</p>
          <p><b>Population</b></p>
          <ul>
            <li>Inclusion: Adults aged 18+.</li>
            <li>Exclusion: Individuals already diagnosed with diabetes, hypertension, or stroke, and those with incomplete data.</li>
            <li>Sampling: Diverse sample from healthcare centers and hospitals.</li>
            <li>Data Collection: Electronic Health Records (EHRs) and patient surveys.</li>
            <li>Sample Size: Determined through power analysis; 0.02% of the target population.</li>
          </ul>
          <p><b>Research Approach</b></p>
          <ul>
            <li>Research Strategy: Mixed-methods approach combining quantitative EHR data and qualitative survey insights.</li>
            <li>Design: Longitudinal observational study to track changes over time.</li>
            <li>Data Sources:</li>
              <ul>
                <li>EHRs for clinical data</li>
                <li>Patient surveys (24 responses) highlighting low awareness of chronic disease prevention</li>
              </ul>
          </ul>
        `
        ,
        results:`
          <p>The system demonstrates strong performance with:</p>
          <ul>
            <li>~80% predictive accuracy across diabetes, hypertension, and stroke</li>
            <li>Transparent and interpretable predictions using logistic regression</li>
            <li>Real-time output during clinical checkups</li>
            <li>Efficient handling of interrelated chronic conditions in one model</li>
            <li>High robustness, scalability, and suitability for healthcare environments</li>
          </ul>
          <p>Overall, the system is a high-impact predictive healthcare tool capable of significantly improving early intervention and long-term patient management.</p>
        `
        ,
        conclusion:`
          <p>This project delivered a scalable and reliable prediction system for diabetes, hypertension, and stroke, addressing global challenges in early diagnosis and chronic disease management. By integrating AI with patient health data, the system provides real-time insights that support informed decision-making during clinical visits.</p>
          <p><b>Key strengths of the system include:</b></p>
          <ul>
            <li><b>Approximately 80% prediction accuracy</b></li>
            <li><b>Multi-output logistic regression model capable of predicting all three conditions simultaneously</b></li>
            <li><b>Real-time risk assessment during patient consultations</b></li>
            <li><b>High scalability and compatibility with large datasets</b></li>
            <li><b>Ability to enhance early detection, reduce healthcare burden, and improve patient outcomes</b></li>
          </ul>
          <p>The system offers a promising foundation for future expansion into more complex chronic conditions and broader patient populations.</p>
        `
        ,
        link: "https://www.researchgate.net/publication/395025883_Chronic_Disease_Prediction_System_for_Diabetes_Stroke_and_Hypertension",
      },
    };
  },
};
</script>

<style scoped>
.research-details {
  max-width: 850px;
  margin: auto;
  padding: 1rem;
}

.presentation-wrapper {
  width: 100%;
  margin-bottom: 2.5rem;
  border-radius: 14px;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 18px rgba(255, 255, 255, 0.25);
}

.presentation-frame {
  width: 100%;
  height: 360px;
}

@media (max-width: 768px) {
  .presentation-frame {
    height: 240px;
  }
}

/* Section Titles */
.section-title {
  color: #f8f9fa;
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

/* Paragraph Styling */
.description {
  color: #ccc;
  line-height: 1.7;
  margin-bottom: 1rem;
}

/* External Publication Link */
.external-link {
  margin-top: 2.5rem;
  text-align: center;
}

.external-link a {
  color: #f8f9fa;
  font-size: 1.1rem;
  text-decoration: none;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.6);
  padding-bottom: 3px;
  transition: 0.3s;
}

.external-link a:hover {
  opacity: 0.7;
}
</style>
