/* termsOfService/page.tsx
   Defines a simple page to transition to show the functionality of the 
   Terms of Service button on the landing page. This page is not actually styled,
   and just provides a title, caption, and button to go back to the
   landing page.
*/

import Link from "next/link";

export default function TermsOfServicePage() {
    return (
      <div>
        <h1>Terms of Service</h1>
        <p>This is the terms of service page.</p>
            <Link href="/..">
                <button>Back to Landing Page</button>
            </Link>
      </div>
    );
  }