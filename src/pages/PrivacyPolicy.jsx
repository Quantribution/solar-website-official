import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Privacy Policy</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.2/tailwind.min.css" integrity="sha512-3u8lo0Y0E9uMSxt/1ORQVHsdz6PlDW7Vf+g6GQxxMW+RyRJtvT9CjrF63x/fxqCpZs73Az7Jd+txgHgxmvI1g==" crossorigin="anonymous" />
            </head>
            <body class="bg-gray-100">
                <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h1 class="text-2xl font-bold mb-4">Privacy Policy</h1>
                    <p class="mb-4">
                    Thank you for choosing Chat Solar, a solar energy chatbot SaaS provider. At Chat Solar, we are committed to protecting the privacy of our customers and users. This Privacy Policy explains how we collect, use, and disclose your personal information.
                    </p>
                    <h2 class="text-lg font-bold mb-2">Information We Collect</h2>
                    <p class="mb-4">
                        We collect the following types of information: Contact information, such as your name and email address. Information about your solar energy company, such as its name and location. Information about your use of the Service, such as the chatbot conversations you have with customers.
                    </p>
                    <h2 class="text-lg font-bold mb-2">How We Use Your Information</h2>
                    <p class="mb-4">
                        We use your information to: Provide and improve the Service. Communicate with you about the Service. Analyze how the Service is used
                    </p>
                    <h2 class="text-lg font-bold mb-2">Information Sharing</h2>
                    <p>
                        We may share your information with: Our third-party service providers who help us provide the Service. Government authorities or other third parties as required by law.
                    </p>
                    <h2 class="text-lg font-bold mb-2">Security</h2>
                    <p>
                        We take reasonable measures to protect your information from unauthorized access or disclosure. However, no method of transmission over the internet or electronic storage is completely secure.
                    </p>
                    <h2 class="text-lg font-bold mb-2">Changes to this Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                    </p>
                    <h2 class="text-lg font-bold mb-2">Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us via our Contact Us page.
                    </p>
                </div>
            </body>
        </html>


      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default PrivacyPolicy;