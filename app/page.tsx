// app/page.tsx (for Next.js 13+ App Router)
"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const sopData = [
    {
      id: 'sop1',
      title: 'COPA Data Model Realignment',
      purpose: 'To restructure COPA operating concern and characteristics for improved reporting alignment',
      steps: [
        'Analyze current COPA data model against new business requirements',
        'Document proposed changes to operating concern structure in KE4H',
        'Create backup of existing COPA configuration using transport requests',
        'Test realignment in development system using transaction KEDV',
        'Validate data integrity after characteristic additions/modifications',
        'Execute transport to quality system for user acceptance testing',
        'Obtain business sign-off before production deployment',
        'Monitor data loads post-realignment for 48 hours'
      ],
      transactions: ['KE4H', 'KEDV'],
      warnings: ['Always create a complete backup of your COPA configuration before making any structural changes.']
    },
    {
      id: 'sop2',
      title: 'COPA Realignment Data Migration',
      purpose: 'To migrate historical COPA data when realigning operating concern structure',
      steps: [
        'Extract existing COPA data using transaction KE30 or custom reports',
        'Create data mapping document for old vs. new characteristic values',
        'Develop ABAP programs or use standard SAP tools (RSPL, COGI) for migration',
        'Execute test migration in sandbox environment first',
        'Validate migrated data completeness and accuracy using KE30',
        'Schedule production migration during maintenance window',
        'Perform reconciliation between source and target systems',
        'Archive old COPA data according to retention policies'
      ],
      transactions: ['KE30', 'RSPL', 'COGI'],
      notes: ['Data migration should always be performed during planned maintenance windows to minimize business impact.']
    },
    {
      id: 'sop3',
      title: 'COPA Realignment Testing and Validation',
      purpose: 'To ensure COPA realignment meets functional requirements and data accuracy',
      steps: [
        'Develop comprehensive test scenarios covering all COPA processes',
        'Create test data sets representing various business scenarios',
        'Execute unit testing for each modified COPA component',
        'Perform integration testing with SD, MM, and FI modules',
        'Validate planning and actual data flows using KE21N and KE24',
        'Test all COPA reports and BW extractors for data consistency',
        'Conduct user acceptance testing with business stakeholders',
        'Document test results and obtain formal approval'
      ],
      transactions: ['KE21N', 'KE24']
    },
    {
      id: 'sop4',
      title: 'COPA BW Extractor Realignment',
      purpose: 'To modify BW extractors following COPA structure changes',
      steps: [
        'Identify all BW extractors dependent on COPA (2LIS_11_*, 0CO_PA_*)',
        'Analyze impact of COPA changes on extractor field mapping',
        'Modify extractor structures in ROOSOURCE or create custom extractors',
        'Update transformation routines in BW for new COPA characteristics',
        'Test delta extraction mechanism for modified extractors',
        'Full load BW InfoCubes/DSOs after extractor modifications',
        'Validate BW reports against source COPA data',
        'Update extractor documentation and schedule regular monitoring'
      ],
      transactions: ['ROOSOURCE'],
      warnings: ['BW extractor modifications can impact existing reports and dashboards. Coordinate with BW team thoroughly.']
    },
    {
      id: 'sop5',
      title: 'COPA Realignment Impact Assessment',
      purpose: 'To systematically evaluate impact of COPA changes across SAP landscape',
      steps: [
        'Use transaction SUIM to identify users and roles accessing COPA',
        'Analyze custom reports, ALV grids, and SAP Query dependencies',
        'Review interfaces and data extractions from COPA tables',
        'Assess impact on planning processes (KE21N) and budget allocations',
        'Evaluate effect on month-end closing procedures and reconciliations',
        'Check integration points with other SAP modules (SD, MM, PS)',
        'Document findings in impact assessment matrix with risk ratings',
        'Present findings to steering committee for approval'
      ],
      transactions: ['SUIM', 'KE21N']
    },
    {
      id: 'sop6',
      title: 'COPA Master Data Realignment',
      purpose: 'To align COPA characteristic values with new business structure',
      steps: [
        'Extract current characteristic values using transaction KE4G',
        'Create mapping table for old to new characteristic assignments',
        'Update master data using mass change transactions (KE4C, KE4M)',
        'Validate characteristic hierarchies and attribute assignments',
        'Test derivation rules and valuation strategies post-change',
        'Execute mass update programs during maintenance window',
        'Verify master data consistency across dependent systems',
        'Update user training materials for new characteristic values'
      ],
      transactions: ['KE4G', 'KE4C', 'KE4M']
    },
    {
      id: 'sop7',
      title: 'COPA Realignment Go-Live Support',
      purpose: 'To provide structured support during COPA realignment go-live',
      steps: [
        'Establish dedicated support team with defined roles and responsibilities',
        'Set up war room with access to all relevant systems and tools',
        'Monitor initial data loads and real-time postings using SM37 and SM50',
        'Execute pre-defined smoke tests for critical COPA processes',
        'Provide immediate resolution for priority issues using established escalation',
        'Communicate status updates to stakeholders every 2 hours',
        'Document all issues and resolutions in knowledge base',
        'Conduct post go-live review within 48 hours'
      ],
      transactions: ['SM37', 'SM50'],
      notes: ['Successful go-live requires dedicated support team, clear communication plan, and immediate issue resolution capabilities.']
    },
    {
      id: 'sop8',
      title: 'COPA Realignment Rollback',
      purpose: 'To safely revert COPA changes if critical issues arise during deployment',
      steps: [
        'Maintain complete backup of pre-realignment COPA configuration',
        'Document detailed rollback procedure with step-by-step instructions',
        'Test rollback procedure in development environment before go-live',
        'Define clear rollback decision criteria and approval authority',
        'Prepare rollback transport requests with reversed configuration changes',
        'Execute rollback during designated maintenance window if needed',
        'Restore master data and transactional data from backups',
        'Communicate rollback status and revised timeline to all stakeholders'
      ],
      warnings: ['Rollback procedures must be tested and approved before go-live. Clear decision criteria are essential.']
    },
    {
      id: 'sop9',
      title: 'COPA Realignment Performance Optimization',
      purpose: 'To optimize COPA performance after structural realignment',
      steps: [
        'Analyze current COPA table sizes and growth patterns using SE80',
        'Review and optimize database indexes on CE1* and CE2* tables',
        'Implement summarization levels using transaction KEI1 for frequently accessed data',
        'Configure parallel processing for large data volumes in COPA batch jobs',
        'Optimize memory parameters for COPA planning and reporting transactions',
        'Monitor system performance using ST03N and ST22 for COPA-related issues',
        'Implement archiving strategy for historical COPA data using CO_COPA',
        'Document performance improvements and schedule regular reviews'
      ],
      transactions: ['SE80', 'KEI1', 'ST03N', 'ST22', 'CO_COPA']
    },
    {
      id: 'sop10',
      title: 'COPA Realignment Documentation and Training',
      purpose: 'To ensure proper documentation and user training for COPA realignment changes',
      steps: [
        'Update functional specification documents with new COPA structure',
        'Create user manuals for modified COPA transactions and reports',
        'Develop training materials covering new characteristics and processes',
        'Record training videos for complex COPA procedures and calculations',
        'Conduct training sessions for super users and end users',
        'Update security role documentation and authorization objects',
        'Create quick reference guides for daily COPA operations',
        'Establish knowledge transfer sessions with support teams',
        'Schedule regular refresher training and documentation reviews'
      ],
      notes: ['Comprehensive documentation and training are critical for successful COPA realignment adoption.']
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>

      <div style={{ display: 'flex', maxWidth: '1400px', margin: '0 auto', backgroundColor: 'white', minHeight: '100vh' }}>
        {/* Table of Contents Sidebar */}
        <nav style={{ 
          width: '280px', 
          backgroundColor: '#f6f6f6', 
          borderRight: '1px solid #a2a9b1', 
          position: 'fixed', 
          height: '100vh', 
          overflowY: 'auto', 
          zIndex: 100 
        }}>
          <div style={{ 
            backgroundColor: '#eaecf0', 
            padding: '15px 20px', 
            borderBottom: '1px solid #a2a9b1' 
          }}>
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#000' }}>Contents</h3>
          </div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ borderBottom: '1px solid #eaecf0' }}>
              <a 
                href="#overview" 
                style={{ 
                  display: 'block', 
                  padding: '8px 20px', 
                  color: activeSection === 'overview' ? '#000' : '#0645ad',
                  textDecoration: 'none', 
                  fontSize: '14px', 
                  lineHeight: '1.4',
                  backgroundColor: activeSection === 'overview' ? '#a2a9b1' : 'transparent',
                  fontWeight: activeSection === 'overview' ? 'bold' : 'normal',
                  cursor: 'pointer'
                }}
                onClick={(e) => { e.preventDefault(); scrollToSection('overview'); }}
              >
                Overview
              </a>
            </li>
            {sopData.map((sop, index) => (
              <li key={sop.id} style={{ borderBottom: '1px solid #eaecf0' }}>
                <a 
                  href={`#${sop.id}`}
                  style={{ 
                    display: 'block', 
                    padding: '8px 20px', 
                    color: activeSection === sop.id ? '#000' : '#0645ad',
                    textDecoration: 'none', 
                    fontSize: '14px', 
                    lineHeight: '1.4',
                    backgroundColor: activeSection === sop.id ? '#a2a9b1' : 'transparent',
                    fontWeight: activeSection === sop.id ? 'bold' : 'normal',
                    cursor: 'pointer'
                  }}
                  onClick={(e) => { e.preventDefault(); scrollToSection(sop.id); }}
                >
                  {index + 1}. {sop.title}
                </a>
              </li>
            ))}
            <li style={{ borderBottom: '1px solid #eaecf0' }}>
              <a 
                href="#references" 
                style={{ 
                  display: 'block', 
                  padding: '8px 20px', 
                  color: activeSection === 'references' ? '#000' : '#0645ad',
                  textDecoration: 'none', 
                  fontSize: '14px', 
                  lineHeight: '1.4',
                  backgroundColor: activeSection === 'references' ? '#a2a9b1' : 'transparent',
                  fontWeight: activeSection === 'references' ? 'bold' : 'normal',
                  cursor: 'pointer'
                }}
                onClick={(e) => { e.preventDefault(); scrollToSection('references'); }}
              >
                References
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main style={{ flex: 1, marginLeft: '280px', padding: 0 }}>
          <article style={{ maxWidth: '800px', padding: '20px 40px', lineHeight: '1.6' }}>
            {/* Header */}
            <header style={{ borderBottom: '3px solid #a2a9b1', paddingBottom: '15px', marginBottom: '30px' }}>
              <h1 style={{ 
                fontSize: '32px', 
                fontWeight: 'normal', 
                margin: '0 0 10px 0', 
                color: '#000', 
                fontFamily: 'Georgia, Times, serif' 
              }}>
                SAP BW COPA Realignment SOPs
              </h1>
              <p style={{ fontSize: '16px', color: '#54595d', margin: '8px 0', fontStyle: 'italic' }}>
                Standard Operating Procedures for Controlling Profitability Analysis Realignment
              </p>
              <div style={{ fontSize: '13px', color: '#54595d', marginTop: '8px' }}>
                <span>From SAP Documentation</span>
                <span style={{ margin: '0 5px' }}>•</span>
                <span>Last updated: August 7, 2025</span>
              </div>
            </header>

            {/* Overview Section */}
            <section id="overview" style={{ marginBottom: '40px' }}>
              <h2 style={{ 
                fontSize: '24px', 
                fontWeight: 'normal', 
                margin: '30px 0 15px 0', 
                color: '#000', 
                borderBottom: '1px solid #a2a9b1', 
                paddingBottom: '5px', 
                fontFamily: 'Georgia, Times, serif' 
              }}>
                Overview
              </h2>
              <p style={{ margin: '15px 0', textAlign: 'justify' }}>
                The <strong>SAP BW COPA (Controlling Profitability Analysis) Realignment</strong> process involves 
                restructuring and optimizing the COPA data model to align with changing business requirements. 
                This comprehensive guide provides detailed Standard Operating Procedures (SOPs) for each phase 
                of the realignment process.
              </p>
              
              <div style={{ 
                backgroundColor: '#f8f9fa', 
                border: '1px solid #a2a9b1', 
                borderLeft: '4px solid #36c', 
                padding: '15px', 
                margin: '20px 0' 
              }}>
                <h4 style={{ marginTop: 0, color: '#000' }}>Key Components</h4>
                <ul>
                  <li><strong>Operating Concern:</strong> The organizational unit for which profitability is analyzed</li>
                  <li><strong>Characteristics:</strong> Criteria used to analyze profitability (e.g., customer, product, region)</li>
                  <li><strong>Value Fields:</strong> Key figures that represent revenues, costs, and margins</li>
                  <li><strong>BW Integration:</strong> Data extraction and transformation for Business Warehouse reporting</li>
                </ul>
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '25px 0 10px 0', color: '#000' }}>
                Project Phases
              </h3>
              <p style={{ margin: '15px 0' }}>
                A typical COPA realignment project follows these phases:
              </p>
              <ol style={{ margin: '15px 0', paddingLeft: '30px' }}>
                <li style={{ margin: '8px 0' }}><strong>Assessment & Planning:</strong> Impact analysis and project planning</li>
                <li style={{ margin: '8px 0' }}><strong>Design & Development:</strong> Data model design and configuration</li>
                <li style={{ margin: '8px 0' }}><strong>Testing & Validation:</strong> Comprehensive testing across all scenarios</li>
                <li style={{ margin: '8px 0' }}><strong>Migration & Go-Live:</strong> Data migration and production deployment</li>
                <li style={{ margin: '8px 0' }}><strong>Optimization & Support:</strong> Performance tuning and ongoing support</li>
              </ol>
            </section>

            {/* SOP Sections */}
            {sopData.map((sop, index) => (
              <section key={sop.id} id={sop.id} style={{ marginBottom: '40px' }}>
                <h2 style={{ 
                  fontSize: '24px', 
                  fontWeight: 'normal', 
                  margin: '30px 0 15px 0', 
                  color: '#000', 
                  borderBottom: '1px solid #a2a9b1', 
                  paddingBottom: '5px', 
                  fontFamily: 'Georgia, Times, serif' 
                }}>
                  {index + 1}. {sop.title}
                </h2>
                
                <div style={{ 
                  backgroundColor: '#f0f8ff', 
                  border: '1px solid #bee5eb', 
                  borderLeft: '4px solid #17a2b8', 
                  padding: '15px', 
                  margin: '20px 0' 
                }}>
                  <h4 style={{ marginTop: 0, color: '#0c5460' }}>Purpose</h4>
                  <p style={{ margin: 0 }}>{sop.purpose}</p>
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '25px 0 10px 0', color: '#000' }}>
                  Procedure
                </h3>
                <ol style={{ 
                  backgroundColor: '#fdfdfd', 
                  border: '1px solid #eaecf0', 
                  padding: '20px 30px', 
                  margin: '20px 0' 
                }}>
                  {sop.steps.map((step, stepIndex) => (
                    <li key={stepIndex} style={{ margin: '12px 0', padding: '5px 0' }}>{step}</li>
                  ))}
                </ol>

                {sop.transactions && (
                  <div style={{ 
                    backgroundColor: '#fff3cd', 
                    border: '1px solid #ffeaa7', 
                    borderLeft: '4px solid #ffc107', 
                    padding: '15px', 
                    margin: '20px 0' 
                  }}>
                    <h4 style={{ marginTop: 0, color: '#856404' }}>Key SAP Transactions</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {sop.transactions.map((transaction, transIndex) => (
                        <code key={transIndex} style={{ 
                          backgroundColor: '#fff', 
                          border: '1px solid #dee2e6', 
                          padding: '4px 8px', 
                          borderRadius: '3px', 
                          fontFamily: 'Courier New, monospace', 
                          fontSize: '14px', 
                          color: '#495057' 
                        }}>
                          {transaction}
                        </code>
                      ))}
                    </div>
                  </div>
                )}

                {sop.warnings && (
                  <div style={{ 
                    backgroundColor: '#f8d7da', 
                    border: '1px solid #f5c6cb', 
                    borderLeft: '4px solid #dc3545', 
                    padding: '15px', 
                    margin: '20px 0' 
                  }}>
                    <h4 style={{ marginTop: 0, color: '#721c24' }}>⚠️ Important Warnings</h4>
                    {sop.warnings.map((warning, warnIndex) => (
                      <p key={warnIndex} style={{ margin: 0 }}>{warning}</p>
                    ))}
                  </div>
                )}

                {sop.notes && (
                  <div style={{ 
                    backgroundColor: '#d1ecf1', 
                    border: '1px solid #bee5eb', 
                    borderLeft: '4px solid #17a2b8', 
                    padding: '15px', 
                    margin: '20px 0' 
                  }}>
                    <h4 style={{ marginTop: 0, color: '#0c5460' }}>📝 Notes</h4>
                    {sop.notes.map((note, noteIndex) => (
                      <p key={noteIndex} style={{ margin: 0 }}>{note}</p>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* References Section */}
            <section id="references" style={{ marginBottom: '40px' }}>
              <h2 style={{ 
                fontSize: '24px', 
                fontWeight: 'normal', 
                margin: '30px 0 15px 0', 
                color: '#000', 
                borderBottom: '1px solid #a2a9b1', 
                paddingBottom: '5px', 
                fontFamily: 'Georgia, Times, serif' 
              }}>
                References
              </h2>
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <li style={{ margin: '8px 0', paddingLeft: '15px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#0645ad' }}>↗</span>
                  SAP Help Portal - Profitability Analysis (CO-PA)
                </li>
                <li style={{ margin: '8px 0', paddingLeft: '15px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#0645ad' }}>↗</span>
                  SAP Note 2147247 - COPA Realignment Best Practices
                </li>
                <li style={{ margin: '8px 0', paddingLeft: '15px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#0645ad' }}>↗</span>
                  SAP Business Warehouse Implementation Guide
                </li>
                <li style={{ margin: '8px 0', paddingLeft: '15px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#0645ad' }}>↗</span>
                  SAP Community - COPA Realignment Forum
                </li>
                <li style={{ margin: '8px 0', paddingLeft: '15px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#0645ad' }}>↗</span>
                  SAP Training Course AC210 - Controlling with SAP ERP
                </li>
              </ul>
              
              <div style={{ 
                backgroundColor: '#f8f9fa', 
                border: '1px solid #a2a9b1', 
                padding: '15px', 
                margin: '20px 0' 
              }}>
                <h3 style={{ marginTop: 0, fontSize: '16px' }}>See Also</h3>
                <ul style={{ marginBottom: 0 }}>
                  <li>SAP CO Module Configuration Guide</li>
                  <li>BW Data Modeling Best Practices</li>
                  <li>SAP Transport Management Guide</li>
                  <li>Change Management in SAP Projects</li>
                </ul>
              </div>
            </section>
          </article>
        </main>
      </div>
    </div>
  );
}