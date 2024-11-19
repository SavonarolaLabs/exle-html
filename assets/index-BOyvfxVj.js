(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();const y=[{loanId:"545271...2067cc",loanType:"Crowdloan",loanTitle:"Sweetwaters Shop",loanDescription:"Requesting for $1000 loan to increase my store stock and product ranges to draw more customers during this Christmas shopping season.",repaymentPeriod:"90 Days Repayment Period",interestRate:"4.5% Interest Rate",fundingGoal:"1,500.00 SigUSD",fundedAmount:"$1,142",fundedPercentage:76,daysLeft:31,creator:"9eq6S...QXssg"},{loanId:"453231...2078dd",loanType:"Crowdloan",loanTitle:"Village Bakery",loanDescription:"Looking for a $500 loan to modernize equipment and improve product quality for local customers.",repaymentPeriod:"60 Days Repayment Period",interestRate:"3.5% Interest Rate",fundingGoal:"500.00 SigUSD",fundedAmount:"$300",fundedPercentage:60,daysLeft:20,creator:"8pd6T...QXndg"},{loanId:"348912...1267ab",loanType:"Crowdloan",loanTitle:"Tech Startup Expansion",loanDescription:"Seeking $10,000 to expand our innovative tech startup, increasing production capacity and market presence.",repaymentPeriod:"120 Days Repayment Period",interestRate:"6.5% Interest Rate",fundingGoal:"10,000.00 SigUSD",fundedAmount:"$7,500",fundedPercentage:75,daysLeft:45,creator:"7fg3S...XHdga"},{loanId:"897321...1190aa",loanType:"Crowdloan",loanTitle:"Local Farm Sustainability",loanDescription:"Raising $2,000 to invest in eco-friendly farming tools and practices for better yield and sustainability.",repaymentPeriod:"90 Days Repayment Period",interestRate:"4.0% Interest Rate",fundingGoal:"2,000.00 SigUSD",fundedAmount:"$1,300",fundedPercentage:65,daysLeft:28,creator:"4op6G...QWerr"},{loanId:"657823...3145bb",loanType:"Crowdloan",loanTitle:"Bookstore Renovation",loanDescription:"Looking for $1,200 to renovate our family-owned bookstore and attract more customers.",repaymentPeriod:"60 Days Repayment Period",interestRate:"3.8% Interest Rate",fundingGoal:"1,200.00 SigUSD",fundedAmount:"$800",fundedPercentage:66,daysLeft:15,creator:"2ty7U...QRffe"},{loanId:"234921...7644cc",loanType:"Crowdloan",loanTitle:"Artisan Coffee Expansion",loanDescription:"Seeking $5,000 to expand our coffee business to more locations in the city.",repaymentPeriod:"120 Days Repayment Period",interestRate:"5.0% Interest Rate",fundingGoal:"5,000.00 SigUSD",fundedAmount:"$3,400",fundedPercentage:68,daysLeft:38,creator:"3kl9T...QErfg"},{loanId:"874562...5412dd",loanType:"Crowdloan",loanTitle:"Community Gym Equipment",loanDescription:"Requesting $3,000 to upgrade gym equipment for our community fitness center.",repaymentPeriod:"90 Days Repayment Period",interestRate:"4.2% Interest Rate",fundingGoal:"3,000.00 SigUSD",fundedAmount:"$2,500",fundedPercentage:83,daysLeft:12,creator:"6nm1H...QRsad"},{loanId:"974563...7655ee",loanType:"Crowdloan",loanTitle:"Solar Energy Project",loanDescription:"Looking for $15,000 to set up solar panels and promote renewable energy solutions in our town.",repaymentPeriod:"180 Days Repayment Period",interestRate:"7.0% Interest Rate",fundingGoal:"15,000.00 SigUSD",fundedAmount:"$10,000",fundedPercentage:67,daysLeft:60,creator:"8lo5R...QXcfd"},{loanId:"176234...9806ff",loanType:"Crowdloan",loanTitle:"Mobile App Development",loanDescription:"Seeking $8,000 to launch a mobile app that connects small businesses with local customers.",repaymentPeriod:"120 Days Repayment Period",interestRate:"6.0% Interest Rate",fundingGoal:"8,000.00 SigUSD",fundedAmount:"$6,000",fundedPercentage:75,daysLeft:35,creator:"5rd3L...QKffd"},{loanId:"238764...5632gg",loanType:"Crowdloan",loanTitle:"Eco Clothing Line",loanDescription:"Raising $3,500 to launch an eco-friendly clothing line made from sustainable materials.",repaymentPeriod:"90 Days Repayment Period",interestRate:"4.8% Interest Rate",fundingGoal:"3,500.00 SigUSD",fundedAmount:"$2,000",fundedPercentage:57,daysLeft:25,creator:"9as3T...QWeer"},{loanId:"325614...4365hh",loanType:"Crowdloan",loanTitle:"Culinary School Startup",loanDescription:"Requesting $7,500 to start a culinary school focused on underprivileged youth.",repaymentPeriod:"150 Days Repayment Period",interestRate:"5.5% Interest Rate",fundingGoal:"7,500.00 SigUSD",fundedAmount:"$5,500",fundedPercentage:73,daysLeft:42,creator:"3lo8T...QJqqd"},{loanId:"543219...2311ii",loanType:"Crowdloan",loanTitle:"Music Studio Upgrade",loanDescription:"Looking for $4,000 to upgrade our music studio equipment for better production quality.",repaymentPeriod:"90 Days Repayment Period",interestRate:"4.5% Interest Rate",fundingGoal:"4,000.00 SigUSD",fundedAmount:"$3,000",fundedPercentage:75,daysLeft:30,creator:"4lk6R...QWeew"}],m=async()=>{const a=document.getElementById("loans-grid"),o=document.getElementById("active-loans-count"),i=document.getElementById("loan-search"),n=await(await fetch("/components/LoanWidget.html")).text(),r=new DOMParser().parseFromString(n,"text/html").querySelector("#loan-widget-template").content,d=(s="")=>{a.innerHTML="";const c=y.filter(e=>e.loanTitle.toLowerCase().includes(s.toLowerCase())||e.loanDescription.toLowerCase().includes(s.toLowerCase())||e.loanId.includes(s));o.textContent=`${c.length} Active Loans`,c.forEach(e=>{const t=document.importNode(r,!0);t.querySelector(".loan-id").textContent=e.loanId,t.querySelector(".loan-type").textContent=e.loanType,t.querySelector(".loan-title").textContent=e.loanTitle,t.querySelector(".loan-description").textContent=e.loanDescription,t.querySelector(".repayment-period").textContent=e.repaymentPeriod,t.querySelector(".interest-rate").textContent=e.interestRate,t.querySelector(".funding-goal").textContent=e.fundingGoal,t.querySelector(".funded-bar").style.width=`${e.fundedPercentage}%`,t.querySelector(".funded-amount").textContent=e.fundedAmount,t.querySelector(".days-left").textContent=`${e.daysLeft} Days Left`,t.querySelector(".creator").textContent=`Created by: ${e.creator}`,a.appendChild(t)})};d(),i.addEventListener("input",s=>d(s.target.value))},f=[{loanId:"545271...2067cc",loanType:"Crowdfund",loanTitle:"Sweetwaters Shop",loanDescription:"Requesting for $1000 loan to increase my store stock...",repaymentPeriod:"90 Days Repayment Period",interestRate:"4.5% Interest Rate",fundingGoal:"1,500.00 SigUSD",repaidAmount:"$1,142",repaidPercentage:76,daysLeft:31,creator:"9eq6S...QXssg"},{loanId:"674582...3072ab",loanType:"Crowdfund",loanTitle:"Tropic Market Expansion",loanDescription:"Seeking funds to expand Tropic Market...",repaymentPeriod:"60 Days Repayment Period",interestRate:"3.8% Interest Rate",fundingGoal:"2,000.00 SigUSD",repaidAmount:"$1,500",repaidPercentage:75,daysLeft:15,creator:"user123...XZgqr"}],g=async()=>{const a=document.getElementById("repayments-grid"),o=document.getElementById("active-repayments-count"),i=document.getElementById("repayment-search"),n=await(await fetch("/components/LoanWidget.html")).text(),r=new DOMParser().parseFromString(n,"text/html").querySelector("#loan-widget-template").content,d=(s="")=>{a.innerHTML="";const c=f.filter(e=>e.loanTitle.toLowerCase().includes(s.toLowerCase())||e.loanDescription.toLowerCase().includes(s.toLowerCase())||e.loanId.includes(s));o.textContent=`${c.length} Active Repayments`,c.forEach(e=>{const t=document.importNode(r,!0);t.querySelector(".loan-id").textContent=e.loanId,t.querySelector(".loan-type").textContent=e.loanType,t.querySelector(".loan-title").textContent=e.loanTitle,t.querySelector(".loan-description").textContent=e.loanDescription,t.querySelector(".repayment-period").textContent=e.repaymentPeriod,t.querySelector(".interest-rate").textContent=e.interestRate,t.querySelector(".funding-goal").textContent=`Total Repayment: ${e.fundingGoal}`,t.querySelector(".funded-bar").style.width=`${e.repaidPercentage}%`,t.querySelector(".funded-bar").classList.add("bg-blue-500"),t.querySelector(".funded-amount").textContent=`${e.repaidAmount} repaid`,t.querySelector(".days-left").textContent=`${e.daysLeft} Days Left`,t.querySelector(".creator").textContent=`Created by: ${e.creator}`,a.appendChild(t)})};d(),i.addEventListener("input",s=>d(s.target.value))},u=async(a,o)=>{const i=await fetch(o).catch(l=>console.error(`Error loading ${o}:`,l));i&&(document.querySelector(a).innerHTML=await i.text())},S={"/":"/components/Landing.html","/loans":"/components/Loans.html","/repayments":"/components/Repayments.html"},p=async()=>{const a=window.location.hash.slice(1)||"/",o=S[a]||"/components/404.html";await u("#content",o),a==="/loans"&&m(),a==="/repayments"&&g()},h=()=>{const a=document.body,o=document.querySelector("#theme-toggle"),i=n=>{a.setAttribute("data-theme",n),o&&(o.textContent=n==="dark"?"☀️":"🌙")},l=localStorage.getItem("theme")||"dark";i(l),o&&o.addEventListener("click",()=>{const n=a.getAttribute("data-theme")==="dark"?"light":"dark";localStorage.setItem("theme",n),i(n)})};document.addEventListener("DOMContentLoaded",async()=>{await u("#navbar","/components/Navbar.html"),await p(),await u("#footer","/components/Footer.html"),h()});window.addEventListener("hashchange",p);