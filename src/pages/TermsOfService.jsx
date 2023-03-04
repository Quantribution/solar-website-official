import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Terms of Service</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.2/tailwind.min.css" integrity="sha512-3u8lo0Y0E9uMSxt/1ORQVHsdz6PlDW7Vf+g6GQxxMW+RyRJtvT9CjrF63x/fxqCpZs73Az7Jd+txgHgxmvI1g==" crossorigin="anonymous" />
            </head>
            <body class="bg-gray-100">
                <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h1 class="text-2xl font-bold mb-4">Terms of Service</h1>
                    <p class="mb-4">
                        Welcome to Chat Solar (the “Service”). These Terms and Conditions (the “Agreement”) govern your use of the Service. Please read these terms carefully before accessing or using the Service.
                    </p>
                    <h2 class="text-lg font-bold mb-2">Acceptance of Terms</h2>
                    <p class="mb-4">
                        By accessing or using the Service, you agree to be bound by this Agreement, our Privacy Policy, and all applicable laws and regulations. If you do not agree to all of these terms, do not use the Service.
                    </p>
                    <h2 class="text-lg font-bold mb-2">Use of the Service</h2>
                    <p class="mb-4">
                        Our Service provides solar energy companies with chatbots powered by artificial intelligence to assist with customer service and lead generation. You may use the Service for lawful purposes only and in accordance with this Agreement. You are solely responsible for all content and activities that occur under your account.
                    </p>
                    <h2 class="text-lg font-bold mb-2">Intellectual Property</h2>
                    <p>
                        All content on the Service, including but not limited to designs, text, graphics, pictures, video, information, applications, software, and other files, and their selection and arrangement (the “Service Content”), are the proprietary property of Chat Solar or our licensors. You may not use any of the Service Content without our express written permission.
                    </p>
                    <h2 class="text-lg font-bold mb-2">Indemnification</h2>
                    <p>
                        You agree to indemnify and hold Chat Solar and its affiliates, officers, agents, and employees harmless from any and all claims, demands, damages, expenses, and liabilities arising from your use of the Service.
                    </p>
                    <h2 class="text-lg font-bold mb-2">Disclaimer of Warranties</h2>
                    <p>
                    The Service is provided “as is” and without warranties of any kind, either express or implied. We make no warranty that the Service will meet your requirements or be available on an uninterrupted, secure, or error-free basis.
                    </p>
                    <h2 class="text-lg font-bold mb-2">Limitation of Liability</h2>
                    <p>
                    In no event will Chat Solar or its affiliates, officers, agents, or employees be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to this Agreement, whether in contract, tort, strict liability, or any other legal theory, even if we have been advised of the possibility of such damages.
                    </p>
                    <h2 class="text-lg font-bold mb-2">Governing Law and Jurisdiction</h2>
                    <p>
                    This Agreement shall be governed by and construed in accordance with the laws of the state of Florida, without giving effect to any principles of conflicts of law. Any legal action arising out of or relating to this Agreement shall be filed only in the state or federal courts located in Tampa, Florida.
                    </p>
                    <h2 class="text-lg font-bold mb-2">Changes to this Agreement</h2>
                    <p>
                    We may change this Agreement at any time, and such changes will be effective immediately upon posting. Your continued use of the Service after any such changes constitutes your acceptance of the new terms.
                    </p>
                    <h2 class="text-lg font-bold mb-2">Entire Agreement</h2>
                    <p>
                    This Agreement, along with our Privacy Policy, constitutes the entire agreement between you and Chat Solar regarding the use of the Service.
                    </p>
                </div>
            </body>
        </html>


      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default TermsOfService;