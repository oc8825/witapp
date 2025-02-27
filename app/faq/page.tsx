/* faq/page.tsx
   Defines a simple page to transition to in order to show the functionality
   of the FAQ button on the landing page. This page is not actually
   styled, and just provides a title, caption, and button to go back to
   the landing page.
*/

import Link from "next/link";

export default function FAQPage() {
    return (
      <div>
        <h1>FAQ</h1>
        <p>This is the FAQ page.</p>
            <Link href="/..">
                <button>Back to Landing Page</button>
            </Link>
      </div>
    );
  }