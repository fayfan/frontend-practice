import { useRef, useState } from 'react';
import { RxCaretDown, RxCaretRight } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import './BonsaiNav.css';
import './BonsaiMain.css';

function Bonsai() {
  const pricingCheckboxRef = useRef();
  const [activeAccordion, setActiveAccordion] = useState([]);
  const [pricing, setPricing] = useState('monthly');

  const workflowDropdownItems = [
    {
      header: 'Invoices',
      body: 'Get paid faster with automatic invoicing, online payments and more',
    },
    {
      header: 'Proposals',
      body: 'Create client-winning proposals with open receipts, custom packages and electronic approvals',
    },
    {
      header: 'Contracts',
      body: 'Protect your business with fully-customizable contract templates. Edit and e-sign hassle free.',
    },
    {
      header: 'Client CRM',
      body: 'Add leads, manage existing clients and track projects easily from one place',
    },
    {
      header: 'Forms & Automations',
      body: 'Boost client intake and automate feedback with custom web forms and questionnaires',
    },
    {
      header: 'Time Tracking',
      body: "Stay organized with Bonsai's all-in-one time tracker, automated timesheets and billing system",
    },
    {
      header: 'Accounting',
      body: 'Manage your finances easily with income reports, expense tracking, tax reminders and more',
    },
    {
      header: 'Task Tracking',
      body: 'Stress-free task management with project templates and integrated timesheets',
    },
  ];

  const templates = [
    {
      category: 'Contract Templates',
      featuredTemplates: [
        'Free Contract Maker',
        'Social Media Management Contract Template',
        'Graphic Design Contract Template',
        'Digital Marketing Contract Template',
      ],
    },
    {
      category: 'Proposal Templates',
      featuredTemplates: [
        'Graphic Design Proposal Template',
        'Business Proposal Template',
        'Brand Ambassador Proposal Template',
        'Data Entry Proposal Letter Template',
      ],
    },
    {
      category: 'Invoice Templates',
      featuredTemplates: [
        'Social Media Invoice Template',
        'Contractor Invoice Templates',
        'Web Design Invoice Template',
        'Influencer Invoice Template',
      ],
    },
    {
      category: 'Agreement Templates',
      featuredTemplates: [
        'Influencer Agreement Template',
        'Influencer Collaboration Agreement Template',
        'Monthly Retainer Agreement Template',
        'Writer Agreement Template',
      ],
    },
    {
      category: 'Quote Templates',
      featuredTemplates: [
        'Web Design Quotation Template',
        'Interior Design Quotation Template',
        'Digital Marketing Quotation Template',
        'Video Production Quotation Template',
      ],
    },
    {
      category: 'Scope of Work Templates',
      featuredTemplates: [
        'Website Development Scope of Work Template',
        'Digital Marketing Scope of Work Template',
        'Consultant Scope of Work Template',
        'Interior Design Scope of Work Template',
      ],
    },
    {
      category: 'Brief Templates',
      featuredTemplates: [
        'Design Brief Template',
        'Architecture Design Brief',
        'Fashion Design Brief',
        'Creative Brief Template',
      ],
    },
  ];

  const handlePricingChange = () => {
    if (pricingCheckboxRef.current) {
      setPricing(pricing === 'monthly' ? 'yearly' : 'monthly');
    }
  };

  const handleAccordionClick = id => {
    setActiveAccordion(() => {
      if (activeAccordion.includes(id)) {
        return activeAccordion.filter(i => i !== id);
      } else {
        return [...activeAccordion, id];
      }
    });
  };

  return (
    <div id="bonsai-page">
      <nav>
        <div id="nav-container-left">
          <a href="/bonsai">
            <img
              src="http://web.archive.org/web/20221117021714im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
              width="100px"
              alt="Bonsai logo"
            />
          </a>
        </div>
        <div id="nav-container-center">
          <div id="product-dropdown">
            <span className="nav-header">
              Product <RxCaretDown style={{ verticalAlign: 'bottom' }} />
            </span>
            <div className="product-dropdown-content">
              <div id="workflow-dropdown">
                <div className="product-dropdown-item">
                  <RxCaretRight id="rx-caret-right" />
                  <p className="product-dropdown-header">Bonsai Workflow</p>
                  <p className="product-dropdown-body">
                    Look professional, win more clients and manage your business
                    from one place
                  </p>
                </div>
                <div className="workflow-dropdown-content">
                  <div className="workflow-dropdown-grid">
                    {workflowDropdownItems.map(({ header, body }) => {
                      return (
                        <NavLink
                          to={`./${header
                            .toLowerCase()
                            .replaceAll(' ', '-')
                            .replaceAll('&', 'and')}`}
                        >
                          <div className="workflow-dropdown-item">
                            <p className="workflow-dropdown-header">{header}</p>
                            <p className="workflow-dropdown-body">{body}</p>
                          </div>
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              </div>
              <NavLink to="./bonsai-tax">
                <div className="product-dropdown-item">
                  <p className="product-dropdown-header">Bonsai Tax</p>
                  <p className="product-dropdown-body">
                    Track expenses, maximize tax writeoffs, and estimate taxes
                    without the headache
                  </p>
                </div>
              </NavLink>
              <NavLink to="./bonsai-cash">
                <div className="product-dropdown-item">
                  <p className="product-dropdown-header">Bonsai Cash</p>
                  <p className="product-dropdown-body">
                    Bonsai's all-in-one financial hub: No fees and lightning
                    fast payouts
                  </p>
                </div>
              </NavLink>
            </div>
          </div>
          <div id="templates-dropdown">
            <span className="nav-header">
              Templates <RxCaretDown style={{ verticalAlign: 'bottom' }} />
            </span>
            <div className="templates-dropdown-content">
              {templates.map(({ category, featuredTemplates }) => {
                return (
                  <div id="featured-templates-dropdown">
                    <NavLink
                      to={`./templates/${category
                        .split(' Templates')[0]
                        .toLowerCase()
                        .replaceAll(' ', '-')}`}
                    >
                      <div className="templates-dropdown-item">
                        <RxCaretRight id="rx-caret-right" />
                        <p className="templates-dropdown-header">{category}</p>
                      </div>
                    </NavLink>
                    <div className="featured-templates-dropdown-content">
                      <span className="featured-templates-dropdown-header">
                        Featured {category}
                      </span>
                      {featuredTemplates.map(template => {
                        return (
                          <NavLink
                            to={`./a/${template
                              .toLowerCase()
                              .replaceAll(' ', '-')}`}
                          >
                            <p className="featured-templates-dropdown-item">
                              {template}
                            </p>
                          </NavLink>
                        );
                      })}
                      <p className="featured-templates-dropdown-link">
                        <NavLink
                          to={`./templates/${category
                            .split(' Templates')[0]
                            .toLowerCase()
                            .replaceAll(' ', '-')}`}
                        >
                          See All Templates
                        </NavLink>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <NavLink to="./pricing" className="nav-header">
              Pricing
            </NavLink>
          </div>
          <div>
            <NavLink to="./reviews" className="nav-header">
              Reviews
            </NavLink>
          </div>
        </div>
        <div id="nav-container-right">
          <button id="log-in-button">Log In</button>
          <button id="sign-up-button">Start Free</button>
        </div>
      </nav>
      <main>
        <header id="main-header">
          <h1>Plans & Pricing</h1>
          <div id="main-slider">
            <span
              className={
                pricing === 'monthly' ? 'active-pricing' : 'inactive-pricing'
              }
            >
              Monthly
            </span>
            <label className="switch">
              <input
                type="checkbox"
                id="pricingCheckbox"
                value="pricingValue"
                ref={pricingCheckboxRef}
                onChange={handlePricingChange}
              />
              <span className="slider" />
            </label>
            <span
              className={
                pricing === 'yearly' ? 'active-pricing' : 'inactive-pricing'
              }
            >
              Yearly
            </span>
          </div>
        </header>
        <footer id="main-footer">
          <div id="footer-left">
            <div className="footer-heading">Product</div>
            <div className="footer-content">
              <div className="footer-content-block">
                <NavLink to="./freelance-proposals">Proposals</NavLink>
                <NavLink to="./contracts">Contracts</NavLink>
                <NavLink to="./invoicing">Invoicing</NavLink>
                <NavLink to="./freelance-crm">Client CRM</NavLink>
                <NavLink to="./freelance-time-tracking">Time Tracking</NavLink>
                <NavLink to="./freelance-task-management">
                  Task Tracking
                </NavLink>
                <NavLink to="./freelance-forms">Forms</NavLink>
                <NavLink to="./freelance-accounting-software">
                  Accounting
                </NavLink>
                <NavLink to="./bonsai-tax">Bonsai Tax</NavLink>
                <NavLink to="./bonsai-cash">Bonsai Cash</NavLink>
              </div>
              <div className="footer-content-block">
                <NavLink to="./pricing" style={{ color: '#00b289' }}>
                  Pricing
                </NavLink>
                <NavLink to="./reviews">Bonsai Reviews</NavLink>
              </div>
            </div>
          </div>
          <div id="footer-center">
            <div className="footer-heading">Free Resources</div>
            <div className="footer-content">
              <div className="footer-content-block">
                <NavLink to="./resources">Freelance Resources</NavLink>
                <NavLink to="./blog">Freelance Blog by Bonsai</NavLink>
                <NavLink to="./blog/how-to-write-a-contract">
                  How to Write a Contract
                </NavLink>
                <NavLink to="./online-signature-maker">
                  Online Signature Maker
                </NavLink>
              </div>
              <div className="footer-content-block">
                <NavLink to="./self-employment-tax">
                  Self-Employed Taxes Hub
                </NavLink>
                <NavLink to="./self-employment-tax-calculator">
                  Self-Employed Tax Calculator
                </NavLink>
                <NavLink to="./blog/tax-deductions-for-self-employed">
                  Self-Employed Tax Deductions
                </NavLink>
              </div>
              <div className="footer-content-block">
                <div className="footer-subheading">Templates</div>
                <div className="accordion">
                  <div className="accordion-header">
                    <NavLink to="./templates/invoices">
                      Invoice Templates
                    </NavLink>
                    <RxCaretDown
                      onClick={() => handleAccordionClick('invoices')}
                    />
                  </div>
                  <div
                    className={
                      activeAccordion.includes('invoices')
                        ? 'accordion-content'
                        : 'accordion-content hidden'
                    }
                  >
                    <NavLink to="./a/freelance-invoice-generator">
                      Invoice Generator
                    </NavLink>
                    <NavLink to="./a/blank-invoice-template">
                      Blank Invoice Template
                    </NavLink>
                    <NavLink to="./a/consultant-invoice-template-excel">
                      Consultant Invoice Template
                    </NavLink>
                    <NavLink to="./a/editable-invoice-template-pdf">
                      Editable Invoice Template
                    </NavLink>
                    <NavLink to="./a/freelance-graphic-designer-invoice-template">
                      Graphic Design Invoice
                    </NavLink>
                    <NavLink to="./a/web-design-invoice-template">
                      Web Design Invoice
                    </NavLink>
                    <NavLink to="./a/independent-contractor-invoice">
                      Contractor Invoice Template
                    </NavLink>
                    <NavLink to="./a/photography-invoice-template">
                      Photography Invoice Template
                    </NavLink>
                    <NavLink to="./a/self-employed-invoice-template">
                      Self Employed Invoice Template
                    </NavLink>
                  </div>
                </div>
                <div className="accordion">
                  <div className="accordion-header">
                    <NavLink to="./templates/proposals">
                      Proposal Templates
                    </NavLink>
                    <RxCaretDown
                      onClick={() => handleAccordionClick('proposals')}
                    />
                  </div>
                  <div
                    className={
                      activeAccordion.includes('proposals')
                        ? 'accordion-content'
                        : 'accordion-content hidden'
                    }
                  >
                    <NavLink to="./a/website-proposal-template-word">
                      Website Proposal Template
                    </NavLink>
                    <NavLink to="./a/digital-marketing-proposal-template">
                      Digital Marketing Proposal Template
                    </NavLink>
                    <NavLink to="./a/social-media-marketing-proposal">
                      Social Media Marketing Proposal
                    </NavLink>
                    <NavLink to="./a/graphic-design-proposal-pdf">
                      Graphic Design Proposal
                    </NavLink>
                    <NavLink to="./a/freelance-proposal-example">
                      Freelance Proposal Template
                    </NavLink>
                    <NavLink to="./a/seo-proposal-template">
                      SEO Proposal Template
                    </NavLink>
                  </div>
                </div>
                <div className="accordion">
                  <div className="accordion-header">
                    <NavLink to="./templates/contracts">
                      Contract Templates
                    </NavLink>
                    <RxCaretDown
                      onClick={() => handleAccordionClick('contracts')}
                    />
                  </div>
                  <div
                    className={
                      activeAccordion.includes('contracts')
                        ? 'accordion-content'
                        : 'accordion-content hidden'
                    }
                  >
                    <NavLink to="./a/online-contract-maker">
                      Online Contract
                    </NavLink>
                    <NavLink to="./a/freelance-design-contract">
                      Graphic Design Contract
                    </NavLink>
                    <NavLink to="./a/freelance-contract-template">
                      Freelance Contract Template
                    </NavLink>
                    <NavLink to="./a/social-media-contract-template">
                      Social Media Marketing Contract
                    </NavLink>
                    <NavLink to="./a/software-development-contract-template-pdf">
                      Software Development Contract
                    </NavLink>
                    <NavLink to="./a/freelance-website-design-contract">
                      Web Design Contract
                    </NavLink>
                    <NavLink to="./a/video-production-contract-pdf">
                      Video Production Contract
                    </NavLink>
                    <NavLink to="./a/freelance-public-relations-contract-template">
                      Public Relations Contract
                    </NavLink>
                    <NavLink to="./a/translation-contract">
                      Translation Contract
                    </NavLink>
                  </div>
                </div>
                <div className="accordion">
                  <div className="accordion-header">
                    <NavLink to="./templates/agreements">
                      Agreement Templates
                    </NavLink>
                    <RxCaretDown
                      onClick={() => handleAccordionClick('agreements')}
                    />
                  </div>
                  <div
                    className={
                      activeAccordion.includes('agreements')
                        ? 'accordion-content'
                        : 'accordion-content hidden'
                    }
                  >
                    <NavLink to="./a/monthly-retainer-agreement">
                      Retainer Agreement Template
                    </NavLink>
                    <NavLink to="./a/social-media-influencer-agreement">
                      Influencer Agreement Template
                    </NavLink>
                    <NavLink to="./a/influencer-collaboration-agreement-template">
                      Collaboration Agreement Template
                    </NavLink>
                    <NavLink to="./a/software-development-contract-template-pdf">
                      Software Development Agreement
                    </NavLink>
                    <NavLink to="./a/digital-marketing-contract-template">
                      Marketing Agreement Template
                    </NavLink>
                  </div>
                </div>
                <div className="accordion">
                  <div className="accordion-header">
                    <NavLink to="./templates/scope-of-work">
                      Scope of Work Templates
                    </NavLink>
                    <RxCaretDown
                      onClick={() => handleAccordionClick('scope-of-work')}
                    />
                  </div>
                  <div
                    className={
                      activeAccordion.includes('scope-of-work')
                        ? 'accordion-content'
                        : 'accordion-content hidden'
                    }
                  >
                    <NavLink to="./a/website-development-scope-of-work-template">
                      Website Development Scope of Work
                    </NavLink>
                    <NavLink to="./a/marketing-scope-of-work">
                      Digital Marketing Scope of Work
                    </NavLink>
                    <NavLink to="./a/sample-statement-of-work-for-consulting-services">
                      Consultant Statement of Work Template
                    </NavLink>
                    <NavLink to="./a/sow-for-software-development">
                      Software Development Scope of Work
                    </NavLink>
                  </div>
                </div>
                <div className="accordion">
                  <div className="accordion-header">
                    <NavLink to="./templates/quotes">Quote Templates</NavLink>
                    <RxCaretDown
                      onClick={() => handleAccordionClick('quotes')}
                    />
                  </div>
                  <div
                    className={
                      activeAccordion.includes('quotes')
                        ? 'accordion-content'
                        : 'accordion-content hidden'
                    }
                  >
                    <NavLink to="./a/freelance-quotation-template">
                      Freelance Quotation Template
                    </NavLink>
                    <NavLink to="./a/web-design-quotation">
                      Web Design Quotation Template
                    </NavLink>
                    <NavLink to="./a/graphic-design-quotation">
                      Graphic Design Quotation Template
                    </NavLink>
                    <NavLink to="./a/interior-design-quotation-sample">
                      Interior Design Quotation Template
                    </NavLink>
                    <NavLink to="./a/video-production-quotation-sample-pdf">
                      Video Production Quotation Template
                    </NavLink>
                    <NavLink to="./a/social-media-marketing-quotation">
                      Social Media Marketing Quotation
                    </NavLink>
                  </div>
                </div>
                <NavLink to="./credit-note-templates">
                  Credit Note Templates
                </NavLink>
                <NavLink to="./estimate-templates">Estimate Templates</NavLink>
                <NavLink to="./templates/forms">Form Templates</NavLink>
              </div>
            </div>
          </div>
          <div id="footer-right">
            <div className="footer-heading">Bonsai</div>
            <div className="footer-content">
              <div className="footer-content-block">
                <NavLink to="./about">About</NavLink>
                <NavLink to="./jobs">Careers</NavLink>
                <NavLink to="https://help.hellobonsai.com">Support</NavLink>
                <NavLink to="https://www.linkedin.com/company/bonsai">
                  LinkedIn
                </NavLink>
                <NavLink to="https://www.twitter.com/bonsaiinc">
                  Twitter
                </NavLink>
                <NavLink to="./privacy">Privacy Policy</NavLink>
                <NavLink to="./terms">Legal</NavLink>
              </div>
              <div className="footer-content-block">
                <NavLink to="./affiliates">Affiliates</NavLink>
                <NavLink to="./write-for-us">Write for Us</NavLink>
              </div>
              <div className="footer-content-block">
                <div className="accordion">
                  <div className="accordion-header">
                    <NavLink to="./alternatives">Comparisons</NavLink>
                    <RxCaretDown
                      onClick={() => handleAccordionClick('alternatives')}
                    />
                  </div>
                  <div
                    className={
                      activeAccordion.includes('alternatives')
                        ? 'accordion-content'
                        : 'accordion-content hidden'
                    }
                  >
                    <NavLink to="./blog/freshbooks-alternatives">
                      Freshbooks Alternatives
                    </NavLink>
                    <NavLink to="./alternatives/quickbooks-alternatives">
                      Quickbooks Alternatives
                    </NavLink>
                    <NavLink to="./alternatives/wave-vs-quickbooks-vs-bonsai">
                      Wave vs Quickbooks
                    </NavLink>
                    <NavLink to="./alternatives/xero-vs-quickbooks-vs-bonsai">
                      Xero vs Quickbooks
                    </NavLink>
                    <NavLink to="./alternatives/freshbooks-vs-quickbooks-vs-bonsai">
                      Freshbooks vs Quickbooks
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Bonsai;
