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