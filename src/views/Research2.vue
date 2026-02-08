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
      <h2 class="section-title">Background</h2>
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
  name: "Research2",
  components: { PageWrapper },

  data() {
    return {
      research: {
        title: "Bank Customer Churn Analysis",
        presentation: "https://docs.google.com/presentation/d/e/2PACX-1vS9rk2a4SbmAPb_OXG--6ZLm7q3HNnZPuQLR8kp1D9V_Pzvxy2AyszMZDCy6zQk8w/pubembed?start=false&loop=false&delayms=3000",
        abstract:`
          <p>Customer churn occurs when clients terminate their relationship with a bank, leading to revenue loss and reduced customer lifetime value. Retaining customers is significantly more cost-effective than acquiring new ones, with acquisition costing up to 25× more.</p>
          <p>Despite Singapore’s strong financial ecosystem, churn remains a persistent challenge—almost 49% of adults have closed old accounts when opening new ones. The rise of digital-first users, especially Gen-Z, further increases the need for predictive, data-driven retention strategies.</p>
        `,
        overview:`
          <p>This study investigates key drivers of churn using a Kaggle dataset containing demographic, behavioural, and financial attributes of bank customers.</p>
          <p>Primary goals include:</p>
          <ul>
            <li>Assessing whether available variables adequately support churn prediction.</li>
            <li>Identifying high-impact features (e.g., age, balance, credit score).</li>
            <li>Understanding demographic trends across age groups, gender, geography, and salary levels.</li>
            <li>Recommending targeted retention strategies based on insights.</li>
          </ul>
        `,
        methodology:`
          <p>A CRISP-DM–aligned process was used, including data understanding, feature analysis, modelling, and evaluation.</p>
          <p>Key methods:</p>
          <ul>
            <li><b>Correlation analysis</b> to identify influential variables</li>
            <li><b>Descriptive statistics & variability checks</b> for feature quality</li>
            <li><b>Hypothesis testing</b> across age, gender, geography, and salary groups</li>
            <li><b>Subgroup analysis</b> to detect behavioural patterns</li>
            <li><b>Density estimation & aggregation</b> to interpret churn tendencies</li>
          </ul>
          <p>Variables with high variability—Age, Account Balance, Estimated Salary, Credit Score—were scaled and validated to prevent model convergence issues.</p>
        `,
        results:`
          <p><b>Key Predictors</b></p>
          <ul>
            <li>Age is the strongest churn indicator (corr ≈ 0.34).</li>
            <li>Account balance shows a weak but notable link (0.13).</li>
            <li>Estimated salary and credit score have minimal impact.</li>
            <li>Gender shows slight influence, with females churning more.</li>
          </ul>
          <p><b>Age Group Trends</b></p>
          <ul>
            <li>Under 30: 5–8% churn</li>
            <li>30–50: 17–20% churn</li>
            <li>50+ years: >50% churn</li>
            <p>Older customers are the most vulnerable due to changing needs and lower digital adaptability.</p>
          </ul>
          <p><b>Gender Patterns</b></p>
          <ul>
            <li>Female customers: 25% churn, higher than males (13%).</li>
            <li>Females also have slightly higher average income → higher expectations.</li>
          </ul>
          <p><b>Geographic & Salary Insights</b></p>
          <ul>
            <li>Regions differ significantly in churn despite similar customer counts.</li>
            <li>Higher salary brackets show higher churn rates, likely due to increased service expectations.</li>
          </ul>
          <p><b>Credit Card Ownership</b></p>
          <ul>
            <li>Customers without a credit card churn more often.</li>
            <li>Credit card users show stronger engagement and lower attrition.</li>
          </ul>
          <p><b>Card Tenure</b></p>
          <ul>
            <li>Customers with <1 year of card usage show the highest churn, highlighting early-stage disengagement risks.</li>
          </ul>
        `,
        conclusion:`
          <p>The analysis highlights Age, Account Balance, Gender, and Customer Tenure as notable churn drivers. Older customers, high-income segments, and new users represent the highest-risk groups.</p>
          <p>Building an early-warning system powered by predictive analytics—such as Gradient Boosting—can significantly improve churn detection and strengthen retention.</p>
          <p>This research also emphasizes that data quality and feature relevance are equally as important as the model, reinforcing the need for clean, well-structured datasets in churn prediction.</p>
        `,
        link: "https://www.researchgate.net/publication/395026367_Bank_Churn_Analysis",
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
