<img align="right" width="24%" src="./assets/124.gif" alt="Animated developer working at a laptop">

# Hey, I’m Jayant Singh Bhadauria 👋

Pune, India · Java backend developer · Competitive programmer

I build backends in **Java and Spring Boot** and work across the stack with **React**. My kind of puzzle is getting several servers to agree on what happened. In [Sentinel-Ledger](https://github.com/jayantsB123/Sentinel-Ledger), that means a payment can be retried without moving money twice.

I’m [response_404 on Codeforces](https://codeforces.com/profile/response_404). Away from the keyboard, I lift, run, and plan trips around a good trek or a long ride on my motorcycle.

<p><a href="https://jayant07-portfolio.netlify.app/"><img height="25" alt="Portfolio" src="https://img.shields.io/badge/Portfolio-6546A6?style=flat-square"></a> <a href="https://www.linkedin.com/in/jayant-singh-35a66222a/"><img height="25" alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square"></a> <a href="mailto:bhadauria.jayant07@gmail.com"><img height="25" alt="Email" src="https://img.shields.io/badge/Email-9C4055?style=flat-square&amp;logo=gmail&amp;logoColor=white"></a> <a href="https://leetcode.com/u/MidnightSnarl/"><img height="25" alt="LeetCode" src="https://img.shields.io/badge/LeetCode-594423?style=flat-square&amp;logo=leetcode&amp;logoColor=white"></a></p>

<br clear="all">

### CBDC & UPI developer at Sarvatra · Currently building India’s digital rupee (e₹)

<img width="100%" src="./assets/digital-rupee-scale.svg" alt="My token redemption engine supports ICICI’s live base of 100M+ tokens. In multi-node acceptance tests, I validated 100K+ redemptions per hour. I designed wallet provisioning for a rollout covering 13M+ users.">

My recovery engine is live at **ICICI, PNB and SBI**. I adapted it for our offline e₹ entry at **RBI Harbinger 2025**, where our team placed **second nationally**.

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

### Languages & skills

<img width="100%" src="./assets/engineering-stack.svg" alt="Java 8, 11 and 17, C++, Python, and JavaScript with React and Angular. Backend, messaging and storage tools include Spring Boot, jPOS, Hibernate/JPA, Kafka, RabbitMQ, Redis, Oracle, PostgreSQL and MySQL.">

<details>
<summary><strong>Explore my full engineering stack</strong></summary>

| Area | Skills |
| --- | --- |
| Languages & frameworks | Java 8/11/17, C++, Python, JavaScript, React, Angular |
| Backend & APIs | Spring Boot, Hibernate/JPA, REST APIs, microservices, event-driven architecture, jPOS (Q2, TransactionManager, Space) |
| Concurrency & resilience | Multithreading with Java executors, distributed locking, idempotency, fault tolerance |
| Messaging & caching | Kafka, RabbitMQ, Redis |
| Databases | Oracle, PostgreSQL, MySQL, SQL query optimization |
| Infrastructure & delivery | Docker, Kubernetes, Git, GitHub, Gradle, Flyway |
| Testing & quality | Unit testing, JUnit, Mockito, test-driven validation, secure coding |
| Engineering fundamentals | Data structures and algorithms, object-oriented design, distributed systems design |

</details>

### GitHub activity

<p align="center">
  <img width="98%" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=jayantsB123&amp;theme=tokyonight" alt="GitHub contribution timeline for Jayant Singh Bhadauria">
</p>
<p align="center">
  <a href="https://github.com/jayantsB123?tab=repositories"><img width="48%" src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=jayantsB123&amp;theme=tokyonight" alt="Top languages across my public repositories"></a>
  <img width="48%" src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=jayantsB123&amp;theme=tokyonight" alt="My GitHub commits, pull requests, issues and stars">
</p>


### Contribution replay

<img src="./assets/contribution-replay.svg" width="100%" alt="Animated replay of my GitHub contribution calendar through November 19, 2026. Brighter squares indicate more contributions.">

### From my pins

<p align="center">
  <a href="https://github.com/jayantsB123/Sentinel-Ledger"><img src="./assets/sentinel-pin.svg" width="48%" alt="Open Sentinel-Ledger, my retry-safe payment gateway"></a>
  <a href="https://github.com/jayantsB123/RegisterRover"><img src="./assets/rover-pin.svg" width="48%" alt="Open RegisterRover, a camera-based attendance tracker"></a>
</p>

