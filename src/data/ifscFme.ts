/** Source of truth: IFSCA_Website_Data_Collection_Filled-V1.xlsx
 * Only fields that contain FME-provided values are exported.
 * Illustrative example rows (Other KMP “Jane Doe”, sample Code of Conduct) are excluded.
 */

export const fme = {
  legalName: 'Sapient Wealth IFSC LLP',
  registrationNumber: 'FDM2026FNR0966',
  category: 'Registered Fund Management Entity (Non-Retail)',
  profile:
    'Sapient Wealth IFSC LLP is a Registered Fund Management Entity (Non-Retail) with the International Financial Services Centres Authority (IFSCA), operating out of GIFT City, Gandhinagar. It is part of the Sapient Wealth group, which has been engaged in wealth and investment management services in India since 2003, and extends the group\'s investment management capabilities to the International Financial Services Centre (IFSC).',
  ifscActivitiesBrief:
    'Sapient Wealth IFSC LLP undertakes fund management activities from the IFSC under the IFSCA (Fund Management) Regulations, 2025, including the management of alternative investment schemes for investors seeking exposure to Indian and global markets.',
  parentEntity:
    'Sapient Wealth Advisors & Brokers Pvt Ltd - SEBI-registered Investment Adviser (INA000015561) and AMFI-registered Mutual Fund Distributor (ARN-75320), based in Mumbai.',
};

export const contact = {
  registeredOffice:
    'Unit No. 1613, Signature Building, Floor 16, Block 13B, Zone 1, GIFT SEZ, Gandhinagar - 382355, Gujarat, India',
  telephone: '+91 9821885502',
  email: 'connect.ifsc@sapientwealth.co.in',
  investorEmail: 'connect.ifsc@sapientwealth.co.in',
};

export const activities = {
  fundManagement:
    'Management of Category III Alternative Investment Fund (AIF) schemes registered with IFSCA as a Registered Fund Management Entity (Non-Retail), covering both inbound and outbound fund structures.',
  fundTypes:
    'Category III AIF - Inbound (investing into India) and Category III AIF - Outbound, structured as a Fund of Funds (FoF) investing in global markets.',
  otherPermissible:
    'Under Chapter VI (Other Fund Management Activities) of the IFSCA (Fund Management) Regulations, 2025, permissible activities for a Registered FME include Portfolio Management Services, management of Investment Trusts (InvIT/REIT), Family Investment Funds, ESG-labelled schemes, and (since the July 2025 amendment introducing Part D) Third-Party Fund Management Services, i.e. managing schemes on behalf of a third-party fund manager, subject to IFSCA authorisation and eligibility conditions.',
};

export const schemes = [
  {
    name: 'Sapient Wealth India Opportunities Fund',
    type: 'Restricted Scheme (Non-Retail), Category III AIF - Inbound, Open-ended',
    description:
      'Multi-manager, long-term capital appreciation strategy participating in India\'s structural growth, investing primarily in units of SEBI-registered mutual funds, ETFs, Category I/II AIFs, and listed/unlisted Indian equity and equity-related securities. Benchmarked against the MSCI India USD Gross Return Index. Registered with SEBI as a Category I Foreign Portfolio Investor.',
    launchDate: 'Yet to be launched',
    status:
      'Pending launch - PPM in finalisation, minimum Corpus of USD 3,000,000 to be raised',
  },
  {
    name: 'Sapient Wealth Global Opportunities Fund',
    type: 'Restricted Scheme (Non-Retail), Category III AIF - Outbound, Open-ended',
    description:
      'Long-term capital appreciation by investing in global equity & equity-related instruments (including listed securities, equity funds/ETFs, and derivatives) and other securities (fixed income, REITs/InvITs, commodities, etc.) across Global Markets outside India and GIFT-IFSC. Region agnostic, sector agnostic. Benchmarked against the MSCI All Country World Index (MSCI ACWI). Structured as an irrevocable, contributory, determinate investment trust under the Indian Trusts Act, 1882.',
    launchDate: 'Yet to be launched',
    status:
      'Pending launch - PPM in finalisation, minimum Corpus of USD 3,000,000 to be raised',
  },
];

export const serviceProviders = [
  { type: 'Custodian', name: 'DBS' },
  { type: 'Trustee', name: 'Catalyst Trusteeship Limited (IFSC Branch)' },
  {
    type: 'Fund Administrator',
    name: 'OHM Dovetail Global Services (IFSC) Pvt. Ltd.',
  },
  { type: 'Statutory Auditor', name: 'CGCA & Associates LLP' },
  { type: 'Tax Advisor - US', name: 'Grant Thornton' },
  { type: 'Tax Advisor - Domestic', name: 'iMark Advisors' },
  { type: 'Legal Advisor', name: 'Economic Laws Practice (ELP)' },
  { type: 'Legal Advisor', name: 'Lakshmikumaran & Sridharan Attorneys' },
];

export const keyPersonnel = [
  {
    role: 'Principal Officer',
    name: 'Dhruv Lalit Mehta',
    designation: 'Principal Officer',
  },
  {
    role: 'Compliance Officer',
    name: 'Asutosh Routray',
    designation: 'Compliance Officer',
    email: 'asutosh@sapientwealth.co.in',
    telephone: '+91 9892698448',
  },
];

export const grievance = {
  escalationMatrix:
    'Investors may raise grievances relating to the Fund/FME by writing to the Grievance Redressal Officer. Complaints are logged, acknowledged, investigated, and resolved within the timelines specified below, with escalation to senior management if unresolved.',
  escalationContacts:
    '1. Asutosh Routray (Compliance Officer / GRO) -> 2. Shernal Sequeira -> 3. Dhruv Lalit Mehta (Principal Officer) -> 4. Roopa Venkatkrishnan',
  gro: {
    name: 'Asutosh Routray',
    designation: 'Compliance Officer / Grievance Redressal Officer',
  },
};
