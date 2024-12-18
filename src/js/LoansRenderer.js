import { loans } from '../data/DummyLoans.js';

const BASE_DIR = document.querySelector('base').getAttribute('href') || '/';

export const renderLoansPage = async () => {
  const loansGrid = document.getElementById('loans-grid');
  const loansCount = document.getElementById('active-loans-count');
  const loanSearch = document.getElementById('loan-search');

  // Load loan widget template dynamically
  const loanTemplateResponse = await fetch(`${BASE_DIR}components/LoanWidget.html`);
  const loanTemplateHTML = await loanTemplateResponse.text();
  const loanTemplate = new DOMParser().parseFromString(loanTemplateHTML, 'text/html').querySelector('#loan-widget-template').content;

  const renderLoans = (filter = '') => {
    loansGrid.innerHTML = '';
    const filteredLoans = loans.filter(
      (loan) => loan.loanTitle.toLowerCase().includes(filter.toLowerCase()) || loan.loanDescription.toLowerCase().includes(filter.toLowerCase()) || loan.loanId.includes(filter)
    );

    loansCount.textContent = `${filteredLoans.length} Active Loans`;

    filteredLoans.forEach((loan) => {
      const loanClone = document.importNode(loanTemplate, true);
      loanClone.querySelector('.loan-id').textContent = loan.loanId;
      loanClone.querySelector('.loan-type').textContent = loan.loanType;
      loanClone.querySelector('.loan-title').textContent = loan.loanTitle;
      loanClone.querySelector('.loan-description').textContent = loan.loanDescription;
      loanClone.querySelector('.repayment-period').textContent = loan.repaymentPeriod;
      loanClone.querySelector('.interest-rate').textContent = loan.interestRate;
      loanClone.querySelector('.funding-goal').textContent = loan.fundingGoal;
      loanClone.querySelector('.funded-bar').style.width = `${loan.fundedPercentage}%`;
      loanClone.querySelector('.funded-amount').textContent = loan.fundedAmount;
      loanClone.querySelector('.days-left').textContent = `${loan.daysLeft} Days Left`;
      loanClone.querySelector('.creator').textContent = `Created by: ${loan.creator}`;
      loansGrid.appendChild(loanClone);
    });
  };

  renderLoans();

  loanSearch.addEventListener('input', (e) => renderLoans(e.target.value));
};
