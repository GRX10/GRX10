import React from 'react';

const sections = [
  {
    title: 'Welcome',
    paragraphs: [
      `Welcome to the GRX10 Solutions Private Limited (“GRX10”) website. Please review the following terms and conditions concerning your use of this site. By accessing, using or downloading content from this website you agree to follow and be bound by these terms and conditions.`,
      `GRX10 reserves the right to change these terms and conditions from time to time at its sole discretion. Therefore, you should periodically visit this page to review the then current terms and conditions to which you are bound.`,
      `In the case of any violation of the terms and conditions set forth herein, GRX10 reserves the right to seek all remedies available by law and in equity for such violations. These terms and conditions apply to all visits to the GRX10 website, both now and in the future.`
    ]
  },
  {
    title: 'Use',
    paragraphs: [
      'You may not use, download or copy any content on this website unless the following conditions are met:'
    ],
    list: [
      'You use the content solely for personal, informational and non-commercial purposes.',
      'The GRX10 trademark and copyright symbol and statement set forth on each page of this website appears on each downloaded or copied page.',
      'No modifications are made to any content.'
    ],
    closing: `By providing your contact information to us or our dealer, you consent to receive email messages, text messages, phone calls, faxes and postal mail, including that of a promotional nature, from GRX10 and our affiliates at the contact information you provide. Messages may be about our promotional offerings. You are not required to agree to this in order to purchase property, goods or services from us. You represent that you are legally competent and have legal authority to form a contract and provide this consent with respect to the contact information you provide. You may not consent on behalf of someone else or provide someone else’s contact information. We will obtain the date, time and content of your messages to us.`,
  },
  {
    title: 'License & Restrictions',
    paragraphs: [
      `The rights granted to you constitute a license and not a transfer of title. GRX10 reserves the right to revoke the authorization to view, download and print the content available on this website at any time, and any such use shall be discontinued immediately upon written notice from GRX10.`,
      `Except as expressly provided herein, you may not use, download, upload, copy, print, display, perform, reproduce, publish, license, post, transmit or distribute any content from this website in whole or in part without the prior written permission of GRX10. You may not “mirror” any content contained on this website on any other server without GRX10’s prior express written permission.`,
      `Any unauthorized use of any content contained on this website may violate copyright laws, trademark laws, the laws of privacy and publicity, and communications regulations and statutes. Any rights not expressly granted herein are reserved by GRX10.`
    ]
  },
  {
    title: 'Copyright',
    paragraphs: [
      `All content, images, designs, logos and other intellectual property appearing on this website is the property of GRX10 unless otherwise stated. GRX10 retains copyright on all the text, contents, graphics and trademarks displayed on this website. All rights reserved.`,
      `All text, electronic documents, graphics, audio, video and other content published on this site are protected by the laws of India. By accessing and using this website, you agree to abide by the laws of India and all other applicable laws. Distribution or publication of any of this site’s content in any form without prior written permission of GRX10 is expressly forbidden.`
    ]
  },
  {
    title: 'Trademarks',
    paragraphs: [
      `The trademarks, logos, product names, trade name (collectively the “Trademarks”) displayed on the website are registered and unregistered trademarks of GRX10. No additional rights are granted by implication, estoppel, or otherwise.`,
      `You are not permitted to use these trademarks, or any other GRX10 trademarks, without the prior written consent of GRX10. All other trademarks, product names, trade names, and logos used within these pages are the property of their respective holders.`,
      `Use of other company/entity trademarks, trade names, product names and logos or images of the same does not necessarily constitute an endorsement by such company of GRX10 and its products, nor an endorsement of the company or its products by GRX10.`
    ]
  },
  {
    title: 'Links to Third-Party Sites',
    paragraphs: [
      `This website may contain hyperlinks to websites that are not controlled by GRX10. GRX10 is not responsible for and does not make any representation and warranties express or implied over the contents or use of these websites, including, without limitation, the accuracy or reliability of any information, data, opinions, advice or statements made on these websites.`
    ]
  },
  {
    title: 'No Unlawful or Prohibited Use',
    paragraphs: [
      `As a condition of your use of this website, you agree that you will not use this website or the content contained herein for any purpose that is unlawful or prohibited by these terms and conditions.`
    ]
  },
  {
    title: 'Disclaimer',
    paragraphs: [
      `While every effort is made to ensure the accuracy of content offered on these pages, GRX10 assumes no legal liability or responsibility whatsoever for the accuracy, completeness, or usefulness of any such information and hereby disclaims any and all liability to any person for any actual or threatened loss or damage caused by errors or omissions, whether such errors or omissions result from negligence, accident or otherwise.`,
      `This website could include inaccuracies or outdated content and is subject to change at any time without notice. Your use of this website is at your own risk. You agree to hold GRX10 harmless from and not sue GRX10 for any claims based upon using this website.`,
      `The content, documentation, products, and services contained on the GRX10 website are provided on “as is” basis. GRX10 makes no representations or warranties, express or implied, including, but not limited to, warranties of merchantability, fitness for a particular purpose, title or non-infringement of third-party rights.`,
      `GRX10 and its suppliers shall not be liable for any indirect, special, consequential, or incidental damages including, without limitation, lost profits or revenues, costs of replacement goods, loss or damage to data arising out of the use or inability to use this site, damages resulting from use of or reliance on the information present, even if GRX10 or its suppliers have been advised of the possibility of such damages.`
    ]
  },
  {
    title: 'Governing Law',
    paragraphs: [
      `Any claim or dispute relating to your use or attempted use of this website shall be governed by and construed in accordance with the laws of India, without giving effect to its conflict of law provisions.`,
      `By using this website, you submit to the exclusive jurisdiction of courts of Bengaluru in any proceeding relating to any such claim or dispute.`
    ]
  }
];

const LegalDisclaimer = () => {
  return (
    <section className="bg-dark-bg text-text-white pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 gradient-text">Legal Disclaimer</h1>

        <div className="space-y-10">
          {sections.map((section, index) => (
            <div key={index} className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
              {section.paragraphs && section.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-white/80 leading-relaxed mb-4 last:mb-0 whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="list-disc list-inside space-y-3 text-white/80 leading-relaxed mb-4">
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
              {section.closing && (
                <p className="text-white/80 leading-relaxed whitespace-pre-line">
                  {section.closing}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalDisclaimer;

