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