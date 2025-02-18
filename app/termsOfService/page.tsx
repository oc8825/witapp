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