import Link from "next/link";

export default function FAQPage() {
    return (
      <div>
        <h1>FAQ Page</h1>
        <p>This is the FAQ page.</p>
            <Link href="/..">
                <button>Back to Landing Page</button>
            </Link>
      </div>
    );
  }