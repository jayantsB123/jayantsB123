<h1 align="center">Hey 👋, I’m Jayant Singh Bhadauria</h1>
<p align="center"><strong>Software Development Engineer at Sarvatra Technologies · Pune, India</strong><br>I build systems that recover failed digital rupee payments, redeem expiring tokens, and provision wallets safely across servers.</p>

<img align="right" width="31%" src="./assets/124.gif" alt="Animated developer working at a laptop">

### Digital rupee engineering

**Payment recovery.** I built the reconciliation engine used by ICICI, PNB and SBI. It handles four ways to recover funds after a failed digital rupee transaction, following RBI and NPCI settlement rules.

**Programmable tokens.** I built the expiry and redemption engine running at ICICI, where the live base exceeds 100 million tokens. I reworked its SQL and concurrency handling and validated **100,000+ redemptions per hour** across multiple nodes in user acceptance testing (UAT).

**Offline payments.** I extended the reconciliation architecture for our offline digital rupee entry at RBI Harbinger 2025. Our team placed **second nationally**.

<p><a href="https://jayant07-portfolio.netlify.app/"><img height="25" alt="Portfolio" src="https://img.shields.io/badge/Portfolio-6546A6?style=flat-square"></a> <a href="https://www.linkedin.com/in/jayant-singh-35a66222a/"><img height="25" alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square"></a> <a href="mailto:bhadauria.jayant07@gmail.com"><img height="25" alt="Email" src="https://img.shields.io/badge/Email-9C4055?style=flat-square&amp;logo=gmail&amp;logoColor=white"></a> <a href="https://leetcode.com/u/MidnightSnarl/"><img height="25" alt="LeetCode" src="https://img.shields.io/badge/LeetCode-594423?style=flat-square&amp;logo=leetcode&amp;logoColor=white"></a></p>

<br clear="all">

<img width="100%" src="./assets/digital-rupee-scale.svg" alt="ICICI production base: 100M+ tokens. Multi-node UAT: 100K+ redemptions per hour. Aadhaar-based wallet rollout scope: 13M+ users.">

<details><summary><strong>More of my work at Sarvatra</strong> · January 2025–present</summary>

**Software Development Engineer · July 2025–present**

- I designed Aadhaar-based wallet provisioning for a rollout covering 13M+ users. Distributed locks coordinate workers, idempotent retries prevent duplicate wallets, and compensating steps roll back partial work.
- I designed a Kafka-based wallet-blocking service for ICICI to handle simultaneous block requests across nodes. I also implemented hybrid AES-256/RSA encryption for sensitive SMS gateway payloads in ICICI and PNB’s PMGKAY disbursement flow.
- The programmable-token engine was Sarvatra’s winning showcase at Global Fintech Fest 2025. Beyond ICICI, the engine reached UAT at SBI, PNB, IDFC, IDBI, Indus and CBI.

**Software Developer Intern · January–June 2025**

I shipped a centralized payment-log stack using Docker, Elasticsearch, Logstash and Kibana. I also designed Account-Check, which validates bank accounts before a transaction and reports specific failure codes to the payment channel.

</details>

### [Sentinel-Ledger](https://github.com/jayantsB123/Sentinel-Ledger) · My payment gateway

What should happen when a transfer succeeds but the client times out and sends it again? I built a double-entry gateway in **Java and Spring Boot** to handle that case. Redis coordinates concurrent requests. PostgreSQL holds the ledger and enforces a unique idempotency key. A SHA-256 fingerprint catches a reused key with a different amount or destination.

<a href="https://github.com/jayantsB123/Sentinel-Ledger/blob/main/src/main/java/com/jayant/payment/Sentinel_Ledger/service/impl/PaymentServiceImpl.java"><img width="100%" src="./assets/payment-retry.svg" alt="First request: check Redis, lock and recheck, look up the key in PostgreSQL, then write the ledger. Matching retry after completion: check the cached fingerprint and return the saved response."></a>

[Read the retry logic →](https://github.com/jayantsB123/Sentinel-Ledger/blob/main/src/main/java/com/jayant/payment/Sentinel_Ledger/service/impl/PaymentServiceImpl.java)

### Hackathons, fellowship & competitive programming

| Event | Result |
| --- | --- |
| 🥈 RBI Harbinger 2025 | **2nd nationally** with our offline digital rupee team |
| 💻 MLH Fellowship | Selected among the **top 100 students across Asia** |
| 🏆 Tally CodeBrewers 2023 | **Top 10** out of **12,200+ teams** nationwide |
| 🎯 INNERVE 6.0 | **Top 5 finalist** in an event with **85,000+ registrations** |
| ⚡ [Codeforces](https://codeforces.com/profile/response_404) & [LeetCode](https://leetcode.com/u/MidnightSnarl/) | **Specialist** on Codeforces, peak **1576**. Solved **1,000+ problems** across both platforms. |

### Languages & tools

<p><img width="34" height="34" alt="Java" title="Java" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"> &nbsp; <img width="34" height="34" alt="Spring" title="Spring" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg"> &nbsp; <img width="34" height="34" alt="PostgreSQL" title="PostgreSQL" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"> &nbsp; <img width="34" height="34" alt="Redis" title="Redis" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg"> &nbsp; <img width="34" height="34" alt="Kafka" title="Kafka" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/apachekafka/apachekafka-original.svg"> &nbsp; <img width="34" height="34" alt="Docker" title="Docker" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"> &nbsp; <img width="34" height="34" alt="Kubernetes" title="Kubernetes" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-original.svg"> &nbsp; <img width="34" height="34" alt="Gradle" title="Gradle" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gradle/gradle-original.svg"> &nbsp; <img width="34" height="34" alt="Git" title="Git" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"> &nbsp; <img width="34" height="34" alt="React" title="React" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"></p>

**Backend** · Java, Spring Boot, Hibernate/JPA, jPOS, Kafka, RabbitMQ  
**Data & testing** · Oracle, PostgreSQL, MySQL, Redis, Flyway, JUnit, Mockito

**Education** · B.E. in Computer Engineering, Army Institute of Technology, Pune · 2021–2025 · CGPA **8.95**


### GitHub activity

<p align="center">
  <img width="98%" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=jayantsB123&amp;theme=tokyonight" alt="GitHub contribution timeline for Jayant Singh Bhadauria">
</p>
<p align="center">
  <a href="https://github.com/jayantsB123?tab=repositories"><img width="48%" src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=jayantsB123&amp;theme=tokyonight" alt="Top languages across my public repositories"></a>
  <img width="48%" src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=jayantsB123&amp;theme=tokyonight" alt="My GitHub commits, pull requests, issues and stars">
</p>
