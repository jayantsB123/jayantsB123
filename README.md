# Jayant Bhadauria

I’m a software engineer at Sarvatra Technologies in Pune. I build the parts of the digital rupee payment system that recover failed transfers and redeem programmable tokens when they expire.

[Sentinel-Ledger · payment gateway](https://github.com/jayantsB123/Sentinel-Ledger) · [Portfolio](https://jayant07-portfolio.netlify.app/) · [Email](mailto:bhadauria.jayant07@gmail.com)

## At Sarvatra

- **Payment recovery.** I built the reconciliation engine that handles four recovery paths for failed digital rupee transactions. It’s live at ICICI, PNB, and SBI.
- **Token redemption.** I reworked the SQL and concurrency handling behind ICICI’s redemption engine, which serves a live base of over 100 million tokens. In multi-node acceptance tests, I validated more than 100,000 redemptions per hour.
- **Offline payments.** I adapted the reconciliation engine for our team’s offline digital rupee entry at RBI Harbinger 2025. We placed second nationally.

## Selected projects

### [Sentinel-Ledger](https://github.com/jayantsB123/Sentinel-Ledger) · Java, Spring Boot, Redis, PostgreSQL

I built a double-entry payment gateway around a familiar problem. A transfer goes through, the response times out, and the client sends it again. The retry should return the original result without moving money twice.

[Follow a retry through the payment service →](https://github.com/jayantsB123/Sentinel-Ledger/blob/main/src/main/java/com/jayant/payment/Sentinel_Ledger/service/impl/PaymentServiceImpl.java) The detail I like here is the second Redis lookup. Another request can finish between the first cache miss and the moment this request acquires the lock.

### [Sorting Visualizer](https://github.com/jayantsB123/Dynamic-Sorting-Visualizer) · React

I made five sorting algorithms playable on a shuffled array. Pick quicksort or gnome sort, change the array size, and watch how differently they move the same values.

<a href="https://github.com/jayantsB123/Dynamic-Sorting-Visualizer"><img src="https://raw.githubusercontent.com/jayantsB123/Dynamic-Sorting-Visualizer/master/public/assets/_quickSort.gif" width="440" alt="Quicksort rearranging a shuffled array in my sorting visualizer"></a>
