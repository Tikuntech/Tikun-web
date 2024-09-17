import NavbarHeader from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-[#11112B]">
        <NavbarHeader />
        <h1 className="text-4xl md:text-6xl text-white font-medium flex-shrink-0 md:ml-10 md:mt-5">
          Terms & Condition
        </h1>

        <div className="mx-auto px-4 py-8 md:p-10">
          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-4"> Introduction</h2>
            <p className="text-gray-300">
              Welcome to <span className="font-bold">Tikuntech</span> . We are
              dedicated to protecting your personal information and ensuring
              transparency about how we handle it. This Privacy Policy outlines
              how we collect, use, disclose, and safeguard your information when
              you visit our website [insert website URL], use our software, or
              interact with our services.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-4">
              Information We Collect
            </h2>
            <h3 className="text-xl font-light mb-2 text-white italic">
              Personal Information
            </h3>
            <p className="text-gray-300 mb-4">
              We collect personal information that you provide directly, such
              as:
              <ul className="list-disc list-inside ml-6">
                <li>
                  <strong>Contact Information:</strong> Name, email address,
                  phone number.
                </li>
                <li>
                  <strong>Account Information:</strong> Username, password,
                  preferences.
                </li>
                <li>
                  <strong>Payment Information:</strong> Credit card details,
                  billing address (when applicable).
                </li>
              </ul>
            </p>
            <h3 className="text-xl font-light mb-2 text-white italic">
              {' '}
              Usage Data
            </h3>
            <p className="text-gray-300 mb-4">
              We collect information automatically when you use our services,
              including:
              <ul className="list-disc list-inside ml-6">
                <li>
                  <strong>Device Information:</strong> IP address, device type,
                  operating system.
                </li>
                <li>
                  <strong>Usage Data:</strong> Pages visited, time spent on our
                  site, click-through rates.
                </li>
              </ul>
            </p>
            <h3 className="text-xl font-light mb-2 text-white italic">
              Cookies and Tracking Technologies
            </h3>
            <p className="text-gray-300">
              We use cookies and similar technologies to collect data on your
              browsing activities. Cookies are small files placed on your device
              to:
              <ul className="list-disc list-inside ml-6">
                <li>
                  <strong>Enhance User Experience:</strong> Remember your
                  preferences and settings.
                </li>
                <li>
                  <strong>Analyze Usage:</strong> Understand how our services
                  are used.
                </li>
              </ul>
              You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-4">
              {' '}
              How We Use Your Information
            </h2>
            <p className="text-gray-300">
              We use the information we collect for:
              <ul className="list-disc list-inside ml-6">
                <li>
                  <strong>Service Provision:</strong> To deliver and maintain
                  our services.
                </li>
                <li>
                  <strong>Account Management:</strong> To process transactions
                  and manage your account.
                </li>
                <li>
                  <strong>Communication:</strong> To send service-related
                  updates, promotional offers (with consent), and respond to
                  inquiries.
                </li>
                <li>
                  <strong>Analytics:</strong> To analyze usage patterns and
                  improve our services.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> To meet legal obligations
                  and protect our rights.
                </li>
              </ul>
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-4">
              How We Share Your Information
            </h2>
            <p className="text-gray-300">
              We may share your information with:
              <ul className="list-disc list-inside ml-6">
                <li>
                  <strong>Service Providers:</strong> Third parties that assist
                  with business operations (e.g., payment processors, email
                  service providers).
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights, we may disclose information in legal
                  processes.
                </li>
                <li>
                  <strong>Business Transactions:</strong> In the event of a
                  merger, acquisition, or asset sale, information may be
                  transferred as part of the transaction.
                </li>
              </ul>
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-4"> Data Security</h2>
            <p className="text-gray-300">
              We implement robust security measures to protect your information,
              including:
              <ul className="list-disc list-inside ml-6">
                <li>
                  <strong>Encryption:</strong> To secure data in transit and at
                  rest.
                </li>
                <li>
                  <strong>Access Controls:</strong> To limit access to
                  authorized personnel only.
                </li>
                <li>
                  <strong>Regular Audits:</strong> To assess and improve our
                  security practices.
                </li>
              </ul>
              However, please note that no method of electronic storage or
              transmission is completely secure.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-4">
              {' '}
              Your Rights and Choices
            </h2>
            <p className="text-gray-300">
              You have the following rights regarding your personal information:
              <ul className="list-disc list-inside ml-6">
                <li>
                  <strong>Access and Correction:</strong> Request access to and
                  correction of your personal data.
                </li>
                <li>
                  <strong>Deletion:</strong> Request the deletion of your data
                  under certain conditions.
                </li>
                <li>
                  <strong>Opt-Out:</strong> Unsubscribe from marketing
                  communications at any time.
                </li>
                <li>
                  <strong>Data Portability:</strong> Obtain a copy of your data
                  in a structured format.
                </li>
              </ul>
              To exercise these rights, please contact us at [insert contact
              email].
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-4">
              {' '}
              International Data Transfers
            </h2>
            <p className="text-gray-300">
              If you are located outside [Your Country], your data may be
              transferred to and processed in [Your Country]. We ensure that
              such transfers are protected by appropriate safeguards in
              accordance with applicable data protection laws.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-4"> Data Retention</h2>
            <p className="text-gray-300">
              We retain your personal data only as long as necessary to fulfill
              the purposes for which it was collected or as required by law.
              Data retention periods vary depending on the type of data and
              applicable legal requirements.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-4"> Children’s Privacy</h2>
            <p className="text-gray-300">
              Our services are not intended for individuals under the age of 13.
              We do not knowingly collect personal information from children
              under 13. If we become aware that we have collected such
              information, we will take steps to delete it.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-4">
              {' '}
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with a revised effective date. We
              encourage you to review this policy periodically to stay informed
              about how we are protecting your information.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-4"> Contact Us</h2>
            <p className="text-gray-300">
              For any questions or concerns about this Privacy Policy or our
              data practices, please contact us at:
              <ul className="list-disc list-inside ml-6">
                <li>
                  <strong>Tikunteck</strong>
                </li>
                <li>
                  <strong>Address:</strong> [Address]
                </li>
                <li>
                  <strong>Email:</strong> [Email Address]
                </li>
                <li>
                  <strong>Phone:</strong> [Phone Number]
                </li>
                <li>
                  <strong>Website:</strong> [Website URL]
                </li>
              </ul>
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-4">
              {' '}
              Data Protection Officer
            </h2>
            <p className="text-gray-300">
              If applicable, you can also contact our Data Protection Officer
              at:
              <ul className="list-disc list-inside ml-6">
                <li>
                  <strong>Name of Data Protection Officer:</strong> [Name]
                </li>
                <li>
                  <strong>Email:</strong> [Email Address]
                </li>
                <li>
                  <strong>Phone:</strong> [Phone Number]
                </li>
              </ul>
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-4"> Complaints</h2>
            <p className="text-gray-300">
              If you believe that we have not adhered to this Privacy Policy,
              you have the right to lodge a complaint with a relevant data
              protection authority.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-4"> Third-Party Links</h2>
            <p className="text-gray-300">
              Our website or services may contain links to third-party websites.
              We are not responsible for the privacy practices or content of
              these third parties. We encourage you to review their privacy
              policies before providing any personal information.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-4">
              {' '}
              California Privacy Rights
            </h2>
            <p className="text-gray-300">
              If you are a California resident, you have additional rights under
              the California Consumer Privacy Act (CCPA). You can request access
              to the personal information we have collected about you and
              request its deletion. For more details, please contact us at
              [insert contact email].
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-4">
              {' '}
              European Union Privacy Rights
            </h2>
            <p className="text-gray-300">
              If you are located in the European Union, you have additional
              rights under the General Data Protection Regulation (GDPR),
              including the right to access, rectification, erasure, restriction
              of processing, and data portability. To exercise these rights,
              please contact us at [insert contact email].
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-4">
              {' '}
              Updates to Contact Information
            </h2>
            <p className="text-gray-300">
              Please notify us promptly of any changes to your contact
              information to ensure that we can communicate with you
              effectively.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-4">Policy Scope</h2>
            <p className="text-gray-300">
              This Privacy Policy applies only to the information we collect
              through our website and services. It does not apply to information
              collected by third parties or through other means.
            </p>
          </section>
        </div>

        <div className="p-5 md:p-0">
          <Footer />
        </div>
      </main>
    </>
  )
}
