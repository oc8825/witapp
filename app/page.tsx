"use client";

import Countdown from "@/components/Countdown";
import Link from "next/link";
import styles from "@/styles/buttons.module.scss";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
   <div className="tinted-background">
      <Countdown />
      <Link href="/enterNow">
        <button className={styles["larger-button"]} onClick={() => router.push("/enterNow")}>
          ENTER NOW
        </button>
      </Link>
      <Link href="/faq">
        <button className={styles["simple-button"]} onClick={() => router.push("/faq")}>
          FAQ
        </button>
      </Link>
      <Link href="/privacyPolicy">
        <button className={styles["simple-button"]} onClick={() => router.push("/privacyPolicy")}>
          Privacy Policy
        </button>
      </Link>
      <Link href="/termsOfService">
        <button className={styles["simple-button"]} onClick={() => router.push("/termsOfService")}>
          Terms of Service
        </button>
      </Link>
    </div>
    
  );
}
