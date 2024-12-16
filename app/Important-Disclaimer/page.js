import Link from "next/link";

export const metadata = {
  title: "Important Disclaimer",
  description: "Important Disclaimer",
};
export default function Important() {
  return (
    <>
      <article>
        <h1>IMPORTANT DISCLAIMER</h1>
        <p>
          fr.CavokSky.com Owned by ADEL BENDAMBRI, fr.cavoksky.com is committed
          to keeping this website up to date and accurate.<br></br> Should you
          nevertheless encounter anything that is incorrect or out of date, we
          would appreciate it if you could let us know.<br></br> Please indicate
          where on the website you read the information. We will then look at
          this as soon as possible.<br></br> If you require any more information
          or have any questions about our site's disclaimer, please feel free to
          <Link href="/Contact">
            <strong>
              <em> contact us</em>
            </strong>
          </Link>
        </p>
        <h2>Disclaimers for fr.CavokSky.com</h2>

        <p>
          Developments in medical research may impact the health, fitness and
          nutritional advice that appears here. No assurance can be given that
          the advice contained in this site will always include the most recent
          findings or developments with respect to the particular material.
        </p>
        <p>
          All the information on this website “fr.CavokSky.com” is published in
          good faith and for general information purpose only.<br></br>{" "}
          fr.CavokSky.com does not make any warranties about the completeness,
          reliability and accuracy of this information. Any action you take upon
          the information you find on this website (fr.CavokSky.com), is
          strictly at your own risk.<br></br> fr.CavokSky.com will not be liable
          for any losses and/or damages in connection with the use of our
          website.
          <br></br> Any information published on this website is not intended or
          implied to be a substitute for professional or legal advice.<br></br>{" "}
          All content, including text, graphics, images and information,
          contained on or available through this website is for general
          information purposes only.<br></br> Consult with your legal advisors
          before making any relevant decisions in your life and business. From
          our website, you can visit other websites by following hyperlinks to
          such external sites.
          <br></br> While we strive to provide only quality links to useful and
          ethical websites, we have no control over the content and nature of
          these sites.<br></br> These links to other websites do not imply a
          recommendation for all the content found on these sites.<br></br> Site
          owners and content may change without notice and may occur before we
          have the opportunity to remove a link which may have gone 'bad'.
          <br></br> Please be also aware that when you leave our website, other
          sites may have different privacy policies and terms which are beyond
          our control.<br></br> Please be sure to check the Privacy Policies of
          these sites as well as their Terms of Service before engaging in any
          business or uploading any information.
        </p>
        <h2>Trademarks Legal Notice</h2>
        <p>
          All trademarks, names, logos, service marks and company names are the
          property of their respective owners.<br></br> All company, product and
          service names used in this website are for identification purposes
          only. <br></br>Use of these names, logos, and brands does not imply
          endorsement.
        </p>
        <h2>Consent</h2>
        <p>
          By using our website, you hereby consent to our disclaimer and agree
          to its terms.
        </p>
      </article>
    </>
  );
}
