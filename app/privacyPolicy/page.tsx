/* privacyPolicy/page.tsx
   Defines a simple page to transition to show the functionality of the 
   Privacy Policy button on the landing page. This page is not actually styled,
   and just provides a title, caption, and button to go back to the
   landing page.
*/

import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
      <div>
        <h1>Privacy Policy</h1>
        <p>This is the privacy policy page.</p>
            <Link href="/..">
                <button>Back to Landing Page</button>
            </Link>
      </div>
    );
  }