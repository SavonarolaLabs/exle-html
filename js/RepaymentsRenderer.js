import { repayments } from '../data/DummyRepayments.js';

export const renderRepaymentsPage = async () => {
  const repaymentsGrid = document.getElementById('repayments-grid');
  const repaymentsCount = document.getElementById('active-repayments-count');
  const repaymentSearch = document.getElementById('repayment-search');

  // Load repayment widget template dynamically
  const repaymentTemplateResponse = await fetch('/components/LoanWidget.html');
  const repaymentTemplateHTML = await repaymentTemplateResponse.text();
  const repaymentTemplate = new DOMParser().parseFromString(repaymentTemplateHTML, 'text/html').querySelector('#loan-widget-template').content;

  const renderRepayments = (filter = '') => {
    repaymentsGrid.innerHTML = '';
    const filteredRepayments = repayments.filter(
      (repayment) => repayment.loanTitle.toLowerCase().includes(filter.toLowerCase()) || repayment.loanDescription.toLowerCase().includes(filter.toLowerCase()) || repayment.loanId.includes(filter)
    );

    repaymentsCount.textContent = `${filteredRepayments.length} Active Repayments`;

    filteredRepayments.forEach((repayment) => {
      const repaymentClone = document.importNode(repaymentTemplate, true);
      repaymentClone.querySelector('.loan-id').textContent = repayment.loanId;
      repaymentClone.querySelector('.loan-type').textContent = repayment.loanType;
      repaymentClone.querySelector('.loan-title').textContent = repayment.loanTitle;
      repaymentClone.querySelector('.loan-description').textContent = repayment.loanDescription;
      repaymentClone.querySelector('.repayment-period').textContent = repayment.repaymentPeriod;
      repaymentClone.querySelector('.interest-rate').textContent = repayment.interestRate;
      repaymentClone.querySelector('.funding-goal').textContent = `Total Repayment: ${repayment.fundingGoal}`;
      repaymentClone.querySelector('.funded-bar').style.width = `${repayment.repaidPercentage}%`;
      repaymentClone.querySelector('.funded-bar').classList.add('bg-blue-500'); // Adjust bar color for repayments
      repaymentClone.querySelector('.funded-amount').textContent = `${repayment.repaidAmount} repaid`;
      repaymentClone.querySelector('.days-left').textContent = `${repayment.daysLeft} Days Left`;
      repaymentClone.querySelector('.creator').textContent = `Created by: ${repayment.creator}`;
      repaymentsGrid.appendChild(repaymentClone);
    });
  };

  renderRepayments();

  repaymentSearch.addEventListener('input', (e) => renderRepayments(e.target.value));
};
