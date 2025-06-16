import Link from "next/link";
import { robotoMono } from "@/app/fonts";

const PrivacyPolicy = () => {
  return (
    <>
      <main className={`w-full max-w-7xl mx-auto px-4 md:px-8 py-10 text-gray-800 ${robotoMono.className} mt-20`}>
        <div className="text-4xl font-bold mb-8 text-center flex justify-center mt-[10px]">
          <h1 className="text-[#DADD39]">Privacy</h1>
          <h1 className="text-[#DADD39]">Policy</h1>
        </div>

        <section className="mb-10">
          <p className="text-black">
            By using Ink Founders and signing up as a Client, you agree to be
            legally bound by this Privacy Policy, including those
            policies incorporated by reference.
          </p>
        </section>
        <br />
        <br />

        <section className="mb-10">
          <p className="text-black">
            This privacy statement describes how Ink Founders collects and uses
            the personal information you provide on our website:
            <Link
              href="https://inkfounders.com/"
              className="text-[#DADD39]"
              target="_blank"
            >
              {" "}
              https://inkfounders.com/
            </Link>{" "}
            and also describes the choices available to you regarding our use of
            your personal information and how you can access and update this
            information.
          </p>
        </section>

        <section className="mb-10">
          <p className="text-black mb-5">
            You acknowledge and agree that Ink Founders shall have the right (but
            not the obligation) in its sole discretion, to pre-screen, refuse or
            remove any project and/or user provided content that violates these
            Terms and Conditions or is otherwise objectionable, including,
            without limitation, projects or content that is illegal, obscene,
            indecent, defamatory, incites religious, racial or ethnic hatred, or
            violates the rights of others. Activity that is brought to our
            attention which appears in our sole judgment to violate the law will
            be brought to the attention of the proper authorities. You
            acknowledge, consent and agree that Ink Founders may access,
            preserve, and disclose your account information and content if
            required to do so by law or in a good faith belief that such access
            preservation or disclosure is reasonably necessary to: (a) comply
            with legal process; (b) enforce these Terms and Conditions; (c)
            respond to claims that any content violates the rights of
            third-parties; (d) respond to your requests for customer service; or
            (e) protect the rights, property, or personal safety of Ink Founders,
            its users and the public.
          </p>
          <ul className="text-black pl-5 mb-5">
            <li className="item-center flex gap-4">
              We collect the following personal information from you:
            </li>
            <li>
              Contact Information such as name, email address, mailing address,
              phone number
            </li>
            <li>
              Billing Information such as credit card number, and billing
              address
            </li>
            <li>
              Preferences Information such as product wish lists, order history,
              marketing preferences
            </li>
          </ul>
        </section>

        <section className="mb-10 text-black">
          <p>We also collect the following information from you:</p>
          <p>
            Information about your business such as company name, company size,
            business type
          </p>
        </section>

        <section className="text-black">
          <p className="mb-5">
            As is true of most websites, we automatically gather information
            about your computer such as your IP address, browser type,
            referring/exit pages, and operating system. We use this information
            to:
          </p>
          <ul className="pl-5">
            <li>Fulfill your order</li>
            <li>Send you an order confirmation</li>
            <li>
              Assess the needs of your business to determine suitable products
            </li>
            <li>Send you requested product or service information</li>
            <li>Respond to customer service requests</li>
            <li>Administer your account</li>
            <li>Send you a catalog</li>
            <li>Send you a newsletter</li>
            <li>Send you marketing communications</li>
            <li>Respond to your questions and concerns</li>
          </ul>
        </section>
        <br />
        <section className="text-black">
          <h1 className="text-[#DADD39] text-3xl mb-4">Choice/Opt-Out</h1>
          <ul>
            <li>
              You may choose to stop receiving our newsletter or marketing
              emails by following the unsubscribe instructions included in these
              emails or you can contact us at{" "}
              <span className="text-[#DADD39]">info@inkfounders.com</span>
            </li>
            <li>
              The account will be de-activated if a customer is non-responsive
              for more than 15 days and activation fee would be applied to
              proceed further.
            </li>
          </ul>
        </section>
        <br />
        <section className="text-black">
          <h1 className="text-[#DADD39] text-3xl mb-4">
            Information Obtained from Third Parties
          </h1>
          <ul>
            <li>
              If you provide us personal information about others, or if others
              give us your information, we will only use that information for
              the specific reason for which it was provided to us.
            </li>
          </ul>
        </section>
        <br />
        <section className="text-black">
          <h1 className="text-[#DADD39] text-3xl mb-4">Information Sharing</h1>
          <ul>
            <li>
              We will share your personal information with third parties only in
              the ways that are described in this privacy statement. We do not
              sell your personal information to third parties. We may provide
              your personal information to companies that provide services to
              help us with our business activities such as shipping your order
              or offering customer service. These companies are authorized to
              use your personal information only as necessary to provide these
              services to us. We may also disclose your personal information as
              required by law such as to comply with a subpoena, or similar
              legal process when we believe in good faith that disclosure is
              necessary to protect our rights, protect your safety or the safety
              of others, investigate fraud, or respond to a government request.
              If Ink Founders is involved in a merger, acquisition, or sale of all
              or a portion of its assets, you will be notified via email and/or
              a prominent notice on our website of any change in ownership or
              uses of your personal information, as well as any choices you may
              have regarding your personal information, to any other third party
              with your prior consent to do so.
            </li>
          </ul>
        </section>
        <br />
        <section className="text-black">
          <h1 className="text-[#DADD39] text-3xl mb-4">
            Third Party E-Commerce Solutions Provider
          </h1>
          <ul>
            <li>
              Our shopping cart is hosted by our e-commerce solutions provider.
              They host our ordering system, and collect your billing
              information directly from you for the purpose of processing your
              order. This company does not use this information for any other
              purpose.
            </li>
          </ul>
        </section>
        <br />
        <section className="text-black">
          <h1 className="text-[#DADD39] text-3xl mb-4">
            Cookies and Other Tracking Technologies
          </h1>
          <ul>
            <li>
              We may use cookies, for example, to keep track of your preferences
              and profile information. Cookies are also used to collect general
              usage and volume statistical information that does not include
              personal information. We use another company to place cookies on
              your computer to collect non-personally identifiable information
              to compile aggregated statistics for us about visitors to our
              site.
            </li>
          </ul>
        </section>
        <br />
        <section className="text-black">
          <h1 className="text-[#DADD39] text-3xl mb-4">Web beacons</h1>
          <ul>
            <li>
              Our Web pages contain electronic images known as Web beacons
              (sometimes called single-pixel gifs) and are used along with
              cookies to compile aggregated statistics to analyze how our site
              is used and may be used in some of our emails to let us know which
              emails and links have been opened by recipients. This allows us to
              gauge the effectiveness of our customer communications and
              marketing campaigns. Our Web pages may also contain electronic
              images known as Web beacons (sometimes called single-pixel gifs)
              that are set by our third party partners. Web beacons are used
              along with cookies enabling our partners to compile aggregated
              statistics to analyze how our site is used. We use a third party
              to gather information about how you and others use our website.
              For example, we will know how many users access a specific page
              and which links they clicked on. We use this aggregated
              information to understand and optimize how our site is used.
            </li>
          </ul>
        </section>
        <br />
        <section className="text-black">
          <h1 className="text-[#DADD39] text-3xl mb-4">
            Links to Other Websites
          </h1>
          <ul>
            <li>
              Our Site includes links to other websites whose privacy practices
              may differ from those of Ink Founders. If you submit personal
              information to any of those sites, your information is governed by
              their privacy statements. We encourage you to carefully read the
              privacy statement of any website you visit.
            </li>
          </ul>
        </section>
        <br />
        <section className="text-black">
          <h1 className="text-[#DADD39] text-3xl mb-4">Security</h1>
          <ul>
            <li>
              When we collect personal information directly from you, we follow
              generally accepted industry standards to protect the personal
              information submitted to us, both during transmission and once we
              receive it. No method of transmission over the Internet, or method
              of electronic storage, is 100% secure, however. Therefore we
              cannot guarantee its absolute security. If you have any questions
              about security on our website, you can contact us at
              <span className="text-[#DADD39]"> info@inkfounders.com</span>
            </li>
            <br />
            <li>
              In order to make a purchase from us, you must use our shopping
              cart provider to finalize and pay for your order. Its privacy
              statement and security practices will also apply to your
              information. We encourage you to read that privacy statement
              before providing your information.
            </li>
          </ul>
        </section>
        <br />
        <section className="text-black">
          <h1 className="text-[#DADD39] text-3xl mb-4">
            Additional Policy Information
          </h1>
          <ul>
            <li>
              Our website includes Widgets, which are interactive mini-programs
              that run on our site to provide specific services from another
              company (e.g. displaying the news, opinions, music, etc). Personal
              information, such as your email address, may be collected through
              the Widget. Cookies may also be set by the Widget to enable it to
              function properly. Information collected by this Widget is
              governed by the privacy policy of the company that created it.
            </li>
            <br />
            <li>
              Our website offers publicly accessible blogs or community forums.
              You should be aware that any information you provide in these
              areas may be read, collected, and used by others who access them.
            </li>
          </ul>
        </section>
        <br />
        <section className="text-black">
          <h1 className="text-[#DADD39] text-3xl mb-4">
            Correcting and Updating Your Personal Information
          </h1>
          <ul>
            <li>
              To review and update your personal information to ensure it is
              accurate, contact us at{" "}
              <span className="text-[#DADD39]">info@inkfounders.com</span>
            </li>
            <br />
            <li>
              By providing a telephone number and submitting this form, you
              consent to receive SMS text messages from Ink Founders regarding
              our services. Message frequency may vary. Message and data rates
              may apply. Reply STOP to opt out of further messaging and HELP for
              assistance or call{" "}
              <span className="text-[#DADD39]">+1 (234) 567-8901</span>. Please
              see our Privacy Policy at{" "}
              <Link href="/privacy" className="text-[#DADD39] underline">Privacy Policy</Link>.
            </li>
          </ul>
        </section>
        <br />
        <section className="text-black">
          <h1 className="text-[#DADD39] text-3xl mb-4">
            Notification of Privacy Statement Changes
          </h1>
          <ul>
            <li>
              We may update this privacy statement to reflect changes to our
              information practices. If we make any material changes we will
              notify you by email (sent to the e-mail address specified in your
              account) or by means of a notice on this Site prior to the change
              becoming effective. We encourage you to periodically review this
              page for the latest information on our privacy practices.
            </li>
          </ul>
        </section>
        <br />
        <section className="text-black">
          <h1 className="text-[#DADD39] text-3xl mb-4">
            Mobile Number Collection and Use
          </h1>
          <ul>
            <li>
              When you provide your mobile number on our website, you are
              consenting to receive automated text messages from us. We collect
              and use your mobile number to send you important updates and
              notifications related to our services. You can opt-out at any time
              by replying STOP to our messages. We are committed to protecting
              your privacy and will not share your mobile number with third
              parties without your consent, except as required by law. We use
              appropriate technical and organizational measures to protect your
              personal information.
            </li>
          </ul>
        </section>
        <br />
        <section className="text-black">
          <h1 className="text-[#DADD39] text-3xl mb-4">
            Non-Disclosure of Consent Information:
          </h1>
          <ul>
            <li>
              We recognize the importance of protecting your preferences and
              consent related to texting and communication. Therefore, we
              explicitly assure all customers that consent information collected
              for texting purposes will not be shared with, sold to, or accessed
              by any third parties, except as required by law. This includes any
              external partners or service providers involved in the delivery of
              our products and services. We commit to safeguarding your consent
              preferences and ensure they are strictly used for the intended
              communication purposes only.
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default PrivacyPolicy;
