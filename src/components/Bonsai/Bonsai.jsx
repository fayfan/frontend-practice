import { useRef, useState } from 'react';
import { RxCaretDown, RxCaretRight } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import './BonsaiNav.css';
import './BonsaiMain.css';

function Bonsai() {
  const pricingCheckboxRef = useRef();
  const [pricing, setPricing] = useState('monthly');

  const handlePricingChange = () => {
    if (pricingCheckboxRef.current) {
      setPricing(pricing === 'monthly' ? 'yearly' : 'monthly');
    }
  };

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
        <h1>Plans & Pricing</h1>
        <span>Monthly</span>
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
        <span>Yearly</span>
      </main>
    </div>
  );
}

export default Bonsai;
