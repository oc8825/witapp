/* enterNow/page.tsx
   Defines a simple page to transition to in order to show the functionality
   of the Enter Now button on the landing page. This page is not actually
   styled, and just provides a title, caption, and button to go back to
   the landing page.
*/

import Link from "next/link";

export default function EnterNowPage() {
    return (
      <div>
        <h1>Enter Now</h1>
        <p>This is the enter now page.</p>
            <Link href="/..">
                <button>Back to Landing Page</button>
            </Link>
      </div>
    );
  }